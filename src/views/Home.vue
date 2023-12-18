<script setup>
import InputBar from "../components/InputBar.vue";
import Add from "../components/AddCom.vue";
import { useSetData } from "../composable/useSetData";
import { ref } from "vue";

const { count, setCount } = useSetData(5);

const resInt = ref(0);
const callBack = (res) => {
	resInt.value = res;
	// console.log(res);
};
const num = ref("123");
</script>
<template>
	<div>
		<!-- 下面是全域組件 -->
		<Hello />
		<Add @AddInt="callBack" />
		<p>{{ resInt }}</p>
		<InputBar v-model="num" />
		<p>{{ num }}</p>
		<button class="btn btn-primary" @click="setCount(count + 1)">setCount</button>
		<p>{{ count }}</p>
	</div>
</template>
<style scoped></style>
