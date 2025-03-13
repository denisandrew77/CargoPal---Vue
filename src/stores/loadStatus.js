import { defineStore } from 'pinia'
export const useLoadStatus = defineStore('loadStatus', {
    state: () => {
        return {
            leftForLoading: {
                disabledState: false,
                checked: false,
                tickVisibility: false,
            },
            arrivedAtLoading: {
                disabledState: false,
                checked: false,
                tickVisibility: false,
            },
            loaded: {
                disabledState: false,
                checked: false,
                tickVisibility: false,
            },
            arrivedAtUnloading: {
                disabledState: false,
                checked: false,
                tickVisibility: false,
            },
            unloaded: {
                disabledState: false,
                checked: false,
                tickVisibility: false,
            },
        }
    }
})