import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import Hello from "./components/Hello.vue"; // 全域組件
import router from "./router";

const app = createApp(App);

app.component("Hello", Hello); // 註冊全域組件
app.use(createPinia());
app.use(router);

app.mount("#app");
