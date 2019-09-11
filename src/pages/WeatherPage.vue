<template>
  <div>
    <the-header></the-header>
    <weather-search></weather-search>
    <the-navigation></the-navigation>
  </div>
</template>

<script>
import TheHeader from "./../components/TheHeader";
import WeatherSearch from "./../components/WeatherSearch";
import TheNavigation from "./../components/TheNavigation";
export default {
  components: { TheHeader, WeatherSearch, TheNavigation }
};
</script>
