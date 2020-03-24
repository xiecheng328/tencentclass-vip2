import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Test extends Component {
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
      </div>
    );
  }
}

export default Test;