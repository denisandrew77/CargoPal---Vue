<script setup>
const props=defineProps({
    path:String,
    isDisabled:Boolean
})
import {useRouter} from 'vue-router';
const router = useRouter();
function navigate(){
    router.push(`${props.path}`);
}
</script>

<template>
     <div class="flex flex-row justify-end">
            <button @click="navigate" class="fixed bottom-4 right-4 text-white font-bold px-3 py-2 bg-orange-500 rounded-md active:bg-orange-600" :disabled="isDisabled">Urmatorul pas <i class="bi bi-chevron-right"></i></button>
        </div>
</template>