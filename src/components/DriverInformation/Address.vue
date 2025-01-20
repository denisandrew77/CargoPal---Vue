<script setup>
const props = defineProps({
    Order:Object
});
</script>
<template>
    <div>
        <div class="flex flex-row">
            <i class="bi bi-geo-alt-fill mr-1 text-green-600"></i>
            <div class="">Adresa</div>
            </div>
                <div class="w-40 ml-5">
                    {{Order.state==="Loading"?Order.Loading_at_company:Order.Delivery_at_company}}
                    {{Order.state==="Loading"?Order.Loading:Order.Delivery}}
                    {{Order.state==="Loading"?Order.Loading_postalcode:Order.Delivery_postalcode}}
                    {{Order.state==="Loading"?Order.Loading_city:Order.Delivery_city}}
                    {{Order.state==="Loading"?Order.Loading_country:Order.Delivery_country}} 
                </div>
            </div>
</template>