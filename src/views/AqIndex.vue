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
                        <div
                            ref="FXbarContainer"
                            class="chart-container"
                            style="position: relative; width: 404px; height: 270px; margin-top: 10px"
                        ></div>
                        <div class="bottom-echarts">
                            <div class="bottom-echarts_item">
                                <div class="echarts-title"></div>
                                <div
                                    ref="FXBPContainer"
                                    class="chart-container"
                                    style="position: relative; width: 404px; height: 270px; margin-top: 10px"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-top" style="width: 100%; height: calc(40% - 5px)">
                <div class="animate-card" style="width: calc(50% - 5px); height: 100%">
                    <card-tag :con-width="230" :con-height="50" :con-ba-img="aqglTitleTag" @conClick="testGET()">
                        网格化管理
                    </card-tag>
                    <div
                        ref="WGHContainer"
                        class="chart-container"
                        style="position: relative; height: calc(100% - 150px); margin-top: 10px"
                    ></div>
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
    mounted() {
        this.echartsWGH();
        this.echartsFXbar();
    },
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
        // 网格化管理
        echartsWGH() {
            let xList = [
                "总监办一分部",
                "总监办二分部",
                "路基1分部",
                "路基2分部",
                "路基3分部",
                "路基4分部",
                "路基5分部",
            ];
            let yList1 = ["13", "6", "14", "10", "10"];
            let yList2 = ["0", "0", "11", "6", "14", "10", "7"];
            let yList3 = ["19", "30", "0", "0", "1", "0", "0"];
            let yList4 = ["0", "0", "12", "5", "14", "10", "1"];
            let yList5 = ["0", "0", "202", "180", "634", "332", "509"];
            let options = {
                legend: {
                    icon: "rect",
                    right: "5%",
                    top: 5,
                    itemWidth: 12,
                    itemHeight: 12,
                    // data: ["网格数", "安全员数", "监理员数", "网格员数", "施工人员数"],
                    textStyle: {
                        color: "#fff",
                        fontSize: 18,
                    },
                },
                tooltip: {
                    trigger: "axis",
                    borderWidth: 0,
                    padding: [5, 10],
                    textStyle: {
                        fontSize: 16,
                    },
                    rich: {
                        value: {
                            fontSize: 16,
                        },
                    },
                },
                grid: {
                    top: "18%",
                    left: "10%",
                    right: "7%",
                    bottom: "15%",
                    //   containLabel: false
                },
                toolbox: {
                    show: false,
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false, //坐标轴两边留白
                    data: xList,
                    axisLabel: {
                        // textStyle: {
                        color: "#D6E1FF",
                        fontSize: 16,
                        // },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#9EA3B4",
                            opacity: 0.3,
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: [
                    {
                        type: "value",
                        splitNumber: 4,
                        splitLine: {
                            lineStyle: {
                                color: "#9EA3B4",
                                opacity: 0.3,
                            },
                        },
                        axisLabel: {
                            // textStyle: {
                            color: "#D6E1FF",
                            fontSize: 16,
                            // },
                        },
                    },
                ],
                series: [
                    {
                        name: "网格数",
                        type: "line",
                        // symbol: 'none',
                        itemStyle: {
                            // normal: {
                            color: "#1b7cf2",
                            lineStyle: {
                                color: "#1b7cf2",
                                width: 2,
                            },
                            // },
                        },
                        areaStyle: {
                            //区域填充样式
                            color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(27, 124, 242, 0.1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(27, 124, 242, 0.5)",
                                },
                            ]),
                        },
                        toolbox: {
                            show: false,
                        },
                        data: yList1,
                    },
                    {
                        name: "安全员数",
                        type: "line",
                        // symbol: 'none',
                        itemStyle: {
                            // normal: {
                            color: "#3ac889",
                            lineStyle: {
                                color: "#3ac889",
                                width: 2,
                            },
                            // },
                        },
                        areaStyle: {
                            //区域填充样式
                            color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(58, 200, 137, 0.1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(58, 200, 137, 0.5)",
                                },
                            ]),
                        },
                        toolbox: {
                            show: false,
                        },
                        data: yList2,
                    },
                    {
                        name: "监理员数",
                        type: "line",
                        // symbol: 'none',
                        itemStyle: {
                            // normal: {
                            color: "#f69c1f",
                            lineStyle: {
                                color: "#f69c1f",
                                width: 2,
                            },
                            // },
                        },
                        areaStyle: {
                            //区域填充样式
                            color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(246, 156, 31, 0.1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(246, 156, 31, 0.5)",
                                },
                            ]),
                        },
                        toolbox: {
                            show: false,
                        },
                        data: yList3,
                    },
                    {
                        name: "网格员数",
                        type: "line",
                        // symbol: 'none',
                        itemStyle: {
                            // normal: {
                            color: "#ec2cd9",
                            lineStyle: {
                                color: "#ec2cd9",
                                width: 2,
                            },
                            // },
                        },
                        areaStyle: {
                            //区域填充样式
                            color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(236, 44, 217, 0.1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(236, 44, 217, 0.5)",
                                },
                            ]),
                        },
                        toolbox: {
                            show: false,
                        },
                        data: yList4,
                    },
                    {
                        name: "施工人员数",
                        type: "line",
                        // symbol: 'none',
                        itemStyle: {
                            // normal: {
                            color: "#f44e45",
                            lineStyle: {
                                color: "#f44e45",
                                width: 2,
                            },
                            // },
                        },
                        areaStyle: {
                            //区域填充样式
                            color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(244, 78, 69, 0.1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(244, 78, 69, 0.5)",
                                },
                            ]),
                        },
                        toolbox: {
                            show: false,
                        },
                        data: yList5,
                    },
                ],
            };
            let myChart = this.$echarts.init(this.$refs.WGHContainer);
            myChart.showLoading({
                maskColor: "rgba(0, 0, 0, 0)",
                fontSize: 30,
                textColor: "#fff",
            });
            setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption(options);
            }, 1000);
        },
        // 风险分级管控及隐患排查治理
        echartsFXbar() {
            let xList = ["路基1分部", "路基2分部", "路基3分部", "路基4分部", "路基5分部"];
            let yData1 = [0, 0, 0, 0, 0];
            let yData2 = [28, 23, 10, 18, 48];
            let yData3 = [100, 100, 100, 100, 100];
            let options = {
                legend: {
                    right: "left",
                    textStyle: {
                        color: "#fff",
                        fontSize: 18,
                    },

                    show: true,
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "line",
                    },
                    textStyle: {
                        fontSize: 16,
                    },
                },
                grid: {
                    top: "18%",
                    left: "7%",
                    right: "15%",
                    bottom: "10%",
                },
                xAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                        width: 60,
                        overflow: "truncate",
                        ellipsis: "...",
                        color: "#fff",
                        fontSize: 16,
                        interval: 0,
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#1f3a56",
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#1f3a56",
                        },
                    },
                    data: xList,
                },
                yAxis: [
                    {
                        splitLine: {
                            show: true,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            show: true,
                            color: "#fff",
                            fontSize: 16,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#1f3a56",
                            },
                        },
                    },
                    {
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value}%",
                            color: "#fff",
                            fontSize: 16,
                        },
                        max: 100,
                    },
                ],
                series: [
                    {
                        name: "处置数",
                        type: "bar",
                        yAxisIndex: 0,
                        stack: "Search Engine",
                        z: 3,
                        barGap: "-100%",
                        barWidth: "20%",
                        itemStyle: {
                            color: "#2158ff",
                        },
                        data: yData2,
                    },
                    {
                        name: "未处置数",
                        type: "bar",
                        z: 4,
                        yAxisIndex: 0,
                        barWidth: "20%",
                        stack: "Search Engine",
                        itemStyle: {
                            color: "#5381fd",
                        },
                        data: yData1,
                    },
                    {
                        name: "处置率",
                        type: "line",
                        z: 1,
                        yAxisIndex: 1,
                        smooth: true,
                        showSymbol: false,
                        itemStyle: {
                            color: "#fed52f",
                        },
                        data: yData3,
                    },
                ],
            };
            let myChart = this.$echarts.init(this.$refs.FXbarContainer);
            myChart.showLoading({
                maskColor: "rgba(0, 0, 0, 0)",
                fontSize: 30,
                textColor: "#fff",
            });
            setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption(options);
            }, 1000);
        },
    },
};
</script>
<style lang="scss">
.aqgl-container {
    display: flex;
    justify-content: space-between;
    height: calc(100% - 70px);
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
            .bottom-echarts {
                width: 100%;
                height: calc(100% - 350px);
                display: flex;
                .bottom-echarts_item {
                    flex: 1;
                    .echarts-title {
                    }
                }
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
