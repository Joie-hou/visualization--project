<template>
    <div class="tzgl-container">
        <div class="child-item child-left">
            <div class="animate-card">
                <card-tag :conBaImg="tzglTitleTag" @conClick="testGET()">
                    建筑安装工程费
                </card-tag>
                <div class="chart-container" ref="JAFContainer"></div>
            </div>
            <div class="animate-card">
                <card-tag :conBaImg="tzglTitleTag" @conClick="testGET()">
                    工程建设其他费
                </card-tag>
                <div class="chart-container" ref="GJQContainer"></div>
            </div>
        </div>
        <div class="child-item child-middle">
            
        </div>
        <div class="child-item child-right">
            <div class="animate-card">
                <card-tag :conBaImg="tzglTitleTag" @conClick="testGET()">
                    土地使用及拆迁补偿费
                </card-tag>
            </div>
            <div class="animate-card">
                <card-tag :conBaImg="tzglTitleTag" @conClick="testGET()">
                    预备费
                </card-tag>
            </div>
            <div class="animate-card">
                <card-tag :conBaImg="tzglTitleTag" @conClick="testGET()">
                    建设期贷款利息
                </card-tag>
            </div>
        </div>
    </div>
</template>
<script>
import CardTag from '@/components/CardTag.vue'
import tzglTitleTag from '@/assets/tzgl/title_bg.png'
export default {
    data() {
        return {
            tzglTitleTag
        }
    },
    components: {
        CardTag
    },
    mounted() {
        this.echartsJAF()
        this.echartsGJF()
    },
    methods: {
        testGET() {
            console.log('click title tag');
        },
        // 建筑安装工程费
        echartsJAF() {
            let arr1 = ['绿化及环境保护设施','安全设施及预埋管线','隧道工程','桥梁、涵洞工程','路面工程','路基工程','总则']
            let arr3 = [0,0,173193357,669911425,0,885138091,240256714]
            let arr2 = [221519069,1171295,1339547101,3111713916,18012960,2029655880,454899545]
            let myChart = this.$echarts.init(this.$refs.JAFContainer)
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption({
                    legend: {
                        top:'5%',
                        bottom: '0%',
                        x:'80%',
                        left: 'right',
                        itemWidth: 15,
                        itemHeight: 15,
                        padding: [5, 10],
                        textStyle: {
                            fontSize: 18,
                            color: '#fff',
                            padding: [3, 0, 0, 0],
                        },
                    },
                    grid: {
                        bottom: '20%',
                        top: "20%",
                        left: "25%",
                        right: "15%"
                    },
                    tooltip: {
                        formatter: function (params) {
                            return params.name + '：' + params.marker + (params.value/100000000).toFixed(2) + '亿元'
                        },
                        textStyle: {
                            fontSize: 18
                        }
                    },
                    xAxis: {
                        name: '单位/亿元',
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: 20,
                            align: 'middle',
                            verticalAlign: 'bottom',
                            padding: [0, 0, -70, 0]
                        },
                        type: 'value',
                        position: 'bottom',
                        splitNumber: 3,
                        boundaryGap: true, // 边界间隙
                        min: 0,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            },
                            formatter: function (value) {
                                return (value/100000000).toFixed(2)
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(255, 255, 255, .5)'
                            }
                        },
                        axisTick: {
                            show: false // 坐标轴小标记
                        },
                        splitLine: {
                            show: true, // 是否显示分割线
                            lineStyle: {
                                color: '#172D58', // 纵向向网格线颜色
                                type: 'dashed',
                                width: 1
                            }
                        }
                    },
                    yAxis: {
                        type: 'category',
                        position: 'left',
                        splitNumber: 3,
                        axisLabel: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            },
                            formatter: function(value) {
                                if(value.length > 5) {
                                    return value.slice(0, 5) + '...'
                                } else {
                                    return value
                                }
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, .5)',
                                width: 1
                            }
                        },
                        axisTick: {
                            show: false // 坐标轴小标记
                        },
                        splitLine: {
                            show: false
                        },
                        data: arr1,
                    },
                    series: [
                        {
                            name:'计划投资',
                            type: 'bar',
                            barGap: "-100%",
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            barWidth: 10,
                            itemStyle: {
                                barBorderRadius: 10,
                                normal: {
                                    barBorderRadius: 10,
                                    color: '#29C175' // 图表颜色
                                }
                            },
                            data: arr2, // 载入背景数据
                            z: 0
                        }, {
                            name:'完成投资',
                            type: 'bar',
                            label: {
                                normal: {
                                    show: false,
                                    position: 'right', // top, right, inside, insideTop,...
                                    textStyle: {
                                        color: 'white',
                                        fontSize: 16
                                    },
                                    formatter: '{c}' + "%"
                                }
                            },
                            barWidth: 10,
                            itemStyle: {
                                barBorderRadius: 10,
                                normal: {
                                    barBorderRadius: 10,
                                    color: '#FEC42D'
                                }
                            },
                            data: arr3, // 载入数据(内含自定义参数)
                            z: 1
                        }
                    ]
                })
            }, 1000);
        },   
        // 工程建设其他费
        echartsGJF() {
            let arr1 = ['建设项目管理费', '研究试验费', '建设项目前期工作费', '专项评价（估）费', '联合试运转费', '生产准备费', '工程保险费', '其他相关费用']
            let arr3 = [0, 1000000, 159170000, 34540000, 0, 0, 0, 0]
            let arr2 = [0, 0, 159170000, 34540080, 0, 0, 0, 0]
            let myChart = this.$echarts.init(this.$refs.GJQContainer)
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption({
                    tooltip: {
                        formatter: function (params) {
                            return params.name + '：' + params.marker + (params.value/100000000).toFixed(2) + '亿元'
                        },
                        textStyle: {
                            fontSize: 18
                        }
                    },
                    legend: {
                        top:'5%',
                        bottom: '0%',
                        x:'80%',
                        left: 'right',
                        itemWidth: 15,
                        itemHeight: 15,
                        padding: [5, 10],
                        textStyle: {
                            fontSize: 18,
                            color: '#fff',
                            padding: [3, 0, 0, 0],
                        },
                    },
                    
                    grid: {
                        left: '10%',
                        right: '5%',
                        bottom: '5%',
                        top:'40%',
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: arr1,
                            axisLabel: {
                                textStyle: {
                                    color: '#fff',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 18,
                                },
                                rotate:30,
                            },
                            axisTick:{//坐标轴刻度相关设置。
                                show: false,
                            },
                            axisLine:{//坐标轴轴线相关设置
                                lineStyle:{
                                    color:'#fff',
                                    opacity:0.2
                                }
                            },
                            splitLine: { //坐标轴在 grid 区域中的分隔线。
                                show: false,
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '单位/亿元',
                            nameTextStyle: {
                                color: '#fff',
                                fontSize: 20,
                                align: 'right',
                                verticalAlign: 'bottom',
                                padding: [0, 0, 20, 0]
                            },
                            splitNumber: 5,
                            axisLabel: {
                                textStyle: {
                                    color: '#a8aab0',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 18,
                                },
                                formatter: function (value) {
                                    return (value/100000000).toFixed(2)
                                }
                            },
                            axisLine:{
                                show: false
                            },
                            axisTick:{
                                show: false
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#fff'],
                                    opacity:0.06
                                }
                            }

                        }
                    ],
                    series : [
                        {
                            name:'计划投资',
                            type:'bar',
                            data:arr2,
                            barWidth: 10,
                            barGap:0,
                            itemStyle: {
                                normal: {
                                    show: true,
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#2E7CF1'
                                    }, {
                                        offset: 1,
                                        color: '#2E7CF1'
                                    }]),
                                    barBorderRadius: 50,
                                    borderWidth: 0,
                                }
                            },
                        },
                        {
                            name:'完成投资',
                            type:'bar',
                            data:arr3,
                            barWidth: 10,
                            barGap:0,
                            itemStyle: {
                                normal: {
                                    show: true,
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#29C175'
                                    }, {
                                        offset: 1,
                                        color: '#29C175'
                                    }]),
                                    barBorderRadius: 50,
                                    borderWidth: 0,
                                }
                            },
                        },
                    ]
                })
            }, 1000);
        }   
    }
}
</script>
<style lang="scss">
.tzgl-container {
    display: flex;
    height: calc(100% - 100px);
    padding: 0 20px 20px;
    .child-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
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
    }
    .child-left {
        justify-content: space-between;
        .animate-card {
            height: 49%;
        }
    }
    .child-right {
        justify-content: space-between;
        .animate-card {
            height: 33%;
        }
    }
}
</style>