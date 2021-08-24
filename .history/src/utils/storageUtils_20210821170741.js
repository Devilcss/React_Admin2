/*

 */
export default {
    /* 保存 */
    saveUser(user) {
        localStorage.setItem('user_key', JSON.stringify(user))
    },
    /* 读取user */
    getUser(){
        return JSON.parse()
    }

    /* 删除 */
}