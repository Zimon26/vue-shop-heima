<template>
  <el-button type="info" @click="logout">退出登录</el-button>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="less" scoped>
</style>