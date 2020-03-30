import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import menuList from '../../config/menuConfig'
import './index.css'

const { SubMenu } = Menu;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1723185_hpwsfvxytgm.js',
});

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {
            // 根据配置文件循环遍历生成菜单
            menuList.map(item => (
              // 判断是否含有耳机菜单
              item.children ? (
                <SubMenu
                  key={item.path}
                  title={
                    <span>
                      <IconFont type={item.icon} />
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {
                    item.children.map(obj => (
                      <Menu.Item key={obj.path}>
                        <Link to={obj.path}>{obj.title}</Link>
                      </Menu.Item>
                    ))
                  }
                </SubMenu>
              ) : (
                <Menu.Item key={item.path}>
                  <Link to={item.path}>
                    <IconFont type={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>
              )
            ))

          }


          {/* <Menu.Item key="1">
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}

export default Nav;