<template>
    <div>
        <h1>Hello World</h1>
        <div v-if="city">
          <h3>Pr Vive {{city}}</h3>
        </div>
    </div>
</template>

<script>
export default{
  data () {
    return {
      city: null
    }
  },
  props: ['ville'],
  created () {
    this.city = this.ville
    window.bus.$on('newSearch', (ville) => {
      this.city = ville
    })
  }
}
</script>

<style>

</style>
