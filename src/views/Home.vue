<script setup>
import InputBar from "../components/InputBar.vue";
import Add from "../components/AddCom.vue";
import { useSetData } from "../composable/useSetData";
import { ref } from "vue";

const { count, setCount } = useSetData(5);

const resInt = ref(0);
const callBack = (res) => {
	resInt.value = res;
};
const num = ref("123");
</script>
<template>
	<div>
		<!-- 下面是全域組件 -->
		<Hello />
		<p>上面這個Hello組件是全域組件，他是在main.js進行註冊</p>
		<p>全域組件不需要在個別組件引入，可直接使用</p>
		<hr>
		<Add @AddInt="callBack" />
		<p>Add的內容：{{ resInt }}</p>
		<hr>
		<InputBar v-model="num" />
		<p>InputBar的內容：{{ num }}</p>
		<hr>
		<p>下面這個是composable的例子，並且把函式弄成類似React的useState的樣子</p>
		<button class="btn btn-primary mb-1" @click="setCount(count + 1)">setCount</button>
		<p>Count: {{ count }}</p>
	</div>
</template>
<style scoped>
</style>
