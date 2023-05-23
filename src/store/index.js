import { createStore } from "vuex"
import { setToken, removeToken } from "../utils/store"
const store = createStore({
    state() {
        return {
            token: {}
        }
    },
    mutations: {
        token(state, val) {
            state.token = val
            setToken("token", val)
        },
        deltoken() {
            store.token = {}
            removeToken('token')
        }
    }
})


export default store 