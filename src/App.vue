<template>
    <transition>
        <div id="app">
            <dv-full-screen-container>
                <GlobalHeader></GlobalHeader>
                <router-view></router-view>
            </dv-full-screen-container>
            <!-- <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        </div>
    </transition>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import GlobalHeader from "./components/GlobalHeader.vue";
export default {
    name: "App",
    components: {
        // HelloWorld
        GlobalHeader,
    },
};
</script>

<style>
@import "@/assets/css/public.css";

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
}

div {
    box-sizing: border-box;
}

#app {
    width: 100%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    background-color: rgb(3 17 54);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* margin-top: 60px; */
}
</style>
