<script setup>
const props = defineProps({
    Order:Object
});
</script>
<template>
<div class="flex flex-row">
                        <i class="bi bi-clock-fill mr-1"></i>
                        <div>Data si ora</div>
                        <div class="ml-2 w-48">
                            {{Order.state==="Loading"?Order.Loading_date:Order.Delivery_date}}
                            {{Order.state==="Loading"?Order.Loading_time:Order.Delivery_time}}
                        </div>
                    </div>
</template>