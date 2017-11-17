<template>
  <div>
    <mu-appbar title="Vue-V2ex">
      <mu-icon-button icon="menu" @click="toggle(true)" slot="left"/>
      <mu-icon-button href="https://github.com/LDQ-first/nuxt-v2ex" slot="right" target="_blank">
        <i class="muidocs-icon-custom-github"></i>
      </mu-icon-button>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-appbar title="选项"/>
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="技术" @click="toTab('tech')" />
        <mu-list-item title="创意" @click="toTab('creative')" />
        <mu-list-item title="好玩" @click="toTab('play')" />
        <mu-list-item title="Apple" @click="toTab('apple')" />
        <mu-list-item title="酷工作" @click="toTab('jobs')" />
        <mu-list-item title="交易" @click="toTab('deals')" />
        <mu-list-item title="城市" @click="toTab('city')" />
        <mu-list-item title="问与答" @click="toTab('qna')" />
        <mu-list-item title="最热" @click="toHome()" />
        <mu-list-item title="全部" @click="toALL()" />
        <mu-list-item title="节点" @click="toTab('nodes')" />
      </mu-list>
    </mu-drawer>
    <nuxt/>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        open: false,
        docked: true
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      toTab (name) {
        this.$router.push(`/tab/${name}`)
      },
      toHome () {
        this.$router.push(`/`)
      },
      toALL () {
        this.$router.push(`/all`)
      }
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
