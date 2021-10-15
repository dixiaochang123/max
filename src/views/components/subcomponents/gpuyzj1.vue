<template>
  <div class="content22222">
    <div class="chart1_1_2 chart2">
      <div class="img">
        <img width="100%" height="100%" src="../../../assets/index/组597.png" alt="">
      </div>
      <div class="chart_bar1111 chart_bar2">
        <!-- <Chart :id='"chart30"' width="100%" height="100%" ref="chart30" :echartsOption="option30" /> -->
        <!-- data: ["GPU使用率", "GPU显存使用率", "解码器使用率"], -->
        <div class="chart_bar1">
          <!-- <p><span>GPU使用率</span><span class="number val2222222dxc" :data-target="data[0].endNum">{{data[0].firstNum}}</span></p> -->
          <div class="name">GPU使用率</div>
          <div class="bar bar1" style="height:15px;">
            <div :class="[(val1111111dxc > (data[0].maxNum)*0.8 || val1111111dxc == (data[0].maxNum)*0.8) ? 'barcolor val1111111dxc waiting' : 'barcolor val1111111dxc']" :data-target="data[0].endNum" style="color:#4cbefa;height:15px;"></div>
            <span class="number val2222222dxc" :data-target="data[0].endNum">{{data[0].firstNum}}</span>
          </div>
        </div>
        <div class="chart_bar1">
          <!-- <p><span>GPU显存使用率</span><span class="number val2222222dxc val2222222dxc[1]" :data-target="data[1].endNum">{{data[1].firstNum}}</span></p> -->
          <div class="name">GPU显存使用率</div>
          <div class="bar bar2" style="height:15px;">
            <div :class="[(val333333dxc > (data[1].maxNum)*0.8 || val333333dxc == (data[1].maxNum)*0.8) ? 'barcolor1 val333333dxc waiting1' : 'barcolor1 val333333dxc']" :data-target="data[1].endNum" style="color:#00fcff;height:15px;"></div>
            <span class="number val2222222dxc val2222222dxc[1]" :data-target="data[1].endNum">{{data[1].firstNum}}</span>
          </div>
        </div>
        <div class="chart_bar1">
          <!-- <p><span>解码器使用率</span><span class="number val2222222dxc val2222222dxc[2]" :data-target="data[2].endNum">{{data[2].firstNum}}</span></p> -->
          <div class="name">解码器使用率</div>
          <div class="bar bar2" style="height:15px;">
            <div :class="[(val444444dxc > (data[1].maxNum)*0.8 || val444444dxc == (data[1].maxNum)*0.8) ? 'barcolor1 val444444dxc waiting2' : 'barcolor1 val444444dxc']" :data-target="data[2].endNum" style="color:#00fcff;height:15px;"></div>
            <span class="number val2222222dxc val2222222dxc[2]" :data-target="data[2].endNum">{{data[2].firstNum}}</span>
          </div>
        </div>
        <div class="chart_bar1 ">
          <div class="name name1111">解码器使用率</div>
          <div class="bar bar2 bar3" style="height:15px;">
            <span>0</span><span>40</span><span>60</span><span>80</span><span>100</span>
          </div>
          <!-- <div class="chart_bar1number">
            <span>0</span><span>40</span><span>60</span><span>80</span><span>100</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";

// import { indexInfo } from "@/utils/data/indexData.js";
// const echarts = require("echarts");
// import Chart from "@/components/Chart";
// import { mapGetters, mapActions } from "vuex";
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
    // Chart,
  },
  data() {
    return {
      val1111111dxc: 0,
      val333333dxc: 0,
      val444444dxc: 0,
      time: null,
      // option30: {
      //   grid: {
      //     left: "3%",
      //     right: "4%",
      //     bottom: "3%",
      //     top: 0,
      //     containLabel: true,
      //   },
      //   tooltip: {
      //     show: true,
      //   },
      //   xAxis: [
      //     {
      //       splitLine: {
      //         show: true,
      //         lineStyle: {
      //           color: ["#40dcf8"],
      //           type: "dashed",
      //           opacity: 0.1,
      //         },
      //       },
      //       axisTick: {
      //         show: false,
      //       },
      //       axisLine: {
      //         //y轴
      //         show: true,
      //       },
      //       type: "value",
      //       show: true,
      //       axisLabel: {
      //         color: "#40dcf8",
      //       },
      //       max: 100,
      //     },
      //   ],
      //   yAxis: [
      //     {
      //       splitLine: {
      //         show: false,
      //       },
      //       axisLine: {
      //         //y轴
      //         show: true,
      //       },
      //       // type: 'category',
      //       axisTick: {
      //         show: false,
      //       },
      //       data: ["GPU使用率", "GPU显存使用率", "解码器使用率"],
      //       axisLabel: {
      //         color: "#ffffff",
      //       },
      //       animationDuration: 6000,
      //       animationEasing: "cubicInOut",
      //     },
      //   ],
      //   series: [
      //     {
      //       name: "GPU 云主机",
      //       type: "bar",
      //       barWidth: 15, // 柱
      //       itemStyle: {
      //         color: new echarts.graphic.LinearGradient(
      //           0,
      //           0,
      //           1,
      //           0,
      //           ["#2FAEF2", "#1CD8A8"].map((color, offset) => ({
      //             color,
      //             offset,
      //           }))
      //         ), // 渐变
      //       },
      //       animation: true,
      //       animationDuration: 6000,
      //       animationEasing: "cubicInOut",
      //       data: indexInfo[10].data
      //         .filter((item) => item.indexNum == 1)
      //         .map((item) => item.endNum),
      //     },
      //   ],
      // },
    };
  },
  watch: {
    productseleted: {
      handler: function (val) {
        if (val && val.includes("GPU云主机")) {
          this.$nextTick(() => {
            this.val1111111dxc = this.data[0].firstNum;
            this.val333333dxc = this.data[1].firstNum;
            this.val444444dxc = this.data[2].firstNum;
            this.animateAll();
            this.time = setInterval(() => {
              this.animateAlldou();
            }, 5000);
            // this.option30.series[0].data = this.data
            //   .filter((item) => item.indexNum == 1)
            //   .map((item) => item.endNum);
            // this.option30 = Object.assign({}, this.option30);
            // console.log(2222, this.option30.series[0].data);
            // this.time = setInterval(() => {
            //   console.log(this.option30.series[0].data);
            //   this.option30.series[0].data = this.data
            //     .filter((item) => item.indexNum == 1)
            //     .map((item) => {
            //       return parseInt(
            //         Math.random() *
            //           (parseInt(item.endNum + item.range) -
            //             parseInt(item.endNum - item.range)) +
            //           parseInt(item.endNum - item.range)
            //       );
            //     });
            //   console.log(this.option30.series[0].data);
            //   //  this.option30 = Object.assign({},this.option30)
            //   //  this.$refs.chart30.initChart()
            // }, 5000);
            // this.option30.series[0].animationDuration = indexInfo[10].data[0].aniTime;
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  beforeDestroy() {
    clearInterval(this.time);
  },
  mounted() {},
  methods: {
    animateAll() {
      this.$nextTick(() => {
        let val2222222dxc = document.getElementsByClassName("val2222222dxc");
        for (let i = 0; i < val2222222dxc.length; i++) {
          let targetDomCount = val2222222dxc[i].getAttribute("data-target");
          this.animateNum(val2222222dxc[i], targetDomCount, 0);
        }
        let val1111111dxc = document.getElementsByClassName("val1111111dxc")[0];
        let val333333dxc = document.getElementsByClassName("val333333dxc")[0];
        let val444444dxc = document.getElementsByClassName("val444444dxc")[0];
        this.animateNumBarColor1(val1111111dxc,val1111111dxc.getAttribute("data-target"),this.val1111111dxc);
        this.animateNumBarColor(val333333dxc,val333333dxc.getAttribute("data-target"),this.val333333dxc);
        this.animateNumBarColor2(val444444dxc,val444444dxc.getAttribute("data-target"),this.val444444dxc);
      });
    },
    animateAlldou() {
      let val2222222dxc = document.getElementsByClassName("val2222222dxc");

      let val1111111dxc = document.getElementsByClassName("val1111111dxc")[0];
      let targetDomCount = parseInt(val1111111dxc.getAttribute("data-target"));
      let math = parseInt(Math.random() *(parseInt(targetDomCount + 5) - parseInt(targetDomCount - 5)) +parseInt(targetDomCount - 5));
      if(math>100 || math==100) {
        math=100
      }
      this.animateNumBarColor1(val1111111dxc, math, this.val1111111dxc);
      this.animateNum(val2222222dxc[0], math, 0);

      let val333333dxc = document.getElementsByClassName("val333333dxc")[0];
      let targetDomCount1 = parseInt(val333333dxc.getAttribute("data-target"));
      let math1 = parseInt(
        Math.random() *
          (parseInt(targetDomCount1 + 2) - parseInt(targetDomCount1 - 2)) +
          parseInt(targetDomCount1 - 2)
      );
      if(math1>100 || math1==100) {
        math1=100
      }
      this.animateNumBarColor(val333333dxc, math1, this.val333333dxc);
      this.animateNum(val2222222dxc[1], math1, 0);

      let val444444dxc = document.getElementsByClassName("val444444dxc")[0];
      let targetDomCount2 = parseInt(val444444dxc.getAttribute("data-target"));
      let math2 = parseInt(Math.random() *(parseInt(targetDomCount2 + 2) - parseInt(targetDomCount2 - 2)) +parseInt(targetDomCount2 - 2));
      if(math2>100 || math2==100) {
        math2=100
      }
      this.animateNumBarColor(val333333dxc, math2, this.val333333dxc);
      this.animateNum(val2222222dxc[2], math2, 0);
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed();
        },
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor(dom, val, first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val1, //目标值
        onUpdate: function () {
          this.val333333dxc = obj.num1; //初始值
          dom.style.width = obj.num1 + "%";
        }.bind(this),
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor1(dom, val, first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val1,
        onUpdate: function () {
          this.val1111111dxc = obj.num1;
          dom.style.width = obj.num1 + "%";
        }.bind(this),
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor2(dom, val, first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val1,
        onUpdate: function () {
          this.val444444dxc = obj.num1;
          dom.style.width = obj.num1 + "%";
        }.bind(this),
        delay: 3,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content22222 {
  width: 100%;
  height: 100%;
  .chart1_1_2 {
    height: calc(100% - 60px);
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    .img {
      width: 200px;
      height: 200px;
      // border: solid 1px;
    }
    .chart_bar2 {
      width: calc(100% - 250px);
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-flow: column;
      color: #c6dcff;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 90px;
        width: 1px;
        height: calc(100% - 40px);
        border-left:solid 1px #126575;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 40px;
        left: 90px;
        width: calc(100% - 90px);
        height: 1px;
        border-top:solid 1px #126575;
      }
      // padding-bottom: 5px;
      p {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 5px;
      }
      .number {
        &::after {
          content: "%";
        }
      }
      > div {
        width: 100%;
        font-size: 12px;
        .number {
          color: #5ecfff;
        }
      }
      .chart_bar1 {
        width: 100%;
        display: flex;
        justify-content: start;
        flex-wrap: nowrap;
        .name {
          // display: inline-block;
          width: 90px;
          white-space: nowrap;
        }
        .name1111 {
          visibility: hidden;
        }
        .bar1 {
          width: calc(100% - 90px);
          display: flex;
          justify-content: start;
          flex-wrap: nowrap;
          // background: #123f7a;
          .barcolor {
            width: 0%;
            background: #4cbefa;
          }
        }
        .bar2 {
          width: calc(100% - 90px);
          // background: #0c737c;
          display: flex;
          justify-content: start;
          flex-wrap: nowrap;
          .barcolor1 {
            width: 0%;
            background: #00fcff;
          }
        }
        .bar3 {
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          position: relative;
          &::after {
            content:"%";
            position:absolute;
            right: -20px;
            top: 0;
            color: #00b5df;

          }
          span {
            width: 20%;
            color: #00b5df;
            text-align: left;
          }
        }
      }
      .chart_bar1number {
        width: calc(100% - 90px);
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

.waiting {
  // color: red!important;
  background-color: red !important;
}
.waiting1 {
  // color: red!important;
  background-color: red !important;
}
.waiting2 {
  // color: red!important;
  background-color: red !important;
}
.name {
  // display: inline-block;
  width: 90px;
  white-space: nowrap;
}
</style>
