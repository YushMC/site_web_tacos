<script setup>
import {RouterView } from 'vue-router';
import Header from './components/Header.vue';
import BotonFlotante from './components/BotonFlotante.vue';
import Footer from './components/Footer.vue';

// Función para ir al inicio de la página

</script>

<template>
  <Header></Header>
  <!-- 
  <transition name="view" mode="out-in">
    <router-view></router-view>
  </transition>
  -->
  <router-view></router-view>
  <BotonFlotante></BotonFlotante>
  <Footer></Footer>
</template>

<style scoped>
.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.view-enter-active{
  transition-delay: 0.5s;
}
.view-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.view-enter-to{
  opacity: 1;
  transform: translateX(0px);
}
.view-leave-from{
  opacity: 1;
  transform: translateY(100px);
}
.view-leave-to{
  opacity: 0;
  transform: translateY(100px);
}

/*
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transform: all 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transform: all 0.3s ease-in;
}

*/
</style>
