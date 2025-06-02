import { defineStore } from 'pinia'
export const useLoadStatus = defineStore('loadStatus', {
    state: () => {
        return {
            loadingStep: [
                {
                    name: 'Pornire spre incarcare',
                    checked: false,
                    isDisabled: false,
                    tickVisibility: 'hidden'
                },
                {
                    name: 'Sosire la incarcare',
                    checked: false,
                    isDisabled: true,
                    tickVisibility: 'hidden'
                },
                {
                    name: 'Incarcat',
                    checked: false,
                    isDisabled: true,
                    tickVisibility: 'hidden'
                }
            ],
            nextPageDisabledButton: true,
        }
    },
    actions: {
        checkLeftForLoadingStep() {
            this.loadingStep[0].checked = true;
            this.loadingStep[0].tickVisibility = 'visible';
            this.loadingStep[1].isDisabled = false;
        },
        checkArrivedAtLoadingStep() {
            this.loadingStep[1].checked = true;
            this.loadingStep[1].tickVisibility = 'visible';
            this.loadingStep[2].isDisabled = false;
        },
        checkLoadedLoadingStep() {
            this.loadingStep[2].checked = true;
            this.loadingStep[2].tickVisibility = 'visible';
            this.nextPageDisabledButton = false;
        }
    },
    persist: {
        storage: localStorage,
    }
})