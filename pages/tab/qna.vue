<template>
  <topic-list :topicList="qnaList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'
import { show } from '../../api'

export default {
  async asyncData ({ app }) {
    try {
      const { data } = await axios.get(show('qna'))

      return {
        qnaList: data
      }
    } catch (err) {
      console.error('qna err: ', err)
    }
  },
  components: {
    TopicList
  }
}
</script>
