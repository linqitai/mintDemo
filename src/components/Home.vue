<template>
  <div id="">
    <mt-header title="JS Compoments">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <ul>
      <li v-for="item in list" :key="item" @click='viewTo(item)'>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Popup } from 'mint-ui'
Vue.component(Popup.name, Popup)
export default {
  data() {
    return {
      list: ['Button', 'Indicator', 'Loadmore', 'Infinitescroll', 'MessageBox'],
      popupVisible: false
    }
  },
  methods: {
    viewTo(item) {
      // this.popupVisible = true
      console.log('viewTo:' + item)
      this.$router.push('/' + item)
    }
  }
}
</script>

<style scoped>
ul li {
  line-height: 40px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
}
</style>

