import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentRouteName: "",
    },
    mutations: {
        updateCurrentRouteName(state, value) {
            state.currentRouteName = value;
        },
    },
});

export default store;
