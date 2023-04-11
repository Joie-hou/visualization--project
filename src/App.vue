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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* margin-top: 60px; */
}
</style>
