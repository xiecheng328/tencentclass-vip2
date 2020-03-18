<template>
  <div>
    <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
    </swipe>
  </div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css";
// in ES6 modules
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  components: {
    Swipe,
    SwipeItem
  }
};
</script>

<style lang="scss" scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  //   background-color: #0089dc;
  background: url(../assets/img/01.jpg) no-repeat;
  background-size: 6.4rem 4rem;
  color: #fff;
}

.slide2 {
  background: url(../assets/img/02.jpg) no-repeat;
  background-size: 6.4rem 4rem;

  color: #000;
}

.slide3 {
  background: url(../assets/img/03.jpg) no-repeat;
  background-size: 6.4rem 4rem;
  color: #fff;
}
</style>