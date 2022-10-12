import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TweetView from "@/views/TweetView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";
import FollowersView from "@/views/followers/FollowersView.vue"
import store from "@/store";

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
        component: ProfileView,
    },
    {
        path: '/:user_id/followers',
        name: 'Followers',
        component: FollowersView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

const protectedRoutes = ['Profile', 'Followers']

router.beforeEach((to, from, next) => {
    console.log('store', store)
    if(protectedRoutes.includes(to.name) && !store.state.user_token){
        next({ name: 'Login' })
    }
    else{
        next()
    }
})

export default router;