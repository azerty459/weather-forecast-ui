<template>
  <b-alert show variant="danger"><i class="fas fa-exclamation-triangle mr-2"></i>{{ error }}</b-alert>
</template>

<script>

export default {
  name: 'ErrorVille',
  props: {
  	error: String
  }
}
</script>

<style>

</style>
