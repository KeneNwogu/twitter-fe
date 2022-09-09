<template>
  <div class="headerDiv">
    <i class="uil uil-twitter animation a1"></i>
    <h2 class="animation a2">What's Happening now??</h2>
    <h3 class = "animation a3">Join Twitter today...</h3>
  </div>
  <div class="formDiv">
    <form action="/registration" method="post">
      <div class="user-details">
        <div class="nameDiv">
          <div class="input-box animation a4">
            <input type="text" name="" required>
            <label>Name</label>
          </div>
          <div class="input-box animation a4">
            <input type="text" name="" required>
            <label>Username</label>
          </div>
        </div>
        <div class="emailDiv">
          <div class="input-box animation a5">
            <input type="text" name=""  required>
            <label>E-mail</label>
          </div>
        </div>
        <div class="digitsDiv">
            <div class="input-box animation a6">
              <input type="text" name="" required>
              <label>Phone Number</label>
            </div>
            <div class="input-box animation a6">
              <input type="date" name="" placeholder="name" required>
              <!-- <label>Date of Birth</label> -->
            </div>
        </div>
        <div class="passwordDiv">
          <div class="input-box animation a7">
            <input type="password" name="" required>
            <label>Password</label>
          </div>
          <div class="input-box animation a7">
            <input type="password" name="" required>
            <label>Confirm Password</label>
          </div>
        </div>  
      </div>
    </form>
  </div>
  <div class="footerDiv">
    <button class="sign-up animation a8">Sign Up</button>
    <p class="animation a9">already have an account? <a>Login</a></p>
  </div>
</template>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Lusitana:400,700); 
  /* header div */
  .headerDiv{
    margin-top: 1.7rem;
    margin-left: 1.7rem;
  }
  .headerDiv i{
    font-size: 4rem;
    color: rgb(29, 155, 240);
  }
  .headerDiv h2{
    margin-top: 0.1rem; 
    font-family: inherit;
    /* text-transform: uppercase; */
    font-size: 2.7rem;
  }
  .headerDiv h3{
    font-family: inherit;
    margin-top: 0.1rem;
    font-size: 1.8rem;
  }
  /* form Div */
  .formDiv{
    margin-top: 2rem;
    margin-left: 1.7rem;
  }
  .user-details{
    width: 80%;
  }
  .nameDiv, .digitsDiv, .passwordDiv{
    display: flex;
    justify-content: space-between;
  }
  .nameDiv .input-box, .digitsDiv .input-box, .passwordDiv .input-box{
    width: 48%;
  }
  .digitsDiv .input-box:last-child{
    margin-top: -3px;
  }
.input-box{
  position: relative;
}

.input-box input:focus ~ label,
 .input-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: rgb(29, 155, 240);
  font-size: 12px;
}
.input-box input{
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid var(--color-gray);
  outline: none;
  background: transparent;
  transition: 0.43s ease-in;
}
.input-box input:focus,
.input-box input:valid{
border-bottom: 1px solid var(--color-black);
}
.input-box label{
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-family: 'Lusitana', sans-serif;
  font-size: 16px;
  color: black;
  pointer-events: none;
  transition: 0.5s;
}
/* footerDiv */
.footerDiv{
  margin-left: 1.7rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sign-up{
  outline: none;
  border: none;
  background-color: rgb(29, 155, 240);
  padding: 0.7rem 4.5rem;
  color: var(--color-white);
  border-radius: 30px;
  margin-bottom: 0.3rem;
  cursor: pointer;
}
.footerDiv p a{
  color: rgb(29, 155, 240);
  cursor: pointer;
  margin-left: 0.1rem;
}
/* intro animation */
.animation{
  animation-name: move;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-delay: 2s;
}

.a1 {
  animation-delay: 2s;
}

.a2 {
  animation-delay: 2.2s;
}

.a3 {
  animation-delay: 2.4s;
}

.a4 {
  animation-delay: 2.8s;
}

.a5 {
  animation-delay: 3s;
}

.a6 {
  animation-delay: 3.2s;
}
.a7{
  animation-delay: 3.4s;
}
.a8{
  animation-delay: 3.6s;
}
.a9{
  animation-delay: 3.8s;
}
@keyframes move {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }

  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
@media only screen and (max-width: 1024px){
    .headerDiv h2{
        font-size: 2.2rem;
    }
    .headerDiv h3{
        font-size: 1.5rem;
    }
}
@media only screen and (max-width: 414px){
  .headerDiv{
    margin-left: 0.7rem;
    margin-top: 0;
  }
  .headerDiv i{
    font-size: 3.8rem;
  }
  .headerDiv h2{
    font-size: 2rem;
  }
  .formDiv{
    margin-left: 0;
    margin-top: 0.8rem;
    /* margin-right: 0.7rem; */
  }
  .user-details{
    width: 80%;
    margin: 0 auto;
  }
  .nameDiv, .passwordDiv{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .nameDiv .input-box, .passwordDiv .input-box{
    width: 100%;
  }
  .footerDiv{
    margin-left: 0;
    width: 100%;
  }
  .sign-up{
    margin-bottom: 0.5rem;
  }
}
</style>