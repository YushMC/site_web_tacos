import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import InicioView from './views/InicioView.vue';
import TacosView from './views/TacosView.vue';
import HamburguesasView from './views/HamburguesasView.vue';
import QuesadillasView from './views/QuesadillasView.vue';
import TortasView from './views/TortasView.vue';
import { Swiper } from 'swiper/vue';
import {createRouter, createWebHistory } from 'vue-router'
import 'sweetalert2/dist/sweetalert2.min.css';

import AOS from 'aos'
import 'aos/dist/aos.css'
import './css/style.css'
import './css/cards.css'
import './css/sections.css'
import './css/modal.css'
import App from './App.vue'

const routes =  [
    {
        path: '/',
        name: 'home',
        component: InicioView
    },
    {
        path: '/inicio',
        name: 'inicio',
        component: InicioView
    },
    {
        path: '/menu/tacos',
        name:'tacos',
        component: TacosView
    },
    {
        path: '/menu/hamburguesas',
        name:'hamburguesas',
        component: HamburguesasView
    }
    ,
    {
        path: '/menu/quesadillas',
        name:'quesadillas',
        component: QuesadillasView
    }
    ,
    {
        path: '/menu/tortas',
        name:'tortas',
        component: TortasView
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
    
    scrollBehavior() {
        window.scrollTo(0,0);
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
});

router.beforeEach((to, from, next) => {
    AOS.init(); // Initialize AOS
    next();
});
//instancia de vue
const app = createApp(App)
app.use(router)
app.use(AOS)
app.use(Swiper)
app.use(VueSweetalert2)
app.mount('#app')

