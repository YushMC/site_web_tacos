<template>
    
</template>

<script setup>
import {ref} from 'vue';
const nombre = ref("");

</script>

<style scoped>
#ctn-icon-search{
    position: absolute;
    right: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 90;
}
#ctn-icon-search i{
    cursor: pointer;
    transition: all 300ms;
}
#ctn-icon-search i:hover{
    color: rgba(155,155,155,0.5);
}

#ctn-bars-search{
    position: fixed;
    top: -100px;
    width: 100%;
    background: rgba(58, 58, 58, 0.3);
    backdrop-filter: blur(0.07rem);
    padding: 20px;
    z-index: 90;
    transition: all 300ms linear;
}
#ctn-bars-search input{
    display: block;
    width: 1200px;
    margin: auto;
    padding: 10px;
    font-size: 18px;
    outline: 0;
    background: rgba(248, 248, 248, 0.6);
    backdrop-filter: blur(0.07rem);
    border-style: none;
}
#datos_buscador{
    position: fixed;
    top: 162px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 90;
    width: 1200px;
    background: rgba(248, 248, 248, 0.4);
    backdrop-filter: blur(0.07rem);
    overflow: hidden;
    display: none;
}

#datos_buscador li a{
    display: block;
    width: 1200px;
    padding: 12px 20px;
    color: black;

}
#datos_buscador li a:hover{
    background-color: #f3f3f3c2;
}
#datos_buscador li a i{
    margin-right: 10px;
    color:#555555;
}
#cover-ctn-search{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(0.07rem);
    z-index: 80;
    display: none;
    transition: all 300ms linear;
}
@media screen and (max-width: 1200px){
    #ctn-icon-search{
        position: absolute;
        right: 25px;
        height: 100%;
        top: -10px;
        z-index: 90;
    }
    #ctn-bars-search input{
        width: 100%;
    }
    #datos_buscador{
        top:165px;
        width: 85%;
        
    }
}
@media screen and (max-width: 700px){
    #ctn-icon-search{
        position: absolute;
        right: 25px;
        height: 100%;
        top: -25px;
        z-index: 90;
    }
    #ctn-bars-search input{
        width: 100%;
    }
    #datos_buscador{
        top:162px;
        width: 75%;
        
    }
}
@media screen and (max-width: 700px){
    #ctn-icon-search{
        position: absolute;
        right: 25px;
        height: 100%;
        top: -25px;
        z-index: 90;
    }
    #ctn-bars-search{
        z-index: 400;
    }
    #ctn-bars-search input{
        width: 100%;
    }
    #datos_buscador{
        width: 85%;
        z-index: 400;
    }
}
</style>