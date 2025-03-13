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

const receivedData = localStorage.getItem("order");
const OrderData=JSON.parse(receivedData);
OrderData.state="Delivery";
console.log(OrderData);

const changeState=(state)=>{
    OrderData.status=state;
    console.log(OrderData);
}
</script>
<template>
  <BigHeader :state="'Descarcare'"/>
        <div class="m-2 space-y-2">
        <div class="pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
            <Header :state="'Descarcare'" />
            <div class="space-y-2 flex flex-col md:flex-row md:space-x-10">
                <Address :Order="OrderData" />
                <div>
                    <Contact :Order="OrderData"/>
                    <DateTime :Order="OrderData"/>
                    <Refference :Order="OrderData"/>
                </div>
            </div>
        </div>
        <div class=" pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
            <SecondHeader/>
            <div class="space-y-2">
                <StatusButton :name="'Sosire la descarcare'" @status-change="changeState"/>
                <StatusButton :name="'Descarcat'" @status-change="changeState"/>
            </div>
        </div>
        <NavigateButton :path="'/orderDone'"/>
    </div>
</template>