<template>
  <div class="content1">
    <div class="positionInfo">
      <p>
        <img src="../../../assets/img/地点.png" alt="" />&nbsp;&nbsp;{{ position1 }}
      </p>
      <p><img class="img2" src="../../../assets/img/多云.png" alt="" />&nbsp;&nbsp;{{ wea1 }}</p>
      <p>{{ tem1 }}</p>
    </div>
    <h3><img src="../../../assets/img/展示板.png" alt=""> <label style="vertical-align: middle;">行业信息</label><span>Industry Information</span></h3>
    <div class="information">
      <div class="nth nth1 animated fadeInDown">
        <img src="../../../assets/left/行业.png" alt="" />
        <p style="text-align: left">
          <span>行业</span> <br />
          <span>{{websockData.industry}}信息</span>
        </p>
      </div>
      <div class="nth nth2 animated fadeInDown">
        <img src="../../../assets/left/规模.png" alt="" />
        <p style="text-align: left">
          <span>规模</span> <br />
          <span>{{scale[websockData.scale]}}</span>
        </p>
      </div>
      <div class="nth nth3 animated fadeInDown">
        <img src="../../../assets/left/产品.png" alt="" />
        <div style="text-align: left">
          <span>产品类型</span> <br />
          <p class="spanlist">
           <span v-if="websockData.productType[0]">{{websockData.productType[0] || ''}}</span>
            <span v-if="websockData.productType[1]">{{websockData.productType[1] || ''}}</span>
            <span v-if="websockData.productType[2]">{{websockData.productType[2] || ''}}</span><br />
            <span v-if="websockData.productType[3]">{{websockData.productType[3] || ''}}</span>
            <span v-if="websockData.productType[4]">{{websockData.productType[4] || ''}}</span>
            <span v-if="websockData.productType[5]">{{websockData.productType[5] || ''}}</span>
          </p>
        </div>
      </div>
    </div>
    <LeftSub :caselist="caselist" :isclick="true" :isAdd="true" />
  </div>
</template>

<script>
import { TweenMax } from "gsap";
import { product } from "./data.js";
import { mapActions, mapGetters } from "vuex";
import LeftSub from './LeftSub.vue'
export default {
  props: {
    caselist: {
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
  },
  components: {
    LeftSub
  },
  computed: {
    ...mapGetters(["websockData"]),
    max() {
      //最大长度 430px
      //最大时长 result
      let result = Math.max(...this.caselist.map((x) => x.value));
      // let multiple = result/x;
      return result;
    },
  },
  watch: {
    caselist: {
      handler: function (val) {
        let productseleted = val
          .filter((item) => item.checked1 == true)
          .map((item) => item.name);
        this.setproductseleted(productseleted);
      },
      immediate: true,
      deep: true, //对象内部的属性监听，也叫深度监听
    },
  },
  data() {
    return {
      width: 0,
      product: product.slice(0, 6),
      scale:{
        max:'大【1000≤人员】',
        zhong:'中【300≤人员＜1000】',
        min:'小【人员＜300】'
      }
    };
  },
  created() {

  },
  mounted() {
    // this.animate();
    // this.animate4();
  },
  methods: {
    ...mapActions(["setproductseleted"]),
    checked2click(val,index) {
      // console.log(index,this.index1[index])
      // this.animate4_add(val.addhostsNumber,index)
      // this.animate_add(val.addhostsNumber,index)

    },
    animate() {
      let val22 = document.getElementsByClassName("val22");
      for (let i = 0; i < val22.length; i++) {
        let targetDomCount = val22[i].getAttribute("data-target");
        this.animateNum(val22[i], targetDomCount, 2);
      }
    },
    animate_add(start,index) {
      let val22 = document.getElementsByClassName("val22")[index];
      // for (let i = 0; i < val22.length; i++) {
        let targetDomCount = val22.getAttribute("data-target");
        this.animateNum(val22, start, 2,targetDomCount);
      // }
    },
    animate4() {
      let val4_bar = document.getElementsByClassName("val4_bar");
      for (let i = 0; i < val4_bar.length; i++) {
        let targetDomCount = val4_bar[i].getAttribute("data-target");
        this.animateNumBarColor(val4_bar[i], targetDomCount);
      }
    },
    animate4_add(start,index) {
      let val4_bar = document.getElementsByClassName("val4_bar")[index];
      // for (let i = 0; i < val4_bar.length; i++) {
        let targetDomCount = val4_bar.getAttribute("data-target");
        this.animateNumBarColor(val4_bar, start,targetDomCount);
      // }
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val, dot,start) {
      let obj = { num1: start || dom.innerHTML };
      // console.log(val, 999);
      TweenMax.to(obj, 20, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dot);
        },
        delay: 1,
      });
    },
    // 初始值 结束值
    animateNumBar(dom, val) {
      let obj = { num1: 0 };
      let val1 = (430 / (this.max / val)).toFixed();
      TweenMax.to(obj, 20, {
        num1: val1,
        onUpdate: function () {
          dom.style.width = obj.num1 + "px";
        },
        delay: 1,
      });
    },
    // 初始值 结束值
    animateNumBarColor(dom, val,start) {
      let obj = { num1: start || 0 };
      let val1 = val;
      TweenMax.to(obj, 20, {
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
.content1 {
  width: 100%;
  height: 100%;
  padding-left: 60px;
  .positionInfo {
    font-size: 30px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    color: $myColor;
    padding-top: 45px;
    padding-bottom: 50px;
    p {
      padding-right: 80px;
    }
    img {
      width: 26px;
      height: 30px;
      vertical-align: middle;
    }
    .img2 {
      width: 51px;
      height: 37px;
    }
  }
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
  .information {
    font-size: 30px;
    color: $myColor;
    display: flex;
    justify-content: space-around;
    margin: 30px 0 70px;
    > div {
      width: 33%;
      height: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../../../assets/left/2.png") no-repeat center;
      background-size: 100% 100%;
      border-radius: 10px;
      // background-color: #14364c;
      img {
        width: 63px;
        height: 70px;
        margin-right: 25px;
      }
    }
    .nth1,
    .nth2 {
      position: relative;
    }
    .nth3 {
      .spanlist {
        font-size: 16px;
        span {
          position: relative;
          display: inline-block;
          padding-left: 24px;
          width: 165px;
          line-height: 32px;
          &::before {
            content: "";
            position: absolute;
            top: 8px;
            left: 0;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: $myColor;
          }
        }
      }
    }
  }
  .list {
    display: flex;
    justify-content: space-between;
  }
  .list_nth1 {
    width: 100%;
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
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 14px;
      grid-column-gap: 11px;
      height: 815px;
      // grid-template-columns: repeat(6, 1fr);
      .case {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
        // border: solid 1px #2d4a5f;
        // box-shadow: 0px 0px 30px #11304b inset;
        // background: url("../../../assets/left/组23.png") no-repeat center center;
        // background-size: 100% 100%;
        background-image: url("../../../assets/left/板子.png"),
          url("../../../assets/left/组23.png");
        // url("../../../assets/left/板子.png");
        background-repeat: no-repeat, no-repeat;
        background-position: bottom left, center center;
        background-size: 100% 35%, 100% 100%;

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
        font-size: 28px;
        text-align: left;
        color: #4cd1ff;
        // padding-top: 15px;
        padding-left: 30px;
        padding-right: 26px;
        padding-bottom: 30px;
        padding-top: 22px;
        display: flex;
        justify-content: space-between;
        .select {
          .el-checkbox {
            color: $myColor;
          }
          /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
            color: #dbba6a;
          }
          /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
            background-color: none !important;
            border-color: none !important;
          }
          /deep/ .el-checkbox.is-bordered.is-checked {
            border-color: none !important;
          }
          span {
            display: inline-block;
            width: 96px;
            height: 36px;
            line-height: 36px;
            border: solid 1px #1f5473;
            border-radius: 2px;
            font-size: 19px;
            text-align: center;
            margin-left: 20px;
            cursor: pointer;
          }
        }
      }
      .case_content {
        .nth {
          height: 120px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 60px;
          .txyzjimg {
            width: 79px;
            height: 74px;
          }
          .p1 {
            font-size: 16px;
            color: $myColor;
            padding-bottom: 24px;
          }
          .p2 {
            font-size: 24px;
            color: #ffffff;
            span {
              &:last-of-type {
                font-size: 15px;
              }
            }
          }
          .bar {
            width: 126px;
            height: 7px;
            border-radius: 3.5px;
            margin: 15px auto;
            // margin-top: 22px;
            margin-left: auto;
            margin-right: auto;
            background-color: #9b9ba7;
            // background-image: linear-gradient(to right, #45e4ff, #ebb736);
            .bar_color {
              width: 0px;
              height: 100%;
              border-radius: 3.5px;
              background-image: linear-gradient(to right, #9ee354, #61dee7);
            }
            .bar_color2 {
              background-image:none;
              background-color: #ff94b4;
            }
            .bar_color3 {
              background-image: linear-gradient(to right, #45e4ff, #ebb736) !important;
            }
          }
          .p4 {
            color: $myColor;
            font-size: 15px;
          }
        }
      }
      .foot {
        font-size: 22px;
        color: $myColor;
        line-height: 40px;
        text-indent: 2em;
        padding-left: 30px;
        padding-right: 60px;
        padding-top: 60px;
        text-align: left;
      }
    }
  }
}

.select1 {
  &.is-checked {
    border-color:#dbba6a !important;
  }
  /deep/ .el-checkbox__inner {
    visibility: hidden!important;
  }
  /deep/ .el-checkbox__input {
    position: relative;
    &::after {
      content: "";
      width: 17px;
      height: 22px;
      background: url("../../../assets/home/选择(2)-未选中.png") no-repeat center !important;
      background-size: 17px 22px !important;
      position: absolute !important;
      left: 0 !important;
      top: 0 !important;
    }
  }
  /deep/ .el-checkbox__input.is-checked {
    &::after {
      content: "";
      width: 17px;
      height: 22px;
      background: url("../../../assets/home/选择(2).png") no-repeat center !important;
      background-size: 17px 22px !important;
      position: absolute !important;
      left: 0 !important;
      top: 0 !important;
    }
  }
}
.select2 {
  /deep/ .el-radio__label {
    color: $myColor;
  }
  /deep/ .el-radio__input.is-checked+.el-radio__label {
   color: #dbba6a !important;
  }
  &.is-checked {
    border-color:#dbba6a !important;
    .el-radio__label {
      color: #dbba6a !important;
    }
  }
  /deep/ .el-radio__inner {
    visibility: hidden!important;
  }
  /deep/ .el-radio__input{
    position: relative;
    &::after {
      content: "";
      width: 23px;
      height: 20px;
      background: url("../../../assets/home/扩容-选中.png") no-repeat center !important;
      background-size: 23px 20px !important;
      position: absolute !important;
      left: -3px !important;
      top: 0 !important;
    }
  }
  /deep/ .el-radio__input.is-checked {
    &::after {
      content: "";
      width: 23px;
      height: 20px;
      background: url("../../../assets/home/扩容.png") no-repeat center !important;
      background-size: 23px 20px !important;
      position: absolute !important;
      left: -3px !important;
      top: 0 !important;
    }
  }
}

/deep/ .el-step__icon.is-text {
    border-radius: 50%;
    border: 4rem solid;
    border-color: #00e7ef;
    /* display: none; */
    /* visibility: hidden; */
}
/deep/ .el-step__icon-inner {
  display: none;
}

/deep/ .el-step__icon {
    visibility: hidden;
}
/deep/ .el-step__title.is-finish {
    color: #00e7ef;
}
/deep/ .el-step__title.is-process {
    color: #00e7ef;
}
/deep/ .el-step__title.is-wait {
    color: #00e7ef;
}
/deep/ .el-step__line {
    background-color: #0086A7;
}
/deep/ .el-step__line-inner {
    background: #00E2EE !important;
}
</style>
