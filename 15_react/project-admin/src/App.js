import React from 'react';
import { Row, Col } from 'antd'
import Nav from './components/nav'
import Header from './components/header'
import IRoute from './router'

import './App.css';

function App() {
  return (
    <div className="app">
      <Row>
        <Col className="app-nav" span={4}>
          <Nav />
        </Col>
        <Col span={20}>
          <Header />
          <IRoute />
        </Col>
      </Row>
    </div>
  );
}

export default App;
