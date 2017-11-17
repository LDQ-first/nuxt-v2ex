<template>
  <topic-list :topicList="hotList"></topic-list>
</template>

<script>
import TopicList from '../components/TopicList.vue'
import { hot } from '../api'
import axios from 'axios'

export default {
  async asyncData ({ app }) {
    try {
      const { data } = await axios.get(hot)
      return {
        hotList: data
      }
    } catch (err) {
      console.error('index err: ', err)
    }
  },
  components: {
    TopicList
  }
}
</script>

