<template>
    <div>
        <ul>
            <li>Humidité : {{currentCondition.humidity}}%</li>
            <li>Conditions : {{currentCondition.condition}}</li>
            <li>Temperature : {{currentCondition.temperature}}°</li>
            <li>Levé du soleil : {{cityInfo.leveSoleil}}</li>
            <li>Couché du soleil : {{cityInfo.coucheSoleil}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  props: {
      currentCondition : Object,
      cityInfo : Object
  }
}
</script>
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
