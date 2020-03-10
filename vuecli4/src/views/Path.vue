<template>
  <div>
    <h1>这是路径页面</h1>
    <router-link :to="{name: 'Frontend', params: {name:'xiecheng',age: 34} }">前端培训</router-link> & 
    <router-link to="/path/backend/21/java">后端培训</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>