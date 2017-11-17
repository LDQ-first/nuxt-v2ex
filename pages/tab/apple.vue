<template>
  <topic-list :topicList="appleList" />
</template>

<script>
  import axios from 'axios'
  import TopicList from '~/components/TopicList'
  import { show } from '../../api'

  export default {
    asyncData ({app, params, error}) {
      return axios.all([
        axios.get(show('apple')),
        axios.get(show('macos')),
        axios.get(show('ios')),
        axios.get(show('ipad')),
        axios.get(show('iphone')),
        axios.get(show('mbp'))
      ]).then(axios.spread((apple, macos, ios, ipad, iphone, mbp) => {
        let sortlist = apple.data.concat(macos.data, ios.data, ipad.data, iphone.data, mbp.data).sort((a, b) => {
          return parseInt(a.created) < parseInt(b.created) 
            ? 1 : parseInt(a.created) === parseInt(b.created) 
              ? 0 : -1
        })
        return {
          appleList: sortlist
        }
      })).catch(error => console.log('apple error: ', error))
    },
    components: {
      TopicList
    }
  }
</script>