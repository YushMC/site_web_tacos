<template>
    <footer>
        <div class="content_footer">
            <section class="sections_footer">
                <div class="section_footer">
                    <img src="../../public/icono.ico" alt="">
                    <p class="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, obcaecati tempore natus perferendis iure blanditiis modi magnam nostrum ab culpa?</p>
                </div>
                <div class="section_footer">
                    <h3 class="subitulos"><i class="fa-solid fa-clock"></i> Horario</h3>
                    <p class="parrafo"><ul>
                        <li><b>Lunes a viernes:</b> 6:00 PM - 11:00 PM</li>
                        <li><b>Sábados y domingos:</b> 6:30 PM - 11:00 PM</li>
                    </ul></p>
                    
                    <h3 class="subitulos" style="margin-top: 2%;"><i class="fa-solid fa-location-dot"></i> Ubicación</h3>
                    <p class="parrafo">Calle 5 de mayo #112<br>Colonia Zona Centro<br>Valle de Santiago, Guanajuato</p>
                </div>
                <div class="section_footer">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.9314539956736!2d-101.1865340150556!3d20.39419180453759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c8d0b11ff134d%3A0x85017422fdab10a0!2s5%20de%20Mayo%20112%2C%20Centro%2C%2038400%20Valle%20de%20Santiago%2C%20Gto.!5e0!3m2!1ses!2smx!4v1710790353145!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        background: var(--color_header);
        backdrop-filter: blur(0.5rem);
        user-select: none;
    }
    .subitulos{
        color: var(--text);
    }
    .content_footer{
        width: 80%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: auto;
        padding: 1% 0%;
        justify-content: center;
        align-items: center;
    }
    .parrafo{
        color: var(--text);
    }
    .titulos{
        color: #fff;
    }
    .sections_footer{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2%;
    }
    .section_footer{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .section_footer:last-child{
        text-align:right;
        justify-content: end;
        align-items: end;
    }
    .section_footer:first-child{
        justify-content: center;
        align-items: center;
    } 
    ul{
        width: 90%;
        margin-top: -3%;
    }
    li{
        margin: 1%;
    }
    iframe{
        width: 100%;
        height: 200px;
        border-radius: 10px;
        outline: none;
    }
    .content_footer .section_footer img{
        width: 100px;
        border-radius: 100%;
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
    @media screen and (max-width: 600px) {
        .sections_footer{
            display: flex;
            flex-direction: column;
        }
        .sections_footer .section_footer:first-child{
            display: none;
        }
        .subitulos{
            text-align: center;
        }
    }
</style>