<template>
  <div class="content1222">
    <div class="list">
      <div class="list_nth1">
        <h3><img src="../../assets/img/案例.png" alt=""> <label style="vertical-align: middle;">行业案例</label><span>Industry case</span></h3>
        <div style="height: 30px"></div>
        <div class="case_box">
          <div class="case_list">
            <div @click="leftclick(item,index)" :class="[activeClick==index && isclick!=false ?'activeClick':'','case']" v-for="(item,index) in caselistindex" :key="index">
              <p class="title">{{ item.name }}</p>
              <div class="case_content">
                <div class="case_content_left">
                  <div class="apply">
                    <span style="white-space: nowrap;"> 使用时长（天）</span>
                    <div class="bar val2_bar" :data-target='item.duration'></div>
                    <div class="number-grow-warp">
                      <span class="val2dxc" :data-target='item.duration'>0</span>
                    </div>
                  </div>
                  <div class="numbers">
                    <div class="nb">
                      <div class="nb1">
                        <p style="color: #fff"><span class="online val2dxc val2k" :data-target='item.onlineUserNumber'>0</span>W</p>
                        <span style="color: #2e9bc4">在线用户数</span>
                      </div>
                      <div>
                        <p style="color: #fff"><span class="online val2dxc val2k" :data-target='item.peakUserNumber'>0</span>W</p>
                        <span style="color: #2e9bc4">峰值用户数</span>
                      </div>
                    </div>
                    <div class="text">
                      <p :class="[k?`text_bef${k+1}`:'','text_bef text_bef1']" v-for="(i,k) in item.showPro" :key="k">{{i.name}}</p>
                    </div>
                  </div>
                </div>
                <div class="case_content_right">
                  <div class="nub_der">
                    <span class="val333" :data-target='item.serverNum'>0</span>
                    <span class="unit">台</span>
                  </div>
                  <!-- <div class="bf"><span>云主机</span> </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="mix animated fadeInRight">
        <h3><img class="logosnnsns" src="../../assets/index/产品排名.png" alt="" srcset=""> <label style="vertical-align: middle;position: relative;top: -1rem;">产品排名</label><span>Product ranking</span></h3>
        <div style="height: 30px"></div>
        <div class="mix_box_fat">
          <div class="mix_box " v-for="(item,index) in proportion" :key="index">
            <div class="nth1">
              <span>{{index+1}}.</span><span class="txy">{{item.name}}</span>
            </div>
            <div class="nb">
              <div class="nb1">
                <p style="color: #fff"><span class="val4" :data-target="item.value1">0</span><span class="bfb">%</span></p>
                <span style="color: #2e9bc4">行业占比</span>
                <div class="bar">
                  <div class="bar_color val4_bar" :data-target="item.value1"></div>
                </div>
              </div>
              <div>
                <p style="color: #fff">+ <span class="val5" :data-target="item.value2">0</span><span class="bfb">%</span></p>
                <span style="color: #2e9bc4">同比上月</span>
                <div class="bar">
                  <div class="bar_color bar_color1 val5_bar" :data-target="item.value2"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    caselistindex: {
      type: Array,
      default: function () {
        return [];
      },
    },
    proportion: {
      type: Array,
      default: function () {
        return [];
      },
    },
    position1: {
      type: String,
      default: "",
    },
    tem1: {
      type: String,
      default: "",
    },
    wea1: {
      type: String,
      default: "",
    },
    weatherImg: {
      type: String,
      default: "",
    },
    isclick: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      time:null
    }

  },
  beforeDestroy() {
    clearInterval(this.time)
  },
  components: {},
  watch:{
    caselistindex:{
      handler:function(val) {
        console.log('watch',val)
        this.activeClick = this.websockData.activeClick;
        let productseleted = (!!val[this.activeClick] && !!val[this.activeClick].actualPro) ? val[this.activeClick].actualPro.map(item=>item.name):[]
        this.setproductseleted(productseleted)
		
        // this.time = setInterval(()=>{
        //   this.animateAlldou()
        // },5000)
      },
      deep:true,
    },
    websockData:{
      handler:function(val) {
        console.log('watch',val)
        this.activeClick = val.activeClick;
      },
      deep:true,
    }
  },
  computed: {
    ...mapGetters(["websockData"]),
    // a computed getter
    max() {
      //最大长度 430px
      //最大时长 result
      let result = Math.max(...this.caselistindex.map((x) => x.serverNum*2));
      // let multiple = result/x;
      return result;
    },
    
  },
  data() {
    return {
      width: 0,
      caselistindexcopy:[],
      activeClick:0
    };
  },
  mounted() {
    this.$emit('caseInfocab',this.caselistindex[0],0)
    this.activeClick = this.websockData.activeClick
    let productseleted = !!this.caselistindex[0].actualPro ? this.caselistindex[0].actualPro.map(item=>item.name) : []
    this.setproductseleted(productseleted)
    this.animateAll()
    
  },
  methods: {
    ...mapActions(["setproductseleted","setwebsockData"]),
    animateAll() {
      let val2dxc = document.getElementsByClassName("val2dxc");
      for (let i = 0; i < val2dxc.length; i++) {
        let targetDomCount = val2dxc[i].getAttribute("data-target");
        this.animateNum(val2dxc[i], targetDomCount, 0);
      }
      let val333 = document.getElementsByClassName("val333");
      for (let i = 0; i < val333.length; i++) {
        let targetDomCount = val333[i].getAttribute("data-target");
        this.animateNum(val333[i], targetDomCount, 0,3);
      }
      let val4 = document.getElementsByClassName("val4");
      for (let i = 0; i < val4.length; i++) {
        let targetDomCount = val4[i].getAttribute("data-target");
        this.animateNum(val4[i], targetDomCount, 1);
      }
      let val5 = document.getElementsByClassName("val5");
      for (let i = 0; i < val5.length; i++) {
        let targetDomCount = val5[i].getAttribute("data-target");
        this.animateNum(val5[i], targetDomCount, 1);
      }
      let val2_bar = document.getElementsByClassName("val2_bar");
      for (let i = 0; i < val2_bar.length; i++) {
        let targetDomCount = val2_bar[i].getAttribute("data-target");
        this.animateNumBar(val2_bar[i], targetDomCount);
      }
      let val4_bar = document.getElementsByClassName("val4_bar");
      for (let i = 0; i < val4_bar.length; i++) {
        let targetDomCount = val4_bar[i].getAttribute("data-target");
        this.animateNumBarColor(val4_bar[i], targetDomCount);
      }
      let val5_bar = document.getElementsByClassName("val5_bar");
      for (let i = 0; i < val5_bar.length; i++) {
        let targetDomCount = val5_bar[i].getAttribute("data-target");
        this.animateNumBarColor(val5_bar[i], targetDomCount);
      }
    },
    animateAlldou() {
      // let val2 = document.getElementsByClassName("val2k");
      // for (let i = 0; i < val2.length; i++) {
      //   let targetDomCount = parseInt(val2[i].getAttribute("data-target"));
      //   let math = parseInt(Math.random()*(parseInt(targetDomCount+0.3)-parseInt(targetDomCount-0.3))+parseInt(targetDomCount-0.3));
      //   this.animateNum(val2[i], math, 0);
      // }
      // let val4 = document.getElementsByClassName("val4");
      // for (let i = 0; i < val4.length; i++) {
      //   let targetDomCount = parseInt(val4[i].getAttribute("data-target"));
      //   let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      //   this.animateNum(val4[i], math, 1);
      // }
      // let val5 = document.getElementsByClassName("val5");
      // for (let i = 0; i < val5.length; i++) {
      //   let targetDomCount = parseInt(val5[i].getAttribute("data-target"));
      //   let math = parseInt(Math.random()*(parseInt(targetDomCount+5)-parseInt(targetDomCount-5))+parseInt(targetDomCount-5));
      //   this.animateNum(val5[i], math, 1);
      // }
    },
    leftclick(item,index) {
      let productseleted = item.actualPro.map(item=>item.name)
      this.setproductseleted(productseleted)
      if(!this.isclick)return;
      this.activeClick = index
      console.log(item)
      this.$emit('caseInfocab',item,index)
      this.setwebsockData({
        activeClick:index,
        caseInfoItem:item,
        industry:item.industry,
        scale:item.scale,
        productType:this.websockData.productType
      })
	  
	  this.$emit('backFun')
	  
	  
    },
    activeClickstart() {
      this.activeClick = ''
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val, dot,time) {
      let obj = { num1: dom.innerHTML };
      let time1 = !!time ? time : 3
      TweenMax.to(obj, time1, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dot);
        },
        delay: 1,
      });
    },
    // 初始值 结束值
    animateNumBar(dom, val,width) {
      let obj = width ? {num1: width}:{ num1: 0 };
      let val1 = (430 / (this.max / val)).toFixed(0);
      TweenMax.to(obj, 3, {
        num1: val1,
        onUpdate: function () {
          dom.style.width = obj.num1 + "px";
        },
        delay: 1,
      });
    },
    // 初始值 结束值
    animateNumBarColor(dom, val,width) {
      let obj = width ? {num1: width}:{ num1: 0 };
      let val1 = val;
      TweenMax.to(obj, 3, {
        num1: val1,
        onUpdate: function () {
          dom.style.width = obj.num1 + "%";
        },
        delay: 1,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content1222 {
  width: 100%;
  // height: 100%;
  h3 {
    font-size: 40px;
    padding-bottom: 20px;
    text-align: left;
    color: $myColor;
    // border-bottom: solid 1px #12366b;
    position: relative;
    img {
      width: 44px;
      height: 44px;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      padding-left: 30px;
      font-size: 20px;
      // color: #7789b2;
    }
    // &::before {
    //   content: "";
    //   width: 14px;
    //   height: 1px;
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   background-color: #3483f8;
    // }
    // &::after {
    //   content: "";
    //   width: 14px;
    //   height: 1px;
    //   position: absolute;
    //   bottom: 0;
    //   right: 0;
    //   background-color: #3483f8;
    // }
  }
  .list {
    display: flex;
    justify-content: space-between;
  }
  .list_nth1 {
    width: 80%;
  }
  .mix {
    width: 19.5%;
    height: 100%;
    .mix_box_fat {
      height: 100%;
      // border: solid 1px #2d4a5f;
      // border-radius: 10px;
      // box-shadow: 0px 0px 30px #11304b inset;
    }
    .mix_box {
      // border: solid 1px #2d4a5f;
      // border-top: none;
      // border-bottom: none;
      // border-radius: 10px;
      // box-shadow: 0px 0px 30px #11304b inset;
      background: url("../../assets/left/板子.png") no-repeat bottom left;
      background-size: 100% 50%;
      height: 100%;
      .nth1 {
        font-size: 30px;
        color: #dbba6a;
        text-align: left;
        padding-top: 20px;
        padding-left: 20px;
        padding-bottom: 30px;
        .txy {
          font-size: 20px;
          color: #48d0fe;
        }
      }
      .nb {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 40px;
        padding-bottom: 58px;
        
        span {
          font-size: 20px;
        }
        & > div {
          width: 50%;
          // text-align: right;
        }
        .bar {
          width: 100px;
          height: 7px;
          border-radius: 3.5px;
          margin: 0 12px;
          margin-top: 22px;
          margin-left: auto;
          margin-right: auto;
          background-color: #9b9ba7;
          // background-image: linear-gradient(to right, #45e4ff, #ebb736);
          .bar_color {
            // width: 10px;
            height: 100%;
            border-radius: 3.5px;
            background-image: linear-gradient(to right, #45e4ff, #ebb736);
          }
          .bar_color1 {
            width: 0px;
            background-image: none;
            background-color: #f387a7;
          }
        }
        .val5 {
          font-size: 43px;
        }
        .bfb {
          font-size: 30px;
        }
      }
      .nb1 {
        position: relative;
        // text-align: left !important;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background-color: #2f81a0;
        }
        .val4 {
          font-size: 45px;
        }
      }
    }
  }
  .case_box {
    width: 100%;
    display: flex;
    .case_list {
      width: 100%;
      // display: flex;
      // justify-content: space-between;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 27px;
      grid-column-gap: 11px;
      // grid-template-columns: repeat(6, 1fr);
      .case {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
        // border: solid 1px #2d4a5f;
        // box-shadow: 0px 0px 30px #11304b inset;
        background: url("../../assets/left/组23.png") no-repeat center
          center;
        background-size: 100% 100%;

        // margin-bottom: 30px;
        //  animation: updown 2s 1s linear infinite;
        //   animation-iteration-count:1;/*动画只执行一次*/
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
          -webkit-animation-delay: 1s;
        }
        &.activeClick {
          // background-color: #186b8e;
          background-image: none;
          background-color: rgba(24,107,142,0.5) !important;
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
      .title {
        font-size: 30px;
        text-align: left;
        color: #4cd1ff;
        // padding-top: 15px;
        padding-left: 30px;
        padding-bottom: 25px;
        padding-top: 10px;
      }
      .case_content {
        padding-left: 30px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 5px;
        .case_content_left {
          width: 75%;
        }

        @mixin beforeborder() {
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 0 20px #255364;
          }
        }
        .case_content_right {
          width: 20%;
          position: relative;
          background: url("../../assets/left/框.png") no-repeat -6px -5px;
          background-size: 100% 100%;
          .nub_der {
            font-size: 53px;
            // width: 140px;
            height: 160px;
            // line-height: 160px;
            // border-radius: 50%;
            // border: solid 2px $myColor;
            // box-shadow: 0px 0px 20px #273c6b inset;
            color: $myColor;
            position: relative;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            // @include beforeborder;
            //  background: url("../../assets/left/框.png") no-repeat bottom left;
            span {
              // line-height: 100px;
              display: inline-block;
              text-align: center;
            }
            .unit {
              font-size: 20px;
              color: #3bc4da;
            }
          }
          .bf {
            width: 45px;
            height: 45px;
            line-height: 45px;
            border-radius: 50%;
            // font-size: 12px;
            background-color: #111e2e;
            color: $myColor;
            border: solid 1px $myColor;
            box-shadow: 0px 0px 20px #273c6b inset;
            position: absolute;
            top: 0;
            // @include beforeborder;
            span {
              font-size: 10px;
              transform: scale(0.8);
            }
          }
        }
      }
      .apply {
        font-size: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #3389af;
        padding-bottom: 30px;
      }
      .bar {
        width: 430px;
        width: 10px;
        height: 7px;
        border-radius: 3.5px;
        margin: 0 12px;
        background-image: linear-gradient(to right, #45e4ff, #ebb736);
      }
      .number-grow-warp {
        transform: translateZ(0);
      }
      .number-grow {
        font-family: Arial-BoldMT;
        font-size: 20px;
        color: #3389af;
        letter-spacing: 2.67px;
        // margin:110px 0 20px;
        display: block;
        line-height: 64px;
      }
      .numbers {
        // width: 650px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 35px;
        .nb {
          width: 255px;
          display: flex;
          justify-content: space-between;
          font-size: 30px;
          span {
            font-size: 16px;
          }
          & > div {
            width: 50%;
            text-align: right;
          }
        }
        .online {
          font-size: 40px !important;
        }
        .nb1 {
          position: relative;
          text-align: left !important;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            background-color: #2f81a0;
          }
        }
        .text {
          width: 50%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          font-size: 16px;
          align-items: center;
          p {
            width: 50%;
            position: relative;
            padding-left: 40px;
            text-align: left;
            box-sizing: border-box;
          }
          @mixin before($color) {
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              background-color: $color;
            }
          }
          .text_bef1 {
            color: #7c7be1;
            @include before(#7c7be1);
          }
          .text_bef2 {
            color: #dbba6b;
            @include before(#dbba6b);
          }
          .text_bef3 {
            color: #41dcf8;
            @include before(#41dcf8);
          }
          .text_bef4 {
            color: #ffffff;
            @include before(#ffffff);
          }
        }
      }
    }
  }
}
.logosnnsns {
  width:44px;
  height: 44px;
  vertical-align: middle;
}
</style>
