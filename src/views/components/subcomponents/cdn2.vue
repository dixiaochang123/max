<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart14"' width="100%" height="100%" ref="chart14" :echartsOption="option14" />
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import { mapGetters } from "vuex";
import { TweenMax } from "gsap";
import Chart from "@/components/Chart";

export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
    productseleted: {
      type: Array,
      default: [],
    }
  },
  components: {
    Chart
  },
  data() {
    return {
      time:null,
      option14: {
        grid: {
          left: "5%",
          right: "5%",
          bottom: "0",
          top: "0",
          containLabel: true,
        },
        tooltip:{
          show:true
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#9db2db",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: ["0-4h", "5-8h", "9-12h", "13-16h", "17-20h", "21-24h"],
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#9db2db",
                fontSize: "12",
              },
              formatter: function (value) {
                if (value >= 10000) {
                  return (value / 10000).toLocaleString() + "万";
                } else {
                  return value.toLocaleString();
                }
              },
            },
            data: indexInfo[3].data.filter(item=>item.indexNum==2).map(item=>item.endNum)
          },
        ],
        series: [
          {
            name: "金额",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                color: function (params) {
                  // console.log(params,params.value,10000 * 0.33)
                  if (params.value < (10000 * 0.33)) {
                    return "#49beff";
                  } else if (params.value < (10000 * 0.66)) {
                    return "#ffff06";
                  } else {
                    return "#ff4452";
                  }
                },
              },
            },
            barWidth: 15,
            data: indexInfo[3].data.filter(item=>item.indexNum==2).map(item=>item.firstNum),
            animationDuration: 3000,
            animationEasing: "cubicInOut",
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 15,
            barGap: "-100%",
            data: indexInfo[3].data.filter(item=>item.indexNum==2).map(item=>item.endNum),
            itemStyle: {
              normal: {
                color: "rgba(15,47,75,0.9)",
              },
            },
            animationDuration: 3000,
            animationEasing: "cubicInOut",
          },
        ],
      },
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('CDN内容分发')) {
          this.$nextTick(()=>{

            // this.animateAll();
            let data14 = this.data.filter(item=>item.indexNum==2).map(item=>item.endNum)
            this.option14.series[0].data = data14;
            this.option14.yAxis[1].data = data14;
            // this.time = setInterval(()=>{
            //   this.option14.series[0].data = this.option14.yAxis[1].data = this.data.filter(item=>item.indexNum==2).map(item=>{
            //     return parseInt(Math.random()*(parseInt(item.endNum + (item.endNum * 0.05))-parseInt(item.endNum - (item.endNum * 0.05)))+parseInt(item.endNum - (item.endNum * 0.05)))
            //   });
            //   console.log(this.option14.series[0].data)

            // },5000)
          })
        }
        
      },
      deep:true,
      immediate: true
    }
  },
  beforeDestroy() {
    clearInterval(this.time)
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
