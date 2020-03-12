<template>
  <ul>
    <li v-for="m in list" :key="m.id">{{m.name}}</li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: []
    }
  },
  /*   async created() {
    const {
      data: { result }
    } = await axios.get('http://musicapi.xiecheng.live/personalized')
    console.log(result)
    this.list = result
  } */

  async asyncData(context) {
    console.log(context)
    const {
      data: { result }
    } = await axios.get('http://musicapi.xiecheng.live/personalized')
    // console.log(result)
    return {
      list: result
    }
  }
}
</script>

<style>
</style>