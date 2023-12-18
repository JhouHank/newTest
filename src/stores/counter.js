import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
	const count = ref(0);
	// 下面是getter
	const doubleCount = computed(() => count.value * 2);

	function increment() {
		count.value++;
	}

	return { count, doubleCount, increment };

	// pinia的監控資料 用subscribe 也可以用原生watch
});
