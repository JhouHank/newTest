<script setup>
import { ref } from "vue";

const data = ref([]);
const dataAsync = async () => {
	try {
		const response = await fetch('https://randomuser.me/api/?results=3');
		console.log("Fetch抓到的資料 =>",response)
		// 用原生fetch抓到的資料是一種Response格式的資料
		// 要先轉為json才能繼續使用
		const responseData = await response.json();
		data.value = responseData;
	} catch (err) {
		console.log(err);
	}
};

const changeGender = (result) => {
	result.gender = result.gender === "male" ? "female" : "male";
};
</script>
<template>
	<div>
		<button class="btn btn-success btn-lg w-25 h-25 my-2" @click="dataAsync()">獲取資料</button>
		<p>這一頁使用的是原生Fetch</p>
		<p>API2則是使用axios</p>
		<hr/>
		<div v-if="data.length === 0">
			<div>請點擊按鈕獲取資料</div>
		</div>
		<div v-else>
			<div v-for="result in data.results">
				<p>性別: {{ result.gender }}</p>
				<p>{{ result.name.first }} {{ result.name.last }}</p>
				<button class="btn btn-primary" @click="changeGender(result)">更改性別</button>
				<hr />
			</div>
		</div>
	</div>
</template>
<style scoped lang=""></style>
