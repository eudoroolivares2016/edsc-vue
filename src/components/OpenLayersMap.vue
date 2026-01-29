<template>
  <div ref="mapContainer" class="ol-map"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'
import 'ol/ol.css'

const props = defineProps({
  center: {
    type: Array,
    default: () => [0, 0] // [longitude, latitude]
  },
  zoom: {
    type: Number,
    default: 2
  }
})

const mapContainer = ref(null)
let map = null

onMounted(() => {
  if (mapContainer.value) {
    // Transform lat/lon to Web Mercator projection
    const center = fromLonLat(props.center)
    
    map = new Map({
      target: mapContainer.value,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: center,
        zoom: props.zoom
      })
    })
  }
})

onBeforeUnmount(() => {
  if (map) {
    map.setTarget(null)
    map = null
  }
})
</script>

<style scoped>
.ol-map {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
</style>
