<script setup>
import Address from '../DriverInformation/Address.vue';
import Contact from '../DriverInformation/Contact.vue';
import DateTime from '../DriverInformation/DateTime.vue';
import Refference from '../DriverInformation/Refference.vue';
import Load from '../DriverInformation/Load.vue';
import StatusButton from '../Status Button/StatusButton.vue';
import Header from '../PiecesOfText/Header.vue';
import BigHeader from '../PiecesOfText/BigHeader.vue';
import SecondHeader from '../PiecesOfText/SecondHeader.vue';
import NavigateButton from '../NavigateButton/NavigateButton.vue';
import { useLoadStatus } from '../../stores/loadStatus';
import {computed} from 'vue';
import { useOrderStatus } from '../../stores/orderStatus';

const receivedData = localStorage.getItem("order");
const OrderData=JSON.parse(receivedData);
const state="Loading";
OrderData.status="";
const loadStatus = useLoadStatus();
const orderStatus = useOrderStatus();
const changeState=(state)=>{
    orderStatus.updateStatus(orderStatus.currentOrder.Order_number,state);
    OrderData.status=state;
}
const navigateButtonState = computed(()=>{
    return loadStatus.nextPageDisabledButton;
})

</script>
<template>
    <BigHeader :state="state"/>
        <div class="m-2 space-y-2">
        <div class="pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
            <Header :state="state"/>
            <div class="space-y-2 flex flex-col md:flex-row md:space-x-10">
                <Address :state="state"/>
                <div>
                    <Contact :state="state"/>
                    <DateTime :state="state"/>
                    <Refference :state="state"/>
                    <Load/>
                </div>
            </div>
        </div>
        <div class=" pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
            <SecondHeader/>
            <div class="space-y-2" v-for="step in loadStatus.loadingStep">
                <StatusButton :name="step.name" @status-change="changeState"/>
            </div>
        </div>
        <NavigateButton :path="'/delivery'" :isDisabled="navigateButtonState"/>
    </div>
</template>