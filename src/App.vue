<script setup>
import {RouterView } from 'vue-router';
import Header from './components/Header.vue';
import BotonFlotante from './components/BotonFlotante.vue';
import Footer from './components/Footer.vue';
import Comments from './components/Comments.vue';
</script>

<template>
  <Header></Header>
  <RouterView>
  </RouterView>
  <Comments></Comments>
  <BotonFlotante></BotonFlotante>
  <Footer></Footer>
</template>

<style scoped>
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
