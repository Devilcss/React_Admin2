import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/login/login'
import Login from './pages/admin/admin'
/*
应用根组件 
 */

export default class App extends Component {

    render(){
        return (
            <BrowserRouter>
                <Route path='/login'></Route>
            </BrowserRouter>
        )
    }
}