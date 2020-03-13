<template>
  <h1>{{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>
</style>
