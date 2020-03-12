import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Path from '../views/Path.vue'
import FrontEnd from '../views/FrontEnd.vue'
import BackEnd from '../views/BackEnd.vue'
import Alias from '../views/Alias.vue'
import Error from '../views/Error.vue'
import Count from '../views/Count.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/path',
    name: 'Path',
    component: Path,
    // beforeEnter: (to, from, next) => {
    //   // ...
    //   console.log(to)
    //   console.log(from)
    //   next()
    // },
    children: [{
        path: 'frontend',
        name: 'Frontend',
        component: FrontEnd
      },
      {
        path: 'backend/:classId/:className',
        component: BackEnd
      }
    ]
  },
  {
    path: '/onsale',
    // component: 'huodong.vue'
    redirect: '/'
  },
  {
    path: '/alias',
    component: Alias,
    alias: '/abc'
  }, {
    path: '*', // 404
    component: Error
  }, {
    path: '/count',
    component: Count
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