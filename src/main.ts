import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import "./assets/index.css";
const app = createApp(App);
app.use(router);
app.mount("#app");
