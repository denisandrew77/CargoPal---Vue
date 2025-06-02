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
        },
        async editVehicleLocation(plateNumber, city, country, postal_code) {
            await axios.put("http://localhost:3000/orders/edit-location",
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        plateNumber: plateNumber,
                        city: city,
                        country: country,
                        postal_code: postal_code,
                    },
                }
            ).then((response) => {
                console.log(response.data);
            });
        },
        async getVehicleLocation(plateNumber) {
            await axios.get("http://localhost:3000/orders/get-vehicle-location",
                { params: { plateNumber: plateNumber } }
            ).then((response) => {
                console.log(response.data);
                console.log(this.companyVehicles);
                for (let i = 0; i < this.companyVehicles.length; i++) {
                    if (this.companyVehicles[i].plate_number === response.data.plate_number) {
                        Object.defineProperties(this.companyVehicles[i], {
                            city: {
                                value: response.data.city,
                                writable: true
                            },
                            country: {
                                value: response.data.country,
                                writable: true
                            },
                            postal_code: {
                                value: response.data.postal_code,
                                writable: true
                            },
                        });
                        console.log(this.companyVehicles[i]);
                    }
                }
            });
        }
    },
    persist: {
        storage: localStorage,
    }
})