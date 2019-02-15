import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header'
import Hello from './layout/Hello'
import AddBudgetClass from './components/AddBudgetClass'

import {Provider} from 'react-redux'
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        {/* The top title */}
        <Header />
        {/* Budget progress at a glance */}
        <div className="content-section"><Hello /></div>
        {/* Add a new budget-class */}
        <div className="content-section"><AddBudgetClass addClass={this.addClass}/></div>
      </div>
      </Provider>
    );
  }
}


export default App;
