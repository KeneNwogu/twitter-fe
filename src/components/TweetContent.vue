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
        <p style="padding: 1rem; width: 100%">{{ tweet.content }}</p>
        <VueperSlides v-if="tweet.image">
            <VueperSlide
                v-for="i in 5"
                :key="i"
                :title="i.toString()"
            ></VueperSlide>
        </VueperSlides>
        <div class="post-actions">
            <div class="post-actions__icons">
                <span><i class="uil uil-heart"></i></span>
                <span><i class="uil uil-angle-double-up"></i></span>
                <span><i class="uil uil-comment-alt-upload"></i></span>
            </div>
            <span class="post-actions__bookmark">
                <i class="uil uil-bookmark"></i>
            </span>
        </div>
        <div class="post-details">
            <p class="post-details__likes">{{ tweet.likes_count }} Likes</p>
            <p class="post-details__date">{{ tweet.date_created }}</p>
            <router-link :to="{ name: 'Tweet', params: { id: tweet.id } }" class="post-details__comments">View all comments <span class="comments-info">({{ tweet.comments_count }})</span></router-link>
        </div>
    </div>
</template>

<style scoped>
    a{
        display: block;
        color: inherit;
    }
    .tweet-container .post-card .post-details .post-details__comments {
        display: none;
    }
</style>

<script setup>
import { ref } from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import { defineProps } from 'vue'

const props = defineProps({
    tweet: Object
})

let tweet = ref(props.tweet)

</script>