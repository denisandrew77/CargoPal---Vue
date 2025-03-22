import { defineStore } from 'pinia'
export const useLoadStatus = defineStore('loadStatus', {
    state: () => {
        return {
            leftForLoading: {
                id: 1,
                name: "Pornire spre incarcare",
                isDisabled: false,
                checked: false,
                tickVisibility: "hidden",
            },
            arrivedAtLoading: {
                id: 2,
                name: "Sosire la incarcare",
                isDisabled: true,
                checked: false,
                tickVisibility: "hidden",
            },
            loaded: {
                id: 3,
                name: "Incarcat",
                isDisabled: true,
                checked: false,
                tickVisibility: "hidden",
            },
            arrivedAtUnloading: {
                id: 4,
                name: "Sosire la descarcare",
                isDisabled: false,
                checked: false,
                tickVisibility: "hidden",
            },
            unloaded: {
                id: 5,
                name: "Descarcat",
                isDisabled: true,
                checked: false,
                tickVisibility: "hidden",
            },
        }
    },
    actions: {
        findCurrent(name) {
            for (const id in this) {
                if (this[id].name === name)
                    return this[id];
            }
        },
        advanceToNextDeliveryStep(nextPlaceToAdvance) {
            let foundUncheckedPlaces = false;
            for (const id in this.state) {
                if (this.state[id].name === nextPlaceToAdvance && foundUncheckedPlaces === false) {
                    this.state[id].checked = true;
                    this.state[id].tickVisibility = "visible"
                }
                if (this.state[id].checked === false) {
                    foundUncheckedPlaces = true;
                }
            }
        }
    }
})