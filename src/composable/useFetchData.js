import axios from "axios";
import { ref } from "vue";

export function useFetchData() {
	const data = ref([]);

	const errorMsg = ref("");
	const fetchInit = async () => {
		try {
			const response = await axios.get("https://randomuser.me/api/?results=3");
			data.value = response; // 賦值給"data"的value屬性
		} catch (err) {
			errorMsg.value = "API發生錯誤";
		}
	};
	return {
		data,
		errorMsg,
		fetchInit,
	};
}
