<script setup>
const props = defineProps({
    Order:Object
});
</script>
<template>
    <div class="flex flex-row">
         <i class="bi bi-telephone-fill mr-1 text-blue-500"></i>
        <div>Contact:</div>
        <div class="ml-2">
             {{Order.state==="Loading"?Order.Loading_contact:Order.Delivery_contact}}
         </div>
    </div>
</template>