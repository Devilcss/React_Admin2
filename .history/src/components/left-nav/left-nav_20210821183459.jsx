import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import logo from '../../assets/images/logo.png'
import './index.less'

/*
左侧导航的组件 
 */
export default class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
               <header className="left-nav-header">
                   <img src={logo} alt="logo"></img>
                   <h1>硅谷后台</h1>
               </header>
            </div>
        )
    }
}