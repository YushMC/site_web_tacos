<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header >
        <div class="content_header" data-aos="fade-down" data-aos-duration="1000">
            <h1 class="titulos"><router-link to="/" style="color: #fff;">Tacos Toño</router-link></h1>
            <nav>
                <ul>
                    <!-- <li><a href="">Inicio</a></li> -->
                    <li><router-link to="/products">Productos</router-link></li>
                    <li><router-link to="/about">+ Información</router-link></li>
                    <li><a href="#modal">Color</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
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
</style>