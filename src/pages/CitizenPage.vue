<template>
  <div>
    <citizens-list></citizens-list>
    <citizen-detail></citizen-detail>
  </div>
</template>

<script>
import CitizensList from "./../components/CitizensList";
import CitizenDetail from "./../components/CitizenDetail";
export default {
  components: { CitizensList, CitizenDetail }
};
</script>