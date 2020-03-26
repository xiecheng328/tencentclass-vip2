import React, { Component } from 'react';
import { connect } from 'react-redux';

import {AddActionCreator} from '../store'

function mapStateToProps(state) {
  return {
    number: state.number
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => {
      dispatch(AddActionCreator(3))
    }
  };
}

class Num extends Component {
  render() {
    return (
      <div>
        <h1>计数器2.0</h1>
        <p>number:{this.props.number}</p>
        <button onClick={this.props.add}>点击修改state</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Num);