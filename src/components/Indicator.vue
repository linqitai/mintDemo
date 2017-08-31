<template>
  <div id="app">
    <mt-header title="Indicator">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    <div class="page-button-group">
      <mt-button size="large" @click.native="indicator">点击弹出Indicator</mt-button>
      <mt-button size="large" @click.native="indicator2">点击弹出带有文字的Indicator</mt-button>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
    }
  },
  methods: {
    indicator: function() {
      Indicator.open()
      setTimeout(function() {
        console.log('close')
        Indicator.close()
      }, 3000)
    },
    indicator2: function() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      setTimeout(function() {
        console.log('close')
        Indicator.close()
      }, 3000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
