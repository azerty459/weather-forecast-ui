import Vue from 'vue'
import Router from 'vue-router'
import Forecast from '@/components/ForecastPage.vue'
import Heat from '@/components/HeatPage.vue'
import Rain from '@/components/RainPage.vue'
import Humidity from '@/components/HumidityPage.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Forecast
    },
    {
      path: '/prevision/:ville?',
      name: 'prevision',
      component: r => require.ensure([], () => r(Forecast)),
      props: true
    },
    {
      path: '/chaleur/:ville?',
      name: 'chaleur',
      component: r => require.ensure([], () => r(Heat)),
      props: true
    },
    {
      path: '/pluie/:ville?',
      name: 'pluie',
      component: r => require.ensure([], () => r(Rain)),
      props: true
    },
    {
      path: '/humidite/:ville?',
      name: 'humidite',
      component: r => require.ensure([], () => r(Humidity)),
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.bus.$emit('newPage', to.path)
  next()
})

export default router
