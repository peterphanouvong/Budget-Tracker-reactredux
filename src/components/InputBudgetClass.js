import React, { Component } from 'react'

export class InputBudgetClass extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  enterPress(e) {
    if(e.keyCode === 13){
      this.props.addClass(this.state.title);
      this.props.toggleHidden();
    }
  }
  render() {
    return (
    <div style={ButtonStyle}>
        <button className="btn btn-light btn-lg btn-block">
            <input 
              className="form-control"
              onBlur={() => {this.props.addClass(this.state.title); this.props.toggleHidden()}} 
              placeholder="name of budget class"
              name="title"
              onKeyDown={this.enterPress.bind(this)}
              onChange={this.onChange}
              value={this.state.title}
              type="text"
            />
        </button>
    </div>
    )
  }
}

var ButtonStyle = {
  padding: '8px'
  //display: 'none'
}

export default InputBudgetClass
