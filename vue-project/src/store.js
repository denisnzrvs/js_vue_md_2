import { defineStore } from 'pinia';
import songs_data from './getSongs';

export const useUserStore = defineStore('user', {
    state: () => ({
        firstName: 'name',
        lastName: 'surname',
        studentCode: 'CODE1234',
        loggedInStatus: false,
        loggedAtTimestamp: [],
    }),

    actions: {
        login() {
            this.loggedInStatus = true;

            const now = new Date();
            const timestamp = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`;
            this.loggedAtTimestamp.push(timestamp);
        },

        logout() {
            this.loggedInStatus = false;
        },

        resetUser() {
            this.firstName = 'name';
            this.lastName = 'surname';
            this.studentCode = 'CODE1234';
            this.loggedInStatus = false;
            this.loggedAtTimestamp = [];
        },
    },
});
export const useSongsStore = defineStore('songs', {
    state: () => ({
        all_songs: songs_data, // Set songs as a global state variable
    }),
});