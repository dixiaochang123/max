<template>
  <div class="content22222">
    <div class="chart1_1_2 chart2">
          <div class="img">
            <img width="100%" height="100%" src="../../../assets/img/云主机存储信息-拷贝.gif" alt="">
          </div>
          <div class="chart_bar1 chart_bar2">
            <p class="syl" style="text-align:right;">使用率</p>
            <div class="chart_bar2_2">
              <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line linelast"></div>
                <div class="barcpu">
                  <div>
                    <div :class="[val11111112222 > (data[2].maxNum)*0.8 ? 'barcolor val11111112222 barcolor1 waiting' : 'barcolor val11111112222 barcolor1']"  :data-target="data[2].endNum"></div>
                    <span class="bfb val22222221 barcolor1 val5" :data-target="data[2].endNum">{{val11111112222}}</span>
                  </div>
                  <div>
                    <div :class="[val3333334444 > (data[3].maxNum)*0.8 ? 'barcolor val3333334444 waiting ' : 'barcolor val3333334444']" :data-target="data[3].endNum"></div>
                    <span class="bfb val22222221 val5" :data-target="data[3].endNum">{{val3333334444}}</span>
                  </div>
                </div>
                <div class="xline">
                  <div>cpu</div>
                  <div>内存</div>
                </div>
              </div>
              <div class="numbers">
                <span class="number">100%</span>
                <span class="number">80%</span>
                <span class="number">60%</span>
                <span class="number">40%</span>
                <span class="number">20%</span>
                <span class="number">0</span>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";

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
  data() {
    return {
        val11111112222:0,
        val3333334444:0,
        math:null,
        math1:null,
        time:null
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('弹性云主机')) {
          this.val11111112222=this.data[3].firstNum;
          this.val3333334444=this.data[2].firstNum;
          this.$nextTick(()=>{

            this.animateAll();
            this.time = setInterval(()=>{
              this.animateAlldou()
          },5000)
          })
        }
        
      },
      deep:true,
      immediate: true
    },
  },
  mounted() {
    // this.animateAll();
  },
  beforeDestroy() {
    clearInterval(this.time)
  },
  methods: {
    animateAlldou() {
      let val3333334444 = document.getElementsByClassName("val3333334444")[0];
      let targetDomCount = parseInt(val3333334444.getAttribute("data-target"));
      let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      this.animateNumBarColor(val3333334444, math,this.val3333334444);
      let val5_1 = document.getElementsByClassName("val5")[1];
      this.animateNumBarb1(val5_1, math,this.val3333334444);

      let val11111112222 = document.getElementsByClassName("val11111112222")[0];
      let targetDomCount1 = parseInt(val11111112222.getAttribute("data-target"));
      let math1 = parseInt(Math.random()*(parseInt(targetDomCount1+5)-parseInt(targetDomCount1-5))+parseInt(targetDomCount1-5));
      this.animateNumBarColor1(val11111112222, math1,this.val11111112222);
      let val5 = document.getElementsByClassName("val5")[0];
      this.animateNumBarb(val5, math1,this.val11111112222);

    },
    animateAll() {

      let val11111112222 = document.getElementsByClassName("val11111112222")[0];
      this.animateNumBarColor1(val11111112222, val11111112222.getAttribute("data-target"),this.val11111112222);

      let val3333334444 = document.getElementsByClassName("val3333334444")[0];
      this.animateNumBarColor(val3333334444, val3333334444.getAttribute("data-target"),this.val3333334444);

      let val5 = document.getElementsByClassName("val5")[0];
      this.animateNumBarb(val5, val11111112222.getAttribute("data-target"),this.val11111112222);

      let val5_1 = document.getElementsByClassName("val5")[1];
      this.animateNumBarb1(val5_1, val3333334444.getAttribute("data-target"),this.val3333334444);
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[2].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed();
        },
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor(dom, val,first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[2].aniTime, {
        num1: val1,
        onUpdate: function () {
          this.val3333334444 = obj.num1;
            dom.style.height = obj.num1 + "%";
        }.bind(this),
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor1(dom, val,first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[2].aniTime, {
        num1: val1,
        onUpdate: function () {
          this.val11111112222 = obj.num1;
            dom.style.height = obj.num1 + "%";
        }.bind(this),
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarb(dom, val,first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[2].aniTime, {
        num1: val1,
        onUpdate: function () {
          dom.style.top = (parseFloat(obj.num1)+5) + "%";
        },
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarb1(dom, val,first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[2].aniTime, {
        num1: val1,
        onUpdate: function () {
          dom.style.top = (parseFloat(obj.num1)+5) + "%";
        },
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
      justify-content: space-around;
      align-items: center;
      .img {
        width: 200px;
        height: 180px;
        // border: solid 1px;
      }
      .chart_bar {
        width: 300px;
        height: 50%;
        display: flex;
        justify-content: space-around;
        flex-flow: column;
        color: #c6dcff;
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
}
.chart2 {
    .chart_bar2 {
      position: relative;
      .syl {
        height: 30px;
        color: #7789b2;
      }
    }
    .chart_bar2_2 {
      display: flex;
      justify-content: flex-start;
      .lines {
        width: 235px;
        height: 156px;
        position: relative;
        .line {
          height: 30px;
          width: 100%;
          border-top: solid 1px #203849;
          &.linelast {
            border-bottom: solid 1px #203849;
          }
        }
        .xline {
          width: 100%;
          position: absolute;
          bottom: -23px;
          display: flex;
          justify-content: space-around;
          color: #cce2ff;
        }
        .barcpu {
          height: 156px;
          width: 100%;
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: space-around;
          transform: rotate(180deg);
          & > div {
            // height: calc(100% + 18px);
            height: 100%;
            display: flex;
            align-items: center;
            flex-flow: column;
            position: relative;
            // background-color: #123f7a;
            background-color: none;
            &:nth-of-type(1) {
            //   background-color: #0c737c;
              background-color: none;
            }
            .barcolor {
              width: 23px;
              height: 0%;
              background-color: #4ca4fe;
              color: transparent;
              position: relative;
            }

            .bfb {
              width: 40px;
              height: 18px;
              line-height: 18px;
              border-radius: 3px;
              font-size: 12px;
              text-align: center;
              background-color: #4ca4fe;
              color: #000;
              display: inline-block;
              transform: rotate(180deg);
              position: absolute;
              top: 0;
              left: -9px;
              top: 5%;
              &::after {
                content: "%";
              }
            }
            .barcolor1 {
              background-color: #00ffff;
            }
          }
        }
      }
      .numbers {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .number {
          height: 30px;
          line-height: 0;
          color: #7789b2;
          // border-top: solid 1px #192c54;
          // border-top: solid 1px red;
          // &:last-of-type {
          //   border-bottom: solid 1px red;
          // }
        }
      }
    }
  }
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
