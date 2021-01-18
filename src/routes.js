import {createWebhistory, createRouter} from "vue-router" ;
import LandingPage from "./Pages/LandingPage.vue";
import GuestSignIn from "./Pages/GuestSignIn.vue";

const history = createWebhistory();
const router = createRouter({
    history,
    routes: [
        {
            path: "/",
            component: LandingPage
        },
        {
            path: "/guestSignin",
            component: GuestSignIn
        }
    ]
})

export default router;