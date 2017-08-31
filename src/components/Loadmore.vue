<template>
  <div id="app">
    <mt-header title="Loadmore">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import Vue from 'vue'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
  data() {
    return {
      list: ['10', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7'],
      allLoaded: false
    }
  },
  methods: {
    loadTop() {
      this.$refs.loadmore.onTopLoaded()
      let first
      if (this.list.length < 100) {
        first = parseInt(this.list.slice(0, 1).join()) // 这里将数组中的字符转化成String类型然后再转化成数字
        for (let i = first + 1; i <= first + 20; i++) {
          this.list.unshift(i)
        }
      }
    },
    loadBottom() {
      // this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
      let len = this.list.length
      let arr = this.list
      if (len < 100) {
        let last = arr[len - 1]
        last = parseInt(last) // 这里将数组中的字符转化成String类型然后再转化成数字
        for (let i = last + 1; i <= last + 20; i++) {
          this.list.push(i)
        }
      } else {
        this.allLoaded = true // 若数据已全部获取完毕
      }
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
