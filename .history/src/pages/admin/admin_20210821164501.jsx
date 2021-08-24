import React,{Component} from 'react'
import memoryUtils from '../../utils/memoryUtils'
/*
路由组件 
 */
export default class Admin extends Component {
    render(){
        const user = memoryUtils.user;
        if(!user|| !user._id){
            
        }
        return (
            <div>
                Hello 
            </div>
        )
    }
}