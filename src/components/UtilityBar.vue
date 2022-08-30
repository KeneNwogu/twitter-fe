<template>
    <div class="right">
        <div class="container">
            <aside class="toolbar">
                <a class="tool">
                    <span class="tool-icon"><i class="uil uil-message"></i></span>
                    <span class="tool__expand">Messages</span>
                </a>
                <a class="tool">
                    <span class="tool-icon"><i class="uil uil-user"></i></span>
                    <span class="tool__expand">Profile</span>
                </a>
                <a class="tool">
                    <span class="tool-icon"><i class="uil uil-search"></i></span>
                    <span class="tool__expand">Search</span>
                </a>
                <a class="tool">
                    <span class="tool-icon"><i class="uil uil-tachometer-fast-alt"></i></span>
                    <span class="tool__expand">Dashboard</span>
                </a>
                <a class="tool">
                    <span class="tool-icon"><i class="uil uil-sign-in-alt"></i></span>
                    <span class="tool__expand">Sign In</span>
                </a>
                <a class="tool">
                    <span class="tool-icon"><i class="uil uil-user-plus"></i></span>
                    <span class="tool__expand">Sign Up</span>
                </a>

                <a class="tool">
                    <span class="tool-icon"><i class="uil uil-sign-out-alt"></i></span>
                    <span class="tool__expand">Sign Out</span>
                </a>  
            </aside>
        </div>
        <!-- <aside class="mobile toolbar">
            <div class="mobile toolbar-overlay">
                <span class="toolbar-overlay__item">
                    <p>Photos</p>
                    <i class="uil uil-camera"></i>
                </span>
                <span class="toolbar-overlay__item">
                    <p>Bookmarks</p>
                    <i class="uil uil-favorite"></i>
                </span>
                <span class="toolbar-overlay__item">
                    <p>Explore</p>
                    <i class="uil uil-search-plus"></i>
                </span>
            </div>
            <div class="overlay-open" @click="toggle_overlay()" @open-toolbar="open_toolbar" @close-toolbar="close_toolbar">
                <span class="toolbar-overlay__item" style="display: none">
                    <p>Tweet</p>
                    <i class="uil uil-twitter"></i>
                </span>
                <i class="open uil uil-plus"></i>
            </div>
        </aside>
        <div class="menu-overlay" v-if="overlay"></div> -->
    </div>
</template>

<script setup>
    // import { ref } from 'vue'
    // const overlay = ref(false);

    // function toggle_overlay(){
    //     overlay.value = !overlay.value
    //     console.log(overlay.value)
    // }

    // function open_toolbar(){
    //     overlay.value = true
    //     console.log('event clicked')
    // }

    // function close_toolbar(){
    //     overlay.value = false
    // }
</script>