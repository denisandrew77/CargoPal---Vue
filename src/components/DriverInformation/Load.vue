<script setup>
import { useOrderStatus } from '../../stores/orderStatus';
const orderStatus=useOrderStatus();
const order = orderStatus.currentOrder;
</script>
<template>
    <div class="flex flex-row">
                        <i class="bi bi-truck mr-1"></i>
                        <div>Marfă:</div>
                        <div class="ml-2 w-48">
                            {{order.Goods_number}} {{ order.Goods_type }} {{ order.Goods_length }}/{{ order.Goods_width }}/{{ order.Goods_height }} {{ order.Goods_weight }} kg
                        </div>
                    </div>
</template>