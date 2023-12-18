<script setup>
import NumZero from "../components/NumZero.vue";
import NumOne from "../components/NumOne.vue";
import NumTwo from "../components/NumTwo.vue";
import { ref, computed } from "vue";
const isChange = ref(0);
const com = computed(() => {
	switch (isChange.value) {
		case 0:
			return NumZero;
		case 1:
			return NumOne;
		case 2:
			return NumTwo;
		default:
			return NumZero;
	}
});
const changeCom = (index) => {
	isChange.value = index;
};
</script>
<template>
	<div>
		<button @click="changeCom(1)" class="btn btn-primary me-2">NumOne</button>
		<button @click="changeCom(2)" class="btn btn-success">NumTwo</button>
		<div>
			<component :is="com" />
		</div>
	</div>
</template>
<style scoped lang=""></style>
