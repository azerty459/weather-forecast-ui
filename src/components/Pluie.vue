<template>
    <div>
        <h1>Hello World</h1>
        <div v-if="city">
          <h3>Pl Vive {{searchValue}}</h3>
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
  },
  computed: {
    searchValue () {
      return window.search
    }
  }
}
</script>

<style>

</style>
