<template>
    <nav>
        <div class="container">
            <router-link to="/">
                <div class="nav-item">
                    <i class="uil uil-arrow-left"></i>
                    <h2>Tweet</h2>
                </div>
            </router-link>
        </div>
    </nav>
    <div class="tweet-container" v-if="tweet">
        <TweetDetails :tweet="tweet" />
    </div>
    <div class="comments container">

    </div>
</template>

<style scoped>
    a{
        display: block;
        color: inherit;
    }
    .nav-item{
        display: flex;
        gap: var(--gap);
    }
    .nav-item i {
        font-size: 1.4rem;
    }
    .tweet-container{
        margin-bottom: 1rem;
    }
</style>

<script setup>
    import { useRoute } from 'vue-router';
    import { onBeforeMount, ref } from 'vue';
    import axios from 'axios';
    import TweetDetails from "@/components/TweetDetails.vue";

    let tweet = ref(null)
    let tweet_comments = ref(null)

    onBeforeMount(async () => {
        const route = useRoute();
        
        let tweet_id = route.params.id;
        const response = await axios.get(`https://tweeter-apiclone.herokuapp.com/api/v1/tweets/${tweet_id}`);
        const data = response.data;
        let { comments, ...tweet_data } = data;
        tweet.value = tweet_data;
        tweet_comments.value = comments;
    })
</script>