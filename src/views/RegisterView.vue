<template>
    <div class="body">
        <div class="imgDiv">
            <i class="uil uil-twitter"></i>
        </div>
        <div class="contentDiv">
            <SignupForm />
            <!-- <LoginView /> -->
        </div>
    </div>
</template>

<script setup>
    import SignupForm from './SignupForm.vue';
    // import LoginView from './LoginView.vue';
</script>

<style scoped>
.body{
    display: flex;
    height: fit-content;
    background-color: white;
}
.imgDiv{
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    flex: 1;
    max-height: 100vh;
    height: 100vh;
    background: url('../assets/twitterBg1.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    /* float: left; */
}
.imgDiv i{
    font-size: 27rem;
    mix-blend-mode: normal;
    opacity: 0.9;
}
.contentDiv{
    animation-name: left;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: 1s;
    margin: auto 0;
    /* display: none; */
}
@keyframes left {
  0% {
    opacity: 0;
    display: none;
    width: 0;
  }
  100% {
    opacity: 1;
    display: block;
    width: 46%;
  }
}
@media only screen and (max-width: 1024px){
    .imgDiv i{
        font-size: 20rem;
    }
    @keyframes left {
        0% {
            opacity: 0;
            display: none;
            width: 0;
        }
        100% {
            opacity: 1;
            display: block;
            /* padding: 20px 40px; */
            width: 50%;
        }
    }
}
@media only screen and (max-width: 414px){
    .imgDiv i{
        font-size: 15rem;
        animation-name: reduce;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-delay: 1s;
    }
    @keyframes reduce{
        0%{
            font-size: 15rem;
        }
        100%{
            font-size: 0;
        }
    }
    @keyframes left {
        0% {
            opacity: 0;
            display: none;
            width: 0;
        }
        100% {
            opacity: 1;
            display: block;
            /* padding: 20px 40px; */
            width: 100%;
        }
    }
}
</style>