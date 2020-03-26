import React, { Component } from 'react';

import {store, AddActionCreator} from '../store'


class Number extends Component {
  constructor(params) {
    super(params)

    // store里提供了一个getState方法，返回的是store中的state
    this.state = {
      num: store.getState().number
    }

    // 如果store中的state发生改变就会触发subscribe
    store.subscribe(() => {
      this.setState({
        num: store.getState().number
      })
    })

    this.add = this.add.bind(this)
  }
  add() {
    // 组件中派发action
    store.dispatch(AddActionCreator())
  }
  render() {
    return (
      <div>
        <h1>计数器</h1>
        <p>num: {this.state.num}</p>
        <button onClick={this.add}>点击修改store中的state</button>
      </div>
    );
  }
}

export default Number;