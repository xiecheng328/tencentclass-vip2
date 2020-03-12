<template>
  <div>
    <!-- <h1>计数器：{{ $store.state.count }}</h1>
    <button @click="$store.commit('add')">加1</button>
    <button @click="$store.commit('reduce')">减1</button> -->
    <h1>计数器: {{count}}</h1>
    <h1>getter: {{newCount}}</h1>
    <button @click="add">加1</button>
    <button @click="reduce">减1</button>

    <button @click="addAciton">addAction</button>
    <button @click="getUserList">获取用户列表</button>
    <button @click="$store.dispatch('getUserList')">获取用户列表2</button>

    <ul>
        <li v-for="(user, index) in userList" :key="index">
            名字是：{{user.name}}  年龄是: {{user.age}}
        </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['count', 'userList']),
        ...mapGetters(['newCount'])
    },
    methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions(['addAciton', 'getUserList'])
    }
}
</script>

<style>
</style>