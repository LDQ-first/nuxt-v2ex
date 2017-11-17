<template>
  <section class="container">
    <mu-text-field hintText="搜索" v-model="searchString" icon="search"/>
     <mu-sub-header>
      已为您找到 {{ nodes.length }} 个节点.
    </mu-sub-header>
    <mu-content-block>
      <mu-chip class="chip" v-for="node in nodes" :key="node.id" @click="toNode(node.name)">
        {{ node.title }}
      </mu-chip>
    </mu-content-block>
  </section>
</template>

<script>
  import axios from 'axios'
  import { nodes } from '../../api'

  export default {
    async asyncData () {
      try {
        const { data } = await axios.get(nodes)
        return {
          nodeList: data
        }
      } catch (err) {
        console.log('nodes err: ', err)
      }
    },
    data () {
      return {
        searchString: ''
      }
    },
    computed: {
      nodes () {
        if (!this.searchString) {
          return this.nodeList
        }

        let searchString = this.searchString.trim().toLowerCase()

        return this.nodeList.filter(({title, name}) => 
          title.toLowerCase().indexOf(searchString) > -1 || 
            name.toLowerCase().indexOf(searchString) > -1
        )
      }
    },
    methods: {
      toNode (name) {
        this.$router.push(`/node/${name}`)
      }
    }
  }



</script>