<template>
    <div class="nav" v-if="isLoggedIn">
        <button :class="{ active: homeActive }" @onClick="showHome"><router-link to="/home">HOME</router-link></button>
        <button :class="{ active: aboutMeActive }" @onClick="showAboutMe"><router-link to="/about-me">ABOUT
                ME</router-link></button>
    </div>
</template>
<script>
import { useUserStore } from '../store';
import { computed } from 'vue';

export default {
    name: 'NavComponent',
    setup() {
        const store = useUserStore();

        const isLoggedIn = computed(() => store.loggedInStatus);
        return {
            isLoggedIn,
        };
    },
    data() {
        return {
            homeActive: true,
            aboutMeActive: false,
        };
    },
    methods: {
        showHome() {
            this.homeActive = true;
            this.aboutMeActive = false;
        },
        showAboutMe() {
            this.homeActive = false;
            this.aboutMeActive = true;
        },
    },
};
</script>   
<style>
.nav {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    height: 100%;
}

button.active {
    background-color: orange;
    color: white;
}

button {
    margin-bottom: 1rem;
    font-family: "Roboto", sans-serif;
    background-color: #473d4b;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: none;
}
</style>