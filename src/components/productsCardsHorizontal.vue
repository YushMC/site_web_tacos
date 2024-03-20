<template>
    <div class="horizontal_cards_content">
        <div class="horizontal_card" data-aos="fade-down" data-aos-duration="1000" v-for="todo in datosProductos" :key="todo.id" >
            <router-link :to="todo.link">
                <div class="img_content">
                    <img :src="todo.img" :alt="todo.name + ' Imagen'">
                </div>
                <div class="info_content">
                    <h4 class="titulos">{{todo.name}}</h4>
                    <p class="parrafo">{{todo.description}}</p>
                    <hr>
                    <div class="content_ingredient_card" v-if=" todo.name != 'Hamburguesas' ">
                        <span>{{ todo.carne_1}}</span>
                        <span>{{ todo.carne_2}}</span>
                        <span>{{ todo.carne_3}}</span>
                        <span>{{ todo.carne_4}}</span>
                        <span>{{ todo.carne_5}}</span>
                    </div>
                    <h5>{{todo.price}}</h5>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import datos from "../products.json";
import { RouterLink } from 'vue-router'; 
import { ref, computed  } from 'vue';

const datosProductos = datos;

</script>

<style  scoped>
a{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2%;
    padding: 2%;
}
a .titulos{
    color:#000;
}
img{
    border-radius: 10px;
}
.content_ingredient_card{
    width: 100%;
    display: flex;
    gap:1%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
span{
    background: var(--enfasis_transparente);
    padding: 2%;
    border-radius: 10px;
    margin: 1% 0%;
    color: var(--text);
}
h5{
    margin-top: 2%;
    text-align: center;
    text-transform: uppercase;
    color: #0b8600;
    font-weight: 800;
    font-size: 1.2em;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.486);
}
hr{
    border: none;
    border-radius: 10px;
    height: 2px;
    background-color: var(--enfasis_transparente);
    margin: 2% 0%;
}
</style>