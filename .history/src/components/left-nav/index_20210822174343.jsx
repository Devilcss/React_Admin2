import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import menuList from '../../config/menuConfig';
import logo from '../../assets/images/logo.png'
import './index.less'
import * as Icon from "@ant-design/icons"

import {
    HomeOutlined,/*首页*/
    AppstoreOutlined,/*商品*/
    BarsOutlined,/*品类管理*/
    ToolOutlined,/*商品管理*/
    UserOutlined,/*用户管理*/
    SafetyCertificateOutlined,/*角色管理*/
    AreaChartOutlined,/*图形图表*/
    BarChartOutlined,/*柱形图*/
    LineChartOutlined,/*折线图*/
    PieChartOutlined,/*饼图*/
  } from '@ant-design/icons';
const { SubMenu } = Menu;
/*
左侧导航的组件 
 */
export default class LeftNav extends Component {
    getMenuNodes = (menuList) => {
        const 
        return menuList.map(item => {
            
            if (!item.childen) {
                const icon = React.createElement(
                Icon[item.icon],
                {
                    style: { fontSize: '16px' }
                }
            )
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                const icon = React.createElement(
                Icon[item.icon],
                {
                    style: { fontSize: '16px' }
                }
            )
                return (
                    <SubMenu key={item.key} title={
                        <span>
                            <Icon type={item.icon}/>
                            <span>{item.title}</span>
                        </span>
                    } icon={item.icon}>
                        {this.getMenuNodes(item.childen)}
                    </SubMenu>
                )
            }
        })
    }

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


                    {/* <Menu.Item key="/home" icon={<PieChartOutlined />}>
                        <Link to='/home'>
                        <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="/category" icon={<MailOutlined />}>
                        <Link to='/category'>
                        <span>品类管理</span>
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="/product" icon={<MailOutlined />}>
                        <Link to='/product'>
                        <span>商品管理</span>
                        </Link>
                        </Menu.Item>

                    </SubMenu>
                    <Menu.Item key="/user" icon={<MailOutlined />}>
                    <Link to='/user'>
                    <span>用户管理</span>
                    </Link></Menu.Item>
                    <Menu.Item key="/role" icon={<MailOutlined />}>
                    <Link to='/role'>
                    <span>角色管理</span>
                    </Link></Menu.Item> */}

                    {
                        this.getMenuNodes(menuList)
                    }
                </Menu>


            </div>
        )
    }
}



