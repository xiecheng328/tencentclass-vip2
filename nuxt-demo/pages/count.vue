<template>
  <div>
    <h1>{{counter}}</h1>
    <button @click="add">加1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
export default {
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapMutations(['add'])
  },
  async fetch(context) {
    const {
      data: { result }
    } = await axios.get('http://musicapi.xiecheng.live/personalized')
    context.store.commit('setPlaylist', result)
  }
}
</script>

<style>
</style>