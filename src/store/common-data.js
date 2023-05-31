import { createStore } from "vuex"
import { setData, removeData, getData } from "../utils/store-crud"
const store = createStore({
    state() {
        return {
            token: getData('token') ? getData('token') : {},
            username: getData('username') ? getData('username') : {}
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
        },
        username(state, val) {
            state.username = val
            setData("username", val)
        }
    }
})


export default store 