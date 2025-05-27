import { defineStore } from 'pinia'
import axios from 'axios';
export const useOrderStatus = defineStore('orderStatus', {
    state: () => {
        return {
            currentOrder: {}
        }
    },
    actions: {
        async retrieveOrder(orderNumber, plate) {
            return axios.get("http://localhost:3000/orders/get-order", { params: { orderNumber: orderNumber, plateNumber: plate } }).then(response => {
                this.currentOrder = response.data;
                console.log(this.currentOrder);
            });
        },
        async updateStatus(orderNumber, status) {
            await axios.put("http://localhost:3000/orders/edit-order", {
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    orderNumber: orderNumber, status: status
                }
            }).then(response => { this.currentOrder.Status = response.data; console.log(response.data) })
        }
    }
})