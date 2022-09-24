<template>
  <div class="controls">
    <div class="control active">
      <h5>Following</h5>
    </div>
    <div class="control">
      <h5>Followers</h5>
    </div>
  </div>
  <div>
    <FollowerRoute />
  </div>
</template>

<script setup>
import FollowerRoute from './FollowerRoute.vue';

</script>

<style scoped>
  .controls{
    display: flex;
    background-color: var(--color-white);
    position: sticky;
    position: -webkit-sticky;
    top: 60px;
    z-index: 9;
  }
  .control{
    width: 50%;
    padding-top: 1rem;
    padding-bottom: 0.8rem;
    cursor: pointer;
  }
  .control h5{
    font-weight: 500;
    font-size: 0.8rem;
    text-align: center;
    color: hsl(206, 10%, 53%)
  }
  .active{
    position: relative;
  }
  .active h5{
    color: var(--color-black);
    font-weight: 600;
  }
  .active::after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    width: 40%;
    margin: 0 auto;
    height: 3.5px;
    border-radius: 20px;
    background-color: var(--twitter-dark);
  }
  
  @media(hover: hover){
    .control:hover{
      background-color: hsl(206, 10%, 95%);
    }
  }
</style>