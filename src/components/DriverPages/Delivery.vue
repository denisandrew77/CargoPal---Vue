<script setup>
import Address from '../DriverInformation/Address.vue';
import Contact from '../DriverInformation/Contact.vue';
import DateTime from '../DriverInformation/DateTime.vue';
import Refference from '../DriverInformation/Refference.vue';
import StatusButton from '../Status Button/StatusButton.vue';
import Header from '../PiecesOfText/Header.vue';
import BigHeader from '../PiecesOfText/BigHeader.vue';
import SecondHeader from '../PiecesOfText/SecondHeader.vue';
import NavigateButton from '../NavigateButton/NavigateButton.vue';
import { useDeliveryStatus } from '../../stores/deliveryStatus';
import {computed} from 'vue';
import { useOrderStatus } from '../../stores/orderStatus';

const deliveryStatus = useDeliveryStatus();
const orderStatus=useOrderStatus();
const receivedData = localStorage.getItem("order");
const OrderData=JSON.parse(receivedData);
const state="Delivery";
console.log(OrderData);
const navigateButtonState = computed(()=>{
    return deliveryStatus.nextPageDisabledButton;
    
})
const changeState=(state)=>{
    orderStatus.updateStatus(orderStatus.currentOrder.Order_number,state);
    OrderData.status=state;
    console.log(OrderData);
}
</script>
<template>
  <BigHeader :state="'Descarcare'"/>
        <div class="m-2 space-y-2">
        <div class="pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
            <Header :state="state" />
            <div class="space-y-2 flex flex-col md:flex-row md:space-x-10">
                <Address :state="state" />
                <div>
                    <Contact :state="state"/>
                    <DateTime :state="state"/>
                    <Refference :state="state"/>
                </div>
            </div>
        </div>
        <div class=" pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
            <SecondHeader/>
            <div class="space-y-2" v-for="step in deliveryStatus.loadingStep">
                <StatusButton :name="step.name" @status-change="changeState"/>
            </div>
        </div>
        <NavigateButton :path="'/orderDone'" :isDisabled="navigateButtonState"/>
    </div>
</template>