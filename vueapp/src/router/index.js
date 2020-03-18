import Vue from 'vue'
import VueRouter from 'vue-router'
import Error from '../views/Error.vue'
import Movie from './../views/Movie.vue'
import MovieDetail from './../views/MovieDetail.vue'
import Music from '../views/Music.vue'
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'
import MusicList from './../views/MusicList.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect:'/movie'
  }, {
    path:'/movie',
    component:Movie
  }, {
    path:'/movie-detail',
    component:MovieDetail
  },
  {
    path:'/music',
    component:Music
  },
  {
    path:'/book',
    component:Book
  },
  {
    path:'/photo',
    component:Photo
  },
  {
    path:'/music-list',
    component:MusicList
  },{
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