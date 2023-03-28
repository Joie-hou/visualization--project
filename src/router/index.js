import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/tzgl",
        name: "homePage",
        components: {
            default: () => import("@/views/index"),
        },
    },
    {
        path: "/tzgl",
        name: "tzgl",
        components: {
            default: () => import("@/views/TzIndex"),
        },
    },
    {
        path: "/gcgl",
        name: "gcgl",
        components: {
            default: () => import("@/views/GcIndex"),
        },
    },
    {
        path: "/aqgl",
        name: "aqgl",
        components: {
            default: () => import("@/views/AqIndex"),
        },
    },
    {
        path: "/zjgl",
        name: "zjgl",
        components: {
            default: () => import("@/views/ZjIndex"),
        },
    },
    {
        path: "/zhbg",
        name: "zhbg",
        components: {
            default: () => import("@/views/ZhIndex"),
        },
    },
    {
        path: "/jsgl",
        name: "jsgl",
        components: {
            default: () => import("@/views/JsIndex"),
        },
    },
];

const router = new VueRouter({
    mode: "history",
    routes: routes,
});

export default router;
