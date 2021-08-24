/*
入口js 
 */
import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import App from './App'
import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'


//读取local中保存user,保存到内存中
const user = storageUtils.getUser()
memoryUtils.user = user
/* 将App组件渲染到index的div id=root上 */
ReactDOM.render( < App / > , document.getElementById('root'))