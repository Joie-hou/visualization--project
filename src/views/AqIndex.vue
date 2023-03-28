<template>
    <div class="aqgl-container">
        <div class="child-item child-left">
            <div class="animate-card" style="width: 100%; height: 100%;">
                <card-tag :conWidth="230" :conHeight="50" :conBaImg="aqglTitleTag" @conClick="testGET()">
                    平安汾石
                </card-tag>
            </div>
        </div>
        <div class="child-item child-right">
            <div class="right-top" style="width: 100%; height: calc(60% - 5px);">
                <div class="top-left" style="width: calc(55% - 5px); height: 100%;">
                    <div class="animate-card" style="width: 100%; height: 49%;">
                        <card-tag :conWidth="230" :conHeight="50" :conBaImg="aqglTitleTag" @conClick="testGET()">
                            安全教育培训/考试
                        </card-tag>
                    </div>
                    <div class="animate-card" style="width: 100%; height: 49%;">
                        <card-tag :conWidth="230" :conHeight="50" :conBaImg="aqglTitleTag" @conClick="testGET()">
                            特种设备及人员管理
                        </card-tag>
                    </div>
                </div>
                <div class="top-left" style="width: calc(45% - 5px); height: 100%;">
                    <div class="animate-card" style="width: 100%; height: 100%;">
                        <card-tag :conWidth="330" :conHeight="50" :conBaImg="aqglTitleTag" @conClick="testGET()">
                            风险分级管控及隐患排查治理
                        </card-tag>
                    </div>
                </div>
            </div>
            <div class="right-top" style="width: 100%; height: calc(40% - 5px);">
                <div class="animate-card" style="width: calc(50% - 5px); height: 100%;">
                    <card-tag :conWidth="230" :conHeight="50" :conBaImg="aqglTitleTag" @conClick="testGET()">
                        网格化管理
                    </card-tag>
                </div>
                <div class="animate-card" style="width: calc(50% - 5px); height: 100%;">
                    <card-tag :conWidth="230" :conHeight="50" :conBaImg="aqglTitleTag" @conClick="testGET()">
                        安全服务
                    </card-tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardTag from '@/components/CardTag.vue'
import aqglTitleTag from '@/assets/img/aqgl/title_bg.png'
export default {
    data() {
        return {
            aqglTitleTag
        }
    },
    components: {
        CardTag
    },
    mounted() {
        
    }
}
</script>
<style lang="scss">
.aqgl-container {
    display: flex;
    justify-content: space-between;
    height: calc(100% - 100px);
    padding: 0 20px 20px;
    .child-item {
        // flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        padding: 10px 0;
        .animate-card {
            position: relative;
            width: 98%;
            border: 1px solid #002646;
            box-shadow: 0 0 10px 2px #002646;
            padding: 10px;
            .chart-container {
                position: absolute;
                z-index: 0;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        .right-top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .top-left {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
    .child-left {
        width: 28%;
    }
    .child-right {
        width: calc(72% - 10px);
    }
}
</style>