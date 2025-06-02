import { defineStore } from 'pinia'
export const useDeliveryStatus = defineStore('deliveryStatus', {
    state: () => {
        return {
            loadingStep: [
                {
                    name: 'Pornire spre descarcare',
                    checked: false,
                    isDisabled: false,
                    tickVisibility: 'hidden'
                },
                {
                    name: 'Decarcat',
                    checked: false,
                    isDisabled: true,
                    tickVisibility: 'hidden'
                }
            ],
            nextPageDisabledButton: true,
        }
    },
    actions: {
        checkLeftForUnloadingStep() {
            this.loadingStep[0].checked = true;
            this.loadingStep[0].tickVisibility = 'visible';
            this.loadingStep[1].isDisabled = false;
        },
        checkUnloadedStep() {
            this.loadingStep[1].checked = true;
            this.loadingStep[1].tickVisibility = 'visible';
            this.nextPageDisabledButton = false;
        }
    },
    persist: {
        storage: localStorage,
    }
})