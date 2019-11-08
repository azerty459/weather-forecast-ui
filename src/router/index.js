import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Forecast from '@/components/Forecast'
import HottestDay from '@/components/HottestDay'
import ActualHumidity from '@/components/ActualHumidity'
import RainyDays from '@/components/RainyDays'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fore20cast/:nomville([a-zA-Z]*)',
      name: 'Forecast',
      props: true,
      component: Forecast
    },
    {
      path: '/hottest20day/:nomville([a-zA-Z]*)',
      name: 'HottestDay',
      props: true,
      component: HottestDay
    },
    {
      path: '/rainy20days/:nomville([a-zA-Z]*)',
      name: 'RainyDays',
      props: true,
      component: RainyDays
    },
    {
      path: '/actual20humidity/:nomville([a-zA-Z]*)',
      name: 'ActualHumidity',
      props: true,
      component: ActualHumidity
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
