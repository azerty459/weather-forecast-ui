import Vue from 'vue'
import Router from 'vue-router'
import Prevision from '@/components/Prevision.vue'
import Chaleur from '@/components/Chaleur.vue'
import Pluie from '@/components/Pluie.vue'
import Humidite from '@/components/Humidite.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Prevision
    },
    {
      path: '/prevision/:ville?',
      name: 'prevision',
      component: r => require.ensure([], () => r(Prevision)),
      props: true
    },
    {
      path: '/chaleur/:ville?',
      name: 'chaleur',
      component: r => require.ensure([], () => r(Chaleur)),
      props: true
    },
    {
      path: '/pluie/:ville?',
      name: 'pluie',
      component: r => require.ensure([], () => r(Pluie)),
      props: true
    },
    {
      path: '/humidite/:ville?',
      name: 'humidite',
      component: r => require.ensure([], () => r(Humidite)),
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
