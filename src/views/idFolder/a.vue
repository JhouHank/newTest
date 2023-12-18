<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

setTimeout(() => {
	// 兩種都可以
	// router.push("/");
	// router.push({ path: "/" });
	router.push({ path: "/:id", query: { username: "mike" } });
	// 還有一個replace 會把上一頁給移除
}, 3000);
</script>
<template>
	<div>
		<hr />
		<h2>AAA</h2>
		<p>三秒後跳轉</p>
	</div>
</template>
<style scoped lang=""></style>
