<template>
	<NavBar v-if="allowed_navbar_paths.includes(path)"/>
	<main>
		<div class="container">
			<SideBar />
			<router-view></router-view>
			<UtilityBar />
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
</script>

<style setup>

</style>

