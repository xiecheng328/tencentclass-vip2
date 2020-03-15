<template>
  <div id="app">
     <c-header></c-header>
      <div class="container">
          <router-view></router-view>
      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
import CHeader from "./components/CHeader.vue";
import CommonFooter from "./components/CommonFooter.vue";
export default {
    components:{
        CHeader,
        CommonFooter
    }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .container{
    margin:1rem 0;
  }
}


</style>
