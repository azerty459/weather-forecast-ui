<template>
  <div class="col s12 m6 l4">
    <div class="card">
      <div class="card-image">
        <img :src="icon">
        <span class="card-title black-text">{{day}}</span>
      </div>
      <div class="card-content">
        <div class="row">
          <div class="col s1 m2 center">
            <i class="material-icons">brightness_low</i>
          </div>
          <div class="col s11 m10">
            : &nbsp; {{condition}}
          </div>
        </div>
        <div class="row">
          <div class="col s1 m2 center">
            <i class="material-icons">add_circle</i>
          </div>
          <div class="col s11 m10">
            : &nbsp; {{max}} &deg;C
          </div>
        </div>
        <div class="row">
          <div class="col s1 m2 center">
            <i class="material-icons">remove_circle</i>
          </div>
          <div class="col s11 m10">
            : &nbsp; {{min}} &deg;C
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ['icon', 'day', 'condition', 'max', 'min']
}
</script>

<style>

</style>
