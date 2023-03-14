import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import "./assets/index.css";
import BaseIcon from "@/BaseComponents/BaseIcon/index.vue";
const app = createApp(App);
app.use(router);
app.component("BaseIcon", BaseIcon);
app.mount("#app");
