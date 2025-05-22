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
                        <i class="bi bi-upc-scan mr-1"></i>
                        <div>Referinta:</div>
                        <div class="ml-2 w-48">
                            {{state==="Loading"?order.Loading_reference:order.Delivery_reference}}
                        </div>
                    </div>
</template>