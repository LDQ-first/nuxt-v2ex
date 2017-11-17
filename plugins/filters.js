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