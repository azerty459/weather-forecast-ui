<template>
  <div>
    <input
      :value="search"
      v-on:input="$emit('update-search', $event)"
      v-on:keyup.enter="$emit('launch-search')"
      type="text"
      placeholder="Search a city"
    />
  </div>
</template>

<script>
export default {
  props: ["search"]
};
</script>
