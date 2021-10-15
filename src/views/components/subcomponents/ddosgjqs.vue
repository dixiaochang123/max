<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart20"' width="100%" height="100%" ref="chart20" :echartsOption="option20" />
        </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import { indexInfo } from "@/utils/data/indexData.js";
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
        option20: {
    // "tooltip": {
    //     "trigger": "axis",
    //     "axisPointer": {
    //         "type": "shadow",
    //         textStyle: {
    //             color: "#fff"
    //         }

    //     },
    // },
    legend: {
        data: ['国际发起', '国内发起'],
        icon: "rect",
        itemWidth:10,
        itemHeight:10,
        orient: 'horizontal' ,
        top: 0,
        right: 30,
        textStyle: {
            color: "#55698e",
            fontSize: "11px",
        }
    },
    grid: {
        top: 30,
          bottom: 50,
          left: 75,
          right:35
    },
    "calculable": true,
    xAxis: [{
        data:  ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
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
    }],
    yAxis: [{
        name:"TByte              ",
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
    }],
    series: [{
            "name": "国际发起",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 25,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": 
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(247, 198, 2, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(35, 157, 250, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            // data: ["20300", "10050", "7040","36008","10809","35087","50000","20809","17809","46809","36809","26809"]
            data: indexInfo[5].data.filter(item=>item.indexNum==2).map(item=>item.firstNum),
            animationDuration: 6000,
            animationEasing: "cubicInOut",
        },

        {
            "name": "国内发起",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(1, 198, 250, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(35, 250, 187, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    "barBorderRadius": 0
                }
            },
            // data: ["20300", "10050", "7040","36008","10809","35087","50000","20809","17809","46809","36809","26809"]
            data:  indexInfo[5].data.filter(item=>item.indexNum==3).map(item=>item.firstNum),
            animationDuration: 6000,
            animationEasing: "cubicInOut",
        },
    ]
}

    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('DDoS高防IP')) {
          this.$nextTick(()=>{
            // this.animateAll();
            let data20 = this.data.filter(item=>item.indexNum==2).map(item=>item.endNum);
            let data21 = this.data.filter(item=>item.indexNum==3).map(item=>item.endNum);
            this.option20.series[0].data = data20;
            this.option20.series[1].data = data21;
            this.option20.series[0].animationDuration =this.data[3].aniTime * 2000;
            this.option20.series[1].animationDuration = this.data[3].aniTime * 2000;
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
