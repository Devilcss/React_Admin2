/* 
包含应用中所有接口请求函数的模块
*/
import jsonp from "jsonp";
import ajax from "./ajax";

const BASE = '';
//登录
export const reqLogin = (username, password) => ajax(BASE + '/login', {username,password}, 'POST');
//添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')

/* 
json请求的接口请求函数
*/
export const reqWeather = (city) =>{
    const url = `http://restapi.amap.com/v3/weather/weatherInfo?key=98c97d10c1fda37bdc5402d15c1cdd71&city=${city}`
    jsonp(url,{},(err,data) =>{
        console.log('jsonp()',err,data)
        if(!err&&data.status === 'success')
        {
            const
        }
    })
}

