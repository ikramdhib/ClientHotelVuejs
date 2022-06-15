import { createApp } from 'vue'
import router from './router';
import moment from 'moment';

//import fr from 'moment/locale/fr';
import AppWrapper from './AppWrapper.vue';

const app=createApp(AppWrapper);
app.config.globalProperties.$moment = moment

app.use(router);
app.mount('#app')
