import { createApp } from "vue";
import Vuex from 'vuex'
import App from "./App.vue";
import store from '@/store';
import router from '@/router';

import "@/css/main.css"
import "@/css/responsive.css"

createApp(App)
.use(Vuex)
.use(store)
.use(router)
.mount("#app");
