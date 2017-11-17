import Vue from 'vue'


export const host = (url) => {

}

export const timeAgo = (time) => {

}

export const format = (timestamp) => {

}

export const image = (url) => {

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