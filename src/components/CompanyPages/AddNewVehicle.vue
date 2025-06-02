<script setup>
import siglaDenicar from '../../assets/sigla_denicar.jpg';
import { ref } from 'vue';
import { useCompanyStatus } from '../../stores/companyStatus';
import {useRouter} from 'vue-router'
const router=useRouter();
const company = useCompanyStatus();
const weightCategory = {
    caddy: "Caddy",
    tier3: "3.5 T",
    tier7: "7.5 T",
    tier12: "12 T",
    tier18: "18 T",
    tier24: "24 T",
    tier27: "27 T",
}
const selectedWeightCategory = ref('');
const vehicleType={
    prelata:"prelata",
    boxVan:"box"
}
const selectedVehicleType=ref('');
const lift = ref(false);
const nrImatriculare = ref('')
const vehicleWeight=ref('');
const usableWeight=ref('');
const dimensions=ref({
    length: '',
    width:'',
    height:'',
})
async function createCar(){
    const vehicle = {
    company_name:company.currentCompany.company_name,
    plate_number: nrImatriculare.value,
    vehicle_type:selectedVehicleType.value,
    weight_category: selectedWeightCategory.value,
    car_weight:parseInt(vehicleWeight.value,10),
    usable_weight:parseInt(usableWeight.value,10),
    lift:Boolean(lift.value),
    length: parseInt(dimensions.value.length,10),
    width: parseInt(dimensions.value.width,10),
    height: parseInt(dimensions.value.height,10),
    }
    console.log(vehicle);
    await company.createVehicle(vehicle);
    router.push("/companyMainMenu")
}
</script>
<template>
    <div class="flex flex-col items-center  h-screen  mt-[6vh] ">
        <div class="flex flex-col items-center">
          <img class="size-11/12 md:size-10/12 lg:size-8/12" :src="siglaDenicar" alt="">
        </div>
        <div class="mb-7">
          CargoPal
        </div>
       <div class="space-y-7 mt-4">
        <div>
          <input class="focus:bg-zinc-200 focus:outline-none px-4 py-3 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96 w-3xs" type="text" placeholder="Numar de inmatriculare" v-model="nrImatriculare">
        </div>
        <div class="w-3xs">
            <select v-model="selectedVehicleType" class="select select-lg select-ghost focus:outline-none focus:bg-zinc-200 bg-zinc-100 rounded-md text-md">
                <option disabled value="">Alege tipul masinii</option>
                <option :value="vehicleType.prelata">{{ vehicleType.prelata }}</option>
                <option :value="vehicleType.boxVan">{{ vehicleType.boxVan }}</option>
            </select>
        </div>
        <div >
            <select v-model="selectedWeightCategory" class="select select-lg select-ghost focus:outline-none focus:bg-zinc-200 bg-zinc-100 rounded-md text-md">
                <option disabled value=""> greutatea masinii</option>
                <option :value="weightCategory.caddy">{{ weightCategory.caddy }}</option>
                <option :value="weightCategory.tier3">{{ weightCategory.tier3 }}</option>
                <option :value="weightCategory.tier7">{{ weightCategory.tier7 }}</option>
                <option :value="weightCategory.tier12">{{ weightCategory.tier12 }}</option>
                <option :value="weightCategory.tier18">{{ weightCategory.tier18 }}</option>
                <option :value="weightCategory.tier24">{{ weightCategory.tier24 }}</option>
                <option :value="weightCategory.tier27">{{ weightCategory.tier27 }}</option>
            </select>
        </div>
        <div >
          <input v-model="vehicleWeight" class="w-3xs focus:bg-zinc-200 focus:outline-none px-4 py-3 rounded-lg bg-zinc-100 placeholder-stone-500" type="text" placeholder="Greutatea masinii">
        </div>
        <div>
          <input v-model="usableWeight" class=" w-3xs focus:bg-zinc-200 focus:outline-none px-4 py-3 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96" type="text" placeholder="Greutatea utila a masinii">
        </div>
        <div class="space-y-2">
            <div>
                <span>Dimensiuni</span>
            </div>
            <div class="flex flex-row space-x-3">
                <input v-model="dimensions.length" class="focus:bg-zinc-200 focus:outline-none px-4 py-3 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96 w-18" type="text" placeholder="L">            
                <input v-model="dimensions.width" class="focus:bg-zinc-200 focus:outline-none px-4 py-3 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96 w-18" type="text" placeholder="l">       
                <input v-model="dimensions.height" class="focus:bg-zinc-200 focus:outline-none px-4 py-3 rounded-lg bg-zinc-100 placeholder-stone-500  md:w-80 lg:w-96 w-18" type="text" placeholder="H">         
            </div>
        </div>
        <div class="flex justify-center space-x-3">
            <span class="text-lg font-semibold text-orange-500">Lift</span>
            <input type="checkbox" :checked="false" :value="true" v-model="lift" class="checkbox checkbox-success" />
        </div>
        </div>
          <button @click="createCar" class="text-white font-semibold px-7 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 rounded-lg text-xl mt-6">Creeaza Masina</button>
    </div>
</template>