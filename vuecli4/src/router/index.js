import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Path from '../views/Path.vue'
import FrontEnd from '../views/FrontEnd.vue'
import BackEnd from '../views/BackEnd.vue'
import Alias from '../views/Alias.vue'

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
  }
]
// 'https://www.qingmeng.com?id=21&name=xxx'
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router