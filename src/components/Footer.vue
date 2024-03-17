<template>
    <footer>
        <div class="content_footer">
            <section class="sections_footer">
                <div class="section_footer">
                    <img src="../assets/431758661_122101438940242016_2417711652323493930_n.ico" alt="">
                    <p class="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, obcaecati tempore natus perferendis iure blanditiis modi magnam nostrum ab culpa?</p>
                </div>
                <div class="section_footer">
                    <h3 class="subitutulo"><i class="fa-solid fa-location-dot"></i> Ubicación</h3>
                    <p class="parrafo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, blanditiis!</p>
                </div>
            </section>
            <hr>
            <div>
                <h1 class="titulos">Tacos Toño @2024</h1>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
    footer{
        width: 100%;
        display: flex;
        overflow: hidden;
        background: var(--enfasis_transparente);
        backdrop-filter: blur(0.2rem);
        user-select: none;
    }
    .content_footer{
        width: 80%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: auto;
        padding: 1% 0%;
        color: #fff;
        justify-content: center;
        align-items: center;
    }
    .content_footer .sections_footer{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .section_footer{
        width: 100%;
        display: flex;
        flex-direction: column;
        
    }
    .section_footer:last-child{
        text-align:center;
    }
    .section_footer:first-child{
        justify-content: start;
        align-items: start;
    }
    .content_footer .section_footer img{
        width: 80px;
    }
    hr{
        width: 100%;
        background-color: #ffffff3a;
        height: 3px;
        border: none;
        border-radius: 100px !important;
        margin: 1% 0%;
    }
    .titulos{
        text-align: center;
    }
</style>