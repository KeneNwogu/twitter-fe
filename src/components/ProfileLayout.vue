<template>
  <section class="profile">
      <div class="profile-header">
        <div class="profile-icon">
          <!-- takes to the page before -->
          <i class="uil uil-arrow-left"></i>
        </div>
        <div class="profile-info">
          <!-- person name -->
          <h3>Anastasie Alfonsetti</h3>
          <!-- no of tweets which includes likes, retweet and actual tweet -->
          <p>720 tweets</p>
          </div>
      </div>
      <!-- there will be a route here for the actual profile and a place for seeing the follower and people you following -->  
      <ProfileBody />
      <!-- <FollowerFollowingLayout /> -->
  </section>
</template>

<script setup>
import ProfileBody from './ProfileBody.vue';
// import FollowerFollowingLayout from './FollowerFollowingLayout.vue';

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