import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("./viewes/not-found.vue"),
    },
    {
      path: "/",
      name: "home",
      components: {
        default: () => import("./viewes/home-view.vue"),
        tabs: () => import("./viewes/tabs/table1.vue"),
      },
    },
    {
      path: "/vallets",
      name: "vallets-tab",
      components: {
        default: () => import("./viewes/home-view.vue"),
        tabs: () => import("./viewes/tabs/table2.vue"),
      },
    },
    {
      path: "/user/:id",
      components: {
        default: () => import("./viewes/home-view.vue"),
        tabs: () => user,
      },
      beforeEnter: () => {
        console.log("*user");
      },
    },
  ],
});

const user = {
  template: "<div>User: {{ $route.params.id }}</div>",
};
