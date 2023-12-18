<script setup>
import { ref } from "vue";
const name = ref(null);
const name2 = ref(null);

const setName = (str) => {
	name.value = str;
};
</script>
<template>
	<div>
		<form>
			<input type="text" v-model="name" class="form-control w-25" />
			<h2 class="mt-2">內容：{{ name }}</h2>
			<input type="text" v-model.lazy="name2" class="form-control w-25" />
			<h2 class="mt-2">lazy內容：{{ name2 }}</h2>
		</form>
		<div>
			<button @click="setName('jacky')" class="btn btn-primary">jacky</button>
		</div>
	</div>
</template>
<style scoped lang=""></style>
