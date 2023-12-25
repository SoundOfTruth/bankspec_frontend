import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import Router from "./router.ts";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);

app.use(Router);
app.use(pinia);

app.mount("#app");
