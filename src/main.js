import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

axios({
    method: 'get',
    url: 'http://localhost:3000/',
})
    .then((response) => {
        console.log(response);
    });

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router).use(pinia).mount('#app');