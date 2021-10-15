<template>
  <div class="content13">
    <div class="chart1_1">
      <div class="imgs">
        <img src="../../../assets/img/组580.png" alt="">
        <img src="../../../assets/img/组581.png" alt="">
      </div>
      <div class="chart_bar">
        <div class="chart_bar1">
          <p><span>存储（TB）</span><span class="number val2zsy" :data-target="data[0].endNum">{{data[0].firstNum}}</span></p>
          <Chart :id='"chart15"' width="100%" height="20px" ref="chart15" :echartsOption="option15" />
        </div>
        <div class="chart_bar1">
          <p><span>VCPU数量</span><span style="color:#00d5e1" class="number val2zsy" :data-target="data[1].endNum">{{data[1].firstNum}}</span></p>
          <Chart :id='"option15_1"' width="100%" height="20px" ref="option15_1" :echartsOption="option15_1" />
        </div>
      </div>
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
    },
  },
  components: {
    Chart,
  },
  data() {
    return {
      option15: {
        // backgroundColor: 'rgba(13,37,55,0.5)',
        grid: {
          // top: '15%',
          left: "0",
          right: 75,
          // bottom: '13%'
        },
        xAxis: {
          type: "value",
          min: 0,
          max: 1,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          //show: false,
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          // data: ['5次']
        },
        series: [
          {
            //真实数值条形图
            name: "真实值",
            type: "bar", //pictorialBar
            barWidth: "20%",
            itemStyle: {
              color: "#4da3ff",
            },
            label: {
              show: false,
            },
            data: [1],
            z: 0,
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
          {
            //辅助方格图形
            name: "辅助值",
            type: "pictorialBar",
            barWidth: "20%",
            symbol: "rect",
            // symbolRepeat: 'true',
            symbolMargin: "80%",
            symbolSize: ["20%", "100%"],
            symbolOffset: ["150%", "0%"],
            symbolRepeat: true,
            itemStyle: {
              color: "#0d2538",
              barBorderRadius: 10,
            },
            data: [1],
            z: 1,
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
          {
            //辅助背景图形
            name: "背景条",
            type: "bar", //pictorialBar
            barWidth: "20%",
            barGap: "-100%",
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: "rgba(13,37,55,0.5)",
                // color: "#00d5e1",
              },
              barBorderRadius: 10,
            },
            data: [1],
            z: 0,
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
        ],
      },
      option15_1: {
        // backgroundColor: 'rgba(13,37,55,0.5)',
        grid: {
          // top: '15%',
          left: "0",
          right: 75,
          // bottom: '13%'
        },
        xAxis: {
          type: "value",
          min: 0,
          max: 1,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          //show: false,
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          // data: ['5次']
        },
        series: [
          {
            //真实数值条形图
            name: "真实值",
            type: "bar", //pictorialBar
            barWidth: "20%",
            itemStyle: {
              color: "#0c495c",
            },
            label: {
              show: false,
            },
            data: [1],
            z: 0,
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
          {
            //辅助方格图形
            name: "辅助值",
            type: "pictorialBar",
            barWidth: "20%",
            symbol: "rect",
            // symbolRepeat: 'true',
            symbolMargin: "80%",
            symbolSize: ["20%", "100%"],
            symbolOffset: ["150%", "0%"],
            symbolRepeat: true,
            itemStyle: {
              color: "#0d2538",
              barBorderRadius: 10,
            },
            data: [1],
            z: 1,
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
          {
            //辅助背景图形
            name: "背景条",
            type: "bar", //pictorialBar
            barWidth: "20%",
            barGap: "-100%",
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: "#00d5e1",
              },
              barBorderRadius: 10,
            },
            data: [0],
            z: 0,
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
        ],
      },
    };
  },
  watch: {
    productseleted: {
      handler: function (val) {
        if (val && val.includes("专属云")) {
          this.$nextTick(() => {
            this.animateAll();
            let data15 = indexInfo[4].data[0].endNum
            this.option15.series[0].data[0] = data15/(data15*2);
            let data15_1 = indexInfo[4].data[1].endNum
            this.option15_1.series[0].data[0] = data15_1/(data15_1*2);
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.animateAll();
  },
  methods: {
      animateAll() {
          let val2zsy = document.getElementsByClassName("val2zsy");
        for (let i = 0; i < val2zsy.length; i++) {
            let targetDomCount = val2zsy[i].getAttribute("data-target");
            this.animateNum(val2zsy[i], targetDomCount, 0);
        }
      },
      animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed();
        },
        delay: 1,
      });
    },
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  .imgs {
    display: flex;
    flex-flow: column;
    margin-left: 34px;
    margin-right: 23px;
    img {
      width: 78px;
      height: 78px;
    }
  }
  .chart_bar {
    // width: 300px;
    // height: 50%;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    color: #c6dcff;
    height: 75% !important;
    width: 412px !important;
    .number {
      &::after {
        content: "" !important;
      }
    }
    .chart_bar1 {
      width: 100%;
      p {
        display: flex;
        justify-content: space-between;
        width: 350px;
      }
      .bar1 {
        background: #123f7a;
        .barcolor {
          width: 0%;
          background: #4cbefa;
        }
      }
      .bar2 {
        background: #0c737c;
        .barcolor {
          width: 0%;
          background: #00fcff;
        }
      }
    }
  }
}

.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
