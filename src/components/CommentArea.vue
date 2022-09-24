<template>
  <div class="overlay-div">
    <div class="comment-area">
      <div class="iconDiv">
        <i class="uil uil-multiply"></i>
      </div>
      <div class="comment-receiver">
        <div class="comment-reciever_imgDiv">
          <div class="profile-photo">
            <img src="@/assets/logo.png" alt="">
          </div>
        </div>
        <div class="comment-receiver_infoDiv">
          <div class="receiver-userInfo">
            <div>
              <p>Anastasie Alfonsetti
                <span class="post-info__locale">@Pigeram</span>
              </p>
            </div>
          </div>
          <div class="receiver-post__para">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa nihil quod eveniet magni praesentium tempore laboriosam voluptatibus quasi. Rem voluptas esse culpa ipsa facilis debitis harum, saepe maiores. Ut. Lorem, ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sint, tempora architecto id itaque nostrum</p>

            
          </div>
          <div class="receiver__locale">
            <p>Replying to <span class="post-info__locale">@Pigeram</span></p>
          </div>
        </div>
      </div>
      <div class="comment_input-area">
        <div class="comment-imgDiv">
          <div class="profile-photo">
            <img src="@/assets/logo.png" alt="">
          </div>
        </div>
        <div class="input-area">
          <textarea placeholder="Tweet Your reply"></textarea>
        </div>  
      </div>
      <div class="replyDiv">
        <button>Reply</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay-div{
  position: fixed;
  top:0;
  left: 0;
  z-index: 20;
  background: linear-gradient(to right, rgba(12, 4, 4, 0.3), rgba(12, 4, 4, 0.3));
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.comment-area{
  width: 38%;
  max-height: 70vh;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
  margin-left: 2.5rem;
  background-color: var(--color-white);
  border-radius: var(--card-border-radius);
  padding: 1rem;
  padding-top: 0rem;
  z-index: 25;
}
.comment-receiver{
  display: flex;
  padding-bottom: 1rem;
}
.comment-receiver_infoDiv{
  margin-left: 0.5rem;
}
.receiver-userInfo p{
  font-weight: 700;
  font-size: 0.8rem;
  padding-bottom: 0.1rem;
}
.receiver-userInfo p span{
  font-weight: 400;
}
.receiver-post__para p{
  line-height: 1.15rem;
}
.receiver__locale{
  margin-top: 1.5rem;
}
.receiver__locale p{
  font-size: 0.83rem;
  font-weight: 400;
  /* color: var(--color-gray); */
}
.receiver__locale p span{
  color: var(--twitter-light);
}
.comment_input-area{
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
}
.input-area{
  width: 100%;
}
.input-area textarea{
  padding: 0.2rem 0;
  padding-left: 0.5rem;
  resize: none;
  width: inherit;
  min-height: 100px;
}
.input-area textarea::placeholder{
  font-size: 1rem;
  word-spacing: -0.3rem;
}
.replyDiv{
  margin-top: 1rem;
  display: flex;
}  
.replyDiv button{
  margin-left: auto;
  border: none;
  outline: none;
  padding: 0.6rem 1.6rem;
  background-color: var(--twitter-light);
  color: var(--color-white);
  opacity: 0.5;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
}
@media(hover :hover){
  .replyDiv button:hover{
    opacity: 1;
  }
}
.iconDiv{
  padding: 0.8rem 0;
}
.iconDiv i{
  font-size: 1.2rem;
  cursor: pointer;
}
@media only screen and (max-width: 414px){
  .overlay-div{
    align-items: flex-start;
    max-height: 100vh;
    overflow: scroll;
    scroll-behavior: smooth;
    overscroll-behavior: contain;
  }
  .comment-area{
    width: 100%;
    margin-left: 0rem;
    border-radius: 0;
    min-height: 100%;
    padding: 0;
  }
  .iconDiv{
    background-color: var(--color-white);
    box-shadow: .2px 0.1px 0.3px hsl(var(--shadow-color) / 0.29),
    0.6px 0.2px 0.7px -0.6px hsl(var(--shadow-color) / 0.29),
    1.1px 0.4px 1.3px -1.2px hsl(var(--shadow-color) / 0.29),
    2.2px 0.8px 2.6px -1.9px hsl(var(--shadow-color) / 0.29),
    4.3px 1.5px 5.1px -2.5px hsl(var(--shadow-color) / 0.29);
    padding-left: 1rem;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 400;
  }
  .comment-receiver{
    padding: 0 1rem;
    padding-top: 1rem;
    z-index: -1;
  }
  .comment_input-area{
    padding: 0 1rem;
    padding-top: 1rem;
  }
  .replyDiv button{
    position: fixed;
    top: 0.7rem;
    right: 1rem;
    z-index: 400;
    opacity: 1;
  }
}
</style>