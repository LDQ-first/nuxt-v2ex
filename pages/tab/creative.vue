<template>
  <topic-list :topicList="creativeList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'
import { show } from '../../api'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      axios.get(show('create')),
      axios.get(show('design')),
      axios.get(show('ideas'))
    ]).then(axios.spread((create, design, ideas) => {
      let sortlist = create.data.concat(design.data, ideas.data).sort((a, b) => {
        return parseInt(a.created) < parseInt(b.created) 
          ? 1 : parseInt(a.created) === parseInt(b.created) 
            ? 0 : -1
      })

      return {
        creativeList: sortlist
      }
    })).catch(error => console.log('creative error: ', error))
  },
  components: {
    TopicList
  }
}
</script>
