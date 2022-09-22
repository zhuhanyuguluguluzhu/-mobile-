<template>
  <div class="home-search">
    <homeLocation />
    <homeStay />
    <homeKeyword />
    <homeSearch />
  </div>
</template>

<script setup>
import homeLocation from "./search-components/home-location.vue";
import homeStay from "./search-components/home-stay.vue";
import homeKeyword from "./search-components/home-keyword.vue";
import homeSearch from "./search-components/home-search.vue";
</script>

<style scoped lang="less">
.home-search {
  padding: 15px;
  padding-top: 5px;
}
</style>
