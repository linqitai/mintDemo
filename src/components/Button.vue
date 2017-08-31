<template>
  <div>
    <div id="app">
      <mt-header title="Button">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <div class="page-button-group">
        <mt-button size="large" @click.native="handleClick">点击弹出 Toast</mt-button>
        <mt-button size="large" @click.native="handleClick2">自定义 Toast 位置</mt-button>
        <mt-button size="large" @click.native="handleClick3">点击弹出有Icon的 Toast</mt-button>
        <div>
          <i class="fa fa-address-card-o">23</i>
        </div>
        <mt-button size="large" @click.native="indicator">点击弹出Indicator</mt-button>
      </div>
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
    handleClick: function() {
      this.$toast('Hello world!')
    },
    handleClick2: function() {
      this.$toast({
        message: 'Hello world!',
        position: 'bottom',
        duration: 2000
      })
    },
    handleClick3: function() {
      this.$toast({
        message: '操作成功',
        iconClass: 'el-icon-check'
      })
    },
    indicator: function() {
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
mt-button {
  display: block;
}
</style>
