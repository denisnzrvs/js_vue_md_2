<template>
    <div class="nav" v-if="isLoggedIn">
         <button :class="{ active: $route.path === '/home' }">
          <router-link to="/home">HOME</router-link>
        </button>
        <button :class="{ active: $route.path === '/about-me' }">
          <router-link to="/about-me">ABOUT ME</router-link>
        </button>
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


.router-link:visited {
    color: white;
    text-decoration: none;
}



button {
    font-family: "Roboto", sans-serif;
    background-color: #7c7c89;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: none;
    opacity: 75%;
    margin-bottom: 1rem;
    text-decoration: none;
}

.active {
    background-color: orange;
    color: white;
}
</style>