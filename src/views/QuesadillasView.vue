<template>
    <main>
        <section>
            <div class="blur_section">
                <div class="content_image">
                    <img :src="imgenPortada" :alt="altImagen">
                    <div class="text_content">
                        <h2 class="titulos">{{datosProductos.name}}</h2>
                    </div>
                </div>
                

                <div class="content_section" data-aos="fade-down" data-aos-duration="1000">
                    <h2 class="titulos enfasis titulo_seccion">{{datosProductos.name}}</h2>
                    <p class="parrafos button">
                        {{ datosProductos.description }}
                    </p>
                    <h3 class="subtitulo">¿Qué incluye?</h3> 
                    <ul>
                        <li class="button">Cilantro</li>
                        <li class="button">Cebolla</li>
                        <li class="button">Cebolla Asada</li>
                        <li class="button">Limón</li>
                    </ul>
                    <h4 style="color: black; font-size:1.5em;text-transform:none;">Carnes</h4>
                    <ul>
                        <li class="button">Tripa</li>
                        <li class="button">Cabeza</li>
                        <li class="button">Masiza</li>
                        <li class="button">Pastor</li>
                        <li class="button">Chorizo</li>
                    </ul>
                    <img :src="imgenPortada" :alt="altImagen">
                    <h4 >
                        Precio: {{datosProductos.price}}
                    </h4>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    document.title = "Tacos Toño - Tacos";
    import datos from "./../products.json";
    const datosProductos = datos[2];


    const imgenPortada = datosProductos.img;
    const altImagen = datosProductos.name;

</script>

<style scoped>
.content_image{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    
}
.content_image img{
    width: 100%;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
}
.text_content{
    position: absolute;
    width: 100%;
    background-color: var(--enfasis_transparente);
    bottom:0%;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
    color: #fff;
}
.swiper{
    border-radius: 10px !important;
    margin: auto;
    width: 58em;
    height: 300px;
    padding: 2%;
}
.swiper-slide img{
    width: 100%;
    height: 90%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    aspect-ratio: 16/9 !important;
}
.blur_section{
    padding-top: 100px;
    padding-bottom: 5%;
}
.content_section{
    background: rgba(255,255,255,0.7);
    border-radius: 20px;
    border: 4px solid var(--enfasis_transparente);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
.parrafos{
    width: 50%;
    margin: 1% auto;
    padding: 1%;
}
h4{
    margin:1% 0%;
    font-weight: 700;
    font-size: 2em;
    color: #0b8600;
    text-transform: uppercase;
}
ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
}
li{
    padding: 1%;
    margin: 1%;
}
.content_section img{
    margin-top: 2%;
    width: 50%;
    border-radius: 10px;
    box-shadow: 0px 5px 10px black;
}
.button{
    background-color: var(--enfasis_transparente);
    border-radius: 10px
}
@media screen and (max-width:1000px) {
    .swiper{
        width:20em;
        height: 7em;
    }
    .blur_section{
        padding-top: 100px;
    }
}
</style>