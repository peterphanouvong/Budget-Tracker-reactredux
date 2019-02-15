import React, { Component } from 'react'
import BudgetClasses from './BudgetClasses';

import {connect} from 'react-redux'
import {addClass} from '../actions/budgetClassActions'
import InputBudgetClass from './InputBudgetClass';

export class AddBudgetClass extends Component {
  state = {
    isHidden: true
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
    //console.log('hello');
  }

  render() {
    return (
      <div>
        <h2>Your Budget!</h2>
        <BudgetClasses classes={this.props.budget_class.budget_classes} />
        {!this.state.isHidden && <InputBudgetClass toggleHidden={this.toggleHidden} addClass={this.props.addClass}/>}

        <br/>
        <button onClick={() => this.toggleHidden()}  className="btn btn-light btn-lg btn-block">+</button>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(AddBudgetClass);
