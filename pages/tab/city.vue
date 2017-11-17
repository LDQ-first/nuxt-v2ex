<template>
  <topic-list :topicList="cityList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'
import { show } from '../../api'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      axios.get(show('beijing')),
      axios.get(show('shanghai')),
      axios.get(show('shenzhen')),
      axios.get(show('hangzhou')),
      axios.get(show('life'))
    ]).then(axios.spread((beijing, shanghai, shenzhen, hangzhou, life) => {
      let sortlist = beijing.data.concat(shanghai.data, shenzhen.data, hangzhou.data, life.data).sort((a, b) => {
        return parseInt(a.created) < parseInt(b.created) 
          ? 1 : parseInt(a.created) === parseInt(b.created) 
            ? 0 : -1
      })
      return {
        cityList: sortlist
      }
    })).catch(error => console.log('city error: ', error))
  },
  components: {
    TopicList
  }
}
</script>
