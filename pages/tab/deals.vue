<template>
  <topic-list :topicList="dealList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'
import { show } from '../../api'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      axios.get(show('all4all')),
      axios.get(show('exchange')),
      axios.get(show('free')),
      axios.get(show('dn')),
      axios.get(show('tuan'))
    ]).then(axios.spread((all4all, exchange, free, dn, tuan) => {
      let sortlist = all4all.data.concat(exchange.data, free.data, dn.data, tuan.data).sort((a, b) => {
        return parseInt(a.created) < parseInt(b.created) 
          ? 1 : parseInt(a.created) === parseInt(b.created) 
            ? 0 : -1
      })

      return {
        dealList: sortlist
      }
    })).catch(error => console.log('deals error: ', error))
  },
  components: {
    TopicList
  }
}
</script>
