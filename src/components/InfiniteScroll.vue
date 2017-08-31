<template>
  <div id="app">
    <mt-header title="Infinitescroll">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="200">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'Vue'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
export default {
  data() {
    return {
      list: ['10', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7'],
      loading: false
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$indicator.open({
        text: '加载中...'
      })
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
        this.$indicator.close()
      }, 2500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  line-height: 40px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
}
</style>