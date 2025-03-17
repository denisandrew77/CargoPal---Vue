<script setup>
import siglaDenicar from '../../assets/sigla_denicar.jpg';
import records from '../../data/data';
import { ref } from 'vue';
import {useRouter} from 'vue-router'
import curentData from '../../data/curenData';

const emit = defineEmits(['orderData']);
const router = useRouter();
const plateNumber=ref('');
const orderNumber=ref('');
function authenticate(){
 const foundRecord=records.find(record=>record.Plate===plateNumber.value&&record.Order_number===Number(orderNumber.value));
 if(foundRecord!==undefined){
    localStorage.setItem("order",JSON.stringify(foundRecord));
    router.push('/loading');
 }
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
        <div>
          <div class="flex justify-center">
            <input v-model="plateNumber" class=" focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500 md:w-80 lg:w-96" type="text" placeholder="Număr de înmatriculare">
          </div> 
          <div class="mb-10 w-48 md:w-80 lg:w-96 text-sm text-left">
              Introdu numărul de înmatriculare a masinii
          </div>
        </div>
        <div>
          <input v-model="orderNumber" class="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96" type="text" placeholder="Numărul comenzii">
          <div class="mb-10 w-48 md:w-80 lg:w-96 text-sm text-left">
            Introdu numărul comenzii
          </div>
        </div>
          <button @click="authenticate" class="text-white font-semibold px-7 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 rounded-lg text-xl">Activeaza</button>
    </div>
</template>