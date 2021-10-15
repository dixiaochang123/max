<template>
  <div class="content888">
    <div class="chart1_1">
        <div class="hhhhhsss">
            <img class="imgg" src="../../../assets/index/组12.png" alt="" srcset="">
          <div class="flex1 animated fadeInLeft">
            <p class="p1">网络连接数</p>
            <p style="color:#4fbbf2;" class="p2 valtext4jil6545411111" :data-target="data[0].endNum">{{data[0].firstNum}}</p>
            <p style="color:#03fea6;" class="p2 p3 valtext4jil65454555" :data-target="data[1].endNum">{{data[1].firstNum}}</p>
          </div>
        </div>
        <div class="hhhhhsss">
            <img class="imgg" src="../../../assets/index/组13.png" alt="" srcset="">
          <div class="flex1 flex3 animated fadeInRight">
            <p class="p1">单机负载</p>
            <p style="color:#5cc1ff;" class="p2 p3 valtext4jil6545411111" :data-target="data[2].endNum">{{data[2].firstNum}}</p>
            <p style="color:#fb4347;" class="p2 p3 valtext4jil65454555" :data-target="data[3].endNum">{{data[3].firstNum}}</p>
          </div>
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
        if(val && val.includes('弹性负载均衡ELB')) {
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
      let valtext4jil6545411111 = document.getElementsByClassName("valtext4jil6545411111");
      let targetDomCount =  parseFloat(valtext4jil6545411111[0].getAttribute("data-target"));
      let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      this.animateNumdo(valtext4jil6545411111[0], math);

      let targetDomCount1 = parseFloat(valtext4jil6545411111[1].getAttribute("data-target"));
      let math1 = parseInt(Math.random()*(parseInt(targetDomCount1+5)-parseInt(targetDomCount1-5))+parseInt(targetDomCount1-5));
      this.animateNumdo(valtext4jil6545411111[1], math1);

      let valtext4jil65454555 = document.getElementsByClassName("valtext4jil65454555");
      let targetDomCount2 = parseFloat(valtext4jil65454555[0].getAttribute("data-target"));
      let math2 = parseFloat(Math.random()*(parseFloat(targetDomCount2+0.5)-parseFloat(targetDomCount2-0.5))+parseFloat(targetDomCount2-0.5));
      this.animateNum(valtext4jil65454555[0], math2, 2);

      let targetDomCount3 = parseFloat(valtext4jil65454555[1].getAttribute("data-target"));
      let math3 = parseFloat(Math.random()*(parseFloat(targetDomCount3+0.05)-parseFloat(targetDomCount3-0.05))+parseFloat(targetDomCount3-0.05));
      this.animateNum(valtext4jil65454555[1], math3, 2);


    },
    animateAll() {
      // let valtext4jil6545411111 = document.getElementsByClassName("valtext4jil6545411111")[0];
      // let targetDomCount1 = valtext4jil6545411111.getAttribute("data-target");
      // this.animateNumdo(valtext4jil6545411111, targetDomCount1, 0);

      let valtext4jil6545411111 = document.getElementsByClassName("valtext4jil6545411111");
      for (let i = 0; i < valtext4jil6545411111.length; i++) {
        let targetDomCount = valtext4jil6545411111[i].getAttribute("data-target");
        this.animateNumdo(valtext4jil6545411111[i], targetDomCount);
      }
      let valtext4jil65454555 = document.getElementsByClassName("valtext4jil65454555");
      for (let i = 0; i < valtext4jil65454555.length; i++) {
        let targetDomCount = valtext4jil65454555[i].getAttribute("data-target");
        this.animateNum(valtext4jil65454555[i], targetDomCount, 2);
      }
    },
    // 初始值 结束值 几个小数点
    animateNumdo(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[2].aniTime, {
        num1: val,
        onUpdate: function () {
          let str = parseFloat(obj.num1).toFixed().toString();
          str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
          dom.innerHTML = str;
        },
        delay: 3,
      });
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val,dog) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, this.data[2].aniTime, {
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
.content888 {
  width: 100%;
  height: 100%;
}
.chart1_1 {
      height: calc(100% - 60px);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .hhhhhsss {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .imgg {
              width: 150px;
              height: 151px;
          }
      }
      .flex1 {
        width: 120px;
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
          text-align: left;
          text-indent: 0.5em;
        }
        .p3 {
          &::after {
            content: "%";
          }
        }
      }
      .flex2 {
        width: 330px;
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
