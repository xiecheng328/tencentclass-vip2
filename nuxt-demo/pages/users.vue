<template>
  <div>
    <h1>这是用户页面</h1>
    <nuxt-link to="/users/info">信息</nuxt-link>
    <nuxt-link to="/users/desc">介绍</nuxt-link>

    <nuxt-child />
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
