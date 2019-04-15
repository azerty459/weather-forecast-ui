<template>
  <div>
    <div class="hide-on-small-only">
      <div class="row blue-text blue lighten-4" style="height: 60px; border: dashed;">
        <div class="col s2">
          <i class="material-icons" style="font-size: 3em; line-height: 125%">info</i>
        </div>
        <div class="col s10 truncate " style="font-size: 1.5em; line-height: 250%">
          {{message}}
        </div>
      </div>
    </div>
    <div class="hide-on-med-and-up">
      <div class="blue lighten-4 blue-text center" style="border: dashed">
        <br>{{message}}<br>&nbsp;
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    message: String
  }
}
</script>

<style>

</style>
