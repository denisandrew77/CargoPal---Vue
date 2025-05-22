<script setup>
import { useOrderStatus } from '../../stores/orderStatus';
const props = defineProps({
    state:String
});
const orderStatus=useOrderStatus();
const order = orderStatus.currentOrder;
console.log(order)
</script>
<template>
    <div>
        <div class="flex flex-row">
            <i class="bi bi-geo-alt-fill mr-1 text-green-600"></i>
            <div class="">Adresa</div>
            </div>
                <div class="w-40 ml-5">
                    {{state==="Loading"?order.Loading_at_company:order.Delivery_at_company}}
                    {{state==="Loading"?order.Loading:order.Delivery}}
                    {{state==="Loading"?order.Loading_postalcode:order.Delivery_postalcode}}
                    {{state==="Loading"?order.Loading_city:order.Delivery_city}}
                    {{state==="Loading"?order.Loading_country:order.Delivery_country}} 
                </div>
            </div>
</template>