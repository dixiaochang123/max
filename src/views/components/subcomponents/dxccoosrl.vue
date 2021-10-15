<template>
  <div class="content8889">
    <div class="chart9child">
          <img style="height:100%" src="../../../assets/img/组562拷贝.png" alt="">
          <img :class="[animate ? 'circular' : '']" src="../../../assets/img/01.png" alt="">
          <img :class="[animate ? 'circular' : '','circular23']"  src="../../../assets/img/图层23.png" alt="">
          <img :class="[animate ? 'circular' : '','circular22']" src="../../../assets/img/图层22.png" alt="">
          <img :class="[animate ? 'circular' : '','circular21']" src="../../../assets/img/图层21.png" alt="">
          <img :class="[animate ? 'circular' : '','circular20']" src="../../../assets/img/图层20.png" alt="">
          <img :class="[animate ? 'circular' : '','circular19']" src="../../../assets/img/图层19.png" alt="">
          <img :class="[animate ? 'circular' : '','circular18']" src="../../../assets/img/图层18.png" alt="">

          <img :class="[animate ? 'circular' : '','circular14-1']" src="../../../assets/img/14-1.png" alt="">
          <img :class="[animate ? 'circular' : '','circular13-1']" src="../../../assets/img/13-1.png" alt="">
          <img :class="[animate ? 'circular' : '','circular12-1']" src="../../../assets/img/12-1.png" alt="">
          <div>
            <p class="p1">OOS容量</p>
            <p class="p2 val1015455" :data-target="data[3].endNum">{{data[3].firstNum}}</p>
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
        animate:false,
        time:null
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('对象存储OOS')) {
          this.$nextTick(()=>{
            this.animate = true;
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
      let val1015455 = document.getElementsByClassName("val1015455")[0];
        let targetDomCount = parseInt(val1015455.getAttribute("data-target")) ;
        let math = parseInt(Math.random()*(parseInt(targetDomCount+300)-parseInt(targetDomCount-300))+parseInt(targetDomCount-300));
        this.animateNum(val1015455, math, 0);
    },
    animateAll() {
      let val1015455 = document.getElementsByClassName("val1015455")[0];
        let targetDomCount = val1015455.getAttribute("data-target");
        this.animateNum(val1015455, targetDomCount, 0);
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[3].aniTime, {
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
.content8889 {
  width: 100%;
  height: 100%;
}
.chart9child {
  position: relative;
  border: solid 1px;
  height: 436px;
  height: 238px;
  margin: 0 auto;
  > div {
    color: #b7cffc;
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    margin: 0 auto;
    .p1 {
      font-size: 12px;
      padding-bottom: 18px;
    }
    .p2 {
      font-size: 30px;
      font-weight: 700;
    }
  }
  .circular {
    position: absolute;
    top: 95px;
    left: -18px;
    right: 0;
    margin: 0 auto;
    -webkit-animation: FadeIn 0.5s linear;
    -webkit-animation-fill-mode: both;
  }
   .circular12-1 {
    top: 157rem;
    left: 58rem;
    -webkit-animation-delay: 5s;
  }
   .circular13-1 {
    top: 162rem;
    left: -2rem;
    -webkit-animation-delay: 4.8s;
  }
  .circular14-1 {
    top: 161rem;
    left: -65rem;
    -webkit-animation-delay: 4.6s;
  }
  .circular23 {
    top: 157rem;
    left: -123rem;
    -webkit-animation-delay: 4.4s;
  }
  .circular22 {
    top: 152rem;
    left: -177px;
    -webkit-animation-delay: 4.2s;
  }
  .circular21 {
    top: 145rem;
    left: -213rem;
    -webkit-animation-delay: 4s;
  }
  .circular20 {
    top: 138rem;
    left: -233rem;
    -webkit-animation-delay: 3.8s;
  }
  .circular19 {
    top: 130rem;
    left: -244rem;
    -webkit-animation-delay: 3.6s;
  }
  .circular18 {
    top: 121rem;
    left: -245rem;
    -webkit-animation-delay: 3.4s;
  }

  @-webkit-keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
