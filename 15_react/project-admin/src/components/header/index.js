import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { setLoginActionCreator } from '../../store'
import './index.css'

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLogin: () => {
      dispatch(setLoginActionCreator())
    }
  };
}

class Header extends Component {
  constructor(params) {
    super(params)

    this.login = this.login.bind(this)
  }
  login() {
    this.props.setLogin()
  }
  render() {
    return (
      <div class="common-header">
        {
          this.props.isLogin ? (
            <img src="http://login.qingmengtech.com/images/3.png?imageView2/1/w/80/h/80"/>
          ) : (
            <Button className="common-header-btn" type="primary" onClick={this.login}>点击登录</Button>
          )
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);