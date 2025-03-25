<script setup>
import siglaDenicar from '../../assets/sigla_denicar.jpg';
import {ref} from 'vue';
const email=ref('');
const password=ref('');
function authenticate(){
}
</script>
<template>
    <div class="flex flex-col items-center  h-screen  mt-[14vh] md:mt-[10vh] lg:mt-[5vh]">
        <div class="flex flex-col items-center justify-center">
          <img class="size-11/12 md:size-10/12 lg:size-8/12" :src="siglaDenicar" alt="">
        </div>
        <div class="mb-10">
          CargoPal
        </div>
       <div class="space-y-7">
        <div>
          <input v-model="email" class="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96" type="text" placeholder="Email">
        </div>
        <div>
          <input v-model="password" class="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96" type="text" placeholder="Parola">
        </div>
        </div>
          <button @click="authenticate" class="text-white font-semibold px-7 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 rounded-lg text-xl mt-7">Activeaza</button>
    </div>
</template>