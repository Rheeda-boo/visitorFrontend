import { createWebHistory, createRouter } from 'vue-router';


/**
 * Import as many components as you would want to here
 * to be added as routes
 */
import LandingPage from "./Pages/LandingPage";
import GuestSignIn from "./Pages/GuestSignIn";


// you can add more routes for any component imported above
const routes = [
    {
        path: "/",
        component: LandingPage
    },
    {
        path: "/guestsignin",
        component: GuestSignIn
    }
    
];


const history = createWebHistory();
const router = createRouter({
    history,
    routes
})

export default router;