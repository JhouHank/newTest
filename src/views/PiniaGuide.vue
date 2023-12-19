<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
const { increment } = store; // 函式可以解構
const { count, doubleCount } = storeToRefs(store); // 資料都不能解構，要透過storeToRefs
const clickIncrement = () => {
	increment();
};
</script>
<template>
	<div>
		<h1>Pinia 全域狀態管理</h1>
		<p>這一頁是展示pinia的解構</p>
		<p>函式可以解構</p>
		<p>資料都不能解構，要透過storeToRefs</p>
		<button class="btn btn-large btn-primary" @click="clickIncrement">Increment</button>
		<h2>Count: {{ count }}</h2>
		<h2>Double Count: {{ doubleCount }}</h2>
	</div>
</template>

<style scoped></style>
