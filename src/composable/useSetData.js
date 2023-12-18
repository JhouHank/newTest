import { ref } from "vue";

export function useSetData(zxc) {
	const count = ref(zxc);

	const setCount = (newCount) => {
		count.value = newCount;
	};
	return {
		count,
		setCount,
	};
}
