<script setup>
import {ref} from 'vue';
const props= defineProps({
    name:String
});
let buttonStyle = ref("peer border-2 border-black rounded-md px-4 py-2 bg-zinc-100 w-64");
let tickvisibility=ref('hidden');
let pressedButtonStyle = "peer bg-green-600 text-white font-bold border-0  rounded-md px-4 py-2 w-64";
const statusUpdate =()=>{
    buttonStyle.value=pressedButtonStyle;
    tickvisibility.value='visible';
    emit('status-change',props.name);
}
const emit=defineEmits(['status-change']);
</script>
<template>
    <div class="flex flex-row">
                    <button @click="statusUpdate" :class=buttonStyle>{{name}}</button>
                    <i :class="`bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center ${tickvisibility} peer-focus:block peer-focus:flex peer-focus:items-center`"></i>
                </div>
</template>