import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import a from "../views/idFolder/a.vue";

const router = createRouter({
	// 用createWebHistory的話 要記得設定後端
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			// 靜態載入
			// 如果東西比較多、需要打API，就建議使用這種方式
			component: Home,
		},
		{
			path: "/piniaguide",
			name: "piniaguide",
			// 動態載入
			// 如果頁面是純靜態，沒有打API，就建議用這種方式
			component: () => import("../views/PiniaGuide.vue"),
		},
		{
			path: "/api",
			name: "api",
			component: () => import("../views/Api.vue"),
		},
		{
			path: "/api2",
			name: "api2",
			component: () => import("../views/Api2.vue"),
		},
		{
			path: "/isC",
			name: "isC",
			component: () => import("../views/IsC.vue"),
		},
		{
			path: "/model",
			name: "model",
			component: () => import("../views/Model.vue"),
		},
		{
			path: "/:id",
			name: "userdata",
			component: () => import("../views/[id].vue"),
			children: [
				{
					// 子層的path不需要斜線！
					path: "aaa",
					name: "aaa",
					component: a,
				},
			],
		},
		{
			// 要注意404一定要放最下面，因為讀取是從第一個讀取，
			// 就會先讀取到404
			path: "/:zxc(.*)*",
			name: "NotFound",
			component: () => import("../views/404.vue"),
		},
	],
});

export default router;
