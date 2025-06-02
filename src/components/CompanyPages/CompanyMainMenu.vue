<script setup>
import {useRouter} from 'vue-router'
import IndividualCarCard from "../IndividualCarCard/IndividualCarCard.vue"
import { useCompanyStatus } from '../../stores/companyStatus';
const router = useRouter();
const company = useCompanyStatus();
function navigateToAddNewVehicle(){
    router.push("/addNewVehicle");
}
console.log(company.companyVehicles);
</script>
<template>
    <div v-for="vehicle in company.companyVehicles">
        <IndividualCarCard :plateNumber="vehicle.plate_number"/>
    </div>
<div class="fixed bottom-4 right-4 mb-4 mr-4">
    <button class="px-3 py-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 rounded-md text-white font-bold" @click="navigateToAddNewVehicle">Adauga Masina <i class="bi bi-plus-circle-fill"></i></button>
</div>
</template>