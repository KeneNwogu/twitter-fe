<template>
    <div class="body">
        <div class="banner-image">
            <VueperSlides>
                <VueperSlide
                    v-for="(slide, i) in banner_slides"
                    :image="slide.image"
                    :content="slide.content"
                    :key="i"
                ></VueperSlide>
            </VueperSlides>
        </div>
        <div class="login-form">
            <form autocomplete="off">
                <h3 class="form-header">Login</h3>
                <div class="form-input">
                    <label for="email">Email</label>
                    <div class="input">
                        <span><i class="uil uil-at"></i></span>
                        <input type="text" name="email" id="email" autocomplete="off">
                    </div>
                </div>
                <div class="form-input">
                    <label for="password">Password</label>
                    <div class="input">
                        <span><i class="uil uil-key-skeleton"></i></span>
                        <input type="password" name="password" id="password" autocomplete="off">
                        <span><i class="uil uil-eye"></i></span>
                    </div>
                </div>
                <div class="form-submit">
                    <div class="form-input">
                        <div class="input">
                            <input type="checkbox" name="remember" id="#rember">
                            <label for="remember">Remember me</label>
                        </div>
                    </div>
                    <input type="submit" value="LOGIN">
                </div>
                <p class="seperator">or</p>

                <a class="social-login facebook">
                    <span class="social-login__icon"><i class="uil uil-facebook"></i></span>
                    <p class="social-login__text">Login with Facebook</p>
                </a>
                <a class="social-login twitter">
                    <span class="social-login__icon"><i class="uil uil-twitter"></i></span>
                    <p class="social-login__text">Login with twitter</p>
                </a>
                <a class="social-login google">
                    <span class="social-login__icon"><i class="uil uil-google"></i></span>
                    <p class="social-login__text">Login with google</p>
                </a>
            </form>
        </div>
    </div>
</template>

<style>
    .body{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background: white;
        /* gap: 40%; */
        /* align-items: center; */
    }
    .body .banner-image, .body .login-form{
        width: 50%;
    }

    .body .login-form{
        align-self: center;  
    }

    .login-form form{
        width: 50%;
        margin: 0 auto;
        /* text-align: center; */
    }
    .login-form form .form-header{
        font-size: 1.5rem;
        margin-bottom: 1.3rem;
    }
    .banner-image .vueperslides{
        width: 50%;
        min-height: 100vh;
        position: absolute;
    }
    /* .vueperslides .vueperslides__inner, {
        min-height: 100vh;
    } */

    .form-input{
        margin-bottom: 1rem;
    }

    .form-input .input{
        width: 100%;
        display: flex;
        padding: 0.3rem;
        margin-top: 0.4rem;
        align-items: center;
        height: 3.2rem;
    }

    .input span{
        border: 0.5px solid gray;
        height: 100%;
        padding: 0.3rem;
    }

    .input span > i {
        font-size: 1.3rem;
        color: gray;
    }

    .form-input input[type="text"], .form-input input[type="password"]{
        display: block;
        padding: 0.3rem;
        border: 0.5px solid gray;
        /* outline: none; */
        background: none !important;
        height: 100%;
        flex-grow: 1;
    }

    form .form-submit{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .form-submit .form-input .input{
        border: none;
    }

    .form-submit .form-input .input > input{
        margin-right: 0.3rem;
    }

    input[type="submit"]{
        padding: 0.7rem 1.3rem;
        color: white;
        background: var(--bootstrap-primary);
    }

    .seperator{
        text-align: center;
        margin: 1.2rem 0;
    }

    a.social-login{
        width: 100%;
        display: flex;
        align-items: center;
        height: 2.6rem;
        margin-bottom: 1rem;
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

    .body .vueperslides__parallax-wrapper {
        position: relative;
        overflow: hidden;
        min-height: 100vh !important;
    }

    .body .vueperslides__arrows {
        display: none;
    }
</style>

<script setup>
    import { VueperSlides, VueperSlide } from 'vueperslides';
    const banner_slides = [
        {
            content: '<h3 style="color: white">Create and share your tweets.</h3>',
            image: require('@/assets/erik-mclean-cYQtW1HTpbg-unsplash.jpg')
        },
        {
            content: '<h3 style="color: white">Interact with people all over the world</h3>',
            image: require('@/assets/zac-durant-_6HzPU9Hyfg-unsplash.jpg')
        },
        {
            content: '<h3 style="color: white">Get Started!</h3>',
            image: require('@/assets/becca-tapert--A_Sx8GrRWg-unsplash.jpg')
        }
    ]
</script>