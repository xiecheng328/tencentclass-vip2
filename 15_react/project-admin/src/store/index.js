import { createStore } from 'redux'

let state = {
  isLogin: false,
  userInfo: {
    name: 'zs'
  }
}

const SET_LOGIN = 'SET_LOGIN'
const SET_INFO ='SET_INFO'

function setLoginActionCreator() {
  return {
    type: SET_LOGIN
  }
}

function setInfoActionCreator(data) {
  return {
    type: SET_INFO,
    data
  }
}


function reducer(preState = state, action) {
  switch (action.type) {
    case SET_LOGIN:
      return Object.assign({}, preState, {
        isLogin: !preState.isLogin
      })

    case SET_INFO: 
      return Object.assign({}, preState, {
        userInfo: action.data
      })

    default:
      return preState
  }
}

const store = createStore(reducer)

export {
  store,
  setLoginActionCreator,
  setInfoActionCreator
}