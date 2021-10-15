<template>
  <div class="content22222">
    <div class="chart1_1">
          <div class="img">
            <img style="width: 100%;" src="../../../assets/img/弹性云主机.png" alt="">
          </div>
          <div class="chart_bar">
            <div class="chart_bar1">
              <p><span>服务器使用率</span><span class="number val2222222" :data-target="data[0].endNum">{{data[0].firstNum}}</span></p>
              <div class="bar bar1" style="color:#123f7a;height:15px;">
                <div :class="[(val1111111 > (data[0].maxNum)*0.8 || val1111111 == (data[0].maxNum)*0.8) ? 'barcolor val1111111 waiting' : 'barcolor val1111111']"  :data-target="data[0].endNum" style="color:#4cbefa;height:15px;"></div>
              </div>
            </div>
            <div class="chart_bar1">
              <p><span>磁盘使用率</span><span class="number val2222222 val2222222[1]" :data-target="data[1].endNum">{{data[1].firstNum}}</span></p>
              <div class="bar bar2" style="color:#0c737c;height:15px;">
                <div :class="[(val333333 > (data[1].maxNum)*0.8 || val333333 == (data[1].maxNum)*0.8) ? 'barcolor1 val333333 waiting1' : 'barcolor1 val333333']" :data-target="data[1].endNum" style="color:#00fcff;height:15px;"></div>
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
        val1111111:0,
        val333333:0,
        time:null,
        math:null,
        math1:null,
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('弹性云主机')) {
           this.$nextTick(()=>{

             console.log('弹性云主机1',this.data[0].firstNum)
             console.log('弹性云主机2',this.data[1].firstNum)
             this.val1111111 = this.data[0].firstNum;
             this.val333333 = this.data[1].firstNum;
             this.animateAll();
              this.time = setInterval(()=>{
                this.animateAlldou();
              },5000)
           })
        }
        
      },
      deep:true,
      immediate: true
    },
  },
  mounted() {

  },
  beforeDestroy() {
    clearInterval(this.time)
  },
  methods: {
    animateAll() {
      this.$nextTick(()=>{
  
        let val2222222 = document.getElementsByClassName("val2222222");
        for (let i = 0; i < val2222222.length; i++) {
          let targetDomCount = val2222222[i].getAttribute("data-target");
          this.animateNum(val2222222[i], targetDomCount, 0);
        }
        let val1111111 = document.getElementsByClassName("val1111111")[0];
        let val333333 = document.getElementsByClassName("val333333")[0];
        this.animateNumBarColor1(val1111111, val1111111.getAttribute("data-target"),this.val1111111);
        this.animateNumBarColor(val333333, val333333.getAttribute("data-target"),this.val333333);
        })
    },
    animateAlldou() {
      let val2222222 = document.getElementsByClassName("val2222222");

      let val1111111 = document.getElementsByClassName("val1111111")[0];
      let targetDomCount = parseInt(val1111111.getAttribute("data-target"));
      let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      this.animateNumBarColor1(val1111111, math,this.val1111111);
      this.animateNum(val2222222[0], math, 0);

      let val333333 = document.getElementsByClassName("val333333")[0];
      let targetDomCount1 = parseInt(val333333.getAttribute("data-target"));
      let math1 = parseInt(Math.random()*(parseInt(targetDomCount1+5)-parseInt(targetDomCount1-5))+parseInt(targetDomCount1-5));
      this.animateNumBarColor(val333333, math1,this.val333333);
      this.animateNum(val2222222[1], math1, 0);

      // let val4 = document.getElementsByClassName("val4");
      // for (let i = 0; i < val4.length; i++) {
      //   let targetDomCount = parseInt(val4[i].getAttribute("data-target"));
      //   let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      //   this.animateNum(val4[i], math, 1);
      // }
      // let val4_bar = document.getElementsByClassName("val4_bar");
      // for (let i = 0; i < val4_bar.length; i++) {
      //   let targetDomCount = parseInt(val4_bar[i].getAttribute("data-target"));
      //   let width = parseInt(val4_bar[i].style.width);
      //   let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      //   this.animateNumBarColor(val4_bar[i], math,width);
      // }
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj,  this.data[0].aniTime, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed();
        },
        delay: 3,
      });
    },
    // let val333333 = document.getElementsByClassName("val333333")[0];
    // this.animateNumBarColor(val333333, val333333.getAttribute("data-target"),this.val333333);
    // 初始值 结束值
    animateNumBarColor(dom, val,first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val1,    //目标值
        onUpdate: function () {
          this.val333333 = obj.num1;    //初始值
            dom.style.width = obj.num1 + "%";
        }.bind(this),
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor1(dom, val,first) {
      let obj = { num1: first };
      let val1 = val;
      TweenMax.to(obj, this.data[0].aniTime, {
        num1: val1,
        onUpdate: function () {
          this.val1111111 = obj.num1;
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
    .chart1_1 {
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
            .barcolor1 {
              width: 0%;
              background: #00fcff;
            }
          }
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
</style>
