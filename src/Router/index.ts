import { createRouter, createWebHistory } from "vue-router";
import Login from "@/Views/Auth/Login.vue";
const routes = [
  {
    path: "/",
    component: () => import("@/Layout/Layout.vue"),
    children: [
      {
        name: "Dashboard",
        path: "",
        component: () => import("@/Views/DashBoard.vue"),
      },
    ],
  },
  /*
   * Login
   * NotFOund
   */
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeResolve((to, from, next) => {
  // Check if page isPublic or not
  const isPublic = to.matched.some((record) => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(
    (record) => record.meta.onlyWhenLoggedOut
  );
  const loggedIn = !!localStorage.access;
  if (!loggedIn && !isPublic && to.name !== "login") {
    return next({
      path: "/login",
    });
  }
  if (loggedIn && onlyWhenLoggedOut) {
    return next("/");
  }
  next();
});

export default router;
