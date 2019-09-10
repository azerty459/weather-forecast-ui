<template>
  <div>
    <br />
    Hello from {{ from }},
    <br />
    {{ firstname}} {{ lastname }}
  </div>
</template>


<script>
export default {
  props: ["firstname", "lastname", "from"]
};
</script>