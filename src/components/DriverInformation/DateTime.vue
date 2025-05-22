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
                        <i class="bi bi-clock-fill mr-1"></i>
                        <div>Data si ora</div>
                        <div class="ml-2 w-48">
                            {{state==="Loading"?order.Loading_date:order.Delivery_date}}
                            {{state==="Loading"?order.Loading_time:order.Delivery_time}}
                        </div>
                    </div>
</template>