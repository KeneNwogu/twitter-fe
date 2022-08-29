<template>
    <div class="middle">
        <form class="create-post">
            <div class="profile-photo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <input type="text" placeholder="what's on your mind, Diana?">
            <input type="submit" value="Post" class="btn btn-primary move-right">
            <button class="mobile btn btn-primary" type="submit">
                <i class="uil uil-twitter"></i>
            </button>
        </form>
        <div class="post-container" v-if="tweets">
            <!-- tweet component v-for -->
            <TweetContent v-for="tweet in tweets" :key="tweet.id" :tweet="tweet"/>
        </div>
        <div class="preloader" v-else></div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import axios from 'axios';
    import { onBeforeMount } from 'vue'

    import TweetContent from '@/components/TweetContent.vue'

    let tweets = ref(null)

    onBeforeMount(async () => {
        let response = await axios.get('https://tweeter-apiclone.herokuapp.com/api/v1/tweets')
        if(response.status == 200) { 
            tweets.value = response.data.results
        }
    })
    
</script>