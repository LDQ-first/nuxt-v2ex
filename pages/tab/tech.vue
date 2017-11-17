<template>
  <topic-list :topicList="techList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'
import { show } from '../../api'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      axios.get(show('programmer')),
      axios.get(show('fe')),
      axios.get(show('js')),
      axios.get(show('nodejs')),
      axios.get(show('vue'))
    ]).then(axios.spread((programmer, fe, js, nodejs, vue) => {
      let sortlist = programmer.data.concat(fe.data, js.data, nodejs.data, vue.data).sort((a, b) => {
        return parseInt(a.created) < parseInt(b.created) 
          ? 1 : parseInt(a.created) === parseInt(b.created) 
            ? 0 : -1
      })

      return {
        techList: sortlist
      }
    })).catch(error => console.log('tech error: ', error))
  },
  components: {
    TopicList
  }
}
</script>
