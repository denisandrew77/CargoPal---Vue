<script setup>
import {ref} from 'vue';
import { useLoadStatus } from '../../stores/loadStatus';
const props= defineProps({
    name:String
});
const loadStatus = useLoadStatus();
let buttonStyle = "peer border-2 border-black rounded-md px-4 py-2 bg-zinc-100 w-64";
let tickvisibility=ref('hidden');
let pressedButtonStyle = "peer bg-green-600 text-white font-bold border-0  rounded-md px-4 py-2 w-64";
const statusUpdate =()=>{
    emit('status-change',props.name);
}
function getStyle(nameLookingFor){
    const foundRecord=loadStatus.findCurrent(nameLookingFor);
    if(foundRecord.checked===true){
        return pressedButtonStyle
    }
    else return buttonStyle;
}
function getTickVisibility(nameLookingFor){
    const foundRecord=loadStatus.findCurrent(nameLookingFor);
    return foundRecord.tickVisibility;
}
function getDisabledProperty(name){
    const foundRecord=loadStatus.findCurrent(name);
    return foundRecord.isDisabled;
}
const emit=defineEmits(['status-change']);
console.log(loadStatus);
</script>
<template>
    <div class="flex flex-row">
                    <button @click="statusUpdate" :class="getStyle(name)" :disabled="getDisabledProperty(nameLookingFor)">{{name}}</button>
                    <i :class="`bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center ${getTickVisibility(name)} peer-focus:block peer-focus:flex peer-focus:items-center`"></i>
                </div>
</template>