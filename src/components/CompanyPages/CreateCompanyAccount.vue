<script setup>
import siglaDenicar from '../../assets/sigla_denicar.jpg';
import {ref} from 'vue';
import { useCompanyStatus } from '../../stores/companyStatus';
import {useRouter} from 'vue-router'
const router = useRouter();
const companyName=ref('');
const email=ref('');
const password=ref('');
const errorVisibility = ref(false);
const companyStatus = useCompanyStatus();
async function createAccount(){
  if(email.value!=='' && password.value!=='' && companyName.value!=='')
  {await companyStatus.createCompany(companyName.value,email.value,password.value);
    if(Object.keys(companyStatus.currentCompany).length==0 &&companyStatus.currentCompany.constructor==Object){errorVisibility.value=true;}
    else errorVisibility.value=false;
  }
  router.push("/companyMainMenu")
}
function navigateToSignIn(){
  router.push("/companySignIn");
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
        <div class="flex justify-center">
          <input v-model="companyName" class=" focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500 md:w-80 lg:w-96" type="text" placeholder="Numele companiei">
        </div>
        <div>
          <input v-model="email" class="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96" type="text" placeholder="Email">
        </div>
        <div>
          <input v-model="password" class="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96" type="text" placeholder="Parola">
        </div>
        </div>
          <button @click="createAccount" class="text-white font-semibold px-7 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 rounded-lg text-xl mt-7">Activeaza</button>
        <div class="mt-3" v-if="errorVisibility">
          Compania deja exista
        </div>
          <div class="mt-4">
            <a @click="navigateToSignIn" class="font-semibold text-orange-600 hover:text-orange-600">Ai deja cont? Logheaza-te</a>
          </div>
        </div>
    
</template>