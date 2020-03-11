<template>
  <div id="app">
    <router-link to="/">首页</router-link>|
    <router-link to="/path">路径</router-link>|
    <router-link to="/onsale">促销重定向</router-link>|
    <router-link to="/abc">别名alias</router-link> | 
    <router-link to="/count">Vuex</router-link> 
    <br />
    <button @click="goBack">后退</button>
    <button @click="goForward">前进</button>
    <button @click="goHome">返回首页</button>

    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    },
    goHome() {
      this.$router.push('/');

    }
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
