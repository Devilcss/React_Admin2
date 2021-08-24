/*
能发送异步ajax请求的模块 
封装axios库
函数的返回值是promise对象
异步得到的不是response,而是response.data
请求成功后resolve时:resole
 */
import { message } from "antd";
import { resolveOnChange } from "antd/lib/input/Input";
import axios from "axios";

export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject) =>{
        let promise;
    
    if(type==='GET'){
        promise = axios.get(url,{
            params: data  //指定请求参数
        });
    }else {
       promise= axios.post(url,data)     
    }
    promise.then(response =>{
            resolve(response.data)
        }).catch(error =>{
            message.error('请求出错:'+ error.message)
})
    })  
}
 
//ajax('/login',{username:'Tom',password:'1245'},'POST').then();
