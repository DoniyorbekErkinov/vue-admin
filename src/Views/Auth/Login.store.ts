import { defineStore } from "pinia";

export const useUserStore = defineStore('User', {
    state: () => {
        return {
            user: {}
        }
    },
    getters: {},
    actions: {
        
    }
})