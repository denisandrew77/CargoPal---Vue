<script setup>
const props = defineProps({
    Order:Object
});
</script>
<template>
    <div class="flex flex-row">
                        <i class="bi bi-upc-scan mr-1"></i>
                        <div>Referinta:</div>
                        <div class="ml-2 w-48">
                            {{Order.state==="Loading"?Order.Loading_reference:Order.Delivery_reference}}
                        </div>
                    </div>
</template>