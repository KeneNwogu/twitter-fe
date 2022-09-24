<template>
  <div class="overlay">
    <div class="edit-profile_structure">
      <div class="edit-profile_header">
        <div class="left">
          <div class="icon">
            <i class="uil uil-multiply"></i>
          </div>
            <h4>Edit profile</h4>
        </div>
        <div class="right">
          <button class="btn-save">Save</button>
        </div>
      </div>
      <div class="edit-profile_form">
        <form autocomplete="off" autocapitalize="on">
          <div class="cover-pic">
           <div class="position">
              <label class="-label" for="file">
              <span class="uil uil-camera-change"></span>
              </label>
              <span class="uil uil-multiply"></span>
              <input id="file" type="file" accept=".png, .jpg" />
           </div>
          <!-- the current pic before the change -->
          <img src="@/assets/Twitter_Bg.jpg" id="output" />
          </div>
          <div class="profile-pic">
           <div class="position">
              <label class="-label" for="file">
              <span class="uil uil-camera-change"></span>
              </label>
              <input id="file" type="file" accept=".jpg, .png" />
           </div>
          <!-- the current pic before the change -->
          <img src="@/assets/Twitter_Bg.jpg" id="output" />
          </div>
          <div class="inputsDiv">
            <div class="form-input"> 
                <input type="text" name="name"  required/>
                <label >Name</label>
            </div>
            <div class="form-input form-bio">
                <textarea></textarea>
                <label>Bio</label>
            </div>
            <div class="form-input">
              <input type="text" name="location" />
              <label for="website">Location</label>
            </div>
            <div class="form-input">
              <input type="text" name="website" />
              <label for="website">Website</label>
            </div>
          </div>  
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right,rgba(153,153,153, 0.3), rgba(153,153,153, 0.25) ) ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }
  .edit-profile_structure{
    padding-bottom: 3rem;
    margin-left: 1.5rem;
    width: 44%;
    background-color: var(--color-white);
    border-radius: var(--card-border-radius);
    min-height: 50vh;
    max-height: 95vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
  }
  .edit-profile_header{
    padding: 1rem;
     width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-white);
    position: sticky;
    position: -webkit-sticky;
    top:0;
    z-index: 1500000; 
    align-items: center;
    border-bottom: 1px solid hsl(180,14.3%,89.3%);
  }
  .left{
    display: flex;
    align-items: center;
    width: 50%;
  }
  .left .icon {  
    width: 30px;
    margin-right: 1.9rem;
    height: 30px;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
  }
  .left .icon i{
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
  }
  .left h4{
    font-family: inherit;
    font-weight: 600;
    font-size: 1.2rem;
  }
  .right{
    margin-right: auto;
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .right button{
    padding: 0.3rem 1.2rem;
    border-radius: 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
  }
  .btn-save{
    background-color: var(--color-black);
    color: var(--color-white);
  }
  .cover-pic{
    margin: 0 2px;
    position: relative;
    width: auto;
  }
  .cover-pic .position{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .cover-pic label span{
    margin-right: 3rem;
    cursor: pointer;
    font-size: 2.4rem;
    padding-left: 0.25rem;
    height: 58px;
    width: 58px;
    border-radius: 50%;
    color: var(--color-black);
  }
  .cover-pic span{
    font-size: 2.0rem;
    cursor: pointer;
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }
  .cover-pic input{
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    height: 120px;
    width: 120px;
    object-fit: fill;
  }
  .cover-pic img{
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  .profile-pic{
    background-color: var(--color-white);
    height: inherit;
    border-radius: 50%;
    padding: 0.3rem;
    width: fit-content;
    position: relative;
    margin-left: 1rem;
    margin-top: -70px;
  }
  .profile-pic .position label{
    background-color: rgba(0,0,0, 0.35);
    position: absolute;
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  .profile-pic .position label span {
    font-size: 2.3rem;
    cursor: pointer;
  }
  .profile-pic  img{
    clip-path: circle();
    height: 120px;
    width: 120px;
    object-fit: cover;
  }
  .profile-pic .position input{
    display: none;
  }
  .inputsDiv{
    margin-top: 1rem;
  }
  .form-input{
    width: 95%;
    margin: 0 auto;
    position: relative;
    border: 1px solid hsl(180,14.3%,85.3%);
    margin-bottom: 1.2rem;
    height: 57px;
    border-radius: 5px;
    display: flex;
    align-items: flex-end;
  }
  
  .form-input label{
    position: absolute;
    top: 6px;
    left: 7px;
    padding: 10px 0;
    font-family: inherit;
    font-size: 13px;
    color: black;
    pointer-events: none;
    transition: 0.5s;
  }
  .form-bio label{
    top: 8px;
  }
  .form-input:focus-within{
    border: 2px solid rgb(29, 155, 240);
  }
  .form-input input{
    width: 100%;
    display: flex;
    font-size: 16px;
    margin-left: 7px;
    padding: 0px 0;
    align-items: center;
    margin-bottom: 5px;
    border: none;
    outline: none;
    background: transparent;
    transition: 0.43s ease-in;
  }
  .form-bio{
    height: 100px;
  }
  .form-bio textarea{
    width: 100%;
    resize: none;
    height: 58%;
    margin-bottom: 10px;
    padding-left: 7px;
  }
  .form-input input:focus ~ label,
  .form-bio textarea:focus ~ label {
    top: -3px;
    left: 7px;
    color: rgb(29, 155, 240);
    font-size: 10px;
  }
  @media (hover : hover){
    .left .icon:hover{
      background-color: hsl(180,14.3%,85.3%);
    }
    .cover-pic span:hover{
      background-color: rgba(212,223,223, 0.7);
    }
  }
  @media only screen and (max-width: 414px){
    .overlay{
      max-height: 100vh;
      overflow: scroll;
      overscroll-behavior: contain;
      align-items: flex-start;
    }
    .edit-profile_structure{
      width: 100%;
      max-height: 100vh;
      margin-left: 0rem;
      border-radius: 0;
    }
    .left .icon{
      margin-right: 1rem;
    }
  }
  
</style>