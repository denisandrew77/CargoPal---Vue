import { defineStore } from 'pinia'
import axios from 'axios';
export const useCompanyStatus = defineStore('companyStatus', {
    state: () => {
        return {
            currentCompany: {}
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
                this.currentCompany = response.data;
            });
        }
    }
})