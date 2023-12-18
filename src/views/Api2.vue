<script setup>
import { onMounted } from "vue";
import { useFetchData } from "../composable/useFetchData";
const { data, errorMsg, fetchInit } = useFetchData();

onMounted(() => {
	fetchInit();
});

const changeFnc = (result) => {
	result.gender = result.gender === "male" ? "female" : "male";
};
</script>
<template>
	<div>
		<!-- <button class="btn btn-warning btn-lg w-25 h-25" @click="dataAsync()">get</button> -->
		<div v-if="data.length === 0">
			<div>Loading ...</div>
		</div>
		<div v-else>
			<div v-for="result in data.data.results">
				<p>性別: {{ result.gender }}</p>
				<p>{{ result.name.first }} {{ result.name.last }}</p>
				<button class="btn btn-primary" @click="changeFnc(result)">change</button>
				<hr />
			</div>
			<!-- <div>{{ data.data.results[0].gender }}</div> -->
		</div>
		<div v-if="errorMsg !== ''">{{ errorMsg }}</div>
	</div>
</template>
<style scoped lang=""></style>
