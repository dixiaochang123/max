<template>
  <div class="content2">
    <div class="positionInfo">
      <p>{{ date }}</p>
      <p>{{ week }}</p>
      <p>{{ minute }}</p>
    </div>
    <h2><img class="logosnnsns" src="../../../assets/index/大数据图标.png" alt="" srcset=""><label style="vertical-align: middle;">&nbsp;&nbsp;案例拓扑图</label><span style="color: #40dcf8;">Case topology</span></h2>
    <div style="height: 30px"></div>
    <div v-show="reFresh" class="chart_box">
      <div :class="[!!once?'flipInX':'','chart chart1 icon-plus animated flipInX']" v-for="(item,index) in caseInfo1" :key="index">
        <h3>{{item.name}}</h3>
        <div class="chart1_1">
          <iframe :src="`static/case/${item.caseTopMap}/index.html`" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";
import { mapGetters,mapActions } from 'vuex';
import { caseInfo } from "@/utils/data/caseData.js";
export default {
  props: {
    date: {
      type: String,
      default: "",
    },
    week: {
      type: String,
      default: "",
    },
    minute: {
      type: String,
      default: "",
    },
    caselistindex: {
      type: Array,
      default: function () {
        return [];
      },
    },
    
  },
  components: {
  },
  computed: {
    ...mapGetters(["Highlight","once"]),
  },
  data() {
    return {
      reFresh:true,
      caseInfo1:[],
      topoInfo:{
        name:"案例拓扑图",
        caseTopMap:'chengdudaoqiao',
        topos:["jyhy_max_1","jyhy_max_2","jyhy_max_3","jyhy_max_4","jyhy_max_5","jyhy_max_6","jyhy_zhong_1","jyhy_zhong_2","jyhy_zhong_3","jyhy_zhong_4",]
      },
    };
  },
  watch:{

    Highlight:{
        handler:function(val) {
          this.reFresh= false
          let caselistname=['政府机关','金融行业','工业行业','教育行业','通用行业'];
          // this.$nextTick(()=>{
            this.caseInfo1 = caseInfo.filter(item=>(item.industry==caselistname[val-1] && item.scale=='max'));
            setTimeout(() => {
              this.reFresh = true;
            }, 500);

          // })
          
        },
        deep:true,
        // immediate:true
      },
  },
  created() {
    this.caseInfo1 = caseInfo.filter(item=>(item.industry=='政府机关' && item.scale=='max'));
  },
  mounted() {
    setTimeout(()=>{
      this.setonce(false)
    },2000)
  },
  methods: {
    ...mapActions(["setonce"]),
    // 初始值 结束值 几个小数点
    animateNum(dom, val) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, 20, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed();
        },
        delay: 3,
      });
    },
    // 初始值 结束值 几个小数点
    animateNumdot(dom, val, dot) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, 20, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dot);
        },
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor(dom, val, iswidth) {
      let obj = { num1: 0 };
      let val1 = val;
      TweenMax.to(obj, 20, {
        num1: val1,
        onUpdate: function () {
          if (iswidth) {
            dom.style.width = obj.num1 + "%";
          } else {
            dom.style.height = obj.num1 + "%";
          }
        },
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarb(dom, val) {
      let obj = { num1: 5 };
      let val1 = val;
      TweenMax.to(obj, 20, {
        num1: val1,
        onUpdate: function () {
          dom.style.top = obj.num1 + "%";
        },
        delay: 3,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.plus-icon-enter-active {
  transition: opacity 0.5s;
}
.plus-icon-enter {
  opacity: 0;
}
.plus-icon-leave-active {
  transition: opacity 0.5s;
}
.plus-icon-leave-to {
  opacity: 0;
}
.content2 {
  width: 100%;
  height: 100%;
  padding-right: 60px;
  .positionInfo {
    // height: 50px;
    // line-height: 50px;
    font-size: 30px;
    color: #bfd7ff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
      padding-left: 100px;
      padding-top: 40px;
      padding-bottom: 50px;
    }
  }
  h2 {
    font-size: 40px;
    padding-bottom: 20px;
    text-align: left;
    color: $myColor;
    border-bottom: solid 1px #12366b;
    position: relative;
    span {
      display: inline-block;
      padding-left: 30px;
      font-size: 20px;
      color: #7789b2;
    }
    &::before {
      content: "";
      width: 14px;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #3483f8;
    }
    &::after {
      content: "";
      width: 14px;
      height: 1px;
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #3483f8;
    }
  }
  .chart_box {
    width: 100%;
    height: 1170px;
    // display: flex;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 32px;
    grid-column-gap: 20px;
    h3 {
      font-size: 30px;
      color: #c5e1ff;
      text-align: left;
      // padding-top: 20px;
      // padding-left: 10px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      margin: 0 35px;
      border-bottom: solid 2px #51a9ff;
    }
    > div {
      width: 100%;
      height: 100%;
      // border: solid red 1px;
      // background: url("../../../assets/left/组23.png") no-repeat center center;
      // background: url("../../assets/img/框框.png") no-repeat center center;
      background-image: url("../../../assets/img/框框.png"),url("../../../assets/left/组23.png");
                  // url("../../../assets/left/板子.png");
                  background-repeat: no-repeat, no-repeat;
                  background-position:bottom left,center center;
      background-size: 100% 50%,100% 100%;
      -webkit-animation: FadeIn 0.5s linear;
        -webkit-animation-fill-mode: both;
        &:nth-of-type(1) {
          -webkit-animation-delay: 0.1s;
        }
        &:nth-of-type(2) {
          -webkit-animation-delay: 0.3s;
        }
        &:nth-of-type(3) {
          -webkit-animation-delay: 0.5s;
        }
        &:nth-of-type(4) {
          -webkit-animation-delay: 0.7s;
        }
        &:nth-of-type(5) {
          -webkit-animation-delay: 0.9s;
        }
        &:nth-of-type(6) {
          -webkit-animation-delay: 1.2s;
        }

    }
    @-webkit-keyframes FadeIn {
        0% {
          opacity: 0;
          -webkit-transform: scale(0.5);
        }
        85% {
          opacity: 1;
          -webkit-transform: scale(1.05);
        }
        100% {
          -webkit-transform: scale(1);
        }
      }
    .chart1_1 {
      height: calc(100% - 110px);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      // background: url("../../../assets/left/板子.png") no-repeat bottom left;
      // background-size: 100% 50%;
      
    }
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
.logosnnsns {
  width:44px;
  height: 44px;
  vertical-align: middle;
}
</style>
