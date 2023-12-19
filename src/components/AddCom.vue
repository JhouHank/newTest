<script setup>
const emit = defineEmits({
	AddInt: (payload) => {
		if (payload === "正確") {
			return true; // 如果是true就會把payload傳上去
		} else {
			// 如果是false，也會把payload傳上去
			// 但在return false前可以做一些事情去處理遇到false的情況
			return false;
		}
	},
});

const handleCorrectClick = () => {
	emit("AddInt", "正確");
};
const handleWrongClick = () => {
	emit("AddInt", "錯誤");
};
</script>
<template>
	<div>
		<button class="btn btn-info me-1" @click="handleCorrectClick">正確按鈕</button>
		<button class="btn btn-danger" @click="handleWrongClick">錯誤按鈕</button>
	</div>
</template>
<style scoped lang=""></style>
