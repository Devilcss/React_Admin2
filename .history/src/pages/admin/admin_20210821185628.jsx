import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav/left-nav';
import Header from '../../components/header';
import Home from '../home/home'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Line from '../charts/pie'

import { Layout } from 'antd';
const { Footer, Sider, Content } = Layout;
/*
路由组件 
 */
export default class Admin extends Component {
    render() {
        const user = memoryUtils.user;
        if (!user || !user._id) {
            //自动跳转到登录(在render()中)
            return <Redirect to='/login' />
        }
        return (
            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{ backgroundColor: '#fff' }}>
                        <Switch>
                            <Route path='/home' component={Home} />
                             <Route path='/category' component={Category} />
                              <Route path='/product' component={Product} />
                               <Route path='/role' component={Role} />
                                <Route path='/user' component={User} /> 
                                <Route path='/charts/bar' component={Bar} />
                                 <Route path='/charts/line' component={Line} />
                                  <Route path='/charts/pie' component={Pie} /> <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center', color: '#cccccc' }}>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}