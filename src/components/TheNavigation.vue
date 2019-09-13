<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name: 'weatherCurrent'}">Weather current</router-link>
      </li>
      <li>
        <router-link :to="{name: 'weatherDetails'}">Weather details</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>