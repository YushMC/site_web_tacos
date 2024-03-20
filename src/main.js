import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import InicioView from './views/InicioView.vue';
import ProductsView from './views/ProductsView.vue';
import TacosView from './views/TacosView.vue';
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
        path: '/products',
        name:'products',
        component: ProductsView
    }
    ,
    {
        path: '/tacos',
        name:'tacos',
        component: TacosView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
/*
,
    scrollBehavior() {
        return { top: 0, left: 0 }
      }
*/
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

