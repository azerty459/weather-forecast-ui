import Vue from 'vue'
import Router from 'vue-router'
import Humidity from '@/components/Humidity.vue'
import Prevision from '@/components/Prevision.vue'
import Hottest from '@/components/Hottest.vue'
import Rain from '@/components/Rain.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index'
    },
    {
      path: '/meteo/:ville?',
      name: 'Prevision',
      component: r => require.ensure([], () => r(Prevision)),
      props: true
    },
    {
      path: '/meteo/:ville?/humidity',
      name: 'Humidity',
      component: r => require.ensure([], () => r(Humidity)),
      props: true
    },
    {
      path: '/meteo/:ville?/rain',
      name: 'Rain',
      component: r => require.ensure([], () => r(Rain)),
      props: true
    },
    {
      path: '/meteo/:ville?/hottest',
      name: 'Hottest',
      component: r => require.ensure([], () => r(Hottest)),
      props: true
    }
  ]
})
