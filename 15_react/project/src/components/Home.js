import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component {
  constructor(params) {
    super(params)

    this.list = [
      {
        name: '',
        id: 11
      },
      {
        name: '',
        id: 11
      },
      {
        name: '',
        id: 11
      }
    ]
  }

  render() {
    return (
      <div>
        <h1>首页</h1>
        <Button type="primary">button</Button>

        <div>
          <div>400px</div>
          <div>1000px</div>
        </div>
      </div>
    );
  }
}

export default Home;