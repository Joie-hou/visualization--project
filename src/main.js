import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { fullScreenContainer } from "@jiaminghi/data-view";
Vue.use(fullScreenContainer);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import * as dayjs from "dayjs";
Vue.prototype.$dayjs = dayjs;

import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
