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
    }
})