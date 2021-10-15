<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart26"' width="100%" height="100%" ref="chart26" :echartsOption="option26" />
        </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import { indexInfo } from "@/utils/data/indexData.js";
const echarts = require("echarts");
var xData2 = ["周一","周二","周三","周四","周五","周六","周日"];
// var data1 = [2164,3416,3782,2940,3389,2961,3461];
var data1 = indexInfo[11].data.filter(item=>item.indexNum==2).map(item=>item.firstNum);
var data2 = indexInfo[11].data.filter(item=>item.indexNum==2).map(item=>item.maxNum/3);
console.log(data2)

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
        option26: {
    // backgroundColor: '#021132',
    // tooltip: {
    //     trigger: 'item',
    // },
    grid: {
         top: 30,
          bottom: 50,
          left: 55,
          right:35
    },
    xAxis: {
        data: xData2,
        axisLabel: {
            textStyle: {
                 color: "#55698e",
                fontSize:14
            },
            margin: 30, //刻度标签与轴线之间的距离。
        },

        axisLine: {
            show: false //不显示x轴
        },
        axisTick: {
            show: false //不显示刻度
        },
        boundaryGap: true,
        splitLine: {
            show: false,
            width: 0.08,
            lineStyle: {
                type: "solid",
                color: "#122e47",
            }
        }

    },
    yAxis: {
        max:5000,
        splitNumber : 5,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eee',
                type: 'solid'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: "#55698e",
            fontSize: "11px",
        }
    },
    series: [
            {//三个最低下的圆片
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [25, 15],
                "symbolOffset": [0, 10],
                "z": 12,
                itemStyle:{
                    opacity:1,
                    color: "#1abff9"
                },
                "data": [1,1,1,1,1,1,1]
            },


            //下半截柱状图
            {
                name: '2020',
                type: 'bar',
                barWidth: 25,
                barGap: '-100%',
                label: {
                    show: true,
                    precision: 1,
                    position: [0,-17,0,0],
                    valueAnimation: true,
                    fontFamily: 'monospace',
                    color: "#fff" ,
                },
                itemStyle: {//lenged文本
                    opacity:.7,
                    color: "#55eef4"
                },

                data: data1
            },

            {
                "name": "", //头部
                "type": "pictorialBar",
                "symbolSize": [25, 15],
                "symbolOffset": [0, -10],
                "z": 12,
                "symbolPosition": "end",
                itemStyle:{
                    color:'#55eef4',
                    opacity:1,
                },
                "data": data2
            },

            {
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [25, 15],
                "symbolOffset": [0, -10],
                "z": 12,
                itemStyle:{
                    opacity:0.8,
                    color: '#15658a'
                },
                "symbolPosition": "end",
                "data": data1
            },

            {
                // name: '2019',
                type: 'bar',
                barWidth: 25,
                barGap: '-100%',
                z:0,
                itemStyle: {
                    color: '#16668b',
                    opacity:.7,
                },

                data: data2
            }


        ]
}
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('弹性负载均衡ELB')) {
          this.$nextTick(()=>{

            // this.animateAll();
            let data26 = this.data.filter(item=>item.indexNum==2).map(item=>item.endNum);
            console.log(data26)
            this.option26.series[1].data = data26;
            this.option26.series[3].data = data26;
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
