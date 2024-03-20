<template>
        <Portada></Portada>
        <main>
            <section class="section_parallax">
                <div class="blur_section">
                    <div class="content_section" data-aos="fade-down" data-aos-duration="1000">
                        <h1 class="titulos enfasis titulo_seccion">Los mejores tacos de la region</h1>
                        <h3 class="subitulos">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, voluptates.</h3>

                        <productsCardsHorizontal></productsCardsHorizontal>
                        
                    </div>
                </div>
            </section>
            <Commments></Commments>
        </main>
</template>

<script setup>
    import Portada from '../components/Portada.vue';
    import Commments from '../components/Comments.vue'
    import productsCardsHorizontal from '../components/productsCardsHorizontal.vue';
    document.title = "Tacos Toño - Inicio";
</script>
    
<style scoped>

</style>