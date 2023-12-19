<script setup>
import { ref } from "vue";
const content = ref(null);
const contentLazy = ref(null);

const setName = (str) => {
	content.value = str;
};
</script>
<template>
	<div>
		<form>
			<p>下列兩個輸入框</p>
			<p>映射到下面的內容，動作不一樣</p>
			<input type="text" v-model="content" class="form-control w-25" />
			<h2 class="mt-2">內容：{{ content }}</h2>
			<input type="text" v-model.lazy="contentLazy" class="form-control w-25" />
			<h2 class="mt-2">lazy內容：{{ contentLazy }}</h2>
		</form>
		<div>
			<button @click="setName('jacky')" class="btn btn-primary">jacky</button>
		</div>
	</div>
</template>
<style scoped lang=""></style>
