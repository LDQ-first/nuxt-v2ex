<template>
  <topic-list></topic-list>
</template>

<script>
import TopicList from '../components/TopicList.vue'

export default {
  async asyncData ({ app }) {
    try {
      const { data } = await app.$axios.get(``)
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

