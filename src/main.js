import { createApp } from "vue";

import pinia from "@/stores/index";
import App from "./App.vue";

//reset css
import "./assets/css/index.css";
import "normalize.css";

// router
import router from "./router";

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
