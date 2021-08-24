import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import menuList from '../../config/menuConfig';
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
import Icon from '@ant-design/icons/lib/components/AntdIcon';

const { SubMenu } = Menu;
/*
左侧导航的组件 
 */
export default class LeftNav extends Component {
    getMenuNodes = (menuList) =>{
        return menuList.map(item => {
            const icon = React.createElement(
                Icon[item.icon],
                {
                  style:{ fontSize: '16px'}
                }
              )

创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_43094085/article/details/117063155
            if(!item.childen){
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                        <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else{
                return (
                    <SubMenu key={item.key} 
                    title={
                        <span>
                            <Icon type={item.icon}/>
                            <span>{item.title}</span>
                        </span>
                    }>
                        {this.getMenuNodes(item.children)}

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



