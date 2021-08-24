import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import './index.less'
i
/*
左侧导航的组件 
 */
export default class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
               <header className="left-nav-header">
                   <img src={logo} alt="logo"></img>
               </header>
            </div>
        )
    }
}