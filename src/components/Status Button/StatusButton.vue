<script setup>
import {ref} from 'vue';
import { useLoadStatus } from '../../stores/loadStatus';
const props= defineProps({
    statusButton:String
});
const loadStatus = useLoadStatus();
let buttonStyle = "peer border-2 border-black rounded-md px-4 py-2 bg-zinc-100 w-64";
let tickvisibility=ref('hidden');
let pressedButtonStyle = "peer bg-green-600 text-white font-bold border-0  rounded-md px-4 py-2 w-64";
const statusUpdate =()=>{
    
    emit('status-change',props.statusButton.id);
}
const emit=defineEmits(['status-change']);
</script>
<template>
    <div class="flex flex-row">
                    <button @click="statusUpdate" :class="statusButton.checked===false?buttonStyle:pressedButtonStyle" :disabled=statusButton.isDisabled>{{statusButton}}</button>
                    <i :class="`bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center ${statusButton.tickVisibility} peer-focus:block peer-focus:flex peer-focus:items-center`"></i>
                </div>
</template>