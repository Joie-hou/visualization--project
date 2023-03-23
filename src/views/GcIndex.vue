<template>
    <div class="gcgl-container">
        <div class="child-item child-left">
            <div class="animate-card card-static">
                
            </div>
            <div class="animate-card">
                <card-tag :conWidth="200" :conHeight="40" :conBaImg="tzglTitleTag" @conClick="testGET()">
                    施工准入
                </card-tag>
                <div class="card-total-count">
                    <div class="card-total-count_item">
                        申请数量
                        <span style="color: #43FDF2;">323</span>
                        个
                    </div>
                    <div class="card-total-count_item">
                        备案数量
                        <span style="color: #43FDF2;">85</span>
                        个
                    </div>
                </div>
                <div class="chart-container" ref="SGZRContainer" style="position: relative; height: 70%;"></div>
            </div>
            <div class="animate-card">
                <card-tag :conBaImg="tzglTitleTag" @conClick="testGET()">
                    劳务概况
                </card-tag>
                <div class="chart-container" ref="GJQContainer"></div>
            </div>
        </div>
        <div class="child-item child-middle">
            <div class="animate-card" style="height: 20%;">
                <card-tag :conWidth="200" :conHeight="40" :conBaImg="tzglTitleTag" @conClick="testGET()">
                    招标采购
                </card-tag>
                <div class="card-total-count">
                    <div class="card-total-count_item">
                        招采总数
                        <span style="color: #43FDF2;">37</span>
                        个
                    </div>
                    <div class="card-total-count_item">
                        招采金额
                        <span style="color: #43FDF2;">85</span>
                        亿元
                    </div>
                </div>
                <div class="chart-container" ref="ZBCGContainer" style=""></div>
            </div>
            <div class="animate-card" style="height: 20%;">
                <card-tag :conWidth="200" :conHeight="40" :conBaImg="tzglTitleTag" @conClick="testGET()">
                    合同管理
                </card-tag>
                <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; justify-content: space-between;">
                    <div style="width: 50%;"></div>
                    <div style="width: 50%; position: relative;">
                        <div class="chart-container" ref="HTGLContainer"></div>
                    </div>
                </div>
            </div>
            <div class="animate-card" style="height: 30%;">
                <card-tag :conWidth="200" :conHeight="40" :conBaImg="tzglTitleTag" @conClick="testGET()">
                    计量支付
                </card-tag>
                <div class="card-total-count">
                    <div class="card-total-count_item">
                        计量总金额
                        <span style="color: #43FDF2;">34.06</span>
                        亿元
                    </div>
                    <div class="card-total-count_item">
                        支付总金额
                        <span style="color: #298CE2;">34.06</span>
                        亿元
                    </div>
                    <div class="card-total-count_item">
                        支付占比
                        <span style="color: #43FDF2;">100.00</span>
                        %
                    </div>
                </div>
                <div class="chart-container" ref="JLZFContainer"></div>
            </div>
            <div class="animate-card" style="height: 38%;">
                <card-tag :conWidth="200" :conHeight="40" :conBaImg="tzglTitleTag" @conClick="testGET()">
                    工程进度
                </card-tag>
                <div class="chart-container" ref="GCJDContainerTotal" style="height: 66px; position: relative;"></div>
                <div class="chart-container" ref="GCJDContainer" style="height: calc(65% + 10px); top: calc(35% - 10px); left: 0;"></div>
            </div>
        </div>
        <div class="child-item child-right">
            <div class="animate-card card-static">
                
            </div>
            <div class="animate-card">
                <card-tag :conWidth="200" :conHeight="40" :conBaImg="tzglTitleTag" @conClick="testGET()">
                    工程档案
                </card-tag>
                <div class="card-total-count">
                    <div class="card-total-count_item">
                        档案数量
                        <span style="color: #43FDF2;">325</span>
                        个
                    </div>
                    <div class="card-total-count_item">
                        借阅数量
                        <span style="color: #43FDF2;">23</span>
                        个
                    </div>
                </div>
                <div class="chart-container" ref="GCDAContainer" style=""></div>
            </div>
            <div class="animate-card">
                <card-tag :conWidth="200" :conHeight="40" :conBaImg="tzglTitleTag" @conClick="testGET()">
                    竣工决算
                </card-tag>
                <div class="chart-container" ref="JGJSContainerLeft" style="width: 50%;"></div>
                <div class="chart-container" ref="JGJSContainerRight" style="width: 50%; left: auto; right: 0;"></div>
            </div>
        </div>
    </div>
</template>
<script>
import CardTag from '@/components/CardTag.vue'
import tzglTitleTag from '@/assets/img/gcgl/title_bg.png'
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
        this.echartsSGZR()
        this.echartsZBCG()

        this.echartsHTGL()
        this.echartsJLZF()
        this.echartsGCJDTotal()
        this.echartsGCJD()

        this.echartsGCDA()
        this.echartsJGJSleft()
        this.echartsJGJSright()
    },
    methods: {
        testGET() {
            console.log('click title tag');
        },
        // 施工准入
        echartsSGZR() {
            let color = ['#4caff9', '#FF6A6B', '#4adeca', '#2aa7ee', '#0270f2', '#488cf7']
            let arr = [
                {
                    "name": "劳务作业队伍",
                    "value": "48"
                },
                {
                    "name": "机械设备",
                    "value": "6"
                },
                {
                    "name": "材料",
                    "value": "31"
                }
            ]
            let myChart = this.$echarts.init(this.$refs.SGZRContainer)
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption({
                        color: color,
                        title: [
                            {
                                text: '准入类型',
                                top: '16%',
                                left: '55%',
                                textStyle: {
                                    fontSize: 18,
                                    color:'#fff',
                                    fontWeight: 400
                                }
                            },
                            {
                                text: '备案数量',
                                top: '16%',
                                left: '80%',
                                textStyle: {
                                    fontSize: 18,
                                    color:'#fff',
                                    fontWeight: 400
                                }
                            }
                        ],
                        legend: {
                            icon: "rect",
                            itemWidth: 12,
                            itemHeight: 12,
                            orient: 'vertical',
                            top: '35%',
                            left: '50%',
                            itemGap:16,
                            textStyle: {
                                align: 'left',
                                verticalAlign: 'middle',
                                rich: {
                                    name: {
                                        width:100,
                                        color: '#fff',
                                        fontSize: 16,
                                        padding: [0, 0, 0, 5],
                                        // padding:[10,16,10,10]
                                    },
                                    border:{
                                        color:'#fff',
                                        padding:10
                                    },
                                    value: {
                                        color: '#fff',
                                        fontSize: 16
                                    },
                                    rate: {
                                        color: '#fff',
                                        fontSize: 14,
                                    },
                                },
                            },
                            formatter: (name) => {
                                if (arr.length) {
                                    const item = arr.filter((item) => item.name === name)[0];
                                    return `{name|${name} }     {value| ${item.value}}`;
                                }
                            },
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['0%', '70%'],
                                center: ['25%', '50%'],
                                data: arr,
                                itemStyle: {
                                    borderWidth: 2
                                },
                                label: {
                                    position: 'inside',
                                    formatter:
                                            '{d}' + '%'
                                    ,
                                    color: '#fff',
                                    fontSize: 18,
                                    rich: {
                                        icon: {
                                            fontSize: 12,
                                            color: '#fff',

                                        },
                                        name: {
                                            fontSize: 12,
                                            padding: [0, 0, 0, 10],
                                            color: '#fff'
                                        },
                                        value: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            padding: [10, 0, 0, 20],
                                            color: '#fff'
                                            // color: '#333333'
                                        }
                                    }
                                },
                            }
                        ]
                    })
            }, 1000);
        },  
        // 招标采购
        echartsZBCG() {
            let color = ['#06BAF8', '#8FED7E', '#4adeca', '#2aa7ee', '#0270f2', '#488cf7'];
            let arr = [
                {
                    "name": "公开招标",
                    "value": 18,
                    "value1": "93.16"
                },
                {
                    "name": "非公开招标",
                    "value": 19,
                    "value1": "0.09"
                }
            ]
            let myChart = this.$echarts.init(this.$refs.ZBCGContainer)
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption({
                    color: color,
                    title: [{
                        text: '招采类型',
                        top: '46%',
                        left: '30%',
                        textStyle: {
                            fontSize: 20,
                            color:'#fff',
                            fontWeight: 500
                        }
                    }],
                    legend: {
                        icon: "rect",
                        itemWidth: 12,
                        itemHeight: 12,
                        orient: 'vertical',
                        top: '30%',
                        left: '47%',
                        itemGap:12,
                        formatter: (name) => {
                            if (arr.length) {
                                const item = arr.filter((item) => item.name === name)[0];
                                return `{name|${name} }{value| ${item.value}个} {value| ${item.value1} 亿元}`;
                            }
                        },
                        textStyle: {
                            align: 'left',
                            verticalAlign: 'middle',
                            rich: {
                                name: {
                                    width:100,
                                    color: '#fff',
                                    fontSize: 18,

                                },

                                value: {
                                    color: '#fff',
                                    fontSize: 18,

                                },
                                rate: {
                                    color: '#fff',
                                    fontSize: 18,
                                },
                            },
                        },
                    },
                    series: [
                        {
                            type: 'pie',
                            // roseType: 'radius',
                            radius: ['50%', '70%'],
                            center: ['35%', '55%'],
                            data: arr,
                            itemStyle: {
                                borderWidth: 2
                            },
                            label:{
                                show:false
                            }
                        }
                    ]
                })
            }, 1000);
        },
        // 合同管理
        echartsHTGL() {
            let myChart = this.$echarts.init(this.$refs.HTGLContainer)
            let color = ['#86ACF5', '#FB6B71', '#4adeca', '#2aa7ee', '#0270f2', '#488cf7']
            let arr = [
                {
                    "name": "A类（建安)",
                    "value": 6,
                    "value1": "91.97"
                },
                {
                    "name": "B类（勘察设计咨询）",
                    "value": 30,
                    "value1": "1.91"
                },
                {
                    "name": "C类（征地拆迁）",
                    "value": 8,
                    "value1": "4.36"
                },
                {
                    "name": "F类（综合管理）",
                    "value": 29,
                    "value1": "10.28"
                }
            ]
            let options = {
                color: color,
                title: [{
                    text: '合同类型',
                    top: '43%',
                    left: '5.2%',
                    textStyle: {
                        fontSize: 20,
                        color:'#fff',
                        fontWeight: 500
                    }
                }],
                legend: {
                    icon: "rect",
                    itemWidth: 12,
                    itemHeight: 12,
                    orient: 'vertical',
                    top: '12%',
                    left: '32%',
                    itemGap:12,
                    textStyle: {
                        align: 'left',
                        verticalAlign: 'middle',
                        rich: {
                            name: {
                                width:150,
                                color: '#fff',
                                fontSize: 16,
                            },
                            value: {
                                width:40,
                                color: '#fff',
                                fontSize: 16,

                            },
                            rate: {
                                color: '#fff',
                                fontSize: 16,
                            },
                        },
                    },
                    formatter: (name) => {
                        if (arr.length) {
                            const item = arr.filter((item) => item.name === name)[0];
                            return `{name|${name} }{value| ${item.value}个} {value| ${item.value1} 亿元}`;
                        }
                    },
                },
                series: [{
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['15%', '50%'],
                    data: arr,
                    itemStyle: {
                        borderWidth: 2
                    },
                    label:{
                        show:false
                    }
                }]
            }
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption(options)
            }, 1000);

        },   
        // 计量支付
        echartsJLZF() {
            let myChart = this.$echarts.init(this.$refs.JLZFContainer)
            let color = ['#06BAF8', '#FF6A6B', '#8FED7E', '#FCA25D', '#7F8EE3', '#960881','#DFD251','#17B4AA']
            let arr = [
                {
                    "name": "安全设施及预埋管线",
                    "value": "0.01",
                    "value1": "0.00"
                },
                {
                    "name": "总则",
                    "value": "4.55",
                    "value1": "2.47"
                },
                {
                    "name": "暂列金额",
                    "value": "0.00",
                    "value1": "0.00"
                },
                {
                    "name": "桥梁",
                    "value": "13.40",
                    "value1": "5.64"
                },
                {
                    "name": "桥梁、涵洞",
                    "value": "31.12",
                    "value1": "13.99"
                },
                {
                    "name": "绿化及环境保护设施",
                    "value": "2.22",
                    "value1": "0.00"
                },
                {
                    "name": "路基",
                    "value": "20.30",
                    "value1": "11.96"
                },
                {
                    "name": "路面",
                    "value": "0.18",
                    "value1": "0.00"
                }
            ]
            let options = {
                color: color,
                title: [ 
                    {
                        text: '分类统计',
                        top: '66%',
                        left: '20.5%',
                        textStyle: {
                            fontSize: 18,
                            color:'#fff',
                            fontWeight: 500
                        }
                    },
                    {
                        text: '类型统计',
                        top: '35%',
                        left: '44%',
                        textStyle: {
                            fontSize: 18,
                            color:'#fff',
                            fontWeight: 500
                        }
                    },
                    {
                        text: '合同金额（亿元）',
                        top: '35%',
                        left: '64%',
                        textStyle: {
                            fontSize: 18,
                            color:'#fff  ',
                            fontWeight: 500
                        },

                    },
                    {
                        text: '计量金额（亿元）',
                        top: '35%',
                        left: '82%',
                        textStyle: {
                            fontSize: 18,
                            color:'#fff  ',
                            fontWeight: 500
                        },

                    }
                ],
                legend: {
                    type: 'scroll',
                    icon: "rect",
                    itemWidth: 12,
                    itemHeight: 12,
                    orient: 'vertical',
                    top: '46%',
                    left: '44.3%',
                    itemGap:10,
                    textStyle: {
                        align: 'left',
                        verticalAlign: 'middle',
                        rich: {
                            name: {
                                width:160,
                                color: '#fff',
                                fontSize: 16,
                                // padding: [0, 0, 0, 5],
                                // padding:[10,16,10,10]
                            },
                            border:{
                                color:'#fff',
                                padding:10
                            },
                            value: {
                                width:165,

                                color: '#fff',
                                fontSize: 16
                            },
                            rate: {
                                color: '#fff',
                                fontSize: 16,
                            },
                        },
                    },
                    formatter: (name) => {
                        if (arr.length) {
                            const item = arr.filter((item) => item.name === name)[0];
                            return `{name|${name} }{value| ${item.value}}{value| ${item.value1}}`;
                        }
                    },
                },
                series: [{
                    type: 'pie',
                    roseType: 'radius',
                    radius: ['28%', '40%'],
                    center: ['25%', '72%'],
                    data: arr,
                    itemStyle: {
                        borderWidth: 2
                    },
                    labelLine: {
                        length: 20,
                        length2: 50,
                        lineStyle: {
                            // color: '#46e6c3',
                            width: 2,
                        },
                    },
                    label: {
                        formatter:
                            '{d}' + '%'
                        ,
                        color: '#fff',
                        fontSize: 18,
                        padding: [0, -50, 25, -50],
                        rich: {
                            name: {
                                fontSize: 13,
                                lineHeight: 25,
                            },
                            percent: {
                                fontSize: 14,
                            },
                            hr: {
                                //中间线
                                borderColor: '#46e6c3',
                                width: '100%',
                                borderWidth: 1,
                                height: 0,
                            },
                        },
                    },
                }]
            }
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption(options)
            }, 1000);

        },
        // 工程进度
        echartsGCJDTotal() {
            let color = ['#f56c6c', '#429eff', '#e7a23d', '#67c33a']
            let currentNum = 57.70
            let myChart = this.$echarts.init(this.$refs.GCJDContainerTotal)
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            let options = {
                grid: {
                    left: '22%',
                    right: '20%'
                },
                xAxis: {
                    show: false,
                },
                yAxis: {
                    type: 'category',
                    axisLabel: {
                        show: true,
                        color: '#fff',
                        fontSize: 22,
                        fontWeight: 500,
                        margin: 15,

                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    data: ['工程总进度']
                },
                series: [
                    {
                        type: 'bar',
                        barGap: '-65%',
                        label: {
                            show: true,
                            position: 'right',
                            color: '#fff',
                            fontSize: 22,
                            offset: [10, 0],
                            formatter: function() {
                                return currentNum + '%';
                            },
                        },
                        barWidth: '30%',
                        itemStyle: {
                            borderColor: '#4DCEF8',
                            borderWidth: 1,
                            borderRadius: 15,
                            color: 'rgba(102, 102, 102,0)'
                        },
                        z: 1,
                        data: [100],
                    }, 
                    {
                        type: 'bar',
                        barGap: '-85%',
                        barWidth: '22%',
                        itemStyle: {
                            borderRadius: 16,
                            color: function(params) {
                                let percentage = params.value
                                if(percentage <= 50) {
                                    return color[0]
                                } else if(percentage > 50 && percentage <=70) {
                                    return color[1]
                                } else if(percentage > 70 && percentage <= 80) {
                                    return color[2]
                                } else {
                                    return color[3]
                                }
                            },
                        },
                        max: 1,
                        labelLine: {
                            show: true,
                        },
                        z: 2,
                        data: [currentNum > 100 ? 100 : currentNum],
                    }
                ]
            }
            setTimeout(() => {
                myChart.hideLoading()
                myChart.setOption(options)
            }, 1000);
        },
        echartsGCJD() {
            let color = ['#f56c6c', '#429eff', '#e7a23d', '#67c33a']
            let myChart = this.$echarts.init(this.$refs.GCJDContainer)
            let arr = [
                {
                    "name": "总则",
                    "value": "155.05"
                },
                {
                    "name": "路基工程",
                    "value": "132.64"
                },
                {
                    "name": "路面工程",
                    "value": 0
                },
                {
                    "name": "桥梁工程",
                    "value": "84.36"
                },
                {
                    "name": "隧道工程",
                    "value": "298.48"
                },
                {
                    "name": "安全设施及预埋管线",
                    "value": 0
                },
                {
                    "name": "绿化及环境保护设施",
                    "value": "149.14"
                },
                {
                    "name": "交通机电工程",
                    "value": 0
                }
            ]
            let len = Math.ceil(arr.length / 2)
            let otherLen = arr.length - len
            let data1 = arr.slice(0, len)
            let data2 = arr.slice(len)
            let options = {
                color: '#409EFF',
                legend: {
                    right: 10,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: [
                    {
                        x: '5%',
                        y: '5%',
                        width: '40%',
                        height: '100%'
                        // containLabel: true
                    }, 
                    {
                        x2: '5%',
                        y: '5%',
                        width: '40%',
                        height: otherLen / len * 100 + '%'
                        // containLabel: true
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        gridIndex: 0,
                        axisLine: {
                            show: 0
                        },
                        axisLabel: {
                            verticalAlign: 'bottom',
                            align: 'left',
                            padding: [0, 0, 15, 10],
                            color: '#fff',
                            fontSize: '18',
                        },
                        axisTick: {
                            show: 0
                        },
                        inverse: true,
                        data: data1.map(item => item.name)
                    }, 
                    {
                        type: 'category',
                        gridIndex: 0,
                        axisLine: {
                            show: 0
                        },
                        axisLabel: {
                            verticalAlign: 'bottom',
                            align: 'right',
                            padding: [0, 0, 15, 10],
                            formatter: params => {
                                return `{num|${params}%}`
                            },
                            rich: {
                                num: {
                                    color: '#fff',
                                    fontSize: '18',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        axisTick: {
                            show: 0
                        },
                        inverse: true,
                        data: data1.map(item => item.value)
                    }, 
                    {
                        type: 'category',
                        gridIndex: 1,
                        axisLine: {
                            show: 0
                        },
                        axisLabel: {
                            verticalAlign: 'bottom',
                            align: 'left',
                            padding: [0, 0, 15, 10],
                            color: '#fff',
                            fontSize: '18',
                        },
                        axisTick: {
                            show: 0
                        },
                        inverse: true,
                        data: data2.map(item => item.name)
                    }, 
                    {
                        type: 'category',
                        gridIndex: 1,
                        axisLine: {
                            show: 0
                        },
                        axisLabel: {
                            verticalAlign: 'bottom',
                            align: 'right',
                            padding: [0, 0, 15, 10],
                            formatter: params => {
                                return `{num|${params}%}`
                            },
                            rich: {
                                num: {
                                    color: '#fff',
                                    fontSize: '18',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        axisTick: {
                            show: 0
                        },
                        inverse: true,
                        data: data2.map(item => item.value)
                    }
                ],
                xAxis: [
                    {
                        show: 0,
                        type: 'value',
                        gridIndex: 0,
                        max: 100,
                        axisLine: {
                            show: 0
                        },
                        axisTick: {
                            show: 0
                        },
                        splitLine: {
                            show: 0
                        }
                    }, 
                    {
                        show: 0,
                        gridIndex: 1,
                        max: 100,
                        type: 'value',
                        axisLine: {
                            show: 0
                        },
                        axisTick: {
                            show: 0
                        },
                        splitLine: {
                            show: 0
                        }
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: 5,
                        xAxisIndex: 0,
                        yAxisIndex: [0, 1],
                        itemStyle: {
                            color: function(params) {
                                let percentage = params.value
                                if(percentage <= 50) {
                                    return color[0]
                                } else if(percentage > 50 && percentage <=70) {
                                    return color[1]
                                } else if(percentage > 70 && percentage <= 80) {
                                    return color[2]
                                } else {
                                    return color[3]
                                }
                            },
                            barBorderRadius: 5
                        },
                        showBackground: true,
                        backgroundStyle: {
                            color: '#263877',
                            barBorderRadius: 5,
                        },
                        data: data1
                    }, 
                    {
                        type: 'bar',
                        barWidth: 5,
                        xAxisIndex: 1,
                        yAxisIndex: [2, 3],
                        itemStyle: {
                            color: function(params) {
                                console.log(params);
                                let percentage = params.value
                                if(percentage <= 50) {
                                    return color[0]
                                } else if(percentage > 50 && percentage <=70) {
                                    return color[1]
                                } else if(percentage > 70 && percentage <= 80) {
                                    return color[2]
                                } else {
                                    return color[3]
                                }
                            },
                            barBorderRadius: 5
                        },
                        showBackground: true,
                        backgroundStyle: {
                            color: '#263877',
                            barBorderRadius: 5,
                        },
                        data: data2
                    }
                ]
            }
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            setTimeout(() => {
                myChart.hideLoading()
                myChart.setOption(options)
            }, 1000);
        },  
        // 工程档案
        echartsGCDA() {
            let myChart = this.$echarts.init(this.$refs.GCDAContainer)
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            let arr1 = ['立顶+设计', '工程管理', '监理类', '施工类', '技术类', '验收类']
            let arr2 = ['53', '63', '96', '45', '12', '56']
            let arr3 = ['3', '10', '2', '3', '5', '0']
            let options = {
                animation: true,
                legend: {
                    top:'30%',
                    bottom: '0%',
                    x:'70%',
                    left: 'right',
                    itemWidth: 13,
                    itemHeight: 13,
                    padding: [5, 10],
                    textStyle: {
                        fontSize: 18,
                        color: '#fff',
                        padding: [3, 0, 0, 0],
                    },
                },
                grid: {
                    top: "40%",
                    bottom: "18%",
                    right: "5%",
                    left: "10%"
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                    textStyle: {
                        fontSize: 16
                    }
                },
                xAxis: {
                    data: arr1,
                    axisLine: {
                        show: true //隐藏X轴轴线
                    },
                    axisTick: {
                        show: false //隐藏X轴轴线
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: "rgba(77, 128, 254, 0.2)",
                            width: 2
                        }
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        // margin: 14,
                        fontSize: 13,
                        textStyle: {
                            fontSize: '16',
                            color: "#a8d5ff" //X轴文字颜色
                        },
                        rotate:30,
                    }
                },
                yAxis: [
                    {

                        name:'总数',
                        nameTextStyle:{
                            fontSize: 18,
                            color:'#fff',
                            padding:[0,50,0,0]
                        },
                        type: "value",
                        min: 0,
                        //max: 100,
                        // interval: 100,
                        // splitNumber: 4,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255, 255, 255, 0.2)",
                                width: 1,
                                type:'dashed'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: "rgba(255, 255, 255, 0.2)",
                                width: 1,
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "rgba(77, 128, 254, 0.2)"
                            }
                        },
                        axisLabel: {
                            show: true,
                            margin: 16,
                            fontSize: 13,
                            textStyle: {
                                color: "#a8d5ff"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: "归档数量",
                        type: "bar",
                        barWidth: 16,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true, //开启显示
                                    position: 'top', //在上方显示
                                    textStyle: { //数值样式
                                        color: '#fff',
                                        fontSize: 16
                                    },
                                    z:10
                                },
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgba(212,93,65, 1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(70,41,40, 1)"
                                    }
                                ])
                            }
                        },
                        data: arr2,
                        z: 15,
                        zlevel: 0
                    },
                    {
                        name: "借阅数量",
                        type: "bar",
                        stack: 'total',
                        barWidth: 16,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true, //开启显示
                                    position: 'top', //在上方显示
                                    textStyle: { //数值样式
                                        color: '#fff',
                                        fontSize: 16
                                    },
                                    z:10
                                },
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgba(137,159,207, 1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(87,101,138, 1)"
                                    }
                                ])
                            }
                        },
                        data: arr3,
                        z: 15,
                        zlevel: 0
                    },



                ],
            }
            setTimeout(() => {
                myChart.hideLoading()
                myChart.setOption(options)
            }, 1000);
        },
        // 竣工决算
        echartsJGJSleft() {
            let myChart = this.$echarts.init(this.$refs.JGJSContainerLeft)
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            let nameList1 = ['基建拨款','基建借款','基建资金']
            let arr1 = [
                {
                    name:'基建拨款',
                    value:0,
                },
                {
                    name:'基建借款',
                    value:0,
                },
                {
                    name:'基建资金',
                    value:0,
                }
            ]
            let options = {
                title:{
                    text:'资金来源',
                    left:'30.5%',
                    top:'35%',
                    textStyle:{
                        color:'#fff',
                        fontSize:'20',
                        fontWeight: 500
                    }
                },
                tooltip: {
                    show: false
                },
                legend: {
                    icon: "rect",
                    itemWidth: 12,
                    itemHeight: 12,
                    orient: 'vertical',
                    top: '65%',
                    left: '10%',
                    itemGap:16,
                    textStyle: {
                        align: 'left',
                        verticalAlign: 'middle',
                        rich: {
                            name: {
                                color: '#fff',
                                fontSize: 18,
                                padding:[10,16,10,10]
                            },
                            border:{
                                color:'#fff',
                                padding:10
                            },
                            value: {
                                color: '#fff',
                                fontSize: 18
                            },
                            rate: {
                                color: '#fff',
                                fontSize: 18,
                            },
                        },
                    },
                    data: nameList1,
                    formatter: (name) => {

                        if (arr1.length) {
                            const item = arr1.filter((item) => item.name === name)[0];
                            return `{name|${name} }{value| ${item.value ? item.value+'万元' : '--'}}`;
                            // return `{name|${name} }{value| --}`;
                        }
                    },
                },
                series: [
                    {
                        // name: '一般',
                        type: 'pie',
                        radius: ['40%','55%'],
                        center:['50%','40%'],
                        data: arr1,
                        label:{
                            show:false
                        },
                        color:['#85ACF4','#FCDA7A','#FD6C72','#FFC920','#FA5B36'],
                        itemStyle:{
                            borderColor: 'rgba(27, 47, 63, 0.6)',
                            borderWidth:2
                        }
                    },

                ]
            }
            setTimeout(() => {
                myChart.hideLoading()
                myChart.setOption(options)
            }, 1000);
        },
        echartsJGJSright() {
            let myChart = this.$echarts.init(this.$refs.JGJSContainerRight)
            myChart.showLoading({
                maskColor: 'rgba(0, 0, 0, 0)',
                fontSize: 30,
                textColor: '#fff'
            })
            let nameList1 = ['基本建设支出','货币资金合计','固定资产合计']
            let arr1 = [
                {
                name:'基本建设支出',
                    value:0,
                },
                {
                    name:'货币资金合计',
                    value:0,
                },
                {
                    name:'固定资产合计',
                    value:0,
                }
            ]
            let options = {
                title:{
                    text:'资金占用',
                    left:'30.5%',
                    top:'35%',
                    textStyle:{
                        color:'#fff',
                        fontSize:'20',
                        fontWeight: 500
                    }
                },
                tooltip: {
                    show: false
                },
                legend: {
                    icon: "rect",
                    itemWidth: 12,
                    itemHeight: 12,
                    orient: 'vertical',
                    top: '65%',
                    left: '10%',
                    itemGap:16,
                    textStyle: {
                        align: 'left',
                        verticalAlign: 'middle',
                        rich: {
                            name: {
                                color: '#fff',
                                fontSize: 18,
                                padding:[10,16,10,10]
                            },
                            border:{
                                color:'#fff',
                                padding:10
                            },
                            value: {
                                color: '#fff',
                                fontSize: 18
                            },
                            rate: {
                                color: '#fff',
                                fontSize: 18,
                            },
                        },
                    },
                    data: nameList1,
                    formatter: (name) => {

                        if (arr1.length) {
                            const item = arr1.filter((item) => item.name === name)[0];
                            return `{name|${name} }{value| ${item.value ? item.value+'万元' : '--'}}`;
                            // return `{name|${name} }{value| --}`;
                        }
                    },
                },
                series: [
                    {
                        // name: '一般',
                        type: 'pie',
                        radius: ['40%','55%'],
                        center:['50%','40%'],
                        data: arr1,
                        label:{
                            show:false
                        },
                        color:['#85ACF4','#FCDA7A','#FD6C72','#FFC920','#FA5B36'],
                        itemStyle:{
                            borderColor: 'rgba(27, 47, 63, 0.6)',
                            borderWidth:2
                        }
                    },

                ]
            }
            setTimeout(() => {
                myChart.hideLoading()
                myChart.setOption(options)
            }, 1000);
        }
    }
}
</script>
<style lang="scss">
.gcgl-container {
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
            .card-total-count {
                width: 100%;
                padding: 2px 20px;
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                font-size: 18px;
                .card-total-count_item {
                    span {
                        font-size: 24px;
                        font-weight: 600;
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
        .card-static {
            border: none;
            box-shadow: none;
            &:hover {
                animation: none;
            }
        }
    }
    .child-left {
        justify-content: space-between;
        .animate-card {
            height: 33%;
        }
    }
    .child-right {
        justify-content: space-between;
        .animate-card {
            height: 33%;
        }
    }
    .child-middle {
        flex: 2;
        justify-content: space-between;
    }
}
</style>