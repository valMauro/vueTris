import Vue from 'vue'
import Router from 'vue-router'
import TrisContainer from '@/components/trisContainer'
import winPopup from '@/components/winPopup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'trisStage',
      component: TrisContainer
    }
  ]
})

Vue.component('trisContainer', TrisContainer)
Vue.component('winPopup', winPopup)
