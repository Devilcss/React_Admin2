import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import menuList from '../../config/menuConfig';
import logo from '../../assets/images/logo.png'
import './index.less'
const { SubMenu } = Menu;
/*
左侧导航的组件 
 */
export default class LeftNav extends Component {
    getMenuNodes_map = (menuList) => {
        return menuList.map(item => {

            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}

                    </SubMenu>
                )
            }
        })
    }

    getMenuNodes = (menuList) => {
        return menuList.reduce((pre, item) => {

            if (!item.children) {
                pre.push((
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            } else {

                pre.push((
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}

                    </SubMenu>
                ))



            }

            return pre;


        }, [])
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
                    defaultSelectedKeys
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



