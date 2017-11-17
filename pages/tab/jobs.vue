<template>
  <topic-list :topicList="jobList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'
import { show } from '../../api'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      axios.get(show('jobs')),
      axios.get(show('cv')),
      axios.get(show('career')),
      axios.get(show('outsourcing'))
    ]).then(axios.spread((jobs, cv, career, outsourcing) => {
      let sortlist = jobs.data.concat(cv.data, career.data, outsourcing.data).sort((a, b) => {
        return parseInt(a.created) < parseInt(b.created) 
          ? 1 : parseInt(a.created) === parseInt(b.created) 
            ? 0 : -1
      })

      return {
        jobList: sortlist
      }
    })).catch(error => console.log('jobs error: ', error))
  },
  components: {
    TopicList
  }
}
</script>
