// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import Previsions from './components/PrevisionsPage'
import Conditions from "./components/Conditions";
import Vuex from 'vuex'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

const routerMeteo = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name :'root',
    component: Previsions
  },
    {
      path: '/conditions',
      name:'conditions',
      component: Conditions
    },
  ]


})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  router : routerMeteo,
  render : h=> h(App),

}).$mount('#app')







