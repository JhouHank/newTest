<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
// export const getImgSrc = (url) => new URL(`/assets/${url}`, import.meta.url).href;

const store = useCounterStore();
const { increment } = store; // 函式可以解構
const { count } = storeToRefs(store); // 資料都不能解構，要透過storeToRefs
const clickAdd = () => {
	increment();
};
</script>
<template>
	<div>
		<h1>Pinia 全域狀態管理</h1>
		<button class="btn btn-large btn-primary" @click="clickAdd">add</button>
		<h2>{{ count }}</h2>
	</div>
</template>

<style scoped></style>
