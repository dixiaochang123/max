<template>
  <div class="content2233">
    <div class="einfo">
          <div class="info info1">
            <span class="number val2gfj" :data-target="data[4].endNum" style="color:#fff32f">{{data[4].firstNum}}</span>
            &nbsp;
            <span>MBPS</span>
          </div>
          <div class="info info2">
            <span class="number val2gfj" :data-target="data[5].endNum" style="color:#fff32f">{{data[5].firstNum}}</span>
            &nbsp;
            <span>MB/S</span>
          </div>
          <div class="info info3">
            <span class="number val2gfj" :data-target="data[6].endNum" style="color:#fff32f">{{data[6].firstNum}}</span>
            &nbsp;
            <span>ms</span>
          </div>
          <div class="info info4">
            <span class="number val6" :data-target="data[7].endNum" style="color:red;">{{data[7].firstNum}}</span>
            &nbsp;
            <span>%</span>
          </div>
          <div class="info info5">
            弹性云主机：网络
          </div>
          <img class="animated fadeInUp" src="../../../assets/img/组582.png" alt="">
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
      let val2gfj = document.getElementsByClassName("val2gfj");
      for (let i = 0; i < val2gfj.length; i++) {
        let targetDomCount = val2gfj[i].getAttribute("data-target");
        this.animateNum(val2gfj[i], targetDomCount, 0);
      }

      let val6 = document.getElementsByClassName("val6")[0];
      let targetDomCount1 = val6.getAttribute("data-target");
      this.animateNum(val6, targetDomCount1, 2);

    },
    animateAllbo() {
      let val2gfj = document.getElementsByClassName("val2gfj");
      for (let i = 0; i < val2gfj.length; i++) {
      let targetDomCount = parseInt(val2gfj[i].getAttribute("data-target"));
        let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
        this.animateNum(val2gfj[i], math, 0);
      }

      let val6 = document.getElementsByClassName("val6")[0];
      // let targetDomCount1 = val6.getAttribute("data-target");
      let math1 = parseFloat(Math.random()*(0.52-0.12)+0.12);
      this.animateNum(val6, math1, 2);
      
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val,dog) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[4].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dog);
        },
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor(dom, val) {
      let obj = { num1: 0 };
      let val1 = val;
      TweenMax.to(obj, this.data[4].aniTime, {
        num1: val1,
        onUpdate: function () {
          this.val3333334444 = obj.num1;
            dom.style.height = obj.num1 + "%";
        }.bind(this),
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor1(dom, val) {
      let obj = { num1: 0 };
      let val1 = val;
      TweenMax.to(obj, this.data[4].aniTime, {
        num1: val1,
        onUpdate: function () {
          this.val11111112222 = obj.num1;
            dom.style.height = obj.num1 + "%";
        }.bind(this),
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarb(dom, val) {
      let obj = { num1: 5 };
      let val1 = val;
      TweenMax.to(obj, this.data[4].aniTime, {
        num1: val1,
        onUpdate: function () {
          dom.style.top = (obj.num1+5) + "%";
        },
        delay: 3,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content2233 {
  width: 100%;
  height: 100%;
}
.chart3 {
  .einfo {
    width: 466px;
    height: 193px;
    // border: solid 1px;
    margin: 0 auto;
    position: relative;
    margin-top: 10px;
    img {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    // info info1
    .info {
      font-size: 13px;
      color: #b7cffc;
      position: absolute;
      left: 0;
      top: 0;
      width: 93px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: url("../../../assets/img/小框.png") no-repeat center;
    }
    .info1 {
      left: 0;
      top: 42px;
    }
    .info2 {
      left: 130px;
      top: 0;
    }
    .info3 {
      left: 258px;
      top: 4px;
    }
    .info4 {
      left: 375px;
      top: 48px;
    }
    .info5{
      width: 100%;
      left: 0;
      top: 140px;
      text-align: center;
      color: #40dcf8;
      font-size: 21rem;
    }
  }
}
.waiting {
  // color: red!important;
  color: red !important;
}
</style>
