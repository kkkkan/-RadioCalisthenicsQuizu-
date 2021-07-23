import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Quizu from '@/components/Quizu'
import Correct from '@/components/Correct'
import Failure from '@/components/Failure'
import NotFound from '@/components/NotFound'


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
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },


]


const router = new VueRouter({
  mode: 'history', // URLに#がつかなくなる
  //base: process.env.BASE_UR,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 画面遷移時のスクロール位置
    if (savedPosition) {
      // ブラウザバック時など、覚えている位置が存在しているときはそれを採用
      return savedPosition
    } else {
      // そうじゃないときは必ずトップに戻る
      return { x: 0, y: 0 }
    }
  }
});

export default router;

