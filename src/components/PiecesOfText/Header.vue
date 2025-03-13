<script setup>
const props=defineProps({
    state:String,
});
</script>
<template>
    <div class="text-2xl md:text-3xl mb-2 border-2 border-b-black border-gray-100 w-56 md:w-80 font-semibold">
                Informatii {{props.state}}
            </div>
</template>