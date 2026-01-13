<script setup>
import OpenLayersMap from './components/OpenLayersMap.vue'
</script>

<template>
  <main>
    <OpenLayersMap :center="[0, 0]" :zoom="2" />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
}
</style>
