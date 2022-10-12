<template>
  <section class="profile">
      <div class="profile-header">
        <div class="profile-icon">
          <!-- takes to the page before -->
          <i class="uil uil-arrow-left"></i>
        </div>
        <div class="profile-info">
          <!-- person name -->
          <h3>{{ user.fullname }}</h3>
          <!-- no of tweets which includes likes, retweet and actual tweet -->
          <p>{{ user.tweets_count }} Tweet(s)</p>
          </div>
      </div>
      <!-- there will be a route here for the actual profile and a place for seeing the follower and people you following -->  
      <ProfileBody :user="user" />
      <!-- <FollowerFollowingLayout /> -->
  </section>
</template>

<script setup>
  import { watchEffect, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import ProfileBody from '@/components/profile/ProfileBody.vue';
  // import FollowerFollowingLayout from './FollowerFollowingLayout.vue';

  let user = ref({});
  const store = useStore();
  const route = useRoute();

  watchEffect(() => {
    // fetch user profile
    let url = `http://tweeter-apiclone.herokuapp.com/api/v1/users/${route.params.user_id}/`
    console.log(store.state.user_token)
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `JWT ${store.state.user_token}`}
    })
      .then(res => {
        if(res.ok) return res.json()
      })
      .then(data => {
        console.log(data)
        user.value = data
      })
  })

</script>

<style scoped>
.profile-header{
  position: sticky;
  position: -webkit-sticky;
  top: 9px;
  z-index: 9;
  background-color: var(--color-white);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-top-left-radius: var(--card-border-radius);
  border-top-right-radius: var(--card-border-radius);
}
.profile-icon i{
  font-size: 1.3rem;
  color: var(--color-gray);
  cursor: pointer;
}
@media(hover: hover){
  .profile-icon i:hover{
    color: var(--color-black);
  }
}
.profile-info{
  margin-left: 0.7rem;
}
</style>