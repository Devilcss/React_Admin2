import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav/left-nav';
import Header from '../../components/header';

import { Layout } from 'antd';
const {Footer, Sider, Content } = Layout;
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
                    <Content style={{b}}>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}