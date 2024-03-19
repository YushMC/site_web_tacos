<template>
    <main>
        <section class="section_parallax">
            <div class="blur_section">
                <div class="content_section" data-aos="fade-down" data-aos-duration="1000">
                    <h2 class="titulos enfasis titulo_seccion">Todos nuestros tacos</h2>
                    <h3 class="subtitulo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, voluptatum?</h3>
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
                     >
                    <swiper-slide>
                        <router-link to="/tacos" ><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt=""></router-link>
                    </swiper-slide>
                    <swiper-slide >
                        <router-link to="/tacos" ><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt=""></router-link>
                    </swiper-slide>
                    <swiper-slide >
                        <router-link to="/tacos" ><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt=""></router-link>
                    </swiper-slide>
                    <swiper-slide >    
                        <router-link to="/tacos"><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt=""></router-link>
                    </swiper-slide>
                    <swiper-slide >
                        <router-link to="/tacos"><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt=""></router-link>
                    </swiper-slide>   
                    <swiper-slide >
                        <router-link to="/tacos"><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt=""></router-link>
                    </swiper-slide>
                    <swiper-slide >
                        <router-link to="/tacos" ><img src="https://images.ctfassets.net/n7hs0hadu6ro/654h2ZLwHdqCGdZ8I2spTq/c5443bf99ecd8c54a18422456fce46a2/exquisitos-tacos-de-carnitas.jpg" alt=""></router-link>
                    </swiper-slide>
                    
                </swiper>
                </swiper-container>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    document.title = "Tacos Toño - Productos";
    import 'swiper/swiper-bundle.css';
    import { RouterLink} from 'vue-router';
    import { Pagination,Autoplay } from 'swiper/modules';
    import { Swiper, SwiperSlide} from 'swiper/vue';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    

    


const modules =  [Pagination, Autoplay];
// Función para ir al inicio de la página


</script>

<style >

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