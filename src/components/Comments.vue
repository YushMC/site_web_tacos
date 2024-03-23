<template>
    <section class="section_parallax">
        <div class="blur_section">
            <div class="content_section" data-aos="fade-down" data-aos-duration="1000">
                <div class="comentarios">
                    <h2 class="titulos">Comentarios y Opiniones</h2>
                    <div class="fb-comments" data-href="https://tacostono.000webhostapp.com/inicio" data-width="100%" data-order-by="reverse_time" data-numposts="5"></div>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script setup>

</script>

<style scoped>
.comentarios{
    width: 80%;
    position: relative;
    background-color: rgba(255, 255, 255, 0.781);
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 20px;
    padding: 2%;
    box-shadow: 10px 5px 20px 5px rgba(7, 7, 7, 0.541);
}
@media screen and (max-width:600px) {
    .comentarios{
        width: 100%;
    }
}
</style>