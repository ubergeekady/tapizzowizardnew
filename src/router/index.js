import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../views/IndexPage.vue";

const routes = [
  {
    path: "/",
    name: "indexpage",
    component: IndexPage,
  },

  {
    path: "/contactform",
    name: "contactform",
    component: () => import("../views/ContactForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
