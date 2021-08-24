import React, { Component } from 'react'
import './index.less'
import { Modal } from "antd";
import { withRouter } from 'react-router';
import { reqWeather } from '../../api';
import menuList from '../../config/menuConfig';
import { ExclamationCircleOutlined, CloudOutlined } from "@ant-design/icons";
import { formateDate, fromateDate } from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils';
/*
    头部的组件 
 */
class Header extends Component {

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
    getWeather = async () => {
        const { weather } = await reqWeather('北京')
        this.setState({ weather })
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach(item =>{
            if(item.key === path){
                title = item.title
            }else if(item.children){
                const cItem = item.children.find(cItem => cItem.key === path)
                if(cItem){
                    title= cItem.title
                }
            }
        })
    }

    componentDidMount() {
        this.getTime()
        this.getWeather()
    }
    render() {

        const { currentTime, weather } = this.state
        const user = this.props.user.username
        const title = this.props.headTitle

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎, {user}</span>
                    <a href="javascript:"></a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                    <span>{title}</span>
                    </div>
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

export default connect (
    (state) => ({ headTitle: state.headTitle, user: state.user }),
  { logout }
)(withRouter(Header))