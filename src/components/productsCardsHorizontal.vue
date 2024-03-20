<template>
    <div class="horizontal_cards_content">
        <div class="horizontal_card" data-aos="fade-down" data-aos-duration="1000" v-for="todo in products" :key="todo.id" >
            <router-link :to="todo.link">
                <div class="img_content">
                    <img :src="todo.img" :alt="todo.name + ' Imagen'">
                </div>
                <div class="info_content">
                    <h4 class="titulos">{{todo.name}}</h4>
                    <p class="parrafo">{{todo.description}}</p>
                    <hr>
                    <div class="content_ingredient_card" v-if=" todo.name != 'Hamburguesas' ">
                        <span>{{ todo.ingredient.carne_1}}</span>
                        <span>{{ todo.ingredient.carne_2}}</span>
                        <span>{{ todo.ingredient.carne_3}}</span>
                        <span>{{ todo.ingredient.carne_4}}</span>
                        <span>{{ todo.ingredient.carne_5}}</span>
                    </div>
                    <h5>{{todo.price}}</h5>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'; 
import { ref } from 'vue';
let id=0;
const products = ref([ 
    //arreglo de objetos (id y text)
    {
        id:id++,
        name:'Tacos',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda accusamus. Earum architecto eaque esse! Blanditiis, rem minus. Ipsam facilis nostrum tempora similique maiores nihil dolorum quasi ratione, ad inventore?",
        ingredient:{
            id: id,
            carne_1: "Tripa",
            carne_2: "Macisa",
            carne_3: "Cabeza",
            carne_4: "Pastor",
            carne_5: "Chorizo"
        },
        price:"$7 MXN c/u y ordenes apartir de $50 MXN",
        img:"https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg?w=1920&h=1280&fl=progressive&q=50&fm=jpg",
        link:"/tacos"
    },
    {
    id:id++,
        name:'Tortas',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda accusamus. Earum architecto eaque esse! Blanditiis, rem minus. Ipsam facilis nostrum tempora similique maiores nihil dolorum quasi ratione, ad inventore?",
        ingredient:{
            id: id,
            carne_1: "Tripa",
            carne_2: "Macisa",
            carne_3: "Cabeza",
            carne_4: "Pastor",
            carne_5: "Chorizo"
        },
        price:"$30 MXN",
        img:"https://www.maricruzavalos.com/wp-content/uploads/2023/04/torta-de-chorizo-recipe-500x375.jpg",
        link:"/tortas"
    },
    {
    id:id++,
        name:'Quesadillas',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda accusamus. Earum architecto eaque esse! Blanditiis, rem minus. Ipsam facilis nostrum tempora similique maiores nihil dolorum quasi ratione, ad inventore?",
        ingredient:{
            id: id,
            carne_1: "Tripa",
            carne_2: "Macisa",
            carne_3: "Cabeza",
            carne_4: "Pastor",
            carne_5: "Chorizo"
        },
        price:"$15 MXN c/u",
        img:"https://i0.wp.com/lopezdoriga.com/wp-content/uploads/2017/08/gringaalpastor-e1503699292532.jpg",
        link:"/quesadillas"
    },
    {
    id:id++,
        name:'Hamburguesas',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda accusamus. Earum architecto eaque esse! Blanditiis, rem minus. Ipsam facilis nostrum tempora similique maiores nihil dolorum quasi ratione, ad inventore?",
        price:"$30 mxn",
        img:"https://images.aws.nestle.recipes/resized/8689e8d974203563ddcc9bbff91323c2_MG_CHORIZOBURGER_Main-880x660_1080_850.png",
        link:"/hamburguesas"
    },
    ]);


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