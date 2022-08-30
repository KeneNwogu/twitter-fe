<template>
  <div class="comment">
    <div class="comment-imgDiv">
      <div class="profile-photo">
      <img src="@/assets/logo.png" alt="">
    </div>
    </div>
    <div class="comment-infoDiv">
      <div class="comment-userInfo">
        <div>
          <p>Anastasie Alfonsetti
            <small class="post-info__locale">@Pigeram</small>
          </p>
          <p>Replying to <small class="post-info__xxxx">@Pigeram</small></p> 
        </div>
        <span class="post-info__options">
         <i class="uil uil-ellipsis-v"></i>
        </span>
      </div>
      <div class="post-info__para">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa nihil quod eveniet magni praesentium tempore laboriosam voluptatibus quasi. Rem voluptas esse culpa ipsa facilis debitis harum, saepe maiores. Ut.</p>
      </div>
      <div class="tweet-actions">
        <div class="tweet-actions__icons">
          <span><i class="uil uil-comment-alt-upload"></i></span>
          <span><i class="uil uil-angle-double-up"></i></span>
          <span><i class="uil uil-heart"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
    .comment{
    padding-top: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: flex;
    border-bottom: 0.3px solid var(--color-gray);
  }
  .comment-imgDiv{
    width: fit-content;
    margin-right: 0.6rem;
  }
  .comment-userInfo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  .post-info__locale{
    color: var(--color-gray);
    font-size: 0.86rem;
  }
  .post-info__xxxx{
    color: blue;
    font-size: 0.75rem;
    font-weight: 500;
  }
  .post-info__para{
    margin-bottom: 0.5rem;
  }
  .profile-photo{
    width: 100%;
  }
  .post-info__options i{
    font-size: 1.3rem;
  }
  .tweet-actions{
    width: 78%;
    margin-bottom: 0.6rem;
 }
  .tweet-actions__icons{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .tweet-actions__icons i{
    font-size: 1.3rem;
}
}

</style>