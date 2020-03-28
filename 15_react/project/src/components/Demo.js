import React, { Component } from 'react';

import axios from 'axios'

class Demo extends Component {
  componentDidMount() {
    axios.get('http://www.qingmengtech.com/getlist')
      .then(res => {
        console.log(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Demo</h1>
      </div>
    );
  }
}

export default Demo;