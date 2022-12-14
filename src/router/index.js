import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../views/IndexPage.vue";

//Router

const routes = [
  {
    path: "/contactform",
    name: "contactform",
    component: () => import("../views/ContactForm.vue"),
  },
  {
    path: "/",
    name: "indexpage",
    component: IndexPage,
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
    path: "/productcarpet",
    name: "productcarpet",
    component: () => import("../views/ProductCarpet.vue"),
  },
  {
    path: "/productottoman",
    name: "productottoman",
    component: () => import("../views/ProductOttoman.vue"),
  },
  {
    path: "/productbench",
    name: "productbench",
    component: () => import("../views/ProductBench.vue"),
  },
  {
    path: "/productmirror",
    name: "productmirror",
    component: () => import("../views/ProductMirror.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
