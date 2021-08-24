/*

 */
import store from 'store';
const USER_KEY = 'user_key';
export default {
    /* 保存 */
    saveUser(user) {
        //localStorage.setItem('user_key', JSON.stringify(user))
        store.set(USER_KEY,user)
    },
    /* 读取user */
    getUser() {
       //return JSON.parse(localStorage.getItem('user_key') || '{}')
       return store.get(USER)
    },

    /* 删除 */
    removerUser() {
        localStorage.removeItem(user_key)
    },
}