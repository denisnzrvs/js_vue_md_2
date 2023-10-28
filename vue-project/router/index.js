import { createRouter, createWebHistory } from 'vue-router';

import LandingComponent from '../src/components/LandingComponent.vue';
import HomeComponent from '../src/components/HomeComponent.vue';
import AboutMeComponent from '../src/components/AboutMeComponent.vue';
import { useUserStore } from '../src/store';

const routes = [
    {
        path: '/',
        component: LandingComponent
    },
    {
        path: '/home',
        component: HomeComponent,
        beforeEnter: (to, from, next) => {
            const userStore = useUserStore();
            if (userStore.loggedInStatus) {
                // User is logged in, allow access to the route
                next();
            } else {
                // User is not logged in, redirect to a login page or another route
                next('/'); // You can customize this route to your needs
            }
        },
    },
    {
        path: '/about-me',
        component: AboutMeComponent,
        beforeEnter: (to, from, next) => {
            const userStore = useUserStore();
            if (userStore.loggedInStatus) {
                // User is logged in, allow access to the route
                next();
            } else {
                // User is not logged in, redirect to a login page or another route
                next('/'); // You can customize this route to your needs
            }
        },
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
