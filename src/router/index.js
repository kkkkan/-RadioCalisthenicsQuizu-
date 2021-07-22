import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Quizu from '@/components/Quizu'

Vue.use(VueRouter)


const routes = [
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'Quizu',
    component: Quizu
  },
  
  
]


const router = new VueRouter({
  mode: 'history', // URLに#がつかなくなる
  //base: process.env.BASE_UR,
  routes,
});

export default router;

