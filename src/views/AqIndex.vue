<template>
    <div class="aqgl-container">
        <div class="child-item child-left">
            <div class="animate-card" style="width: 100%; height: 100%">
                <card-tag :con-width="230" :con-height="50" :con-ba-img="aqglTitleTag" @conClick="testGET()">
                    平安汾石
                </card-tag>
            </div>
        </div>
        <div class="child-item child-right">
            <div class="right-top" style="width: 100%; height: calc(60% - 5px)">
                <div class="top-left" style="width: calc(55% - 5px); height: 100%">
                    <div class="animate-card" style="width: 100%; height: 49%">
                        <card-tag :con-width="230" :con-height="50" :con-ba-img="aqglTitleTag" @conClick="testGET()">
                            安全教育培训/考试
                        </card-tag>
                        <div class="check-tag-container">
                            <div
                                class="check-tag-item"
                                :class="{ 'check-tag-active': activeIndex === 1 }"
                                @click="changeList(1)"
                            >
                                安全教育
                            </div>
                            <div
                                class="check-tag-item"
                                :class="{ 'check-tag-active': activeIndex === 2 }"
                                @click="changeList(2)"
                            >
                                政策法规
                            </div>
                            <div
                                class="check-tag-item"
                                :class="{ 'check-tag-active': activeIndex === 3 }"
                                @click="changeList(3)"
                            >
                                安全科普
                            </div>
                            <div
                                class="check-tag-item"
                                :class="{ 'check-tag-active': activeIndex === 4 }"
                                @click="changeList(4)"
                            >
                                安全生产月
                            </div>
                        </div>
                        <div class="table-container">
                            <el-table :data="tableData" :show-header="false" height="100%" style="width: 100%">
                                <el-table-column
                                    label="日期"
                                    width="auto"
                                    align="center"
                                    prop="left"
                                    :show-overflow-tooltip="true"
                                >
                                </el-table-column>
                                <el-table-column
                                    label="姓名"
                                    width="auto"
                                    align="center"
                                    prop="center"
                                    :show-overflow-tooltip="true"
                                >
                                </el-table-column>
                                <el-table-column
                                    label="地址"
                                    width="auto"
                                    align="center"
                                    prop="right"
                                    :show-overflow-tooltip="true"
                                >
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="animate-card" style="width: 100%; height: 49%">
                        <card-tag :con-width="230" :con-height="50" :con-ba-img="aqglTitleTag" @conClick="testGET()">
                            特种设备及人员管理
                        </card-tag>
                    </div>
                </div>
                <div class="top-left" style="width: calc(45% - 5px); height: 100%">
                    <div class="animate-card" style="width: 100%; height: 100%">
                        <card-tag :con-width="330" :con-height="50" :con-ba-img="aqglTitleTag" @conClick="testGET()">
                            风险分级管控及隐患排查治理
                        </card-tag>
                    </div>
                </div>
            </div>
            <div class="right-top" style="width: 100%; height: calc(40% - 5px)">
                <div class="animate-card" style="width: calc(50% - 5px); height: 100%">
                    <card-tag :con-width="230" :con-height="50" :con-ba-img="aqglTitleTag" @conClick="testGET()">
                        网格化管理
                    </card-tag>
                </div>
                <div class="animate-card" style="width: calc(50% - 5px); height: 100%">
                    <card-tag :con-width="230" :con-height="50" :con-ba-img="aqglTitleTag" @conClick="testGET()">
                        安全服务
                    </card-tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardTag from "@/components/CardTag.vue";
import aqglTitleTag from "@/assets/img/aqgl/title_bg.png";
export default {
    components: {
        CardTag,
    },
    data() {
        return {
            aqglTitleTag,
            activeIndex: 1,
            tableData: [],
            tableData1: [
                {
                    left: "考试名称",
                    center: "创建单位",
                    right: "业务类型",
                },
                {
                    left: "遵守安全生产法 当好第一责任人在线培训班结业考试",
                    center: "山西交控",
                    right: "公路运营,工程建设,其他领域",
                },
            ],
            tableData2: [
                {
                    left: "标题",
                    center: "类型",
                    right: "创建时间",
                },
                {
                    right: "2021-10-15 13:25:01",
                    left: "新《安全生产法》",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 14:38:01",
                    left: "公路水运工程质量监督管理规定",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 14:33:52",
                    left: "山西省安全生产条例",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 14:29:00",
                    left: "公路水运工程安全生产监督管理办法",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 14:23:31",
                    left: "全国人民代表大会常务委员会关于修改《中华人民共和国预算法》的决定",
                    center: "法律法规",
                },
            ],
            tableData3: [
                {
                    left: "标题",
                    center: "类型",
                    right: "创建时间",
                },
                {
                    right: "2021-06-01 14:20:11",
                    left: "生产安全事故报告和调查处理条例",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 14:17:10",
                    left: "生产安全事故应急条例",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 14:12:51",
                    left: "特种设备安全监察条例",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 14:08:30",
                    left: "中华人民共和国公路法",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 14:06:17",
                    left: "中华人民共和国消防法",
                    center: "法律法规",
                },
            ],
            tableData4: [
                {
                    left: "活动名称",
                    center: "参与人员",
                    right: "活动时间",
                },
                {
                    right: "2021-06-01 14:04:48",
                    left: "中华人民共和国职业病防治法",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 14:01:09",
                    left: "中华人民共和国防震减灾法",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 13:56:34",
                    left: "中华人民共和国国家安全法",
                    center: "法律法规",
                },
                {
                    right: "2021-06-01 13:39:01",
                    left: "中华人民共和国食品安全法",
                    center: "法律法规",
                },
                {
                    right: "2021-05-30 16:40:59",
                    left: "中华人民共和国突发事件应对法",
                    center: "法律法规",
                },
                {
                    right: "2021-05-30 16:27:53",
                    left: "中华人民共和国安全生产法",
                    center: "法律法规",
                },
            ],
        };
    },
    created() {
        this.tableData = this.tableData1;
    },
    mounted() {},
    methods: {
        // 安全教育培训/考试 列表切换
        changeList(value) {
            this.activeIndex = value;
            switch (value) {
                case 1:
                    this.tableData = this.tableData1;
                    break;
                case 2:
                    this.tableData = this.tableData2;
                    break;
                case 3:
                    this.tableData = this.tableData3;
                    break;
                case 4:
                    this.tableData = [this.tableData4[0]].concat(
                        this.tableData4.slice(1).map((value) => {
                            return {
                                left: value.left,
                                center: value.center,
                                right: this.$dayjs(value.right).format("YYYY-MM"),
                            };
                        })
                    );
                    break;

                default:
                    break;
            }
        },
    },
};
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
            .check-tag-container {
                position: absolute;
                top: 20px;
                right: 20px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                .check-tag-item {
                    cursor: pointer;
                    margin-left: 10px;
                    padding: 10px 20px;
                    font-size: 17px;
                    color: #fff;
                    background: radial-gradient(rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0.2));
                }
                .check-tag-active {
                    background: radial-gradient(rgba(133, 52, 203, 0) 55%, rgba(133, 52, 203, 0.5));
                }
            }
            .table-container {
                width: 100%;
                height: calc(100% - 70px);
                margin-top: 10px;
                .el-table {
                    background-color: transparent;
                    .el-table__header-wrapper {
                        .el-table__header {
                            .has-gutter {
                                tr {
                                    background-color: #1e2b4e;
                                    .el-table__cell {
                                        font-size: 16px;
                                        color: #fff;
                                        background-color: transparent;
                                    }
                                }
                            }
                        }
                    }
                    .el-table__body-wrapper {
                        .el-table__body {
                            .el-table__row {
                                background-color: transparent;
                                color: #fff;
                                font-size: 16px;
                                &:first-child {
                                    background-color: #1e2b4e;
                                    font-size: 18px;
                                    .el-table__cell {
                                        border-bottom: 1px solid #ebeef5;
                                    }
                                }
                                &:hover {
                                    background-color: transparent;
                                    &:first-child {
                                        background-color: #1e2b4e;
                                    }
                                    .el-table__cell {
                                        background-color: transparent;
                                    }
                                }
                                .el-table__cell {
                                    border-bottom: none;
                                }
                            }
                        }
                    }
                }
            }
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
