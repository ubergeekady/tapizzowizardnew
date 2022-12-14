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
    path: "/step2.1",
    name: "step2.1",
    component: () => import("../views/PageStep2.1.vue"),
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
    component: () => import("../views/PageStep5.1.vue"),
  },
  {
    path: "/step5.1",
    name: "step5.1",
    component: () => import("../views/PageStep5.2.vue"),
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

  {
    path: "/buyitnow",
    name: "buyitnow",
    component: () => import("../views/BuyItNow.vue"),
  },
  {
    path: "/talktoanexpert",
    name: "talktoanexpert",
    component: () => import("../views/TalkToAnExpert.vue"),
  },
  {
    path: "/talktoanexpert1",
    name: "talktoanexpert1",
    component: () => import("../views/TalkToAnExpert1.vue"),
  },
  {
    path: "/tryitinyourroom",
    name: "tryitinyourroom",
    component: () => import("../views/TryItInYourRoom.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
