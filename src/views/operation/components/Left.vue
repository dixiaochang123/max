<template>
  <div class="content1">
    <div class="positionInfo">
      <p>
        <img src="../../../assets/img/地点.png" alt="" />&nbsp;&nbsp;{{ position1 }}
      </p>
      <p><img class="img2" src="../../../assets/img/多云.png" alt="" />&nbsp;&nbsp;{{ wea1 }}</p>
      <p>{{ tem1 }}</p>
    </div>
    <div class="positionInfo1">
      <p>{{ date }}</p>
      <p>{{ week }}</p>
      <p>{{ minute }}</p>
    </div>
    <h3><img src="../../../assets/img/展示板.png" alt=""> <label style="vertical-align: middle;">行业信息</label><span>Industry Information</span>
    <img class="homologo" @click="toHome" src="../../../assets/operation/home.png" alt="">
    </h3>
    <div class="information">
      <div class="nth nth1 animated fadeInDown">
        <img src="../../../assets/left/行业.png" alt="" />
        <!-- <p style="text-align: left"> -->
        <span>行业</span>
        <el-select v-model="value" placeholder="请选择行业">
          <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value">
          </el-option>
        </el-select>
        <!-- </p> -->
      </div>
      <div class="nth nth2 animated fadeInDown">
        <img src="../../../assets/left/规模.png" alt="" />
        <p style="text-align: left">
          <span>规模</span>
          <el-select v-model="value1" placeholder="请选择规模">
            <el-option v-for="item in options1" :key="item.value" :label="item.name" :value="item.value">
            </el-option>
          </el-select>
        </p>
      </div>
    </div>
    <div class="information1">
      <div class="nth nth3 animated fadeInDown">
        <img src="../../../assets/left/产品.png" alt="" />
        <span>产品类型</span>
        <div style="text-align: left">
          <el-checkbox-group v-model="checkboxGroup1" size="max">
            <el-checkbox v-for="(item,index) in productType" :key="index" :checked="item.checked" :label="item.name" border></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>
    <p class="btnlist">
      <span :class="[!!resetActive?'activeselect span1':'','span1']" @click="reset">重置选择</span>
      <span :class="[activeselect=='行业案例'?'activeselect span2':'','span2']" @click="caseInfo">行业案例</span>
      <span :class="[activeselect=='产品信息'?'activeselect span3':'','span3']" @click="productInfo">产品信息</span>
    </p>
    <LeftSub ref="LeftSub" v-if="activeselect=='行业案例'" @caseInfocab="caseInfocab" :proportion="proportion" :caselistindex="caselist" />
    <LeftSub1 ref="LeftSub1" v-else-if="activeselect=='产品信息'" @productInfocab="productInfocab" :caselist="caselist1" />
    <LeftSub2 ref="LeftSub2" v-else />
    <p class="btnlist">
      <span :class="[!!reset1Active?'activeselect span1':'','span1']" @click="resetcase">重置选择</span>
      <!-- <span v-if="activeselect=='行业案例'" :class="[activeselect1=='行业案例'?'activeselect span2':'','span2']" @click="confirmcase">生产案例</span>
      <span v-if="activeselect=='产品信息'" :class="[activeselect1=='产品信息'?'activeselect span3':'','span3']" @click="confirmproduct">生产产品</span> -->
      <span v-if="activeselect=='行业案例'" :class="[activeselect1=='行业案例'?'activeselect span2':'','span2']" @click="confirmcase">确认</span>
      <span v-if="activeselect=='产品信息'" :class="[activeselect1=='产品信息'?'activeselect span3':'','span3']" @click="confirmproduct">确认</span>
    </p>

  </div>
</template>

<script>
import { TweenMax } from "gsap";
import { mapActions, mapGetters } from "vuex";
import LeftSub from "../../components/LeftSub";
import LeftSub1 from "../../product/components/LeftSub";
import LeftSub2 from "../../product/components/LeftSub2";
import { productType, industry, scale,wsuri_pad } from "@/utils/data/baseData.js";
import { caseInfo, rankProInfo } from "@/utils/data/caseData.js";
import { proInfo } from "@/utils/data/proData.js";
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
    LeftSub,
    LeftSub1,
    LeftSub2
  },
  watch: {
    caselist: {
      handler: function (val) {
        console.log("watch", val);
      },
      deep: true,
    },
    value(val) {
      // this.activeselect = ""
      this.initData()
    },
    value1(val) {
      // this.activeselect = ""
      this.initData()
    }
  },
  computed: {
    max() {
      //最大长度 430px
      //最大时长 result
      let result = Math.max(...this.caselist.map((x) => x.serverNum * 2));
      // let multiple = result/x;
      return result;
    },
    valueTrue() {
      return !!this.value && !!this.value1;
    },
  },
  data() {
    return {
      width: 0,
      caselistcopy: [],
      options: industry,
      options1: scale,
      value: "",
      value1: "",
      productType,
      checkboxGroup1: [],
      activeselect: "",
      // 案例
      caselist: [],
      caselist1: [],
      proportion: [],
      websock: null,
      caseInfoItem: null,
      productInfoItem: null,
      activeClick:0,
      resetActive:false,
      reset1Active:false,
      activeselect1:""
    };
  },
  created() {
    // this.initWebSocket();
  },
  mounted() {
    this.initWebSocket();
  },
  destroyed() {
    if (this.websock) {
      this.websock.close(); //离开路由之后断开websocket连接
    }
  },
  methods: {
    toHome() {
      if(this.activeselect=='行业案例') {

        this.websocketsend({
          industry: this.value,
          scale: this.value1,
          productType: this.checkboxGroup1,
          caseInfoItem: this.caseInfoItem,
          activeClick:this.activeClick,
          to:'Home'
        });
      } else {
        this.websocketsend({
          industry: this.value,
          scale: this.value1,
          productType: this.checkboxGroup1,
          productInfoItem: this.productInfoItem,
          to:'Home'
        });
      }

    },
    ...mapActions(["setproductseleted","setproductAdd","setproductSim"]),
    initData() {
      // this.industry = "教育行业";
      // this.scale = "max";
      let caselist = [];
      // let caselist = caseInfo.filter((item) => item.industry == this.value && item.scale == this.scale).slice(0, 6);
      caseInfo.map(item=>{
        item["duration"] = parseInt(item.serverNum * Math.random() * 2);
        item["onlineUserNumber"] = parseInt(
          (item.serverNum * 100 + item.serverNum * Math.random() * 50) / 10000
        );
        item["peakUserNumber"] = parseInt(
          (item.serverNum * 300 + item.serverNum * Math.random() * 50) / 10000
        );
        if(item.industry == this.value && item.scale == this.value1) {
          caselist.push(item)
        }
      })
      caselist = caselist.slice(0, 6);
      caselist.map((item, index) => {
        this.$set(this.caselist, index, item);
      });
      console.log(this.caselist,caselist,rankProInfo);
      try {
        
        let proportion = rankProInfo.filter(
          (item) => item.industry == this.value && item.scale == this.value1
        )[0].product;
        proportion.map((item, index) => {
          this.$set(this.proportion, index, item);
        });
  
        let proInfo1 = proInfo.filter((item) => item.industry == this.value && item.scale == this.value1);
        
        console.log('proInfo10',this.value,this.value1,proInfo1,proInfo)
        proInfo1 = proInfo1.slice(0, 6);
        console.log(proInfo1)
        proInfo1.map((item, index) => {
          productType.map((key) => {
            if (item.name == key.name) {
              item["describe"] = key.describe;
            }
          });
          this.$set(this.caselist1, index, item);
        });
      } catch (error) {
        
      }
    },
    reset() {
      console.log("reset");
      this.resetActive = true;
      this.checkboxGroup1 = [];
      setTimeout(()=>{
        this.resetActive = false;
      },300)
    },
    caseInfo() {
      if (!this.valueTrue) {
        this.$message({
          message: "请选择行业和规模",
          type: "warning",
        });
        return;
      }
      this.activeselect = "行业案例";
      this.setproductSim([]);
      // sessionStorage.removeItem('productSim')
      this.initData()
      setTimeout(()=>{

        this.resetcase()
      },500)
    },
    productInfo() {
      if (!this.valueTrue) {
        this.$message({
          message: "请选择行业和规模",
          type: "warning",
        });
        return;
      }
      this.activeselect = "产品信息";
      this.caselist1.map((item) => {
        item.checked1 = false;
        item.checked2 = false;
        item.checked3 = false;
      });
      this.initData()
    },
    resetcase() {
      this.reset1Active = true;
      if (this.activeselect == "行业案例") {
        this.$refs.LeftSub.activeClickstart();
      }
      if (this.activeselect == "产品信息") {
        this.caselist1.map((item) => {
          item.checked1 = false;
          item.checked2 = false;
          item.checked3 = false;
        });
      }
      setTimeout(()=>{
        this.reset1Active = false;
      },300)
    },
    caseInfocab(data,index) {
      console.log(data,index)
      this.caseInfoItem = data;
      this.activeClick = index;
    },
    productInfocab(data) {
      this.productInfoItem = data;
    },
    confirmcase() {
      this.websocketsend({
        industry: this.value,
        scale: this.value1,
        productType: this.checkboxGroup1,
        caseInfoItem: this.caseInfoItem,
        activeClick:this.activeClick
      });
      this.setproductAdd([])
      this.activeselect1 = "行业案例"
      setTimeout(()=>{
        this.activeselect1 = ""
      },500)
    },
    confirmproduct() {
		let par = {
        industry: this.value,
        scale: this.value1,
        productType: this.checkboxGroup1,
        productInfoItem: this.productInfoItem,
      };
		console.log(par)
      this.websocketsend({
        industry: this.value,
        scale: this.value1,
        productType: this.checkboxGroup1,
        productInfoItem: this.productInfoItem,
      });
      this.activeselect1 = "产品信息"
      setTimeout(()=>{
        this.activeselect1 = ""
      },500)
    },
    initWebSocket() {
      //初始化weosocket
      // const wsuri = "ws://jcvip.natapp4.cc/tyyw/webSocket/1_";
      // const wsuri = "ws://182.92.2.167:8200/tyyw/webSocket/web";
      const wsuri = wsuri_pad;
	  console.log(11)
      this.websock = new WebSocket(wsuri);
	  console.log(22)
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
	  console.log("连接成功");
      //this.websocketsend(JSON.stringify(data));
      console.log("连接建立之后执行send方法发送数据");
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      const redata = JSON.parse(e.data);
	  console.log(redata)
      // console.log(33333, e);
      // alert(e.data);
    },
    websocketsend(Data) {
      //数据发送
	  console.log('发送数据');
      console.log(Data);
      this.websock.send(JSON.stringify(Data));
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    },
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content1 {
  width: 100%;
  height: 100%;
  padding: 0 60px;
  .positionInfo1 {
    // height: 50px;
    // line-height: 50px;
    font-size: 38px;
    color: $myColor;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    right: 60px;
    p {
      padding-left: 50px;
      padding-top: 40px;
      padding-bottom: 50px;
    }
  }
  .positionInfo {
    font-size: 38px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    color: $myColor;
    padding-top: 45px;
    padding-bottom: 50px;
    p {
      padding-right: 50px;
    }
    img {
      width: 36px;
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
    font-size: 36px;
    color: $myColor;
    display: flex;
    justify-content: flex-start;
    margin: 30px 0 0;
    > div {
      width: 700px;
      height: 170px;
      display: flex;
      justify-items: space-between;
      align-items: center;
      //   background: url("../../../assets/left/2.png") no-repeat center;
      //   background-size: 100% 100%;
      //   border-radius: 10px;
      // background-color: #14364c;
      img {
        width: 38px;
        height: 40px;
        margin-right: 30px;
        vertical-align: top;
      }
    }
    .nth1,
    .nth2 {
      position: relative;
    }
    .nth2 {
      margin-left: 100px;
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
  .information1 {
    .nth {
      font-size: 36px;
      color: $myColor;
      display: flex;
      justify-content: flex-start;
      > img {
        width: 36px;
        height: 42px;
        margin-right: 30px;
        vertical-align: top;
      }
    }
  }
  .btnlist {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 40px;
    padding-top: 25px;
    padding-bottom: 25px;
    span {
      width: 155px;
      height: 62px;
      line-height: 62px;
      padding-left: 50px;
      font-size: 23px;
      color: #ffffff;
      // background-color: rgba(14, 108, 138, 0.2);
      border-radius: 10px;
      margin-left: 22px;
      cursor: pointer;
      background: url("../../../assets/operation/矩形.png") no-repeat left center;
      background-size: 100% 100%;
    }
    .span1 {
      // background: url("../../../assets/left/重置.png") no-repeat 23px center;
      // background-size: 35px 35px;
      // background-color: rgba(14, 108, 138, 0.2);
      color: $myColor;
      position: relative;
      display: inline-block;
      &::before {
        content:"";
        display: inline-block;
        position: absolute;
        left: 20px;
        top: 15px;
        width: 35px;
        height: 35px;
        background: url("../../../assets/operation/重置.png") no-repeat center center;
        background-size: 35px 35px;
      }
    }
    .span2 {
      width: 155px;
      position: relative;
      display: inline-block;
      &::before {
        content:"";
        display: inline-block;
        position: absolute;
        left: 20px;
        top: 15px;
        width: 35px;
        height: 35px;
        background: url("../../../assets/operation/案例.png") no-repeat center center;
        background-size: 35px 35px;
      }
    }
    .span3 {
      width: 155px;
      position: relative;
      display: inline-block;
      &::before {
        content:"";
        display: inline-block;
        position: absolute;
        left: 20px;
        top: 15px;
        width: 35px;
        height: 35px;
        background: url("../../../assets/operation/产品.png") no-repeat center center;
        background-size: 35px 35px;
      }
    }
    .activeselect {
      // background-color: rgba(14, 108, 138, 0.8);
      background: url("../../../assets/operation/选中.png") no-repeat left center;
      background-size: 100% 100%;
      &.span1 {
        &::before {
          content:"";
          display: inline-block;
          position: absolute;
          left: 20px;
          top: 15px;
          width: 35px;
          height: 35px;
          background: url("../../../assets/operation/重置选中.png") no-repeat center center;
          background-size: 35px 35px;
        }
      }
      &.span2 {
        &::before {
          content:"";
          display: inline-block;
          position: absolute;
          left: 20px;
          top: 15px;
          width: 35px;
          height: 35px;
          background: url("../../../assets/operation/案例选中.png") no-repeat center center;
          background-size: 35px 35px;
        }
      }
      &.span3 {
        &::before {
          content:"";
          display: inline-block;
          position: absolute;
          left: 20px;
          top: 15px;
          width: 35px;
          height: 35px;
          background: url("../../../assets/operation/产品选中.png") no-repeat center center;
          background-size: 35px 35px;
        }
      }
    }
  }
}
.information,
.information1 {
  /deep/ .el-input__inner::-webkit-input-placeholder {
    color: $myColor;
  }
  /deep/ .el-input__inner::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: $myColor;
  }
  /deep/ .el-input__inner:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: $myColor;
  }
  /deep/ .el-input__inner:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $myColor;
  }
  .el-select {
    width: 400px;
    height: 90px;
    font-size: 27px;
    margin-left: 113px;
    background-color: rgba(20,71,93,0.5);
    border-radius: 11px;
  }
  /deep/ .el-input--suffix .el-input__inner {
    // padding-right: 30rem;
    height: 90px;
    // background: url("../../../assets/left/2.png") no-repeat left center;
      // background-size: 35px 35px;
  }
  /deep/ .el-input__inner {
    font-size: 27px;
    color: $myColor;
    background: none !important;
    border-color: #296495 !important;
  }
  /deep/ .el-select-dropdown__item {
    font-size: 27px !important;
    color: $myColor !important;
  }
  /deep/ .el-checkbox {
    width: 350px;
    height: 93px;
    border: solid 1px #2a76ac;
    .el-checkbox__label {
      font-size: 28px;
      color: $myColor;
    }
    .el-checkbox__input {
      display: none;
    }
    // display: grid;
    //   grid-template-columns: 1fr 1fr;
    //   grid-row-gap: 27px;
    //   grid-column-gap: 11px;
  }
.el-scrollbar__wrap {
     overflow: auto!important;
      margin-bottom: 0 !important;
      height: 150% !important;
      max-height: 407rem !important;
}
  /deep/ .el-checkbox.is-bordered {
    height: 90px !important;
    line-height: 90px !important;
    border-radius: 11px;
    position: relative;

    &.is-checked {
      border-color: #2a76ac;
      // background-color: rgba(26,116,138,0.5);
      .el-checkbox__label {
        color: #ffffff;
      }
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background: url("../../../assets/left/选框.png") no-repeat center !important;
        background-size: 100% 100% !important;
        position: absolute !important;
        right: 0 !important;
        bottom: 0 !important;
      }
    }
  }
  .el-checkbox-group {
    margin-left: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 23px;
    grid-column-gap: 15px;
  }
  .el-checkbox.is-bordered + .el-checkbox.is-bordered {
    margin-left: 0;
  }
}
.el-select-dropdown__item {
  font-size: 24rem;
  padding: 0 20rem;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 56rem;
  line-height: 56rem;
  box-sizing: border-box;
  cursor: pointer;
}
  /deep/ .el-scrollbar__wrap {
      overflow: auto!important;
      margin-bottom: 0 !important;
      height: 150% !important;
      max-height: 407rem !important;
  }
  /deep/ .el-scrollbar {

    /deep/ .el-scrollbar__wrap {
      overflow: auto!important;
      margin-bottom: 0 !important;
      height: 150% !important;
      max-height: 407rem !important;
  }
}
/deep/ .el-select-dropdown {
  border-radius: 11px !important;
}
.el-select-dropdown__item {
  color: #22738f;
}
div.el-select-dropdown.el-popper{
    background-color: #ffffff;
  }
.el-select-dropdown__item.hover {
    background-color: #22738f;
    color: #ffffff;
}
.homologo {
  float: right;
  cursor: pointer;
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
