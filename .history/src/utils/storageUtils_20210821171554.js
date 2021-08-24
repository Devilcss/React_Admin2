/*

 */
import store from 'store';
const USER_KEY='user_key';
export default {
    /* 保存 */
    saveUser(user) {
        localStorage.setItem('user_key', JSON.stringify(user))
    },
    /* 读取user */
    getUser() {
        return JSON.parse(localStorage.getItem('user_key') || '{}')
    },

    /* 删除 */
    removerUser() {
        localStorage.removeItem(user_key)
    },
}