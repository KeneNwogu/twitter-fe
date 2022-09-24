<template>
  <div class="overlay">
    <div class="structure">
      <div class="closeDiv">
        <i class="uil uil-multiply"></i>
      </div>
      <div class="img-container">
        <img  src="@/assets/erik-mclean-cYQtW1HTpbg-unsplash.jpg" alt="profile_pic" class="profile-pic"/>
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
    width: 100%;
    height: 100%;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile-pic{
    height: 430px;
    width: 430px;
    object-fit: cover;
    clip-path: circle();
  }
  .cover-pic{
    width: 70%;
    height: 300px;
    object-fit: fill;
    image-rendering: -moz-crisp-edges;         /* Firefox */
    image-rendering:   -o-crisp-edges;         /* Opera */
    image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; 
  }
  @media only screen and (max-width: 414px){
    .closeDiv{
      height: fit-content;
      width: fit-content;
      left: 20px;
      top: 20px;
      background-color: transparent;
    }
    .profile-pic{
      width: 300px;
      height: 300px;
    }
    .cover-pic{
      width: 100%;
      height: 200px;
      object-fit: fill;
    }
  }

</style>

