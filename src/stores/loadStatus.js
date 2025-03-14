import { defineStore } from 'pinia'
export const useLoadStatus = defineStore('loadStatus', {
    state: () => {
        return {
            isLeftForLoading: {
                isDisabled: false,
                checked: false,
                tickVisibility: false,
            },
            isArrivedAtLoading: {
                isDisabled: true,
                checked: false,
                tickVisibility: false,
            },
            isLoaded: {
                isDisabled: true,
                checked: false,
                tickVisibility: false,
            },
            isArrivedAtUnloading: {
                isDisabled: true,
                checked: false,
                tickVisibility: false,
            },
            isUnloaded: {
                isDisabled: true,
                checked: false,
                tickVisibility: false,
            },
        }
    },
    actions: {
        leaveForLoading() {
            this.isLeftForLoading.checked = true;
            this.isLeftForLoading.tickVisibility = true;
            this.isArrivedAtLoading.isDisabled = false;
        },
        arriveAtLoading() {
            this.isArrivedAtLoading.checked = true;
            this.isArrivedAtLoading.tickVisibility = true;
            this.isLoaded.isDisabled = false;
        },
        load() {
            this.isLoaded.checked = true;
            this.isLoaded.tickVisibility = true;
            this.isArrivedAtUnloading.isDisabled = false;
        },
        arriveAtUnloading() {
            this.isArrivedAtUnloading.checked = true;
            this.isArrivedAtUnloading.tickVisibility = true;
            this.isUnloaded.isDisabled = false;
        },
        unload() {
            this.isUnloaded.checked = true;
            this.isUnloaded.tickVisibility = true;
        }
    }
})