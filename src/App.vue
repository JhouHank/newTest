<script setup>
import { RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
	<div class="container">
		<Header />
		<RouterView />
		<Footer />
	</div>
</template>

<style scoped></style>
