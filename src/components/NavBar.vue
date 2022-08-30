<template>
	<nav>
		<div class="container">
			<span class="mobile hamburger" @click="open_sidebar()">
				<i class="uil uil-bars"></i>
			</span>
			<span class="logo">
				<h2>Tweeter</h2>
				<i class="uil uil-twitter"></i>
			</span>
			<div class="search-bar">
				<i class="uil uil-search"></i>
				<input type="search" placeholder="search for posts, creators and inspiration">
			</div>
			<div class="create">
				<button class="btn btn-primary">Create</button>
				<div class="profile-photo">
					<img src="@/assets/logo.png" alt="profile-image">
				</div>
			</div>
		</div>

		<div class="mobile sidebar" v-show="open_nav">
			<div class="remove-sidebar" @click="remove_sidebar()">
				<i class="uil uil-multiply"></i>
			</div>
			<div class="user-info">
				<div class="profile-photo">
					<img src="@/assets/logo.png" alt="profile-image">
				</div>
				<p>David Wheeler</p>
				<small>@lazy_david</small>
				<span>
					<p>200 <span>Followers</span></p>
					<p>500 <span>Following</span></p>
				</span>
			</div>
			<a class="menu-item">
				<span><i class="uil uil-compass"></i></span> <h3>Explore</h3>
			</a>
			<a class="menu-item">
				<span><i class="uil uil-bell"></i></span> <h3>Notifications</h3>
			</a>
			<a class="menu-item">
				<span><i class="uil uil-bookmark"></i></span> <h3>Bookmarks</h3>
			</a>
			<a class="menu-item">
				<span><i class="uil uil-palette"></i></span> <h3>Theme</h3>
			</a>
			<a class="menu-item">
				<span><i class="uil uil-setting"></i></span> <h3>Settings</h3>
			</a>
		</div>
	</nav>
</template>

<style>

</style>

<script setup>
	import { ref, defineEmits } from 'vue'

	const emit = defineEmits(['remove_toolbar', 'open_toolbar'])
	const open_nav = ref(false)

	function open_sidebar(){
		open_nav.value = true
		emit('remove_toolbar')
	}

	function remove_sidebar(){
		open_nav.value = false
		emit('open_toolbar')
	}
</script>
