<template>
  <div id="app">
     <c-header></c-header>
      <div class="container">

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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-leave {
  // opacity: 1;
  transform: translateX(0);
}
.fade-leave-to {
  // opacity: 0;
  transform: translateX(100%);
}
.fade-leave-active {
  // transition: opacity 1s ease;
  transition: transform 1s ease;
}
</style>
