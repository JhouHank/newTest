<script setup>
import { useRoute, RouterLink, RouterView } from "vue-router";
const route = useRoute();
console.log(route);
</script>
<template>
	<div>
		<h2>path : {{ route.path }}</h2>
		<h2>params.id : {{ route.params.id }}</h2>
		<h2>params.id.aaa : {{ route.params.id.aaa }}</h2>
		<router-link to="/id/aaa" class="btn btn-light">aaa</router-link>
		<RouterView />
	</div>
</template>
<style scoped lang=""></style>
