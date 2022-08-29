<template>
	<NavBar v-if="path == '/'"/>
	<main>
		<div class="container">
			<router-view></router-view>
		</div>
	</main>
</template>

<script setup>
	import { computed } from 'vue';
	import { useRoute } from 'vue-router';
	import NavBar from "./components/NavBar.vue";

	const route = useRoute();
	const path = computed(() => route.path);
</script>

<style setup>

</style>

