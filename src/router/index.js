import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "homePage",
        components: {
            default: () => import("@/views/index"),
        },
    },
];

const router = new VueRouter({
    mode: "history",
    routes: routes,
});

export default router;
