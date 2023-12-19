<script setup>
import { useRoute, RouterLink, RouterView } from "vue-router";
const route = useRoute();
console.log(route);
</script>
<template>
	<div>
		<h2>path : {{ route.path }}</h2>
		<h2>params.id : {{ route.params.id }}</h2>
		<h2>query.username : {{ route.query.username }}</h2>
		<p>點擊A組件後注意看網址變化</p>
		<router-link to="/id/aaa" class="btn btn-light">顯示A組件</router-link>
		<RouterView />
	</div>
</template>
<style scoped lang=""></style>
