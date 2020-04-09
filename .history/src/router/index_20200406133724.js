import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/components/CommonLayout.vue"),
    children: [
      
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = new VueRouter({
  routes
});

export default router;
