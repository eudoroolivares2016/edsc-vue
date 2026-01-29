import { createApp } from "vue";
import App from "./App.vue";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css"; // Import the styles

const app = createApp(App);
app.use(OpenLayersMap);
app.mount("#app");
