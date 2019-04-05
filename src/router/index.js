import Vue from 'vue'
import Router from 'vue-router'
import Meteo from '@/components/meteo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'meteo',
      component: Meteo
    }
  ]
})
