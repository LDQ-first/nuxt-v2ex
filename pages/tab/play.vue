<template>
  <topic-list :topicList="playList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'
import { show } from '../../api'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      axios.get(show('share')),
      axios.get(show('bb')),
      axios.get(show('games')),
      axios.get(show('travel')),
      axios.get(show('hardware'))
    ]).then(axios.spread((share, bb, games, travel, hardware) => {
      let sortlist = share.data.concat(bb.data, games.data, travel.data, hardware.data).sort((a, b) => {
        return parseInt(a.created) < parseInt(b.created) 
          ? 1 : parseInt(a.created) === parseInt(b.created) 
            ? 0 : -1
      })

      return {
        playList: sortlist
      }
    })).catch(error => console.log('play error: ', error))
  },
  components: {
    TopicList
  }
}
</script>
