<script setup>
import siglaDenicar from '../../assets/sigla_denicar.jpg';
import {useRouter} from 'vue-router'
import {ref} from 'vue'
const router = useRouter();
function handleDriverButtonClick(){
 router.push('/driverSignIn');
}
const adminButtonVisibility=ref(true);
function changeAdminVisibility(){
  adminButtonVisibility.value=!adminButtonVisibility.value;
}

</script>
<template>
    <div>
      <div class="flex justify-end relative">
      <button @click="changeAdminVisibility" id="toggleMenuButton" class="mt-3 mr-2">
          <i class="bi bi-three-dots-vertical bg-gray-200 rounded-full p-2 text-xl active:bg-gray-300"></i>
      </button>
      <div id="hiddenButton" class="absolute top-12 right-2">
          <button v-if="adminButtonVisibility" class="bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 active:bg-orange-600">
            Admin
          </button>
      </div>
      </div>
        <div class="flex flex-col items-center  h-screen">
        <div class="flex flex-col items-center justify-center mt-[20vh] md:mt-[10vh] lg:mt-[5vh]">
          <img class="size-11/12 md:size-9/12 lg:size-8/12" :src="siglaDenicar" alt="siglaDenicar"/>
        </div>
        <div class="mb-10 text-lg mt-[0vh] md:mt-[0vh] lg:mt[0vh]">
          CargoPal
        </div>
        <div class="flex flex-col justify-center ">
            <div class="text-left mb-2">Sunt:</div>
              <button @click=handleDriverButtonClick class="text-white font-semibold px-12 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-600 text-xl mb-5">Sofer</button>
              <button @click=handleCompanyButtonClick class="text-white font-semibold px-7 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-600 text-xl">Companie</button>
        </div>
    </div>
    </div>    
</template>