<template>
    <div class="post-card">  
        <div class="post-info">
            <div class="post-info__user">
                <div class="profile-photo">
                    <img src="@/assets/logo.png" alt="">
                </div>
                <div>
                    <p>{{ tweet.user.fullname }}</p> 
                    <small class="post-info__locale">@{{ tweet.user.username }}</small>
                </div>
            </div>
            <span class="post-info__options">
                <i class="uil uil-ellipsis-v"></i>
            </span>
        </div>
        <p style="padding: 1rem; width: 100%; font-size: 1.4rem">{{ tweet.content }}</p>
        <VueperSlides v-if="tweet.image">
            <VueperSlide
                v-for="i in 5"
                :key="i"
                :title="i.toString()"
            ></VueperSlide>
        </VueperSlides>
    
        <div class="tweet-details">
            <div class="tweet-details__info">
                <p class="post-details__retweets"><span>{{ tweet.retweets_count }}</span> Retweets</p>
                <p class="post-details__likes"><span>{{ tweet.likes_count }}</span> Likes</p>
            </div>
        </div>
        <div class="tweet-actions">
            
        </div>
    </div>
    <div class="comments">
        <CommentCard />
    </div>
</template>

<style scoped>
body{
    background: var(--color-white);
}
.tweet-details .tweet-details__info{
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1rem;
    border-top: 0.5px solid grey;
    border-bottom: 0.5px solid grey;
}

.tweet-actions .tweet-actions__icons{
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    border-bottom: 0.5px solid grey;
}

.tweet-actions .tweet-actions__icons i{
    font-weight: 0.5rem;
    color: grey;
}
</style>

<script setup>

import { ref } from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import CommentCard from './CommentCard.vue'

import { defineProps } from 'vue'

const props = defineProps({
    tweet: Object
})

let tweet = ref(props.tweet)

</script>