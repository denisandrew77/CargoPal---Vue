<script setup>
import { useOrderStatus } from '../../stores/orderStatus';
const props = defineProps({
    state:String
});
const orderStatus=useOrderStatus();
const order = orderStatus.currentOrder;
</script>
<template>
    <div class="flex flex-row">
         <i class="bi bi-telephone-fill mr-1 text-blue-500"></i>
        <div>Contact:</div>
        <div class="ml-2">
             {{state==="Loading"?order.Loading_contact:order.Delivery_contact}}
         </div>
    </div>
</template>