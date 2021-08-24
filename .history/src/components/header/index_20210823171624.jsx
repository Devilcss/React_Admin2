import React, { Component } from 'react'
import './index.less'
/*
头部的组件 
 */
export default class Header extends Component {
    render() {
        return (
            <div className="header">
               <div className="header-top">
                   <span>欢迎,admin</span>
                   <a href="javascript:"></a>
               </div>
               <div className="header-bottom">
                   <div className="header-bottom-left">首页</div>
                   <div className="header-bottom-right">
                                       
                   </div>
                   
               </div>
            </div>
        )
    }
}