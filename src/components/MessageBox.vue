<template>
  <div id="app">
    <mt-header title="Indicator">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="page-button-group">
      <mt-button size="large" @click.native="alert">打开Alert提示框</mt-button>
      <mt-button size="large" @click.native="confirm">打开Confirm确认框</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    alert: function() {
      // this.$messagebox.alert('恭喜你中了500万大奖！', '友情提示')
      this.$messagebox.alert('操作成功').then(action => {
        console.log(action)
      })
    },
    confirm: function() {
      this.$messagebox.confirm('确定执行此操作?').then(action => {
        console.log(action)
      }).catch(action => {
        console.log(action)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
