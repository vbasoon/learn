import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import AboutView from "../views/AboutView.vue";
import LoginPage from "../views/LoginPage.vue";
import InfoView from "../views/InfoView.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/en",
  },
  {
    path: "/:lang",
    children: [
      {
        path: "/login",
        name: "Login",
        component: LoginPage,
      },
      {
        path: "/",
        name: "home",
        component: Home,
        meta: { requiresAuth: true },
      },
      {
        path: "/info",
        name: "Info",
        component: InfoView,
        meta: { requiresAuth: true },
      },
      {
        path: "/about",
        name: "About",
        component: AboutView,
        meta: { requiresAuth: true },
      },
      {
        path: "*",
        name: "page404",
        component: PageNotFound,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }
  i18n.locale = "en";
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const authUser = JSON.parse(
      window.localStorage.getItem("currentUser") || "{}"
    );
    if (authUser && authUser.accessToken) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
