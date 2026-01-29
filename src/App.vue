<script setup>
import OpenLayersMap from './components/OpenLayersMap.vue'
</script>

<template>
  <main>
    <OpenLayersMap :center="[-122.4194, 37.7749]" :zoom="10" />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
}
</style>
