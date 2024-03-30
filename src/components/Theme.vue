<template>
    <div class="container-alll-modal" id="modal">
        <div class="popup">
            <div class="img">
            </div>
            <div class="container-text">
                
                <h3>Selecciona un color</h3>
                <!-- 
                <p>
                    Solo da click en las imagenes!  
                </p>
                <div class="chibis">
                    <div class="color">
                        <button id="color-verde" onclick="colorSeleccionado('Monika')" ><img src="https://www.dokidokispanish.club/assets/chibis/m_sticker_1.png"></button>
                    </div>
                    <div class="color">
                        <button id="color-rosa" onclick="colorSeleccionado('Natsuki')" ><img src="https://www.dokidokispanish.club/assets/chibis/n_sticker_1.png"></button>
                    </div>
                    <div class="color">
                        <button id="color-azul" onclick="colorSeleccionado('Sayori')" ><img src="https://www.dokidokispanish.club/assets/chibis/s_sticker_1.png"></button>
                    </div>
                    <div class="color">
                        <button id="color-morado" onclick="colorSeleccionado('Yuri')" ><img src="https://www.dokidokispanish.club/assets/chibis/y_sticker_1.png"></button>
                    </div>
                    
                </div>
                -->
                <div class="modo-oscuro">
                    <p>
                    Selecciona el color de fondo 
                    <br>
                    <label class="switch-modos">
                        <input type="checkbox" id="swicth-mode" >
                        <span class="slider1"></span>
                    </label>
                </p>
                </div>
            </div>
            <a href="#" class="btn-close-popup">X</a>
        </div>
    </div>
</template>

<script setup>
const preferedColorScheme =  'light';
const btnSwitch = document.querySelector('#swicth-mode');
//const btndescargar = document.querySelector("#Codigo_descarga");

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

}

btnSwitch.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);
</script>

<style scoped>

</style>