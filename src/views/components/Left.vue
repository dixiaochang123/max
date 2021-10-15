<template>
  <div class="content1">
    <div class="positionInfo">
      <p>
        <img src="../../assets/img/地点.png" alt="" />&nbsp;&nbsp;{{ position1 }}
      </p>
      <p><img class="img2" src="../../assets/img/多云.png" alt="" />&nbsp;&nbsp;{{ wea1 }}</p>
      <p>{{ tem1 }}</p>
    </div>
    <h3><img src="../../assets/img/展示板.png" alt=""> <label style="vertical-align: middle;">行业信息</label><span>Industry Information</span></h3>
    <div class="information">
      <div class="nth nth1 animated fadeInDown">
        <img src="../../assets/left/行业.png" alt="" />
        <p style="text-align: left">
          <span>行业</span> <br />
          <span>{{websockData.industry}}信息</span>
        </p>
      </div>
      <div class="nth nth2 animated fadeInDown">
        <img src="../../assets/left/规模.png" alt="" />
        <p style="text-align: left">
          <span>规模</span> <br />
          <span>{{scale[websockData.scale]}}</span>
        </p>
      </div>
      <div class="nth nth3 animated fadeInDown">
        <img src="../../assets/left/产品.png" alt="" />
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
    <LeftSub @backFun="backFun" :proportion="proportion" :caselistindex="caselistindex"/>
    
  </div>
</template>

<script>
import { TweenMax } from "gsap";
import { mapActions, mapGetters } from "vuex";
import LeftSub from './LeftSub'
import { productType, industry, scale } from "@/utils/data/baseData.js";
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
  },
  components: {
    LeftSub
  },
  watch:{
    caselistindex:{
      handler:function(val) {
        console.log('watch',val)
        
      },
      deep:true,
    }
  },
  computed: {
    ...mapGetters(["websockData"]),
    
  },
  methods:{
	  backFun(){
		this.$emit('backFunTwo')
	  }
  },
  data() {
    return {
      scale:{
        max:'大【1000≤人员】',
        zhong:'中【300≤人员＜1000】',
        min:'小【人员＜300】'
      }
    };
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
      background: url("../../assets/left/2.png") no-repeat center;
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
          .nub_der {
            font-size: 53px;
            width: 140px;
            height: 140px;
            line-height: 140px;
            border-radius: 50%;
            border: solid 2px $myColor;
            box-shadow: 0px 0px 20px #273c6b inset;
            color: $myColor;
            position: relative;
            @include beforeborder;
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
            @include beforeborder;
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
</style>
