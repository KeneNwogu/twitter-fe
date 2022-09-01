<template>
    <div class="post-card middle">  
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
        <CommentCard />
        <CommentCard />
        <CommentCard />
    </div>
</template>

<style scoped>
body{
    background: var(--color-white);
}
.post-card{
    background-color: var(--color-white);
    padding-top: 1rem;
    border-top-left-radius: var(--card-border-radius);
    border-top-right-radius: var(--card-border-radius);
    /* padd */
}
.post-info{
    padding-left: 0.5rem;
    padding-right: 0.9rem;
}
.comments{
    background-color: var(--color-white);
    border-bottom-left-radius: var(--card-border-radius);
    border-bottom-right-radius: var(--card-border-radius);
    padding-bottom: 0.1rem;
}
.tweet-details .tweet-details__info{
    
    padding-left: 0.5rem;
    padding-right: 0.5rem;
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