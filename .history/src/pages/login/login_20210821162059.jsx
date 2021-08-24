import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.png'

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { reqLogin } from '../../api';

/*
路由组件 
 */

export default class Login extends Component {

    /* 
    对密码进行验证
    */
    validatePwd = (rule, value, callback) => {
        console.log('validatePwd()', rule, value)
        if (!value) { callback('密码必须输入') }
        else if (value.length < 4) { callback('密码长度不能小于4') }
        else if (value.length > 12) { callback('密码长度不能大于12') }
        else if (!/^[a-zA-Z0-9_]+$/.test(value)) { callback('密码必须是英文数字或下划线') }
        else { callback() }

    }
    render() {
        const onFinish = async (values) => {
            // console.log('Received values of form: ', values);
            //请求登录
            const { username, password } = values;
            try {
                const response = await reqLogin(username, password)
                const result = response.data;
                if(result.status===0){
                    
                }
            }catch(error){
                console.log('请求出错',error)
            }
           
        };
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"></img>
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true, whitespace: true,
                                    message: '用户名必须输入',
                                },
                                { min: 4, message: '用户名至少4位' },
                                { max: 12, message: '用户名最多12位' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文数字或者下划线' },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    validator: this.validatePwd
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">

                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <a href=""></a>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );

    }
}

/*
收集表单
输入数据
*/