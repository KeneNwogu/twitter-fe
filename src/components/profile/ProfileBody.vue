<template>
  <div class="profile-body">
    <div class="profile-body_cover-img">
      <!-- <img src="@/assets/twitter__bg1.jpg" alt="" class="cover-img" /> -->
    </div>
    <div class="profile-body_imgDiv">
      <div class="profile-img">
        <img src="@/assets/Twitter_Bg.jpg" alt="" />
      </div>
      <!-- display button based on whether its the user or not -->
      <!-- <div class="btnDiv"><button class="btn-edit">Edit Profile</button></div> -->
      <div class="btnDiv"><button class="btn-follow btn-following"></button></div>
    </div>
    <div class="profile-body_infoDiv">
      <div class="infoDiv_name">
        <h3>Anastasie Alfonsetti</h3> 
        <small>@Pigeram</small>
      </div>
      <!-- display bio only if bio is not empty -->
      <div class="infoDiv_bio">
        <p>Mechanical Engineer ➡️ Full-stack Developer | Dev Content Creator | React JS | Javascript | Gastby | Self Taught Web Developer</p>
      </div>
      <div class="infoDiv_extras">
        <!-- display if the user website input isn,t empty -->
        <div class="websiteDiv">
          <i class="uil uil-link"></i>
          <p><a>https://github.com/nick335</a></p>
        </div>
        <!-- display if the user location input isn,t empty -->
        <div class="locationDiv">
          <i class="uil uil-map-marker"></i>
          <p>Hyderabad, India</p>
        </div>
        <!-- alawys displayed since we have the information as soon as the user registers-->
        <div class="dateJoinedDiv">
          <i class="uil uil-calendar-alt"></i>
          <p>Joined March 2022</p>
        </div>
      </div>
      <div class="infoDiv_stats">
        <div>
          <p><span>106</span> Following</p>
        </div>
        <div>
          <p><span>106</span> Followers</p>
        </div>
      </div>
      <!-- display based on when its user or not -->
      <!-- number of people you follow that follow that user -->
      <div>
        <p>Followed by 5 people you follow</p>
      </div>
    </div>
    <div class="profile-body_controls">
      <div>
        <h4 class="control active">Tweets</h4>
      </div>
      <div>
        <h4 class="control">Tweets & replies</h4>
      </div>
      <div>
        <h4 class="control">Media</h4>
      </div>
      <div>
        <h4 class="control">Likes</h4>
      </div>
    </div>
  </div>
  <div>
    <!-- tweets, tweets&replies, Media, likes -->
  </div>
</template>

<style scoped>
  .profile-body{
    background-color: var(--color-white);
    border-bottom-left-radius: var(--card-border-radius);
    border-bottom-right-radius: var(--card-border-radius);
    /* padding-bottom: 1rem; */
  }
  .profile-body_cover-img{
    margin: 0 1px;
    height: 200px;
    background-color: var(--color-black);
  }
  .profile-body_cover-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profile-body_imgDiv{
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    padding-top: 1rem;
  }
  .profile-img{
    z-index: 4;
    padding: 0.2rem;
    width: fit-content;
    border-radius: 100%;
    background-color: var(--color-white);
    margin-top: -90px;
  }
  .profile-img img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    clip-path: circle();
  }
  .btnDiv button{
    padding: 0.3rem 1.2rem;
    border-radius: 25px;
    cursor: pointer;
    font-size: 15px;
    font-family: inherit;
  }
  .btn-edit{
    background: var(--color-white);
    border: 1.5px solid rgb(229, 228, 226);
    color: var(--color-black);
    font-weight: 700;
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
  .profile-body_infoDiv{
    padding: 0 1rem;
    padding-top: 1.3rem;
  }
  .infoDiv_name h3{
    font-size: 1.25rem;
    line-height: 15px;
  }
  .infoDiv_name small{
    font-size: 0.85rem;
    font-weight: 300;
    margin: 0;
    padding: 0;
    color: var(--color-gray);
  }
  .infoDiv_bio p{
    margin-top: 0.8rem;
    line-height: 16px;
  }
  .infoDiv_extras {
    color: hsl(206, 10%,53%);
    width: 100%;
    padding-top: 0.5rem;
    margin-left: -5px;
  }
  .infoDiv_extras div{
    display: inline-block;
    align-items: center;
    word-wrap: normal;
    margin-right: 0.8rem;
  }
  .infoDiv_extras div:nth-child(3){
    margin-right: 0;
  }
  .infoDiv_extras div i{
    font-size: 1rem;
  }
  .infoDiv_extras div p{
    display: inline-block;
  }
  .websiteDiv p{
    color: var(--twitter-dark);
    cursor: pointer;
  }
  .infoDiv_stats{
    margin-top: 0.6rem;
    display: flex;
    margin-bottom: 0.87rem;
  }
  .infoDiv_stats div{
    margin-right: 0.8rem;
  }
  .infoDiv_stats div p {
    font-size: 0.85rem;
    cursor: pointer;
  }
  .infoDiv_stats div p span{
    font-weight: 700;
  }
  .profile-body_controls{
    display: flex;
    margin-top: 0.5rem;
  }
  .profile-body_controls div{
    width: 22%;
    padding-top: 1.3rem;
    padding-bottom: 0.9rem;
    cursor: pointer;
  }
  .control{
    font-weight: 400;
    font-size: 0.9rem;
    text-align: center;
    color: hsl(206, 13%, 42%);
  }
  .active{
    color: var(--color-black);
    font-weight: 600;
    position: relative;
  }
  .active::after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -14px;
    width: 55%;
    margin: 0 auto;
    height: 4.5px;
    border-radius: 20px;
    background-color: var(--twitter-dark);
  }
  .profile-body
  .profile-body_controls div:nth-child(2){
    width: 34%;
  }
  @media(hover: hover){
    .btn-edit:hover{
      background-color: rgb(229, 228, 226);
      transition: all ease-in-out 0.01ms;
    }
    .profile-body_controls div:hover{
      background-color: hsl(206, 10%,89%);
    }
    .btn-following:hover::before{
      content: 'unfollow';
      transition: all ease-in 0.1s;
    }
    .btn-following:hover{
      border-color: hsl(349,100%,93.5%);
      background-color: hsl(349,100%,93.5%);
      color: red;
      transition: all ease-in-out 0.1s;
    }
    .infoDiv_stats div p:hover,
    .websiteDiv p:hover{
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 414px){
    .profile-body_cover-img{
      height: 150px;
    }
    .profile-img{
      margin-top: -65px;
    }
    .profile-img img{
      height: 100px;
      width: 100px;
    }
  }
</style>