<template>
  <div id="app">
    <b-navbar type="light" variant="light">
      <b-navbar-brand href="#">Forecast UI</b-navbar-brand>
      <b-nav-form>
        <b-form-input class="mr-sm-2" placeholder="Search" v-model="ville"></b-form-input>
        <b-nav tabs>
          <b-nav-item @click.prevent="tab = 'hottestdaytab'" :active="tab === 'hottestdaytab'">
            <router-link :to="{name: 'HottestDay', params: {nomville:ville}}">Hottest Day</router-link>
          </b-nav-item>
          <b-nav-item @click.prevent="tab = 'rainydaystab'" :active="tab === 'rainydaystab'">
            <router-link :to="{name: 'RainyDays', params: {nomville:ville}}">Rainy Days</router-link>
          </b-nav-item>
          <b-nav-item
            @click.prevent="tab = 'actualhumiditytab'"
            :active="tab === 'actualhumiditytab'"
          >
            <router-link :to="{name: 'ActualHumidity', params: {nomville:ville}}">Actual Humidity</router-link>
          </b-nav-item>
        </b-nav>
      </b-nav-form>
    </b-navbar>
    <b-container fluid class="mt-3">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  data () {
    return {
      ville: '',
      tab: 'hottestdaytab'
    }
  }
}
</script>
