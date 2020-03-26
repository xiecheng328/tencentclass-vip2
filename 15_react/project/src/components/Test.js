import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {store} from '../store'

class Test extends Component {
  constructor(params) {
    super(params)

    this.state = {
      number: store.getState().number
    }
  }
  fun() {
    // this.props.history.goBack()
    // this.props.history.goForward()
    // this.props.history.go(-1)
    // this.props.history.push('/about')
    this.props.history.replace('/about')

  }
  render() {
    console.log(this.props.history)
    return (
      <div>
        {/* <Redirect to="/about" /> */}
        <h1>Test</h1>
        { this.props.title }
        <button onClick={this.fun.bind(this)}>点击</button>

        <p>number:{this.state.number}</p>
      </div>
    );
  }
}

export default Test;