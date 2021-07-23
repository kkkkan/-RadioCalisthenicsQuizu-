import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Quizu from '@/components/Quizu'
import Correct from '@/components/Correct'
import Failure from '@/components/Failure'


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
  {
    path: '/resultCorrect',
    name: 'Correct',
    component: Correct
  },
  {
    path: '/resultFailure',
    name: 'Failure',
    component: Failure
  },


]


const router = new VueRouter({
  mode: 'history', // URLに#がつかなくなる
  //base: process.env.BASE_UR,
  routes,
});

export default router;

