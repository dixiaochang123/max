<template>
  <div class="map_box">
    <div id="mapDiv" style="width: 100%;height: 165%;">
      <!-- <iframe src="static/output/index.html" width="100%" height="100%" scrolling="no" frameborder="0"></iframe> -->
    </div>
    <div style="width: 100%;height: 100%;position: absolute;top: 0;left:0;background:transparent;">
      <iframe ref="mapCn" src="static/3dMap/map_cn_new.html" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>
    </div>
    <Topol v-if="productseleted.length!=0" />
    <div class="mix animated fadeInLeft">
      <!-- <h3>产品排名<span>Product ranking</span></h3> -->
      <h2><img class="logosnnsns" src="../../../assets/index/网管信息.png" alt="" srcset=""> <label style="vertical-align: middle;">网管信息</label><span>Network Management Message</span></h2>
      <div style="height: 38px"></div>
      <div class="mix_box_fat">
        <div class="mix_box " v-for="(item,i) in proportion" :key="i">
          <div class="nth1">
            <span class="txy">{{item.name}}</span>
          </div>
          <div class="nb">
            <div class="nb1" v-for="(key,index) in item.info" :key="index">
              <p style="color: #fff"><span :class="(key.name!='机房编号' && key.name!='机房地点' && key.name!='机柜数量' && key.name!='服务器编号')?'val4dxc val4map111111111':'val4dxc56423123'" :data-target="key.nub">{{(key.name!='机房编号' && key.name!='机房地点' && key.name!='机柜数量' && key.name!='服务器编号')?0:key.nub}}</span><span class="bfb">{{key.unit}}</span></p>
              <span style="color: #40dcf8">{{key.name}}</span>
              <div v-if="i>0" class="bar">
                <div class="bar_color val4dxc_bardxc" :data-target="key.nub"></div>
              </div>
            </div>
            <!-- <div>
              <p style="color: #fff">+ <span class="val5" :data-target="item.value2">0</span><span class="bfb">%</span></p>
              <span style="color: #40dcf8">同比上周</span>
              <div class="bar">
                <div class="bar_color bar_color1 val5_bar" :data-target="item.value2"></div>
              </div>
            </div> -->
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import mapJson from "../../3dMap/js/world.json";
import Globe from "../../3dMap/js/globe.js";
import Topol from "./topol.vue"
import { TweenMax } from "gsap";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    active: {
      type: Number,
      default: 1,
    },
    // proportion: {
    //   type: Array,
    //   default: function () {
    //     return [];
    //   },
    // },
  },
  computed: {
    ...mapGetters(["websockData","productseleted"]),
  },
  watch:{
  productseleted: {
      handler(val) {
        if(!!val) {
          console.log('调了没')
          //this.$refs.mapCn1.contentWindow.newInit(val.length)
        }
      },
      immediate: true,
      // deep:true
    },
  },
  data() {
    return {
      proportion:[{
        name:'机房信息',
        info:[
          {
            nub:'CN_SH_001', 
            name:'机房编号'
          },
          {
            nub:'上海',
            name:'机房地点'
          },
          {
            nub:4000,
            name:'机柜数量'
          },
          {
            nub:'CS_01',
            name:'服务器编号'
          },

        ]
      },{
        name:'房间信息',
        info:[
          {
            nub:23,
            name:'房间温度',
            unit:'℃'
          },
          {
            nub:41,
            name:'房间湿度',
            unit:'hpa'
          }
        ]
      },{
        name:'机柜信息',
        info:[
          {
            nub:50,
            name:'机柜总负载',
            unit:'%'
          },
          {
            nub:70,
            name:'空间占用率',
            unit:'%'
          }
        ]
      },{
        name:'mPUE 信息',
        info:[
          {
            nub:1.07,
            name:'机柜总负载'
          },
          {
            nub:0.09,
            name:'同比上涨'
          }
        ]
      }],
    };
  },
  components: {
    Topol
  },
  mounted() {
    window.getOrderInfo = this.proportionUpdate;
    let div = this.$el.querySelector("#mapDiv");
    let globe = new Globe(div);
    this.globe = globe;
    globe.setPointColor(0x195d84, 0.5, 0x1cb2ff);
    globe.setAnimationTime(2000);
    // globe.setStopTime(5000);
    this.load();
    this.time = setInterval(()=>{
          this.animateAlldou()
        },5000)
    this.animateAll()
  },
  methods: {
	getMapInit(len){
		let t = this;
		console.log('**************************************调用地图方法',this.$refs.mapCn.contentWindow.newInit)
		setTimeout(()=>{
		  if(this.$refs.mapCn.contentWindow.caseInitFun){
			  this.$refs.mapCn.contentWindow.removeConnection()
			  this.$refs.mapCn.contentWindow.caseInitFun(len,false,true)
		  } else {
			t.getMapInit()
		  }
		},500)
	},
    goToproduct() {
      this.$router.push({
        path: "/product",
      });
    },
    // 机房编号：CN_SH_001【001-999随机】
// 机房地点：【取参数值.中文省份】
// 机柜数量：【取随机整数 100-200】
// 服务器编号：CS_01【001-999随机】
    proportionUpdate(province,enprovince) { //(中文省份，英文首字母省份)
      this.proportion[0].info[0].nub = 'CN_'+enprovince+'_'+parseInt(Math.floor((Math.random()*999)+1));
      this.proportion[0].info[1].nub = province;
      this.proportion[0].info[2].nub = parseInt(Math.floor(Math.random()*3000)+4000) ;
      this.proportion[0].info[3].nub = 'CS_'+ parseInt(Math.floor((Math.random()*999)+1));

    },
    load() {
      this.globe.initScene();
      this.globe.generatePoints(mapJson);
      this.globe.render();
      this.globe.pointAnimation();
    },
    animateAlldou() {
      let val4map111111111 = document.getElementsByClassName("val4map111111111");
      let math = parseFloat(Math.random()*(24-23)+23);
      let math1 = parseFloat(Math.random()*(41-40)+40);
      this.animateNum(val4map111111111[0], math, 1);
      this.animateNum(val4map111111111[1], math1, 1);
    },
    animateAll() {
    let val4dxc = document.getElementsByClassName("val4dxc");
      for (let i = 0; i < val4dxc.length; i++) {
        let targetDomCount = val4dxc[i].getAttribute("data-target");
        this.animateNum(val4dxc[i], targetDomCount, 1);
      }
      let val4dxc_bardxc = document.getElementsByClassName("val4dxc_bardxc");
      for (let i = 0; i < val4dxc_bardxc.length; i++) {
        let targetDomCount = val4dxc_bardxc[i].getAttribute("data-target");
        this.animateNumBarColor(val4dxc_bardxc[i], targetDomCount);
      }
    },
    animateNum(dom, val, dot,time) {
	  if(!dom){
		 return false;
	  }
      let obj = { num1: dom.innerHTML };
      let time1 = !!time ? time : 3
      TweenMax.to(obj, time1, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dot);
        },
        delay: 3,
      });
    },
    // 初始值 结束值
    animateNumBarColor(dom, val) {
      let obj = { num1: 0 };
      let val1 = val;
      TweenMax.to(obj, 3, {
        num1: val1,
        onUpdate: function () {
          dom.style.width = obj.num1 + "%";
        },
        delay: 3,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
body {
  overflow: hidden;
}
.map_box {
  width: 100%;
  height: 100%;
  // border: solid 1px #ffffff;
  position: relative;
  background: url("../../../assets/img/线条.png") no-repeat center top;
  background-size: 3438px 142px;
  position: relative;
  .hot {
    width: 976px;
    height: 372px;
    position: absolute;
    top: -41px;
    left: 0;
    right: 0;
    margin: auto;
    animation: opacity 2s linear infinite;
    animation-iteration-count: 1; /*动画只执行一次*/
  }
  .headimg {
    width: 60px;
    height: 60px;
  }
  @keyframes opacity {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  h3 {
    font-size: 60px;
    letter-spacing: 14px;
    font-weight: 500;
    color: #ffffff;
    padding-top: 30px;
  }
  .map {
    > img {
      width: 1640px;
      height: 1152px;
    }
  }
  // .topology {
  //   width: 830px;
  //   height: 560px;
  //   border: solid 1px #034b70;
  //   background-color: rgba(0, 0, 0, 0.1);
  //   background: url("../../../assets/img/案例拓扑图框.png") no-repeat center
  //     center;
  //   background-size: 100% 100%;
  //   position: absolute;
  //   top: 830px;
  //   top: 0;
  //   left: 70px;
  //   h3 {
  //     font-size: 30px;
  //     height: 100px;
  //     line-height: 100px;
  //     margin: 0 35px;
  //     padding: 0;
  //     border-bottom: solid 2px #51a9ff;
  //   }
  // }
  .introduce {
    width: 720px;
    height: 360px;
    border: solid 1px #034b70;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 750px;
    right: 220px;
  }
}
.mix {
  width: 19.5%;
  // height: 1150px;
  position: absolute;
  top: 0;
  right: 28px;
  h2 {
    font-size: 34px;
    padding-top: 150px;
    // padding-bottom: 20px;
    text-align: left;
    color: $myColor;
    border-bottom: solid 1px #12366b;
    position: relative;
  }
  .mix_box_fat {
    height: 1175px;
    border: solid 1px #2d4a5f;
    border-radius: 10px;
    box-shadow: 0px 0px 30px #11304b inset;
  }
  .mix_box {
    // border: solid 1px #2d4a5f;
    // border-top: none;
    // border-bottom: none;
    // border-radius: 10px;
    // box-shadow: 0px 0px 30px #11304b inset;
    background: url("../../../assets/img/案例拓扑图框.png") no-repeat center -10px;
    background-size: 100% 100%;
    height: 25%;
    .nth1 {
      font-size: 30px;
      color: $myColor;
      text-align: left;
      padding-top: 20px;
      padding-left: 20px;
      padding-bottom: 40px;
      .txy {
        font-size: 20px;
        color: #48d0fe;
      }
    }
    .nb {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
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
      .val4dxc {
        font-size: 45px;
      }
      .val4dxc56423123 {
         font-size: 30px;
      }
      &:nth-child(2) {
        .bar {
          .bar_color {
            width: 0px;
            background-image: none;
            background-color: #f387a7;
          }
        }
      }
    }
    &:first-of-type {
      .nth1 {
        padding-bottom: 6px;
      }
    }
  }
}
.case_box {
  width: 100%;
  display: flex;
  .case_list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .case {
      width: 49.5%;
      border-radius: 10px;
      border: solid 1px #2d4a5f;
      box-shadow: 0px 0px 30px #11304b inset;
      margin-bottom: 30px;
      //  animation: updown 2s 1s linear infinite;
      //   animation-iteration-count:1;/*动画只执行一次*/
    }
    @keyframes updown {
      0% {
        opacity: 0;
        transform: translateX(50);
      }
      50% {
        opacity: 0.5;
        transform: translateX(100px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .title {
      font-size: 30px;
      text-align: left;
      color: #4cd1ff;
      padding-top: 15px;
      padding-left: 30px;
      padding-bottom: 25px;
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
          border: solid 1px #51f4ff;
          box-shadow: 0px 0px 20px #255364 inset;
          color: #51f4ff;
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
          color: #3bc4da;
          border: solid 1px #51f4ff;
          box-shadow: 0px 0px 20px #255364 inset;
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
      padding-bottom: 20px;
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
        font-size: 40px;
        span {
          font-size: 16px;
        }
        & > div {
          width: 50%;
          text-align: right;
        }
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
/deep/ .el-carousel__container {
    position: relative;
    height: 100%;
}
.logosnnsns {
  width:44px;
  height: 44px;
  vertical-align: middle;
}
.logosnnsns {
  width:44px;
  height: 44px;
  vertical-align: middle;
}
.logosnnsns{
  width: 44rem;
  height: 44rem;
  vertical-align: middle;
}
.logosnnsns + label{
  font-size: 40rem;
  position: relative;
  top: -2rem;
}
.logosnnsns + label + span{
  display: inline-block;
  padding-left: 30rem;
  font-size: 20rem;
  color: #40dcf8;
}
</style>
