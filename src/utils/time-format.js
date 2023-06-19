export function transformTimestamp(timestamp) {
    let a = new Date(timestamp).getTime();
    const date = new Date(a);
    const Y = date.getFullYear() + '年';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '日  ';
    // const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    // const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());+ h + m;
    const dateString = Y + M + D
    return dateString;
}