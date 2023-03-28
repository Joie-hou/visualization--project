<template>
    <transition>
        <div id="app">
            <dv-full-screen-container>
                <router-view></router-view>
            </dv-full-screen-container>
            <!-- <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        </div>
    </transition>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
    name: "App",
    components: {
        // HelloWorld
    },
};
</script>

<style>
html,
body {
    margin: 0;
    height: 100%;
    width: 100%;
}
div {
    box-sizing: border-box;
}
#app {
    height: 100%;
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
