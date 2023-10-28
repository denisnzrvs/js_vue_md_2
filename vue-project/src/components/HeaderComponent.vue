<template>
    <header class="header">
        <div>
            <img src="../assets/Logo white.svg" />
            <h1>OCTOPUS</h1>
        </div>
        <div>
            <ul>
                <li>
                    <button @click="loginUser">
                        {{ isLoggedIn ? "Logout" : "Login" }}
                    </button>
                </li>
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
            store.login(); // Directly call the store's methods
            router.push('/home');
        };

        const isLoggedIn = computed(() => store.loggedInStatus);

        return {
            loginUser,
            isLoggedIn,
        };
    },
};
</script>

<style scoped>
.header {
    background-color: #473d4b;
}
</style>
