/*

 */
export default {
    /* 保存 */
    saveUser(user) {
        localStorage.setItem('user_key', JSON.stringify(user))
    },
    /* 读取user */
    getUser(){
        return localStorage.('user_key')
    }

    /* 删除 */
}