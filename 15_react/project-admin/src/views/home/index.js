import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meng from '../../assets/images/meng.png'
import Qing from '../../assets/images/qing.png'
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
          <img src={Meng} />
          <img src={Qing} />
        </div>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);