<template>
  <div>
    <div>detail</div>
    <table>
      <tr>id : {{citizen.id}}</tr>
      <tr>firstname : {{citizen.firstname}}</tr>
      <tr>lastname : {{citizen.lastname}}</tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["citizen"]
};
</script>