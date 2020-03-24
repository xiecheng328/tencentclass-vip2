import React, { Component } from 'react';

class Course extends Component {
  constructor(params) {
    super(params)

    this.state = {
      details: {}
    }
  }
  // 挂载完成后触发的生命周期 只触发一次
  componentDidMount() {
    fetch(`/data/course${this.props.match.params.id}.json`)
      .then(response => {
        return response.json()
      })
      .then(res => {
        this.setState({
          details: res.data
        })
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.match.params.id != this.props.match.params.id || nextState.details.id != this.state.details.id
  }

  componentDidUpdate() {
    fetch(`/data/course${this.props.match.params.id}.json`)
      .then(response => {
        return response.json()
      })
      .then(res => {
        // setState 会使组件重新渲染 会再次执行componentDidUpdate 里的内容
        this.setState({
          details: res.data
        })
      })
  }
  render() {
    // console.log(this.props)
    let {params} = this.props.match
    return (
      <div>
        <h1>课程详情</h1>
        <p>id: {params.id}</p>
        <p>课程名称：{this.state.details.title}</p>
        <p>授课教师：{this.state.details.teacher}</p>
        <p>课程简介：{this.state.details.intro}</p>
      </div>
    );
  }
}

export default Course;