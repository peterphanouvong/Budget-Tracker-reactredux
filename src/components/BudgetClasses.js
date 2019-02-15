import React, { Component } from 'react'
import SingleBudgetClass from './SingleBudgetClass';
import {connect} from 'react-redux'
import {addClass} from '../actions/budgetClassActions'

export class BudgetClasses extends Component {
  
  listClasses = () => {
    let classes = [];
    this.props.classes.map((prop) => {
      return classes.push(<button className="btn btn-light btn-lg btn-block">{prop.title}</button>)
    })
    return classes
  }

  render() {
    return this.props.classes.map((bclass) => (
      <SingleBudgetClass
        key={bclass.id} 
        class={bclass}/>));
        //{this.listClasses()}
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    math: state.math,
    budget_class: state.budget_class
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
      addClass: (title) => {
      dispatch(addClass(title));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetClasses);
