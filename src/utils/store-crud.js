export function getData(key) {    //取
    return JSON.parse(localStorage.getItem(key))
}
export function setData(key, value) {  //存
    return localStorage.setItem(key, JSON.stringify(value))
}

export function removeData(key) { //删
    return localStorage.removeItem(key)
}