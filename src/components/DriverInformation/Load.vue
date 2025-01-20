<script setup>
const props = defineProps({
    Order:Object
});
</script>
<template>
    <div class="flex flex-row">
                        <i class="bi bi-truck mr-1"></i>
                        <div>Marfă:</div>
                        <div class="ml-2 w-48">
                            {{Order.Goods_number}} {{ Order.Goods_type }} {{ Order.Goods_length }}/{{ Order.Goods_width }}/{{ Order.Goods_height }} {{ Order.Goods_weight }} kg
                        </div>
                    </div>
</template>