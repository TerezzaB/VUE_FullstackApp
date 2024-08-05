import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import './assets/tailwind.css';
// import PrimeVue from 'primevue/config';
import router from './router';
/* 
import 'primevue/resources/themes/saga-blue/theme.css'; // Téma PrimeVue
import 'primevue/resources/primevue.min.css';           // Základné štýly
import 'primeicons/primeicons.css';                     // Ikony
*/


const app = createApp(App);
const pinia = createPinia();
// app.use(PrimeVue);
app.use(pinia);
app.use(router);
app.mount('#app');