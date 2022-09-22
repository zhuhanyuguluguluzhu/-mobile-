<template>
  <h1>search</h1>
  <h3>{{ $route.query.stayTime }}</h3>
  <h3>{{ chooseCity.cityName }}</h3>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city/city";
const cityStore = useCityStore();
const { chooseCity } = storeToRefs(cityStore);
</script>

<style scoped></style>
