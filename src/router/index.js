import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue"),
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue"),
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      meta: {
        hiddenTabbar: true,
      },
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue"),
    },
    {
      // 动态路由 可以下url栏显示对应的id 属于params 参数
      path: "/detail/:id",
      component: () => import("@/views/detail/detail.vue"),
      meta: {
        hiddenTabbar: true,
      },
    },
  ],
});

export default router;
