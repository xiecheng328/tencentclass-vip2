import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { setLoginActionCreator, setInfoActionCreator } from '../../store'

import axios from 'axios'

import './index.css'

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
    userInfo: state.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLogin: () => {
      dispatch(setLoginActionCreator())
    },
    setInfo: (data) => {
      dispatch(setInfoActionCreator(data))
    }
  };
}

class Header extends Component {
  constructor(params) {
    super(params)

    this.login = this.login.bind(this)
  }
  login() {
    axios.get('https://www.qmtech.com/login')
    .then(res => {
      console.log(res.data)
      if (res.data.errno * 1 === 0 ) {
        this.props.setInfo(res.data.data)
        this.props.setLogin()

      } else {
        alert(res.data.errmsg)
      }
    })
    .catch( err => {
      console.log(err)
    })

  }
  render() {
    return (
      <div className="common-header">
        {
          this.props.isLogin ? (
            // <img src="http://login.qingmengtech.com/images/3.png?imageView2/1/w/80/h/80"/>
            <img src={this.props.userInfo.image} />
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