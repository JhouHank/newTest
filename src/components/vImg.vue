<script setup>
// const props = defineProps(["alt", "className", "src", "width", "height"]);
// 可以像上面這樣寫，但不建議這樣寫
const props = defineProps({
	alt: {
		type: String,
		default: "Img alt",
	},
	className: {
		type: String,
		default: "icon",
	},
	src: {
		type: String,
		default: 125,
	},
	width: {
		type: String,
		default: 125,
	},
	height: {
		type: String,
		default: "Img alt",
	},
	bool: {
		type: Boolean,
		default: false,
	},
	obj: {
		type: Object,
		default: () => ({}), // 這是語法糖的寫法
	},
	arr: {
		type: Array,
		default: () => [],
	},
	fnc: {
		type: Function,
		default: () => {},
	},
	default: "error",
});
</script>
<template>
	<div>
		<img
			:src="props.src"
			:class="props.className"
			:width="props.width"
			:height="props.height"
			:alt="props.alt"
		/>
	</div>
</template>
<style scoped lang=""></style>
