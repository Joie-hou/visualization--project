<template>
    <div class="global-header-container" ref="globalHeader" :style="{ backgroundImage: 'url('+currentBackImg+')' }">
        <div class="header-item header-left">
            <div class="router-item left-router">
                <router-link to="/tzgl">
                    投资管理
                </router-link>
            </div>
            <div class="router-item left-router">
                <router-link to="/gcgl">
                    工程管理
                </router-link>
            </div>
            <div class="router-item left-router">
                <router-link to="/aqgl">
                    安全管理
                </router-link>
            </div>
        </div>
        <div class="header-item header-center">
            <h1>汾石高速综合管控平台 · 质检管理</h1>
        </div>
        <div class="header-item header-right">
            <div class="router-item right-router">
                <router-link to="/zjgl">
                    质检管理
                </router-link>
            </div>
            <div class="router-item right-router">
                <router-link to="/zhbg">
                    综合办公
                </router-link>
            </div>
            <div class="router-item right-router">
                <router-link to="/jsgl">
                    技术管理
                </router-link>
            </div>
        </div>
        
    </div>
</template>
<script>
import tzglTop from "@/assets/header/tzglTop.png"
import gcglTop from "@/assets/header/gcglTop.png"
import aqglTop from "@/assets/header/aqglTop.png"
import zjglTop from "@/assets/header/zjglTop.png"
import zhbgTop from "@/assets/header/zhbgTop.png"
import jsglTop from "@/assets/header/jsglTop.png"
export default {
    data() {
        return {
            currentBackImg: '',
            tzglTop,
            gcglTop,
            aqglTop,
            zjglTop,
            zhbgTop,
            jsglTop,
        }
    },
    watch: {
        "$route.name": {
            deep: true,
            handler: function(newVal, oldVal) {
                console.log(newVal, oldVal);
                    if (newVal === 'tzgl' || newVal === 'homePage') {
                        this.currentBackImg = this.tzglTop
                    } else if (newVal === 'gcgl') {
                        this.currentBackImg = this.gcglTop
                    } else if (newVal === 'aqgl') {
                        this.currentBackImg = this.aqglTop
                    } else if (newVal === 'zjgl') {
                        this.currentBackImg = this.zjglTop
                    }else if (newVal === 'zhbg') {
                        this.currentBackImg = this.zhbgTop
                    } else if (newVal === 'jsgl') {
                        this.currentBackImg = this.jsglTop
                    }
            }
        }
    },
    mounted() {
        
    },
    methods: {

    }
}
</script>
<style lang="scss">
.global-header-container {
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-size: 100% 100%;
    .header-item {
        position: relative;
        z-index: 10;
        flex: 1;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        .router-item {
            padding: 0 20px;
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 25px;
                text-decoration: none;
            }
            .router-link-active {
                color: aqua;
                font-size: 27px;
            }
        }
    }
    .header-left {
        margin-left: 20px;
        .router-item {
            border-left: 1px solid #7BF0FF;
        }
    }
    .header-right {
        margin-right: 20px;
        justify-content: flex-end;
        .router-item {
            border-right: 1px solid #7BF0FF;
        }
    }
    .header-center {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>