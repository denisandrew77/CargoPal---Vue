<script setup>
import { ref } from 'vue';
import { useCompanyStatus } from '../../stores/companyStatus';
const props = defineProps({
  plateNumber:String,
});
const companyStatus = useCompanyStatus();
const location = ref({
  city: "",
  country: "",
  postal_code: "",
});
async function updateLocation(){
  await companyStatus.editVehicleLocation(props.plateNumber,location.value.city,location.value.country,location.value.postal_code);
  await companyStatus.getVehicleLocation(props.plateNumber);
}
</script>
<template>
<div class="collapse collapse-arrow  border border-gray-300 bg-base-100 shadow-lg">
  <input type="radio" name="my-accordion-2"/>
  <div class="collapse-title flex flex-col">
    <span class="font-semibold text-3xl">{{props.plateNumber}}</span>
    <span></span>
  </div>
  <div class="collapse-content text-sm flex-col space-y-3">
    <input v-model="location.city" type="text" class="focus:bg-zinc-200 focus:outline-none px-4 py-2 rounded-lg bg-zinc-100 placeholder-stone-500 text-base w-full" placeholder="Oras">
    <input v-model="location.country" type="text" class="focus:bg-zinc-200 focus:outline-none px-4 py-2 rounded-lg bg-zinc-100 placeholder-stone-500 text-base w-full" placeholder="Tara - Cod">
    <input v-model="location.postal_code" type="text" class="focus:bg-zinc-200 focus:outline-none px-4 py-2 rounded-lg bg-zinc-100 placeholder-stone-500 text-base w-full" placeholder="Cod Postal">
    <button @click="updateLocation" class="rounded-md px-4 py-2 bg-green-600 active:bg-green-700 text-white font-bold border-0 text-base w-full">Save</button>
  </div>
</div>
</template>