<template>
  <div>
    <weather-search-input></weather-search-input>
    <weather-search-button></weather-search-button>
  </div>
</template>

<script>
import WeatherSearchInput from "./WeatherSearchInput";
import WeatherSearchButton from "./WeatherSearchButton";
export default {
  components: {
    WeatherSearchInput,
    WeatherSearchButton
  }
};
</script>