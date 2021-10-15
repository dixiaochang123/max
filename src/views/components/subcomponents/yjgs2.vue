<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart22"' width="100%" height="100%" ref="chart22" :echartsOption="option22" />
        </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import { format } from 'echarts';
const echarts = require("echarts");
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
    productseleted: {
      type: Array,
      default: [],
    },
  },
  components: {
    Chart
  },
  data() {
    return {
        option22: {
    color: ['#eec104', '#05fdff'],
    // title: {
    //     text: '渐变堆叠面积图'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        formatter :function(params) {
          return
        }
    },
    legend: {
        data: ['时延', '抖动'],
        icon: "circle",
        itemWidth:10,
        itemHeight:10,
        orient: 'horizontal' ,
        top: 0,
        right: 30,
        textStyle: {
            color: "#fff",
            fontSize: "11px",
        }
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2', '4', '8', '12', '16', '20', '24'],
            axisLine:{
              show:true
            },
            splitLine:{
              show:false
            },
            axisTick:{
              show:false
            },
            axisLabel:{
              color:'#fff'
            }
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine:{
              show:false
            },
            axisLine:{
              show:true
            },
        }
    ],
    series: [
        {
            name: '时延',
            type: 'line',
            // stack: '总量',
            smooth: true,
            lineStyle: {
                width: 1
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    // color: 'rgba(128, 255, 165)'
                    color: 'rgba(105, 106, 40)'
                }, {
                    offset: 1,
                    // color: 'rgba(1, 191, 236)'
                    color: 'rgba(105, 106, 40,0.1)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250],
            animationDuration: 3000,
            animationEasing: "cubicInOut",
            
        },
        {
            name: '抖动',
            type: 'line',
            // stack: '总量',
            smooth: true,
            lineStyle: {
                width: 1
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    // color: 'rgba(0, 221, 255)'
                    color: 'rgba(38, 130, 129)'
                }, {
                    offset: 1,
                    // color: 'rgba(77, 119, 255)'
                    color: 'rgba(38, 130, 129,0.1)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310],
            animationDuration: 3000,
            animationEasing: "cubicInOut",
        }
    ]
    }

    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('云间高速')) {
          this.$nextTick(()=>{

            // this.animateAll();
            let data22 = this.data.filter(item=>item.indexNum==2).map(item=>item.endNum);
            let data33 = this.data.filter(item=>item.indexNum==3).map(item=>item.endNum);
            this.option22.series[0].data = data22;
            this.option22.series[1].data = data33;
          })
        }
        
      },
      deep:true,
      immediate: true
    }
  },
  mounted() {
    // this.animateAll();
  },
  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content13 {
  width: 100%;
  height: 100%;
}
.chart1_1 {
      height: calc(100% - 60px);
      width: 100%;
}

.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
