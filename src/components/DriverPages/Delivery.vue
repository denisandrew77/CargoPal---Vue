<script setup>
import Address from '../DriverInformation/Address.vue';
import Contact from '../DriverInformation/Contact.vue';
import DateTime from '../DriverInformation/DateTime.vue';
import Refference from '../DriverInformation/Refference.vue';
import Load from '../DriverInformation/Load.vue';
import {useRouter} from 'vue-router';
const receivedData = localStorage.getItem("order");
const OrderData=JSON.parse(receivedData);
OrderData.state="Delivery";
console.log(OrderData);
const router = useRouter();
function handleClick(){
    router.push('/orderDone');
}
</script>
<template>
    <div class="pl-5 py-4 rounded-none text-3xl md:text-4xl text-white font-bold bg-orange-100 sticky top-0 bg-gradient-to-r from-orange-500 to-orange-300 shadow-lg">
            Descarcare
        </div>
        <div class="m-2 space-y-2">
        <div class="pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
            <div class="text-2xl md:text-3xl mb-2 border-2 border-b-black border-gray-100 w-56 md:w-80 font-semibold">
                Informatii descarcare
            </div>
            <div class="space-y-2 flex flex-col md:flex-row md:space-x-10">
                <Address :Order="OrderData" />
                <div>
                    <Contact :Order="OrderData"/>
                    <DateTime :Order="OrderData"/>
                    <Refference :Order="OrderData"/>
                    <Load :Order="OrderData"/>
                </div>
            </div>
        </div>
        <div class=" pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
            <div class="text-2xl mb-2 border-2 border-b-black border-gray-100 w-56 font-semibold">
                Statusul comenzii
            </div>
            <div class="space-y-2">
                <div class="flex flex-row">
                    <button class="peer border-2 border-black rounded-md px-4 py-2 focus:bg-green-600 focus:text-white focus:font-bold bg-zinc-100 w-64 focus:border-0">Sosire la descarcare</button>
                    <i class="bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center hidden peer-focus:block peer-focus:flex peer-focus:items-center"></i>
                </div>
                <div class="flex flex-row">
                    <button class="peer border-2 border-black rounded-md px-4 py-2 focus:bg-green-600 focus:text-white focus:font-bold bg-zinc-100 w-64 focus:border-0">Descarcat</button>
                    <i class="bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center hidden peer-focus:block peer-focus:flex peer-focus:items-center"></i>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-end">
            <button @click="handleClick" class="fixed bottom-4 right-4 text-white font-bold px-3 py-2 bg-orange-500 rounded-md active:bg-orange-600">Urmatorul pas <i class="bi bi-chevron-right"></i></button>
        </div>
    </div>
</template>