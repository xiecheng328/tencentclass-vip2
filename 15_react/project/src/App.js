import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Test from './components/Test'
import Course from './components/Course'
import List from './components/List'
import Number from './components/Number'
import Num from './components/Num'

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        {/* 
          Link  
            to 跳转的链接

            to = {
              pathname, 路径名称
              search, 查询参数
              hash,
              state, 可以以对象的形式传参，但不会显示在页面的url中 如果是hash模式 刷新页面参数会丢失
              query, 也是以对象的形式传参 但是刷新页面参数会丢失
            } 
            通过props.location获取参数 / props.history.location
        
        */}
        <Link to="/">首页</Link> | 
        <Link to="/about">关于我们</Link> | 
        <Link to="/aboutabc">Test</Link> |
        <Link to="/course">课程列表</Link> |
        <Link to="/course/1111">课程</Link> | 
        <Link to={{
          pathname: '/about',
          search: 'a=1&b=2',
          hash: '888',
          state: {
            name: 'zs',
            age: 18
          },
          query: {
            channel: 123
          }
        }}>关于我们 路由跳转传参</Link> | 
        <Link to="/number">计数器</Link> |
        <Link to="/num">计数器2.0</Link> |
      </div>

      <div>
        {/* 
          Route
            path 对应的路径信息
            component 对应的组件
            render 属性的值是一个方法 在方法内返回要加载的组件 这种书写方式可以给组件传值
            exact 严格匹配
        */}
        <Route path="/" exact component = {Home} />
        <Route path="/about" component = {About} />
        <Route path="/aboutabc" component = {Test} />
        <Route path="/course" component = {List} />
        <Route path="/course/:id" component = {Course} />
        <Route path="/number" component = {Number} />
        <Route path="/num" component = {Num} />

        {/* 
          Switch 匹配符合条件的第一个组件 我们需要把首页（/）写在最后面
        */}
        {/* <Switch>
          <Route path="/about" component = {About} />
          <Route path="/" component = {Home} />
        </Switch> */}
      </div>
    </div>
  );
}

export default App;
