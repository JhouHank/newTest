import { ref } from "vue";

export function useSetData(oldCount) {
	const count = ref(oldCount);

	const setCount = (newCount) => {
		count.value = newCount;
	};
	return {
		count,
		setCount,
	};
}
