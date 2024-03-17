<template>
    <div class="container-buttons-float">
        <input type="checkbox" name="" id="btn-mas" style="cursor: pointer;">
       <div class="funciones">
            <a href="https://www.facebook.com" title="Página Oficial en Facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" title="Chat de Whatsapp" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="#" title="Télefono" target="_blank"><i class="fa-solid fa-phone"></i></a>
            <a href="#" title="Correo Electrónico" target="_blank"><i class="fa-solid fa-envelope"></i></a>
        </div>
       <div class="btn-mas" style="cursor: pointer;">
           <label for="btn-mas" title="Mostrar/Ocultar"><i class="fa-solid fa-plus" style="cursor: pointer; margin-top:25%;"></i></label>
       </div>
   </div>
</template>

<script setup>

</script>

<style scoped>
#btn-mas{
    display: none;
    transition: all 500ms linear;
    cursor: pointer;
    color: #fff;
}
.container-buttons-float{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    
}
#btn-mas:checked~ , label{
    opacity: 0;
    visibility: hidden;
}
.funciones a, .funciones a i{
    display: block;
    text-decoration: none;
    background: var(--enfasis);
    color: #fff;
    width: 55px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px 1px 10px  rgba(0, 0, 0, 0.5);
    transition: all 500ms ease;
    cursor: pointer;
}
.funciones a:hover{
    background: var(--enfasis);
    color: var(--enfasis);
    cursor: pointer;
}
.funciones a{
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
}
.funciones label{
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
}
#btn-mas:checked~ .funciones a{
    margin-bottom: 10px;
    opacity: 1;
    visibility: visible;
    transition: all 500ms linear;
    cursor: pointer;
}
#btn-mas:checked~ .funciones label{
    opacity: 1;
    visibility: visible;
}
.icon-mas2{
    cursor: pointer;
    background: var(--enfasis);
    font-size: 23px;
}
#btn-mas:checked~ .btn-mas i{
    transform: rotate(137deg);
    font-size: 25px;
    transition: all 500ms ease;
    cursor: pointer;
}
.btn-mas{
    display: block;
    text-decoration: none;
    background: var(--enfasis);
    color: #fff;
    width: 55px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px 1px 10px  rgba(0, 0, 0, 8);
    transition: all 500ms linear;
    font-size: 25px;
    cursor: pointer;
}

@media screen and (max-width: 500px){
    .container-buttons-float{
        position: fixed;
        bottom: 15px;
        right: 10px;
        z-index: 100;
        
    }
}

</style>