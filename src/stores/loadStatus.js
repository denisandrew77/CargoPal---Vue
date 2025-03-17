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
            this.leftForLoading.checked = true;
            this.leftForLoading.tickVisibility = "visible";
            this.arrivedAtLoading.isDisabled = false;
        },
        arriveAtLoading() {
            this.arrivedAtLoading.checked = true;
            this.arrivedAtLoading.tickVisibility = "visible";
            this.loaded.isDisabled = false;
        },
        load() {
            this.isLoaded.checked = true;
            this.isLoaded.tickVisibility = "visible";
        },
        arriveAtUnloading() {
            this.arrivedAtUnloading.checked = true;
            this.arrivedAtUnloading.tickVisibility = "visible";
            this.unloaded.isDisabled = false;
        },
        unload() {
            this.unloaded.checked = true;
            this.unloaded.tickVisibility = "visible";
        }
    }
})