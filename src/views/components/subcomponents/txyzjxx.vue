<template>
  <div class="content22334">
    <div class="chart1_4">
          <div class="img">
            <img src="../../../assets/img/1-4-2.png" alt="">
            <img src="../../../assets/img/弹性云用户信息1.png" alt="">
          </div>
          <div class="chart_bar chart_bar4">
            <p class="p1">在线用户数</p>
            <p class="p2"><span class="span1 val2" :data-target="data[8].endNum">{{data[8].firstNum}}</span><span>人</span></p>
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
        val11111112222:0,
        val3333334444:0,
        time:null
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('弹性云主机')) {
          this.$nextTick(()=>{

            this.animateAll();
            this.time = setInterval(()=>{
              this.animateAllbo()
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
    animateAll() {
      let val2 = document.getElementsByClassName("val2")[0];
      this.animateNum(val2, val2.getAttribute("data-target"));
    },
    animateAllbo() {
      let val2 = document.getElementsByClassName("val2")[0];
      let targetDomCount = parseInt(val2.getAttribute("data-target"))
      let math = parseInt(Math.random()*(parseInt(targetDomCount+100)-parseInt(targetDomCount-100))+parseInt(targetDomCount-100));
      this.animateNum(val2, math);
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[8].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed();
        },
        delay: 3,
      });
    }
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content22334 {
  width: 100%;
  height: 100%;
}
.chart1_4 {
    height: calc(100% - 60px);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
        .img {
          height: 209px;
          width: 321px;
          position: relative;
          img {
            width: 100%;
            &:first-of-type {
              position: absolute;
              bottom: 1px;
              left: 0;
              width: 100%;
              height: 133px;
              animation: opacity 2s linear infinite;
            }
            @keyframes opacity {
              0% {
                opacity: 1;
              }
              50% {
                opacity: 0.4;
              }
              100% {
                opacity: 1;
              }
            }
            &:last-of-type {
              position: absolute;
              bottom: 30px;
              left: 30px;
              width: 300px;
              height: 174px;
              animation: updown 2s 0.1s linear infinite;
            }
            @keyframes updown {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-5px);
              }
              100% {
                transform: translateY(0);
              }
            }
          }
        }
        .chart_bar4 {
          width: 170px;
          padding-left: 20px;
          background: url("../../../assets/img/矩形 16 拷贝 3.png") no-repeat left
            center;
          background-size: 7px 85px;
          .p1 {
            font-size: 23px;
            color: #04d9f1;
            text-align: left;
          }
          .p2 {
            font-size: 21px;
            display: flex;
            justify-content: flex-start;
            color: #04d9f1;
            .span1 {
              color: #ffff00;
              padding-right: 5px;
            }
          }
        }
      }
.waiting {
  // color: red!important;
  color: red !important;
}
</style>
