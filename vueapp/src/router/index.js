import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '*', // 404
    component: Error
  }
]
// 'https://www.qingmeng.com?id=21&name=xxx'
const router = new VueRouter({
  mode: 'history', // 默认值:hash
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   /* console.log(to)
//   console.log(from)
//   if(){
//     next();
//   }else{
//     next({path: '/login'});
//   } */
//   next(true)
// })

// router.afterEach((to, from) => {
//   // ...
// })

export default router