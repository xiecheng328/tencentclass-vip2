<template>
  <div>
    <h1>这是课程页面</h1>
    <ul>
      <li>
        <nuxt-link to="/course/11">全栈课程</nuxt-link>
        <nuxt-link to="/course/22">JAVA课程</nuxt-link>
        <nuxt-link :to="{name:'course-id', params: {id: 123}}">通过name跳转</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'course',
}
</script>

<style>
</style>
