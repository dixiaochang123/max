<template>
  <div class="content13">
        <div class="chart13child">
          <img src="../../../assets/index/组579.png" alt="">
          <div class="pos pos1">
            <p style="color:#c3db04"><span class="val778978978945123" :data-target="data[0].endNum">{{data[0].firstNum}}</span><span> MBPS</span> </p>
          </div>
          <div class="pos pos2">
            <p style="color:#c3db04"><span class="val2512355544658" :data-target="data[1].endNum">{{data[1].firstNum}}</span><span> ms</span> </p>
          </div>
          <div class="pos pos3">
            <p style="color:#c3db04"><span class="val778978978945123" :data-target="data[2].endNum">{{data[2].firstNum}}</span><span> %</span> </p>
          </div>
          <div class="pos pos4">
            <p style="color:#c3db04"><span>是</span><span></span> </p>
          </div>
          <div class="pos pos5">
            <p style="color:#c3db04"><span>是</span><span> </span> </p>
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
        time:null
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('云直播')) {
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
  beforeDestroy() {
    clearInterval(this.time)
  },
  mounted() {
    // this.animateAll();
  },
  methods: {
    animateAlldou() {

      let val778978978945123 = document.getElementsByClassName("val778978978945123");
      let targetDomCount = parseFloat(val778978978945123[0].getAttribute("data-target"));
      let math = parseFloat(Math.random()*(parseFloat(targetDomCount+50)-parseFloat(targetDomCount-50))+parseFloat(targetDomCount-50));
      this.animateNum(val778978978945123[0], math, 2);
      let targetDomCount1 = parseFloat(val778978978945123[0].getAttribute("data-target")).toFixed(2)
      let math1 = parseFloat(Math.random()*(parseFloat(targetDomCount1+0.05).toFixed(2)-parseFloat(targetDomCount1-0.05).toFixed(2))+parseFloat(targetDomCount1-0.05).toFixed(2)).toFixed(2);
      this.animateNum(val778978978945123[1], math1, 2);

      let val2512355544658 = document.getElementsByClassName("val2512355544658");
      let targetDomCount2 = parseFloat(val2512355544658[0].getAttribute("data-target"));
      let math2 = parseFloat(Math.random()*(parseFloat(targetDomCount2+5)-parseFloat(targetDomCount2-5))+parseFloat(targetDomCount2-5));
      this.animateNum(val2512355544658[0], math2, 0);

    },
    animateAll() {
      let val778978978945123 = document.getElementsByClassName("val778978978945123");
      for (let i = 0; i < val778978978945123.length; i++) {
        let targetDomCount = val778978978945123[i].getAttribute("data-target");
        this.animateNum(val778978978945123[i], targetDomCount, 2);
      }
      let val2512355544658 = document.getElementsByClassName("val2512355544658");
      for (let i = 0; i < val2512355544658.length; i++) {
        let targetDomCount = val2512355544658[i].getAttribute("data-target");
        this.animateNum(val2512355544658[i], targetDomCount, 0);
      }
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val,dog) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dog);
        },
        delay: 3,
      });
    }
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content13 {
  width: 100%;
  height: 100%;
}
.chart13child {
  width: 528px;
  height: 220px;
  padding-bottom: 5px;
  position: relative;
  margin: 0 auto;
  img {
    width: 500px;
    height: 240px;
    position: absolute;
    top: -32px;
    left: 0;
    right: 0;
    margin:auto;
  }
  .pos {
    position: absolute;
    top: 63px;
    left: 33px;
    color: #ffffff;
    text-align: right;
    p {
      line-height: 35px;
      font-size: 14px;
    }
  }
  .pos2 {
    top: 122px;
    left: 118px;
  }
  .pos3 {
    top: 159px;
    left: 259px;
  }
  .pos4 {
        top: 127px;
    left: 401px;
  }
  .pos5 {
    top: 52rem;
    left: 452rem;
  }
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
