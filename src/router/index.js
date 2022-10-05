import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TweetView from "@/views/TweetView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/tweet/:id',
        name: 'Tweet',
        component: TweetView
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/:user_id/profile',
        name: 'Profile',
        component: ProfileView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router;