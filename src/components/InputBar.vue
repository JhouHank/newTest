<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
	<div>
		<p>這是展示雙向綁定的例子，下面這個input是子組件</p>
		<p>子組件把輸入框的資料透過emit向父組件傳遞，並且用props接收父組件傳遞過來的資料</p>
		<input
			class="form-control"
			type="text"
			:value="props.modelValue"
			@input="emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>
<style scoped lang=""></style>
