import React,{Component} from 'react'
import { Redirect } from 'react-router';
import memoryUtils from '../../utils/memoryUtils'
/*
路由组件 
 */
export default class Admin extends Component {
    render(){
        const user = memoryUtils.user;
        if(!user|| !user._id){
            //自动跳转到登录(在render()中)
            return <Redirect to='/login'/>
        }
        return (
            <div>
                Hello 
            </div>
        )
    }
}