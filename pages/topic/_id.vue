<template>
  <section class="container">
    <mu-card>
      <nuxt-link :to="'/member/' + detail.member.username">
        <mu-card-header :title="detail.title" :subTitle="detail.member.username">
          <mu-avatar :src="detail.member.avatar_normal" slot="avatar"/>
        </mu-card-header>
      </nuxt-link>
      <div class="mu-card-text" v-html="detail.content_rendered"></div>
      <mu-card-actions>
        <div class="chip-container">
          <mu-chip class="chip" @click="toNode(detail.node.name)">
            <mu-avatar :size="32" :src="detail.node.avatar_normal | image"/>{{ detail.node.title }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32" icon="schedule"/>{{ detail.created | timeAgo }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32" icon="comment"/>{{ detail.replies }}
          </mu-chip>
        </div>
      </mu-card-actions>
    </mu-card>
    <comment :comments="comments" v-if="comments.length" />
  </section>
</template>

<script>
import axios from 'axios'
import Comment from '~/components/Comment'
import { topics, replies } from '../../api'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      axios.get(topics(params.id)),
      axios.get(replies(params.id))
    ]).then(axios.spread((detail, comments) => {
      return {
        detail: detail.data[0],
        comments: comments.data
      }
    })).catch(error => console.log('topic error: ', error))
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
    }
  },
  components: {
    Comment
  }
}
</script>
