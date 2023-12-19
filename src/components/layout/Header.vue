<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
	<nav class="d-flex gap-3 justify-content-center align-items-center bg-warning rounded-2 p-3">
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/piniaguide">Pinia</RouterLink>
		<RouterLink to="/api">Api</RouterLink>
		<RouterLink to="/api2">Api2</RouterLink>
		<RouterLink to="/isc">Component</RouterLink>
		<RouterLink to="/model">Model</RouterLink>
		<RouterLink to="/id">ID</RouterLink>
	</nav>
</template>
<style scoped></style>
