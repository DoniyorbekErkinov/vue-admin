import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import "./assets/index.css";
import BaseIcon from "@/BaseComponents/BaseIcon/index.vue";
import Loading from "@/BaseComponents/Loading/index.vue";
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia);
app.component("BaseIcon", BaseIcon);
app.component("Loading", Loading);
app.mount("#app");
