<template>
    <div>
        <h1>Hello World</h1>
        <div v-if="city">
          <h3>Pr Vive {{city}}</h3>
        </div>
        <div v-if="messageError">
          <error :message="messageError"/>
        </div>
    </div>
</template>

<script>
import error from '@/components/message/Error.vue'

export default{
  data () {
    return {
      city: null,
      messageError: null
    }
  },
  props: ['ville'],
  created () {
    this.city = this.ville
    window.bus.$on('newSearch', (ville) => {
      this.city = ville
    })
  },
  components: {
    error
  }
}
</script>

<style>

</style>
