import { defineStore } from 'pinia'
export const useLoadStatus = defineStore('loadStatus', {
    state: () => {
        return {
            leftForLoading: {
                id: "Pornire spre incarcare",
                isDisabled: false,
                checked: false,
                tickVisibility: "hidden",
            },
            arrivedAtLoading: {
                id: "Sosire la incarcare",
                isDisabled: true,
                checked: false,
                tickVisibility: "hidden",
            },
            loaded: {
                id: "Incarcat",
                isDisabled: true,
                checked: false,
                tickVisibility: "hidden",
            },
            arrivedAtUnloading: {
                id: "Sosire la descarcare",
                isDisabled: false,
                checked: false,
                tickVisibility: "hidden",
            },
            unloaded: {
                id: "Descarcat",
                isDisabled: true,
                checked: false,
                tickVisibility: "hidden",
            },
        }
    },
    actions: {
        leaveForLoading() {
            this.isLeftForLoading.checked = true;
            this.isLeftForLoading.tickVisibility = "visible";
            this.isArrivedAtLoading.isDisabled = false;
        },
        arriveAtLoading() {
            this.isArrivedAtLoading.checked = true;
            this.isArrivedAtLoading.tickVisibility = "visible";
            this.isLoaded.isDisabled = false;
        },
        load() {
            this.isLoaded.checked = true;
            this.isLoaded.tickVisibility = "visible";
        },
        arriveAtUnloading() {
            this.isArrivedAtUnloading.checked = true;
            this.isArrivedAtUnloading.tickVisibility = "visible";
            this.isUnloaded.isDisabled = false;
        },
        unload() {
            this.isUnloaded.checked = true;
            this.isUnloaded.tickVisibility = "visible";
        }
    }
})