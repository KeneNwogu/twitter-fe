<template>
	<NavBar v-if="allowed_navbar_paths.includes(path)"/>
	<main>
		<div class="container">
			<SideBar v-if="!invalid_sidebar_paths.includes(path)" />
			<router-view></router-view>
			<UtilityBar v-if="!invalid_sidebar_paths.includes(path)" />
		</div>
	</main>
</template>

<script setup>
	import { computed } from 'vue';
	import { useRoute } from 'vue-router';
	import SideBar from "@/components/SideBar.vue";
	import UtilityBar from "@/components/UtilityBar.vue";
	import NavBar from "./components/NavBar.vue";

	const route = useRoute();
	const path = computed(() => route.path);
	const allowed_navbar_paths = ['/']
	const invalid_sidebar_paths = ['/register']
</script>

<style setup>

</style>

