import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/contactform",
    name: "contactform",
    component: () => import("../views/ContactForm.vue"),
  },
  {
    path: "/step1",
    name: "step1",
    component: () => import("../views/PageStep1.vue"),
  },
  {
    path: "/step2",
    name: "step2",
    component: () => import("../views/PageStep2.vue"),
  },
  {
    path: "/step3",
    name: "step3",
    component: () => import("../views/PageStep3.vue"),
  },
  {
    path: "/step4",
    name: "step4",
    component: () => import("../views/PageStep4.vue"),
  },
  {
    path: "/step5",
    name: "step5",
    component: () => import("../views/PageStep5.vue"),
  },
  {
    path: "/step6",
    name: "step6",
    component: () => import("../views/PageStep6.vue"),
  },
  {
    path: "/step7",
    name: "step7",
    component: () => import("../views/PageStep7.vue"),
  },
  {
    path: "/step8",
    name: "step8",
    component: () => import("../views/PageStep8.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
