<template>
    <div>
        <table>
                <thead>
                <tr>    
                <td>Date</td>
                <td>Température min </td  >
                <td>Température max </td>
                <td>Libelle condition</td>
                </tr>  
                </thead>
                <tr v-for="(forecast,index) in forecasts" :key="index">
                <td>{{forecast.jourSemaine}}</td>
                <td>{{forecast.tempMin}}°</td  >
                <td>{{forecast.tempMax}}°</td>
                <td>{{forecast.condition}}</td>
                </tr>
            </table>
    </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  props: {
      forecasts : Array
  }
}
</script>

<style scoped>
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

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

</style>