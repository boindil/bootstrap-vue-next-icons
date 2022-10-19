import { createApp } from 'vue';
import App from './App.vue';
import BootstrapVueIcons from './BootstrapVueIcons';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const app = createApp(App);
app.use(BootstrapVueIcons);
// app.use(router)

app.mount('#app');
