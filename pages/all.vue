<template>
  <topic-list :topicList="newList" />
</template>

<script>
import TopicList from '~/components/TopicList'
import { latest } from '../api'
import axios from 'axios'

export default {
  async asyncData ({ app }) {
    try {
      const { data } = await axios.get(latest)

      return {
        newList: data
      }
    } catch (err) {
      console.error('new err: ', err)
    }
  },
  components: {
    TopicList
  }
}
</script>
