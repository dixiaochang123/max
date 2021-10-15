<template>
  <div class="content888">
    <div class="chart1_1">
          <div class="flex1 animated fadeInLeft">
            <p class="p1">每秒I/O</p>
            <p class="p2 val29900909" :data-target="data[1].endNum">{{data[1].firstNum}}</p>
          </div>
          <div class="flex2">
            <img src="../../../assets/img/2-4.png" alt="">
            <p>状态正常</p>
          </div>
          <div class="flex1 flex3 animated fadeInRight">
            <p class="p1">带宽</p>
            <p class="p2" >
              <span class="val29900909" :data-target="data[2].endNum">{{data[2].firstNum}}</span>MBPS 
            </p>
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
        val99999:0,
        val10000:0,
        time:null
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('对象存储OOS')) {
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
      let val29900909 = document.getElementsByClassName("val29900909");

      let targetDomCount = parseInt(val29900909[0].getAttribute("data-target"));
      let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      this.animateNum(val29900909[0], math, 0);

      let targetDomCount1 = parseInt(val29900909[1].getAttribute("data-target"));
      let math1 = parseInt(Math.random()*(parseInt(targetDomCount1+5)-parseInt(targetDomCount1-5))+parseInt(targetDomCount1-5));
      this.animateNum(val29900909[1], math1, 0);
    },
    animateAll() {
      let val29900909 = document.getElementsByClassName("val29900909");
      for (let i = 0; i < val29900909.length; i++) {
        let targetDomCount = val29900909[i].getAttribute("data-target");
        this.animateNum(val29900909[i], targetDomCount, 0);
      }
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
    }
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content888 {
  width: 100%;
  height: 100%;
}
.chart1_1 {
      height: calc(100% - 60px);
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .flex1 {
        width: 95px;
        p {
          font-size: 20px;
          padding-left: 10px;
        }
        .p1 {
          color: #ffffff;
          background: url("../../../assets/img/矩形 8 拷贝 2.png") no-repeat center
            center;
          background-size: 100% 100%;
        }
        .p2 {
          color: $myColor;
        }
      }
      .flex2 {
        width: 310px;
        height: 193px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
