import { defineStore } from 'pinia'
import axios from 'axios';
export const useCompanyStatus = defineStore('companyStatus', {
    state: () => {
        return {
            currentCompany: {},
            companyVehicles: [],
        }
    },
    actions: {
        async createCompany(companyName, email, password) {
            axios.post("http://localhost:3000/orders/create-company",
                { companyName: companyName, email: email, password: password },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                },
            ).then((response) => {
                if (response.data != false) {
                    this.currentCompany = response.data;
                }
                console.log(response.data);
                console.log(this.currentCompany);
            });
        },
        async getCompany(email, password) {
            await axios.get("http://localhost:3000/orders/get-company",
                { params: { email: email, password: password } }
            ).then((response) => {
                console.log(response.data)
                this.currentCompany = response.data;
            });
        },
        async createVehicle(vehicle) {
            await axios.post("http://localhost:3000/orders/create-vehicle",
                { vehicle: vehicle },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => {
                    this.companyVehicles.push(response.data);
                    console.log(response.data);
                });
        },
        async getVehiclesByCompany(companyName) {
            await axios.get("http://localhost:3000/orders/get-vehicles",
                { params: { companyName: companyName } }
            ).then((response) => { console.log(response.data); this.companyVehicles = response.data })
        }
    },
    persist: {
        storage: localStorage,
    }
})