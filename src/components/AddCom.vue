<script setup>
const emit = defineEmits({
	AddInt: (payload) => {
		if (payload === "mike") {
			return true; // 如果是true就會把payloadt傳上去
		} else {
			return false; // 如果是false，也會把payload傳上去
			// 但在return false前可以做一些事情去處理遇到false的情況
		}
	},
});

const handleAddClick = () => {
	emit("AddInt", "mike");
};
</script>
<template>
	<div>
		<button class="btn btn-info" @click="handleAddClick">add</button>
	</div>
</template>
<style scoped lang=""></style>
