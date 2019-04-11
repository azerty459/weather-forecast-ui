import Vue from 'vue'
import Router from 'vue-router'
import Previsions from '@/components/Previsions'
import JourPluie from '@/components/JourPluie'
import JourChaud from '@/components/JourChaud'
import Humidite from '@/components/Humidite'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/previsions',
      name: 'Previsions',
      component: Previsions
    },
    {
      path: '/jour-pluie',
      name: 'JourPluie',
      component: JourPluie
    },
    {
      path: '/jour-chaud',
      name: 'JourChaud',
      component: JourChaud
    },
    {
      path: '/humidite',
      name: 'Humidite',
      component: Humidite
    }
  ]
})
