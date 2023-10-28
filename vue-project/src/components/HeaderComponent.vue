<template>
    <header class="header">
        <div>
            <img src="../assets/Logo white.svg" />
            <h1>OCTOPUS</h1>
        </div>
        <div>
            <div id="circular" v-show="isLoggedIn"></div>
            <ul>
                <li id="full_name" v-show="isLoggedIn">{{ full_name }}</li>
                <li><button href="#" @click="loginUser">{{ isLoggedIn ? "Logout" : "Login" }}</button></li>
            </ul>
        </div>
    </header>
</template>

<script>
import { useUserStore } from '../store';
import { computed } from 'vue';
import router from '../../router';

export default {
    name: 'HeaderComponent',
    setup() {
        const store = useUserStore();

        const loginUser = () => {
            if (store.loggedInStatus === false) {
                const confirmed = confirm("Do you want to log in?")
                if (confirmed) {
                    store.login();
                    router.push('/home');
                }
            } else {
                const confirmed = confirm("Do you want to log out?")
                if (confirmed) {
                    store.logout();
                    router.push('/');
                }
            }
        };

        const isLoggedIn = computed(() => store.loggedInStatus);

        // Fix the variable name here, it should be store.last_name
        const full_name = computed(() => `${store.firstName} ${store.lastName}`);

        return {
            loginUser,
            isLoggedIn,
            full_name, // Include the full_name in the return object
        };
    },
};
</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    gap: 1rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 5rem;
    width: 100%;
    background-color: #292934;
    opacity: 75%;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: white;
}


h1 {
    all: none;
    color: white;
    font-family: "Roboto", sans-serif;

}

#circular {
    height: 70px;
    width: 70px;
    background-color: aqua;
    border-radius: 50%;
}

ul,
li {
    display: inline;
    margin-right: 1rem;
    color: white;
    font-family: "Roboto", sans-serif;

}

#full-name {
    color: white;
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
}
</style>