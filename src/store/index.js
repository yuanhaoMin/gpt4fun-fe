import { createStore } from "vuex"
import { setToken, removeToken, getToken } from "../utils/store"
const store = createStore({
    state() {
        return {
            token: getToken('token') ? getToken('token') : {},
            username: getToken('username') ? getToken('username') : {}
        }
    },
    mutations: {
        token(state, val) {
            state.token = val
            setToken("token", val)
        },
        deltoken(state) {
            state.token = {}
            removeToken('token')
            removeToken("username")
        },
        username(state, val) {
            state.username = val
            setToken("username", val)
        }
    }
})


export default store 