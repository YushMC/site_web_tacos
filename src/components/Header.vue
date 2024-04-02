<script setup>
import { RouterLink} from 'vue-router';
import { ref, computed, watchEffect } from 'vue';
import datos from "./../products.json";
const clase1Activa = ref(false);
const mostrarBuscador = ref(false);

const mostrarBarra = ()=>{
    mostrarBuscador.value = !mostrarBuscador.value;
    searchQuery.value='';
}
const toggleClase = () => {
    clase1Activa.value = !clase1Activa.value;
    if(mostrarBuscador.value!=false){
        mostrarBuscador.value = !mostrarBuscador.value;
        searchQuery.value='';
    }
    
};


const searchQuery = ref('');

/*
watchEffect(()=>{
    if(searchQuery.value=='') return;
});
*/
</script>

<template>
    <header :class="{ 'abajo_scroll' : mostrarBuscador}"  >
        <div class="content_header" data-aos="fade-down" data-aos-duration="1000">
            <h1 class="titulos"><router-link to="/" style="color: #fff;" title="Ir al inicio">Tacos Toño</router-link></h1>
            <nav ref="menu" :class="{ 'togleMenu' : clase1Activa}">
                <ul>
                    <li><router-link to="/" title="Ir al inicio"><i class="fa-solid fa-house"></i> Inicio</router-link></li>
                    <li @click="mostrarBarra"><i title="Buscador" class="fa-solid fa-magnifying-glass" style="cursor:pointer;"></i></li>
                </ul>
            </nav>
            <i title="Buscar" class="fa-solid fa-bars" style="color: #fff;font-size:1.5em;" @click="toggleClase"></i>
        </div>
    </header>
    <div class="search" v-if="mostrarBuscador" :class="{ 'abajo_scroll' : mostrarBuscador}" data-aos="fade-down" data-aos-duration="1000">
        <div class="content_search">
            <input type="text" v-model="searchQuery" placeholder="¿Qué deseas buscar?">
            <div class="resultados" v-if="searchQuery.length">
                <router-link v-for="item in datos" :key="item.id" :to="item.link" class="resultado" @click="mostrarBarra"><i title="Buscador" class="fa-solid fa-magnifying-glass" style="cursor:pointer;"></i> {{item.name}}</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.search{
    position: fixed;
    z-index: 80;
    top: 80px;
    width: 100%;
    display: flex;
    padding: 2%;
    transition: all 0.5s linear;
}
.content_search{
    position: relative;
    width: 80%;
    margin: auto;
    transition: all 0.5s linear;
}
.content_search input{
    width: 100%;
    height: 40px;
}
.resultados{
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
}
.resultado{
    background-color: #f3f3f3af;
    text-transform: uppercase;
    padding: 2% 1%;
    color: black !important;
}
.resultado:hover{
    background-color: #f3f3f3;
}
header{
    display: flex;
    margin: auto;
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    color: #ebebeb;
    transition: all 0.5s linear;
}
.abajo_scroll{
    transition: all 0.5s linear;
    backdrop-filter: blur(0.2rem);
    background-color: var(--color_header);
    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.5);
}
.abajo_scroll nav ul li a{
    text-decoration: none;
    font-family: "Protest Riot", sans-serif;
    font-weight: 400;
    font-style: normal;
    transition: all 0.5s linear;
}
.content_header{
    margin: auto;
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    user-select: none;
    text-transform: uppercase;
}
nav ul{
    margin: 0;
    display: flex;
    list-style: none;
    white-space:nowrap;
    align-items: center;
    gap:20px;
}
nav ul li{
    padding: 5px 10px;
    border-radius: 10px;
    transition: all 0.5s linear;
    
}
nav ul li:hover{
    background-color: #000;
}
.selected{
    background-color: #000;
}
nav ul li a{
    color: #f3f3f3;
    text-decoration: none;
    font-family: "Protest Riot", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1em;
    text-shadow: 2px 5px 10px black;
}
nav ul li:hover a{
    color: #fff;
    
}
.content_header > i{
    display: none;
}
@media screen and (max-width: 600px) {
    header{
        background-color: var(--color_header);
    }
    .content_header > i{
        display: block;
        cursor: pointer;
    }
    .abajo_scroll{
        box-shadow:none;
    }
    .content_header{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40%;
        transition: all 0.3s linear;
    }
    nav{
        display: none;
        width: 100%;
        position: absolute;
        top:80px;
        background-color: var(--color_header);
        backdrop-filter: blur(0.25rem);
        transition: all 0.3s linear;
        padding-bottom: 2%;
    }
    .search{
        top: 126px;
    }
}
.togleMenu{
    transition: all 0.3s linear;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>