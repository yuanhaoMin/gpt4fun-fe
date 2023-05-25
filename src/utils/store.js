export function getToken(key) {    //取
    return JSON.parse(localStorage.getItem(key))
}
export function setToken(key, value) {  //存
    return localStorage.setItem(key, JSON.stringify(value))
}

export function removeToken(key) { //删
    return localStorage.removeItem(key)
}