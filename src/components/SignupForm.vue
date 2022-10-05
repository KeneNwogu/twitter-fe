<template>
  <div class="headerDiv">
    <img src="@/assets/TwitterIcon.png" alt="twitter" class="signup-logo animation a1"/>
    <h2 class="animation a2">What's Happening now??</h2>
    <h3 class = "animation a3">Join Twitter today...</h3>
  </div>

  <div class="formDiv">

    <form action="/registration" method="post">
      <div class="user-details">
        <div class="nameDiv">
          <div class="input-box animation a4" :class="form.name.isValid.value ? 'error' : ''">
            <input type="text" name="name" v-model="form.name.field.value" required>
            <label>Name</label>
            <!-- error message goes here -->
            <p v-if="form.name.error.value">{{ form.name.error.value }}</p>
            <!-- end error message  -->
          </div>
          <div class="input-box animation a4" :class="form.username.isValid.value ? 'error' : ''">
            <input type="text" name="username" v-model="form.username.field.value" required>
            <label>Username</label>
            <!-- error message goes here -->
            <p v-if="form.username.error.value">{{ form.username.error.value }}</p>
            <!-- end error message  -->
          </div>
        </div>
        <div class="emailDiv">
          <div class="input-box animation a5" :class="form.email.isValid.value ? 'error' : ''">
            <input type="text" name="email" v-model="form.email.field.value" required>
            <label>E-mail</label>
            <!-- error message goes here -->
            <p v-if="form.email.error.value">{{ form.email.error.value }}</p>
            <!-- end error message  -->
          </div>
        </div>
        <div class="digitsDiv">
            <div class="input-box animation a6" :class="form.phone.isValid.value ? 'error' : ''">
              <input type="text" name="phone" v-model="form.phone.field.value" required>
              <label>Phone Number</label>
              <!-- error message goes here -->
              <p v-if="form.phone.error.value">{{ form.phone.error.value }}</p>
              <!-- end error message  -->
            </div>
        
            <div class="input-box animation a6" :class="form.birth_date.isValid.value ? 'error' : ''">
              <input type="date" name="birth_date" v-model="form.birth_date.field.value" placeholder="name" required>
              <!-- error message goes here -->
              <p v-if="form.birth_date.error.value">{{ form.birth_date.error.value }}</p>
              <!-- end error message  -->
            </div> 
        </div>
        <div class="passwordDiv">
          <div class="input-box animation a7" :class="form.password.isValid.value ? 'error' : ''">
            <input type="password" name="password" v-model="form.password.field.value" required>
            <label>Password</label>
            <!-- error message goes here -->
            <p v-if="form.password.error.value">{{ form.password.error.value }}</p>
            <!-- end error message  -->
          </div>
          
          <div class="input-box animation a7" :class="form.confirm_password.isValid.value ? 'error' : ''">
            <input type="password" name="confirm_password" v-model="form.confirm_password.field.value" required>
            <label>Confirm Password</label>
            <!-- error message goes here -->
            <p v-if="form.confirm_password.error.value">{{ form.confirm_password.error.value }}</p>
            <!-- end error message  -->
          </div>
        </div>  
      </div>
    </form>
  </div>
  <div class="footerDiv">
    <button class="sign-up animation a8" @mouseover="validateForm">Sign Up</button>
    <p class="animation a9">Already have an account? <a>Login</a></p>
  </div>
</template>

<script>
import { watch, ref } from 'vue'
export default {
  setup() {
    let form = {
      name: { 
        field: ref(''),
        error: ref(null),
        isValid: ref(true),
        validator(){
          // check length and etc
          this.field.value = this.field.value.trim()
          if(this.field.value.length < 5){
            this.isValid.value = false
            this.error.value = 'name is too short'
          }
          else{
            this.isValid.value = true
            this.error.value = null
          }
        }
      },
      username: { 
        field: ref(''),
        error: ref(null),
        isValid: ref(true),
        validator(){
          // check for length and etc
          this.field.value = this.field.value.trim()
          if(this.field.value.length < 5){
            this.isValid.value = false
            this.error.value = 'username is too short'
          }
          else{
            this.isValid.value = true
            this.error.value = null
          }
        }
      },
      email: { 
        field: ref(''),
        error: ref(null),
        isValid: ref(true),
        validator(){
          this.isValid.value = this.field.value.toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
          if(!this.isValid.value) this.error.value = 'invalid email'; 
          else {
            this.isValid.value = true
            this.error.value = null
          }
        }
      },
      phone: { 
        field: ref(''),
        error: ref(null),
        isValid: ref(true),
        validator(){
          // check for valid phone number
          if(this.field.value.length != 11 || !this.field.value.match(
            /^[0-9]+/
          )){
            this.isValid.value = false
            this.error.value = 'invalid phone number'
          }
          else{
            this.isValid.value = true
            this.error.value = null
          }
        }
      },
      birth_date: { 
        field: ref(''),
        error: ref(null),
        isValid: ref(true),
        validator(){
          // check that age is greater than 13
          let current_date = new Date();
          let year = parseInt(this.field.value.split('-')[0])
          if (current_date.getFullYear() - year <= 13){
            this.isValid.value = false;
            this.error.value = 'age must be greater than 13'
          }
          else{
            this.isValid.value = true
            this.error.value = null
          }
        }
      },
      password: { 
        field: ref(''),
        error: ref(null),
        isValid: ref(true),
        validator(){
          // check password length
          this.field.value = this.field.value.trim()
          if(this.field.value.length < 8){
            this.isValid.value = false
            this.error.value = 'password length is too short'
          }
          else{
            this.isValid.value = true
            this.error.value = null
          }
        }
      }, 
      confirm_password: { 
        field: ref(''),
        error: ref(null),
        isValid: ref(true),
        validator() {
          this.field.value = this.field.value.trim()
          if(form.password.field.value !== this.field.value){
            this.isValid.value = false
            this.error.value = 'confirm password not equal to password'
          }
          else{
            this.isValid.value = true
            this.error.value = null
          }
        }
      }
    }

    for (const element in form) {
      let form_element = form[element]
      watch(form_element.field, () => {
        form_element.validator()
      })
    }

    const canSubmit = ref(false)

    function validateForm(){
      let field_valid_states = []
      for (const element in form) {
        let form_element = form[element]
        form_element.validator()
        field_valid_states.push(form_element.isValid.value)
      }

      if (field_valid_states.every((value) => value == true))
        canSubmit.value = true
      else canSubmit.value = false
    }
    
    return { form, canSubmit, validateForm }
  },
}
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Lusitana:400,700); 
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
  /* header div */
  .headerDiv{
    width: 83%;
    margin:0 auto;
    /* margin-top: 0.7rem; */
  }
  .signup-logo{
    height: 60px;
    width: 60px;
    object-fit: cover;

  }
  .headerDiv h2{
    margin-top: 30px; 
    font-family: Inter;
    font-weight: 500;
    font-size: 2.5rem;
  }
  .headerDiv h3{
    font-family: Inter, 'san-serif';
    font-weight: 400;
    margin-top: 0.1rem;
    font-size: 1.8rem;
  }
  /* form Div */
  .formDiv{
    margin-top: 2rem;
    /* margin-left: 1.7rem; */
  }
  .user-details{
    width: 83%;
    margin-left: auto;
    margin-right: auto;
  }
  .nameDiv, .digitsDiv, .passwordDiv{
    display: flex;
    justify-content: space-between;
  }
  .nameDiv .input-box, .digitsDiv .input-box, .passwordDiv .input-box{
    width: 48%;
  }
  .digitsDiv .input-box:last-child{
    margin-top: -2px;
  }
  .digitsDiv .input-box:last-child input{
    padding-top: 10px;
    padding-bottom: 11px;
  }
.input-box{
  position: relative;
}

/* !important: Error message styling is here */
.input-box > p{
  position: absolute;
  bottom: 8px;
  padding-left: 0.6rem;
}

.input-box input:focus ~ label,
 .input-box input:valid ~ label {
  top: -8px;
  left: 15px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 11px;
}
.input-box input{
  width: 100%;
  padding: 15px 15px;
  padding-bottom: 8px;
  font-size: 14px;
  color: black;
  margin-bottom: 30px;
  border: none;
  border: 1.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  outline: none;
  background: transparent;
  transition: 0.43s ease-in;
}
.input-box input:focus,
.input-box input:valid{
border: 1.5px solid rgba(0, 0, 0, 0.7);
}
.input-box label{
  position: absolute;
  top: 2px;
  left: 15px;
  padding: 10px 0;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transition: 0.5s;
}
/* footerDiv */
.footerDiv{
  /* margin-left: 1.7rem; */
  width: 83%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
.sign-up{
  outline: none;
  border: none;
  background: #03A9F4;
  padding: 12px 0;
  width: 100%;
  color: var(--color-white);
  border-radius: 12px;
  font-family: Inter;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
}
.footerDiv p{
  margin-top: 0.1rem;
  font-weight: 400;
  font-family: 'Inter';
  font-size: 0.9rem;
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
    margin-top: 10px;
  }

  .headerDiv h2{
    font-size: 2rem;
    margin-top: 10px;
  }
  .formDiv{
    margin-left: 0;
    margin-top: 0.8rem;
    /* margin-right: 0.7rem; */
  }
  .user-details{
    width: 95%;
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
    width: 95%;
  }
  .sign-up{
    margin-bottom: 0.5rem;
  }
}
</style>