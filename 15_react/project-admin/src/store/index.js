import { createStore } from 'redux'

let state = {
  isLogin: false,
  userInfo: {
    name: 'zs'
  }
}

const SET_LOGIN = 'SET_LOGIN'

function setLoginActionCreator() {
  return {
    type: SET_LOGIN
  }
}


function reducer(preState = state, action) {
  switch (action.type) {
    case SET_LOGIN:
      return Object.assign({}, preState, {
        isLogin: !preState.isLogin
      })
    default:
      return preState
  }
}

const store = createStore(reducer)

export {
  store,
  setLoginActionCreator
}