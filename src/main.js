import { createApp } from 'vue'
import router from './router';
import AppWrapper from './AppWrapper.vue';

const app=createApp(AppWrapper);
app.use(router);
app.mount('#app')
