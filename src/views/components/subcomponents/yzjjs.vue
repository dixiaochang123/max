<template>
  <div class="content22222456">
    <div class="chart1_1 chart1_5">
          <div class="flex">
            <p class="p1"><span class="span1 val245612" :data-target="data[9].endNum">{{data[9].firstNum}}</span><span class="span2">15%</span></p>
            <div class="barbox">
              <div class="bar bar1" style="color:#123f7a;height:5px;">
                <div :class="[val99999 > (data[9].maxNum)*0.8 ? 'barcolor val99999 waiting' : 'barcolor val99999']" class="barcolor val99999" :data-target="data[11].endNum" style="color:#4cbefa;height:5px;"></div>
              </div>
              <span class="val245612" :data-target="data[11].endNum">{{data[11].firstNum}}</span>
            </div>
            <p class="p2">高峰并发值</p>
          </div>
          <div class="flex">
            <p class="p1"><span class="span1 val245612" :data-target="data[10].endNum">{{data[10].firstNum}}</span><span class="span2">15%</span></p>
            <div class="barbox">
              <div class="bar bar1 bar2" style="color:#123f7a;height:5px;">
                <div :class="[val10000 > (data[10].maxNum)*0.8 ? 'barcolor val10000 waiting' : 'barcolor val10000']" class="barcolor val10000" :data-target="data[12].endNum" style="color:#4cbefa;height:5px;"></div>
              </div>
              <span class="val245612" :data-target="data[12].endNum">{{data[12].firstNum}}</span>
            </div>
            <p class="p2">每秒I/O</p>
          </div>
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import { mapGetters } from "vuex";
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
        val99999:0,
        val10000:0,
        time:null,
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('弹性云主机')) {
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
    }
  },
  mounted() {
    // this.animateAll();
  },
  beforeDestroy() {
    clearInterval(this.time)
  },
  methods: {
    animateAlldou() {
      // let val3333334444 = document.getElementsByClassName("val3333334444")[0];
      // let targetDomCount = parseInt(val3333334444.getAttribute("data-target"));
      // let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      // this.animateNumBarColor(val3333334444, math,this.val3333334444);
      // let val5_1 = document.getElementsByClassName("val5")[1];
      // this.animateNumBarb1(val5_1, math,this.val3333334444);

      let val245612 = document.getElementsByClassName("val245612");

      let val99999 = document.getElementsByClassName("val99999")[0];
      let targetDomCount = parseInt(val99999.getAttribute("data-target"));
      let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      this.animateNumBarColor1(val99999, math,this.val99999);
      this.animateNum(val245612[1], math);

      let val10000 = document.getElementsByClassName("val10000")[0];
      let targetDomCount1 = parseInt(val10000.getAttribute("data-target"));
      let math1 = parseInt(Math.random()*(parseInt(targetDomCount1+5)-parseInt(targetDomCount1-5))+parseInt(targetDomCount1-5));
      this.animateNumBarColor(val10000, math1,this.val10000);
      this.animateNum(val245612[3], math1);

      // let val245612_01 = document.getElementsByClassName("val245612")[0];
      let targetDomCount2 = parseInt(val245612[0].getAttribute("data-target"));
      let math2 = parseInt(Math.random()*(parseInt(targetDomCount2+5)-parseInt(targetDomCount2-5))+parseInt(targetDomCount2-5));
      this.animateNum(val245612[0], math2);

      // let val245612_03 = document.getElementsByClassName("val245612")[0];
      let targetDomCount3 = parseInt(val245612[2].getAttribute("data-target"));
      let math3 = parseInt(Math.random()*(parseInt(targetDomCount3+5)-parseInt(targetDomCount3-5))+parseInt(targetDomCount3-5));
      this.animateNum(val245612[2], math3);

    },
    animateAll() {
      let val245612 = document.getElementsByClassName("val245612");
      for (let i = 0; i < val245612.length; i++) {
        let targetDomCount = val245612[i].getAttribute("data-target");
        this.animateNum(val245612[i], targetDomCount);
      }

      let val99999 = document.getElementsByClassName("val99999")[0];
      this.animateNumBarColor1(val99999, val99999.getAttribute("data-target"),this.data[11].firstNum);

      let val10000 = document.getElementsByClassName("val10000")[0];
      this.animateNumBarColor(val10000, val10000.getAttribute("data-target"),this.data[12].firstNum);
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[9].aniTime, {
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
      TweenMax.to(obj, this.data[9].aniTime, {
        num1: val1,
        onUpdate: function () {
          this.val10000 = obj.num1;
            dom.style.width = obj.num1 + "%";
        }.bind(this),
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor1(dom, val,first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[9].aniTime, {
        num1: val1,
        onUpdate: function () {
          this.val99999 = obj.num1;
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
.content22222456 {
  width: 100%;
  height: 100%;
}
.chart1_5 {
        display: flex;
        justify-content: space-around;
        flex-flow: column;
        align-items: center;
        .flex {
          height: 90px;
          width: 480px;
          // border:solid 1px red;
          padding: 0 50px;
          display: flex;
          justify-content: space-around;
          flex-flow: column;
          background: url("../../../assets/img/框框01.png") no-repeat center;
          background-size: 100% 120%;
          &:last-of-type {
            background: url("../../../assets/img/框框02.png") no-repeat center;
            background-size: 100% 120%;
          }
          .p1 {
            font-size: 16px;
            color: #00fcff;
            text-align: left;
            padding-top: 10px;
            .span1 {
              display: inline-block;
              width: 120px;
            }
            .span2 {
              font-size: 8px;
              transform: scale(0.8);
            }
          }
          .barbox {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #00fcff;
            font-size: 12px;
            > span {
              &::after {
                content: "%";
              }
            }
          }
          .bar1 {
            background-color: #19508a;
            border-radius: 2px;
            width: 450px;
            .barcolor {
              width: 0%;
              background-color: #50a7ff;
              font-size: 0;
            }
          }
          .bar2 {
            background: #0c737c;
            .barcolor {
              width: 0%;
              background: #00fcff;
            }
          }
          .p2 {
            text-align: left;
            color: #b3d1f7;
            font-size: 13px;
            padding-bottom: 10px;
          }
        }
      }
.waiting {
  // color: red!important;
  background-color: #00fcff !important;
}
</style>
