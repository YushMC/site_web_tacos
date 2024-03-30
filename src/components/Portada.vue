<template>
    <div class="portada">
        <div class="difuminado_fondo">
            <div class="contenedor_portada"  data-aos="fade-down" data-aos-duration="1000">
                <div class="contenedor_portada_secciones">
                    <div>
                        <h2 class="titulos">¡Sabor <span style="color:#26f141;">auténtico</span> en cada bocado!</h2>
                        <p>¡Descubre el auténtico sabor de México en nuestra taquería! Deléitate con una explosión de sabores tradicionales en cada platillo.<br><br> <span style="color: #fec067;font-size:1.42em; text-align:justify;">¡Tu viaje culinario comienza aquí!</span></p>
                    </div>
                    
                </div>
                <div class="contenedor_portada_secciones " >
                    <img src="../../public/icono.ico" alt="Imagen de portada tacos" >
                </div>
            </div>
        </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
.portada{
    width: 100%;
    height: 700px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url(../../public/assets/platillos/tacos.webp);
    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.5);
}
.difuminado_fondo{
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.15rem);
    display: flex;
    justify-content: center;
    align-items: center;
}
.contenedor_portada{
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:2%;
    width: 80%;
    margin:  auto;
    text-shadow: 2px 5px 10px black;
    color: #fff;

}

.contenedor_portada_secciones{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    
}
.contenedor_portada_secciones div{
    padding: 2%;
    transition: all 0.3s linear;
    border-radius: 10px;
}
.contenedor_portada_secciones:first-child:hover div{
    transition: all 0.3s linear;
    background-color: rgba(128, 128, 128, 0.5);
}
.contenedor_portada_secciones img{
    border-radius: 100%;
    width: 50%;
    filter: drop-shadow(5px 5px 15px black);
    transition: all 0.8s linear;
    margin: auto;
}
.contenedor_portada_secciones img:hover{
    transform: scale(1.15);
    filter: drop-shadow(5px 10px 15px black);
}
.contenedor_portada_secciones h2{
    text-transform: uppercase;
    font-size: 3.5em;
    font-weight: 700;
}
.contenedor_portada_secciones p{
    width: 70%;
    list-style: 1.5;
    text-align: left;
    font-weight: 600;
}
@media screen and (max-width:600px) {
    .contenedor_portada_secciones:nth-child(2){
        display: none;
    }
    .contenedor_portada_secciones{
        text-align: center;
    }
    .contenedor_portada{
        gap:0%;
        display: flex;
    }
    .content_section{
        text-align: center;
    }
}
</style>