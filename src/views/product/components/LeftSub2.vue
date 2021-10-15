<template>
  <div class="content13">
    <div class="list">
      <div class="list_nth1">
        <h3><img src="../../../assets/img/案例.png" alt=""> <label style="vertical-align: middle;position: relative;top: -1rem;">产品信息</label><span>Product Information</span></h3>
        <div style="height: 30px"></div>
        <div class="case_box">
          <div class="case_list">
            <div class="case" v-for="(item,index) in 6" :key="index">
              <div class="title">
                <span class="span"> 111111111111111</span>
                <div class="select">
                  <!-- <span @click="seleted">选择</span>
                  <span @click="expansion">扩容</span> -->
                  <!-- <el-checkbox class="select1" v-model="item.checked1" label="选择" border></el-checkbox>
                  <el-radio class="select2" v-model="item.checked2" :label="item.id" border @change.once="checked2click(item,index)">扩容</el-radio> -->
                </div>
              </div>
              <div class="case_content">
                <div class="nth">
                  <!-- <img class="txyzjimg" :src="imgsrc[item.name]" alt=""> -->
                  <div class="txyzjimg"></div>
                  <div class="txyzjimg"></div>
                  <div class="txyzjimg"></div>
                </div>
              </div>
              <div style="height:50px;"></div>
              <p class="foot foot1">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              <p class="foot foot2">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              <!-- <p class="foot foot2"></p> -->
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content13 {
  width: 100%;
  // height: 100%;
  // padding-left: 60px;
  // padding-right: 60px;
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
        padding-bottom: 45px;
        padding-top: 22px;
        display: flex;
        justify-content: space-between;
        color: transparent;
        .span {
            display: inline-block;
            width: 230px;
            height: 36px;
            line-height: 36px;
            border: solid 1px #1f5473;
            border-radius: 2px;
            font-size: 19px;
            text-align: center;
            margin-left: 20px;
            cursor: pointer;
            color: transparent;
            background-color: #217a95;
            // font-size: 0;
          }
      }
      .case_content {
        .nth {
          height: 120px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 110px;
          .txyzjimg {
            width: 156px;
            height: 156px;
            background-color: #21738e;
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
        // font-size: 22px;
        color: $myColor;
        // line-height: 10px;
        // height: 10px;
        text-indent: 2em;
        padding-left: 30px;
        padding-right: 60px;
        // padding-top: 60px;
        text-align: left;
        width: 60%;
        margin:0 auto;
        color: transparent;
        background-color: #297c97;
        margin-top: 20px;
      }
      .foot2 {
          width: 70%;
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
</style>
