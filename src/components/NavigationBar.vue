<template>
  <div>
    <ul>
      <li>
        <router-link :to="'/a'">A</router-link>
      </li>
      <li>
        <router-link :to="'/b'">B</router-link>
      </li>
      <li>
        <router-link :to="'/abcd'">*</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
