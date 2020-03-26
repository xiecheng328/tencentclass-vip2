import {createStore} from 'redux'

// 状态
let state = {
  number: 1,
  isLogin: false
}

const ADD_NUM ='ADD_NUM'

/**
 * actioncreator
 * 返回一个action 
 * action是一个obj type属性表示要执行什么样的动作
 */
function AddActionCreator(data) {
  return {
    type: ADD_NUM,
    data
  }
}

// reducer 是一个纯函数，在这里我们去执行具体的操作
// preState 之前的状态 preState要进行初始化 值就是默认的state
// action
function reducer(preState = state, action) {
  switch(action.type) {
    case ADD_NUM:
      return Object.assign({},preState, {
        number: preState.number + action.data
      })

    default:
      return preState
  }
}

// 通过createStore来创建一个store 
// 方法里需要传reducer这个函数
// store是redux的核心对象
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export {
  store,
  AddActionCreator
}