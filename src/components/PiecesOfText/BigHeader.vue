<script setup>
const props=defineProps({
    state:String,
});
</script>
<template>
    <div class="pl-5 py-4 rounded-none text-3xl md:text-4xl text-white font-bold bg-orange-100 sticky top-0 bg-gradient-to-r from-orange-500 to-orange-300 shadow-lg">
            {{props.state}}
        </div>
</template>