<template>
  <div class="content13">
        <div class="chart13child">
          <img src="../../../assets/index/组578.png" alt="">
          <div class="pos pos1">
            <p style="color:#c3db04"><span class="val25123hu" :data-target="data[5].endNum">{{data[5].firstNum}}</span><span></span> </p>
          </div>
          <div class="pos pos2">
            <p style="color:#c3db04"><span class="val25123hu" :data-target="data[6].endNum">{{data[6].firstNum}}</span><span></span> </p>
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
      let val25123hu = document.getElementsByClassName("val25123hu");
      for (let i = 0; i < val25123hu.length; i++) {
        let targetDomCount = parseInt(val25123hu[i].getAttribute("data-target"));
        let math = parseInt(Math.random()*(parseInt(targetDomCount+1000)-parseInt(targetDomCount-1000))+parseInt(targetDomCount-1000));
        this.animateNum(val25123hu[i], math, 0);
      }

    },
    animateAll() {
      let val25123hu = document.getElementsByClassName("val25123hu");
      for (let i = 0; i < val25123hu.length; i++) {
        let targetDomCount = val25123hu[i].getAttribute("data-target");
        this.animateNum(val25123hu[i], targetDomCount, 0);
      }
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val,dog) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[6].aniTime, {
        num1: val,
        onUpdate: function () {
          // let str = .splice(parseFloat(obj.num1).toFixed(dog).toString(),',')
          let str = parseFloat(obj.num1).toFixed(dog).toString()
          if(str.length>3) {

            str = str.replace(str.length-2,',')
          }
          dom.innerHTML = parseFloat(obj.num1).toFixed(dog)
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
    top: 44px;
    left: 362px;
    color: #ffffff;
    text-align: right;
    p {
      line-height: 35px;
      font-size: 14px;
    }
  }
  .pos2 {
    top: 158px;
    left: 423px;
  }
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
