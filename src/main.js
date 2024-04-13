import './assets/main.css'

// Add PrimeVue
import PrimeVue from "primevue/config";

// Add PrimeFlex
import 'primeflex/primeflex.css';

// Add PrimeVue Components
import Card         from 'primevue/card';
import Button       from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Sidebar      from 'primevue/sidebar';
import Avatar       from 'primevue/avatar';
import Menu         from 'primevue/menu';
import MenuBar      from 'primevue/menubar';
import Toolbar      from 'primevue/toolbar';

// App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import App from './app.vue'

createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', MenuBar)
    .component('pv-toolbar', Toolbar)
    .mount('#app')