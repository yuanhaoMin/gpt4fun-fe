import { createStore } from "vuex"
import { setData, removeData, getData } from "../utils/store-crud"
const store = createStore({
    state() {
        return {
            token: getData('token') ? getData('token') : {},
            username: getData('username') ? getData('username') : {},
            selected: {},
            isSpend: false,
            recruitment: {},
            isShowUserMsg: false,
            isstrate: false
        }
    },
    mutations: {
        token(state, val) {
            state.token = val
            setData("token", val)
        },
        delData(state) {
            state.token = {}
            state.username = {}
            removeData("token")
            removeData('username')
        },
        username(state, val) {
            state.username = val
            setData("username", val)
        },
        selected(state, val) {
            state.selected = val
        },
        isContract(state) {
            state.isSpend = !state.isSpend;
        },
        illustrate(state) {
            state.isstrate = !state.isstrate;
        },
        recruitment(state, val) {
            state.recruitment = val
        },
        showUserMsg(state) {
            state.isShowUserMsg = !state.isShowUserMsg;
        },
        expire(state, val) {
            state.expire = val
        }
    }
})


export default store 