import { createStore } from "vuex"
import { setToken, removeToken, getToken } from "../utils/store"
const store = createStore({
    state() {
        return {
            token: getToken('token') ? getToken('token') : {}
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
        }
    }
})


export default store 