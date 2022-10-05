<template>
        <div class="headerDiv">
            <i class="uil uil-twitter animation a1"></i>
            <h2 class="animation a2">What's Happening now??</h2>
            <h3 class = "animation a3">Let's Find Out, Login!</h3>
        </div>
        <div class="login-form">
            <div class="error" v-if="error.message.length > 0">
                <p>{{ error.message }}</p>
            </div>
            <form autocomplete="off" @submit.prevent="loginSubmit">
                <div class="form">
                    <div class="form-input animation a4"> 
                        <input type="text" name="email" v-model="form.email" required>
                        <label >E-mail</label>
                    </div>
                    <div class="form-input animation a5">
                        <input type="password" name="password" id="password" v-model="form.password" autocomplete="off" required>
                        <label for="password">Password</label>
                        <span><i class="uil uil-eye"></i></span>
                    </div>
                </div>
                <div class="form-submit">
                    <div class="form-input animation a6">
                        <div class="input">
                            <input type="checkbox" name="remember" id="#rember">
                            <label for="remember">Remember me</label>
                        </div>
                    </div>
                    <!-- disabled class -->
                    <input type="submit" :class="form.submitted ? 'disabled' : ''" value="LOGIN" class="animation a6" :disabled="form.submitted">
                </div>
                <p class="signup-notice animation a7">Don't have an account? <a>Sign up</a></p>
                <p class="seperator animation a8">or</p>

                <a class="social-login facebook animation a9">
                    <span class="social-login__icon"><i class="uil uil-facebook"></i></span>
                    <p class="social-login__text">Login with Facebook</p>
                </a>
                <a class="social-login twitter animation a9">
                    <span class="social-login__icon"><i class="uil uil-twitter"></i></span>
                    <p class="social-login__text">Login with twitter</p>
                </a>
                <a class="social-login google animation a9">
                    <span class="social-login__icon"><i class="uil uil-google"></i></span>
                    <p class="social-login__text">Login with google</p>
                </a>
            </form>
        </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    let form = ref({ email: '', password: '', submitted: false, success: false })

    let error = ref({ message: '' })

    function loginSubmit(){
        form.value.submitted = true
        fetch('https://tweeter-apiclone.herokuapp.com/api/v1/users/get-token', {
            method: 'POST',
            body: JSON.stringify({
                email: form.value.email,
                password: form.value.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async (res) => {
                if (res.status != 200) {
                    throw Error((await res.json()).detail)
                }
                return res.json()
            })
            .then((data) => {
                form.value.success = true;
                store.commit('SET_USER_TOKEN', data)

                // TODO: perform redirect to home page
            })
            .catch((e) => {
                form.value.submitted = false
                console.log(e.message.toString())
                error.value.message = e.message
            })
    }
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Lusitana:400,700); 

     /* header div */
     .headerDiv{
        margin-left: auto;
        margin-right: auto;
        width: 70%;
   }
    .headerDiv i{
        display: none;
        font-size: 4rem;
        color: rgb(29, 155, 240);
    }
    .headerDiv h2{
        font-family: inherit;
        font-size: 2.1rem;
        font-weight: 500;
    }
    .headerDiv h3{
        font-family: inherit;
        margin-top: 0.1rem;
        font-size: 1.5rem;
        font-weight: 300;
    }
    .body .login-form{
        align-self: center;  
    }

    .login-form form{
        width: 70%;
        margin: 0 auto;
    }
    .form{
        padding-top: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .form-input{
        margin-bottom: 1rem;
    }
    .form .form-input{
        width: 100%;
        margin: 0 auto;
        position: relative;
    }
    .form-input input:focus,
     .form-input input:valid{
        border-bottom: 1px solid var(--color-black);
    }
    .form .form-input label{
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
    .form .form-input input{
        width: 100%;
        display: flex;
        font-size: 16px;
        padding: 10px 0;
        align-items: center;
        margin-bottom: 25px;
        border: none;
        border-bottom: 1px solid var(--color-gray);
        outline: none;
        background: transparent;
        transition: 0.43s ease-in;
    }
    .form .form-input span i{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 1.3rem;
        color: gray;
    }
     .form-input input:focus ~ label,
    .form .form-input input:valid ~ label  {
        top: -15px;
        left: 0;
        color: rgb(29, 155, 240);
        font-size: 12px;
    }

    form .form-submit{
        display: flex;
        justify-content: space-between;
        align-items: center;
         height: 37px;
    }
    .form-submit .form-input{
        margin:0;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center; 
    }
    .form-submit .form-input .input{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .form-submit .form-input .input > input{
        margin-right: 0.3rem;
        cursor: pointer;
    }

    input[type="submit"]{
        padding: 0.7rem 1.3rem;
        color: white;
        background: var(--bootstrap-primary);
        cursor: pointer;
    }

    .seperator{
        text-align: center;
        margin: 0.7rem 0;
    }

    a.social-login{
        width: 100%;
        display: flex;
        align-items: center;
        height: 2.6rem;
        margin-bottom: 1rem;
        cursor: pointer;
        /* padding: 0.4rem 0; */
    }


    .social-login .social-login__icon i{
        font-size: 1.3rem;
        color: white;
        padding: 0.3rem;
    }

    .social-login .social-login__text{
        text-transform: uppercase;
        color: white;
        flex-grow: 1;
        text-align: center;
        height: 100%;
        padding: 0.6rem !important;
        align-self: center;
    }

    .social-login .social-login__text, .social-login .social-login__icon{
        padding: 0.3rem;
        height: 100%;
        align-self: center;
    }
    .signup-notice{
        text-align: center;
        margin-top: 1rem;
    }
    .signup-notice a{
        cursor: pointer;
        color: rgb(29, 155, 240);
        margin-left: 0.1rem;
    }
    

    .social-login.google .social-login__text{
        background: var(--google-dark);
    }
    .social-login.twitter .social-login__text{
        background: var(--twitter-dark);
    }
    .social-login.facebook .social-login__text{
        background: var(--facebook-dark);
    }

    .social-login.google .social-login__icon{
        background: var(--google-light);
    }
    .social-login.twitter .social-login__icon{
        background: var(--twitter-light);
    }
    .social-login.facebook .social-login__icon{
        background: var(--facebook-light);
    }
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
.a10{
    animation-delay: 4s;
}
.a11{
    animation-delay: 4.2s;
}
@keyframes move {
  0% {
    opacity: 0;
    visibility: hidden;
    /* transform: translateY(-40px); */
  }

  100% {
    opacity: 1;
    visibility: visible;
    /* transform: translateY(0); */
  }
}  
@media only screen and (max-width: 1024px){
    .headerDiv h2{
        font-size: 2.2rem;
    }
    .headerDiv h3{
        font-size: 1.5rem;
    }
    .login-form form{
        width: 60%;
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
    .login-form form{
        width: 80%;
    }
}
</style>