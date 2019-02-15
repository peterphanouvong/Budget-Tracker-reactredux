import React, { Component } from 'react'
import ClassInfo from './ClassInfo';

export class SingleBudgetClass extends Component {

  state = {
    isHidden: true
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
    //console.log('hello');
  }

  showDetails = () => {
    this.toggleHidden();
  }
  render() {
    return (
      <div style={buttonStyle}>
        <button onClick={this.showDetails.bind(this)} className="btn btn-light btn-lg btn-block">{this.props.class.title}</button>
        {!this.state.isHidden && <ClassInfo class={this.props.class}/>}
      </div>
    )
  }
}

const buttonStyle = {
    paddingTop: '8px'
}

export default SingleBudgetClass
