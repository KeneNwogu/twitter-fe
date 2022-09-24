<template>
  <div class="overlay">
    <div class="structure">
      <div class="closeDiv">
        <i class="uil uil-multiply"></i>
      </div>
      <div class="img-container">
        <img src="@/assets/erik-mclean-cYQtW1HTpbg-unsplash.jpg" alt="tweet"/>
      </div>
      <div class="tweet-actions__icons">
          <div><i class="uil uil-comment-alt-upload"></i><p>222</p></div>
          <div><i class="uil uil-angle-double-up"></i><p>22.5k</p></div>
          <div><i class="uil uil-heart"></i><p>10</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .overlay{
    position: fixed;
    top:0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100vw;
    height: 100vh;
    z-index: 200;
  }
  .structure{
    width: 35%;
    height: fit-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .closeDiv{
    position: absolute;
    left: 30px;
    top: 10px;
    height: 37px;
    width: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    mix-blend-mode: normal;
    border-radius: 50%;
  }
  .closeDiv i{
    font-size: 1.3rem;
    color: var(--color-white);
    cursor: pointer;
  }
  .img-container{
    width: 100%;
    height: 100%;
  }
  .img-container img{
    max-width: 100%;
    height: 90vh;
    object-fit: cover;
  }
  .tweet-actions__icons{
    width: 85%;
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
  }
  .tweet-actions__icons div{
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: var(--color-white);
  }
  .tweet-actions__icons div p{
    margin-top: 5px;
    cursor: pointer;
  }
  .tweet-actions__icons div:nth-child(2) p{
    margin-top: 1px;
  }
  .tweet-actions__icons div:last-child p{
    margin-top: 3px;
  }
  .tweet-actions__icons div i{
    font-size: 1.4rem;
    margin-right: 0.4rem;
    cursor: pointer;
    color: var(--color-white);
  }
  @media only screen and (max-width: 414px){
    .structure{
      width: 100%;
      height: 100%;
    }
    .closeDiv{
      height: fit-content;
      width: fit-content;
      left: 20px;
      top: 20px;
      background-color: transparent;
    }
    .img-container{
      display: flex;
      align-items: center;
    }
    .img-container img{
      margin-top: 1rem;
      height: 63vh;
    }
    .tweet-actions__icons{
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
</style>