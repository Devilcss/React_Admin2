import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import logo from '../../assets/images/logo.png'
import './index.less'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

const { SubMenu } = Menu;
/*
左侧导航的组件 
 */
export default class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
               <Link to='/' className="left-nav-header">
                   <img src={logo} alt="logo"></img>
                   <h1>硅谷后台</h1>
               </Link>

               <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <span>首页</span>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
            <Menu.Item key="5" icon={<MailOutlined />}><span>品类管理</span></Menu.Item>
            <Menu.Item key="6" icon={<MailOutlined />}>商品管理</Menu.Item>
          </SubMenu>
         
        </Menu>


            </div>
        )
    }
}



