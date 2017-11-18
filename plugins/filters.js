import Vue from 'vue'


export const host = (url) => {

}

export const timeAgo = (time) => {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return ~~(between / 60) + ' 分钟前' 
  } else if (between < 86400) {
    return ~~(between / 3600) + ' 小时前'
  } else {
    return ~~(between / 86400) + ' 天前'
  }
}

export const format = (timestamp) => {
  let date = new Date(timestamp * 1000)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())

  return Y + M + D
}

export const image = (url) => {
  if (url === '/static/img/node_normal.png') {
    return '../img/node_normal.png'
  } else {
    return url
  }
}

const filters = {
  host,
  timeAgo,
  format,
  image
}

export default filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})