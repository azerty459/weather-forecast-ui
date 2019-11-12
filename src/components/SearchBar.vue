<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-navbar-brand>Forecast UI</b-navbar-brand>
      <b-nav-form>
        <b-form-input class="mr-sm-2" placeholder="Search" v-model="city"></b-form-input>
        <b-button variant="success" @click="onClickButton">Search</b-button>
      </b-nav-form>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: ''
    }
  },
  methods: {
    onClickButton (event) {
      this.$emit('searchedCity', this.city)
      console.log(this.city)
    }
  }
}
</script>
