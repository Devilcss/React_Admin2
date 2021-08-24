import React, { Component } from 'react'
import './index.less'
import{ }
import { ExclamationCircleOutlined, CloudOutlined } from "@ant-design/icons";
import { formateDate, fromateDate } from '../../utils/dateUtils'
/*
    头部的组件 
 */
export default class Header extends Component {

    state = {
        currentTime: formateDate(Date.now()),
        weather: '',
    }

    getTime = () => {
        setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({ currentTime })
        }, 1000)
    }
    componentDidMount() {
        this.getTime()
    }
    render() {

        const { currentTime, weather } = this.state
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎,admin</span>
                    <a href="javascript:"></a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">首页</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <CloudOutlined
                            style={{ width: "30px", height: "20px", margin: "15 15 15 15" }}
                        />
                        <span>{weather}</span>
                    </div>

                </div>
            </div>
        )
    }
}