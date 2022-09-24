<template>
  <div class="layout">
    <div class="profile-img">
      <img src="@/assets/Twitter_Bg.jpg" alt="" />
    </div>
    <div class="profile-content">
      <div class="profile-content_topDiv">
        <div class="topDiv_nameDiv">
          <h3>Anastasie Alfonsetti</h3> 
          <small>@Pigeram</small>
        </div>
        <div class="topDiv_btnDiv">
          <!-- if user is not following we change the class to btn-follow -->
          <button class="btn-following"></button>
        </div>
      </div>
      <div class="profile-content_bio">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae necessitatibus perspiciatis vel numquam. Eveniet animi ducimus ad adipisci.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .layout{
    background-color: var(--color-white);
    cursor:pointer;
    display: flex;
    padding: 1rem 1rem;
  }
  .profile-img{
    margin-right: 1rem;
  }
  .profile-img img{
    height:55px;
    width: 55px;
    clip-path: circle();
    object-fit: cover;
  }
  .topDiv_nameDiv h3{
    font-size: 0.75rem;
    line-height: 15px;
  }
  .topDiv_nameDiv small{
    font-size: 0.65rem;
  }
  .profile-content_topDiv{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0.65rem;
  }
  .topDiv_btnDiv button{
    padding: 0.3rem 1.1rem;
    border-radius: 25px;
    cursor: pointer;
    font-size: 11px;
    font-weight: 600;
    font-family: inherit;
  }
  .btn-follow::before{
    content: 'Follow';
  }
  .btn-following::before{
    content: 'Following';
  }
  .btn-follow{
    background-color: var(--color-black);
    color: var(--color-white);
    text-transform: capitalize;
    font-weight: 500;
  }
  .btn-following{
    border: 1.5px solid rgb(229, 228, 226);
    background-color: var(--color-white);
    color: var(--color-black);
  }
  .profile-content_bio p{
    font-size: 11.8px;
    line-height: 15px;
  }
  @media(hover: hover){
    .layout:hover{
      background-color: hsl(180,14.3%,95.3%);
    }
    .btn-following:hover::before{
      content: 'unfollow';
      transition: all ease-in 0.1s;
    }
    .btn-following:hover{
      border-color: hsl(349,100%,93.5%);
      background-color: hsl(349,100%,93.5%);
      /* transform: scale(0.95); */
      color: red;
      transition: all ease-in-out 0.1ms;
    }
  }
</style>