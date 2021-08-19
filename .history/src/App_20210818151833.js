import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Button, message } from 'antd'
/*
应用根组件 
 */

export default class App extends Component {

    handleclick = () =>{
        message.success('成功啦...')
    }
    render() {
        return <Button type="primary" onClick={this.handleclick}>Primary Button</Button>
    }
}