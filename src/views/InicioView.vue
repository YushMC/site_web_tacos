<template>
        <div class="portada">
        <div class="difuminado_fondo">
            <div class="contenedor_portada"  data-aos="fade-down" data-aos-duration="1000">
                <div class="contenedor_portada_secciones">
                    <h2 class="titulos">¡Sabor <span style="color:#26f141;">auténtico</span> en cada bocado!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates in vero molestias sint voluptatibus. Commodi eligendi exercitationem earum ipsam aut?</p>
                </div>
                <div class="contenedor_portada_secciones " >
                    <img src="../assets/img/2022_Pollo_Regio_August00208-Edit-1.png" alt="imagen de portada tacos" >
                </div>
            </div>
        </div>
        </div>

        <main>
        <section class="section_parallax">
            <div class="blur_section">
                <div class="content_section" data-aos="fade-down" data-aos-duration="1000">
                    <h1 class="titulos enfasis titulo_seccion">Los mejores tacos de la region</h1>
                    <h3 class="subitulos">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, voluptates.</h3>
                    <div class="horizontal_cards_content">
                        <div class="horizontal_card" data-aos="fade-right" data-aos-duration="1000" >
                            <div class="img_content">
                                <img src="../assets/img/2022_Pollo_Regio_August00208-Edit-1.png">
                            </div>
                            <div class="info_content">
                                <h4 class="titulos">Lorem, ipsum dolor.</h4>
                                <p class="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda accusamus. Earum architecto eaque esse! Blanditiis, rem minus. Ipsam facilis nostrum tempora similique maiores nihil dolorum quasi ratione, ad inventore?</p>
                            </div>
                        </div>
                        <div class="horizontal_card" data-aos="fade-left" data-aos-duration="1000">
                            <div class="img_content">
                                <img src="../assets/img/2022_Pollo_Regio_August00208-Edit-1.png">
                            </div>
                            <div class="info_content">
                                <h4 class="titulos">Lorem, ipsum dolor.</h4>
                                <p class="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda accusamus. Earum architecto eaque esse! Blanditiis, rem minus. Ipsam facilis nostrum tempora similique maiores nihil dolorum quasi ratione, ad inventore?</p>
                            </div>
                        </div>
                        <div class="horizontal_card" data-aos="fade-right" data-aos-duration="1000" >
                            <div class="img_content">
                                <img src="../assets/img/2022_Pollo_Regio_August00208-Edit-1.png">
                            </div>
                            <div class="info_content">
                                <h4 class="titulos">Lorem, ipsum dolor.</h4>
                                <p class="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda accusamus. Earum architecto eaque esse! Blanditiis, rem minus. Ipsam facilis nostrum tempora similique maiores nihil dolorum quasi ratione, ad inventore?</p>
                            </div>
                        </div>
                        <div class="horizontal_card" data-aos="fade-left" data-aos-duration="1000">
                            <div class="img_content">
                                <img src="../assets/img/2022_Pollo_Regio_August00208-Edit-1.png">
                            </div>
                            <div class="info_content">
                                <h4 class="titulos">Lorem, ipsum dolor.</h4>
                                <p class="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda accusamus. Earum architecto eaque esse! Blanditiis, rem minus. Ipsam facilis nostrum tempora similique maiores nihil dolorum quasi ratione, ad inventore?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>

        </section>
        </main>
</template>

<script setup>
    document.title = "Tacos Toño - Inicio";
</script>
    
<style scoped>

.portada{
    width: 100%;
    height: 700px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url(../assets/img/Default_images_of_mexican_tacos_2.jpg);
    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.5);
}
.difuminado_fondo{
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.5rem);
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
.contenedor_portada_secciones img{
    width: 100%;
    filter: drop-shadow(5px 5px 15px black);
    transition: all 0.8s linear;
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
    font-weight: 400;
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