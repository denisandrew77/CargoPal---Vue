<script setup>
import {ref, computed, reactive} from 'vue';
import { useLoadStatus } from '../../stores/loadStatus';
import { useDeliveryStatus } from '../../stores/deliveryStatus';
const props= defineProps({
    name:String
});
const loadStatus = useLoadStatus();
const deliveryStatus = useDeliveryStatus();
const standardButtonStyle = "peer border-2 border-black rounded-md px-4 py-2 bg-zinc-100 w-64";
const pressedButtonStyle = "peer bg-green-600 text-white font-bold border-0  rounded-md px-4 py-2 w-64";
const statusUpdate =()=>{
    emit('status-change',props.name);
    console.log(loadStatus.loadingStep[0].checked);
    if(props.name===loadStatus.loadingStep[0].name){
        loadStatus.checkLeftForLoadingStep();
    }
    else if(props.name===loadStatus.loadingStep[1].name){
        loadStatus.checkArrivedAtLoadingStep();
    }
    else if(props.name===loadStatus.loadingStep[2].name){
        loadStatus.checkLoadedLoadingStep();
    }
    else if(props.name===deliveryStatus.loadingStep[0].name){
        deliveryStatus.checkLeftForUnloadingStep();
    }
    else if(props.name===deliveryStatus.loadingStep[1].name){
        deliveryStatus.checkUnloadedStep();
    }
    console.log(loadStatus.loadingStep[0].checked);
}
const emit=defineEmits(['status-change']);
const buttonStyle = computed(()=>{
    for(let index = 0 ; index<=2;index++){
        if(props.name===loadStatus.loadingStep[index].name){
            if(loadStatus.loadingStep[index].checked){
                return pressedButtonStyle;
            }
            else return standardButtonStyle;
        } 
    }
    for(let index = 0 ; index<=1;index++){
        if(props.name===deliveryStatus.loadingStep[index].name){
            if(deliveryStatus.loadingStep[index].checked){
                return pressedButtonStyle;
            }
            else return standardButtonStyle;
        } 
    }
});
const disabledProperty = computed(()=>{
    for(let index = 0 ; index<=2;index++){
        if(props.name===loadStatus.loadingStep[index].name){
            return loadStatus.loadingStep[index].isDisabled;
        }  
    }
    for(let index = 0 ; index<=1;index++){
        if(props.name===deliveryStatus.loadingStep[index].name){
            return deliveryStatus.loadingStep[index].isDisabled;
        }  
    }
})
const tickVisibility = computed(()=>{
    for(let index = 0 ; index<=2;index++){
        if(props.name===loadStatus.loadingStep[index].name){
            return loadStatus.loadingStep[index].tickVisibility;
        }  
    }
    for(let index = 0 ; index<=1;index++){
        if(props.name===deliveryStatus.loadingStep[index].name){
            return deliveryStatus.loadingStep[index].tickVisibility;
        }  
    }
})
</script>
<template>
    <div class="flex flex-row pb-2">
        <button @click="statusUpdate" :class="buttonStyle" :disabled="disabledProperty">{{props.name}}</button>
        <i :class="`bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center ${tickVisibility} peer-focus:block peer-focus:flex peer-focus:items-center`"></i>
    </div>
</template>