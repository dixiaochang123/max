<template>
  <div class="map_box">
	<div id="mapDiv" style="width: 100%;height: 165%;">
		<!-- <iframe src="static/output/index.html" width="100%" height="100%" scrolling="no" frameborder="0"></iframe> -->
	</div>
	<div style="width: 100%;height: 100%;position: absolute;top: 0;left:0;background:transparent;">
		<iframe src="static/3dMap/map_cn_new.html?type=0" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>
	</div>
    <div v-if="false" class="topology animated fadeInUp">
      <h3>{{caseInfoItem.name}}</h3>
      <!-- 成都道桥 -->
      <iframe v-if="active=='1'" :src="`static/case/${caseInfoItem.caseTopMap}/index.html`" width="100%" height="84%" scrolling="no" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import mapJson from "../../3dMap/js/world.json"
import Globe  from "../../3dMap/js/globe.js";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    active: {
      type: Number,
      default: 1,
    },
    proportion: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      caseInfoItem:{},
      name:"案例拓扑图",
        caseTopMap:'chengdudaoqiao',
        topos:{
          "jyhy_max_1":true,
          "jyhy_max_2":true,
          "jyhy_max_3":true,
          "jyhy_max_4":true,
          "jyhy_max_5":true,
          "jyhy_max_6":true,
          "jyhy_zhong_1":true,
          "jyhy_zhong_2":true,
          "jyhy_zhong_3":true,
          "jyhy_zhong_4":true,
        }
    };
  },
  components: {},
  computed: {
    ...mapGetters(["websockData"]),
  },
  watch:{
    websockData(val) {
      if(val && !!val.caseInfoItem) {
        this.caseInfoItem = val.caseInfoItem;
      }

    }
  },
  mounted() {
	let div = this.$el.querySelector("#mapDiv");
    let globe = new Globe(div);
    this.globe = globe;
	globe.setPointColor(0x195d84, 0.5, 0x1cb2ff);
	globe.setAnimationTime(2000);
	// globe.setStopTime(5000);
	this.load();
  },
  methods: {
    load() {
      this.globe.initScene();
      this.globe.generatePoints(mapJson);
      this.globe.render();
      this.globe.pointAnimation();
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
  // background: url("../../../assets/img/线条.png") no-repeat center top;
  // background-size: 3438px 142px;
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
  .topology {
    width: 830px;
    height: 560px;
    border: solid 1px #034b70;
    background-color: rgba(0, 0, 0, 0.1);
    background: url("../../../assets/img/案例拓扑图框.png") no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: 790px;
    left: 70px;
    h3 {
      font-size: 30px;
      height: 100px;
      line-height: 100px;
      margin: 0 35px;
      padding: 0;
      border-bottom: solid 2px #51a9ff;
    }
  }
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
  height: 1150px;
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
    height: 1125px;
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
      .val4 {
        font-size: 45px;
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
</style>
