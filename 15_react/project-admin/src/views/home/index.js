import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
    userInfo: state.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class index extends Component {
  render() {
    return (
      <div className="home">
        {
          this.props.isLogin ? (
            <p className="home-title">您好，{this.props.userInfo.name}</p>
          ) : (
            <p className="home-title"></p>
          )

        }
        <h1>欢迎进入青盟课堂后台管理系统</h1>
        <div>
          <img src="http://localhost:3000/static/media/meng.2320cd62.png" />
          <img src="http://localhost:3000/img/qing.png" />
        </div>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);