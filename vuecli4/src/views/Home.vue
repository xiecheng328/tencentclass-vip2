<template>
    <div>
        这是首页
        <h1>计数器：{{ $store.state.count }}</h1>

        <ul>
        <li v-for="(user, index) in $store.state.userList" :key="index">
            名字是：{{user.name}}  年龄是: {{user.age}}
        </li>
    </ul>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>