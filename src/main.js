import { createApp } from 'vue'
import {createRouter, createWebHistory } from 'vue-router'
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
        component: () => import('./views/InicioView.vue')
    },
    {
        path: '/products',
        name:'products',
        component: () => import('./views/ProductsView.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    AOS.init(); // Initialize AOS
    next();
});
//instancia de vue
const app = createApp(App)
app.use(router)
app.use(AOS)
app.mount('#app')

