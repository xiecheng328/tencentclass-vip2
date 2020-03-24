import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Test from './Test'


class About extends Component {
  render() {
    let {search} = this.props.location 
    let params = new URLSearchParams(search)
    // console.log(params.get('a'))
    // console.log(params.get('b'))
    console.log(this.props.location)

    return (
      <div>
        <h1>关于我们</h1>
        {/* <Route component = {Test} /> */}

        {/* <Route render={() => (
          <Test title="zs" />
        )} /> */}
      </div>
    );
  }
}

export default About;