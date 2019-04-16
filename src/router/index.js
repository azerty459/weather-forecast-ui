import Vue from 'vue'
import Router from 'vue-router'
import Humidity from '@/components/Humidity.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/meteo/:ville?/humidity',
      name: 'Humidity',
      component: r => require.ensure([], () => r(Humidity)),
      props: true
    }
  ]
})
