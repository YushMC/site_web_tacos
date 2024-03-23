<template>
    <main>
        <section>
            <div class="blur_section">
                <div class="content_image">
                    <img src="../assets/img/Default_images_of_mexican_tacos_2.jpg" alt="Tacos Toño - Tacos">
                    <div class="text_content">
                        <h2 class="titulos">Tacos</h2>
                    </div>
                </div>
                

                <div class="content_section" data-aos="fade-down" data-aos-duration="1000">
                    <h2 class="titulos enfasis titulo_seccion">Tacos</h2>
                    <h3 class="subtitulo">¿Qué incluye?</h3> 
                    <ul>
                        <li>Cebolla</li>
                        <li>Cilantro</li>
                    </ul>
                    <h4>Carnes</h4>
                    <ul>
                        <li>Tripa</li>
                        <li>Cabeza</li>
                        <li>Masiza</li>
                        <li>Pastor</li>
                        <li>Chorizo</li>
                    </ul>
                    <swiper-container >
                        <swiper
                        :pagination="true"
                        :modules="modules"
                        :autoplay="true"
                        :centered-slides="true"
                        :mousewheel="true"
                        :keyboard="true"
                        :slidesPerView="3"
                        :spaceBetween="23"
                        :loop="true"
                         >
                            <swiper-slide>
                                <router-link to="/tacos" ><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt="Tacos Imagen"></router-link>
                            </swiper-slide>
                            <swiper-slide >
                                <router-link to="/tacos" ><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt="Tacos Imagen"></router-link>
                            </swiper-slide>
                            <swiper-slide >
                                <router-link to="/tacos" ><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt="Tacos Imagen"></router-link>
                            </swiper-slide>
                            <swiper-slide >    
                                <router-link to="/tacos"><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt="Tacos Imagen"></router-link>
                            </swiper-slide>
                            <swiper-slide >
                                <router-link to="/tacos"><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt="Tacos Imagen"></router-link>
                            </swiper-slide>   
                            <swiper-slide >
                                <router-link to="/tacos"><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt="Tacos Imagen"></router-link>
                            </swiper-slide>
                            <swiper-slide >
                                <router-link to="/tacos" ><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt="Tacos Imagen"></router-link>
                            </swiper-slide>

                        </swiper>
                    </swiper-container>
                    <h4>
                        Precio: $7.00 MXN
                    </h4>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    document.title = "Tacos Toño - Tacos";
    
    import 'swiper/swiper-bundle.css';
    import { RouterLink} from 'vue-router';
    import { Pagination,Autoplay } from 'swiper/modules';
    import { Swiper, SwiperSlide} from 'swiper/vue';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    

    


const modules =  [Pagination, Autoplay];
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
h4{
    margin:2% 0%;
    color:var(--enfasis);
    font-weight: 700;
    font-size: 1.6em;
}
ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
li{
    padding: 2%;
    margin: 2%;
}
@media screen and (max-width:600px) {
    .swiper{
        width:20em;
        height: 7em;
    }
    .blur_section{
        padding-top: 100px;
    }
}
</style>