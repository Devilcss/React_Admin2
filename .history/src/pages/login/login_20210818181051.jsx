import React,{Component} from 'react'
import './login.less'
import logo from './images/logo.png'
/*
路由组件 
 */
export default class Login extends Component {
    render(){
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo""
                </header>
                <section className="login-content"></section>
            </div>
        )
    }
}