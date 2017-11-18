export const proxy = `https://bird.ioliu.cn/v2?url=`

export const baseURL = `${proxy}https://www.v2ex.com/api/`

export const hot = `${baseURL}topics/hot.json`

export const latest = `${baseURL}topics/latest.json`

export const nodes = `${baseURL}nodes/all.json`

export const show = (nodeName) => {
  return `${baseURL}topics/show.json?node_name=${nodeName}`
}

export const topics = (id) => {
  return `${baseURL}topics/show.json?id=${id}`
}

export const user = (name) => {
  return `${baseURL}topics/show.json?username=${name}`
}

export const node = (name) => {
  return `${baseURL}nodes/show.json?name=${name}`
}

export const members = (member) => {
  return `${baseURL}members/show.json?username=${member}`
} 

export const replies = (id) => {
  return `${baseURL}replies/show.json?topic_id=${id}`
}

