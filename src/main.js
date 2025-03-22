import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importe ton fichier de configuration du router

const app = createApp(App);

app.use(router);  // Utilise Vue Router

app.mount('#app');
