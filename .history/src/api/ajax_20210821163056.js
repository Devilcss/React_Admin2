/*
能发送异步ajax请求的模块 
封装axios库
函数的返回值是promise对象
 */
import { message } from "antd";
import { resolveOnChange } from "antd/lib/input/Input";
import axios from "axios";

export default function ajax(url,data={},type='GET'){
    if(type==='GET'){
        return axios.get(url,{
            params: data  //指定请求参数
        });
    }else {
        promise.then(response =>{
            resolveOnChange(response.data)
        }).catch(error =>{
            message.error('请求出错:'+ error)
        })
    }

}

//ajax('/login',{username:'Tom',password:'1245'},'POST').then();
