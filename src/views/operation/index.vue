<template>
  <div class="content">
    <!-- <Title class="title" /> -->
    <img class="hot" src="../../assets/img/光线.png" alt="">
    <img class="line" src="../../assets/left/线条.png" alt="">
    <h3 class="animated fadeInDown"><img class="headimg" style="vertical-align:middle;" src="../../assets/img/logo.png" alt=""> 中国电信云网融合业务体验系统</h3>
    <Left class="left" :date="date" :week="week" :minute="minute" :position1="position" :tem1="tem" :wea1="wea" :weatherImg="weatherImg" />
  </div>
</template>

<script>
import Left from "./components/Left.vue";
import Title from "../components/title.vue";
import toDateString from "xe-utils/toDateString";
export default {
  name: "Index",
  data() {
    return {
      position: "上海",
      date: "2020-03-02",
      week: "星期二",
      tem: "8~15℃",
      minute: "19:08:37",
      weatherImg: "qing",
      wea: "多云",
      // 案例
      caselist: [],
      caselist1: [],
      industry: "",
      scale: "",
      proportion: [],
      websock: null,
    };
  },
  components: {
    Left,
    Title,
  },
  mounted() {
    // this.initWebSocket();
    this.date = toDateString(Date.now(), "yyyy-MM-dd");
    this.minute = toDateString(Date.now(), "HH:mm:ss");
    var myddy = new Date().getDay(); //获取存储当前日期
    var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六",];
    this.week = weekday[myddy];
  }
};
</script>
<style lang="scss" scoped>
// 1920*6   1080*2
// 11520*2160
// 7680*1440    1.5
// 5760*1080    2
// 2736*1824
.content {
  width: 2736px;
  width: 100%;
  height: 1824px;
  display: flex;
  justify-content: space-between;
  background-color: #111e2e;
  background: url("../../assets/left/11.jpg");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  padding-bottom: 70px;

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
  .line {
    width: 95%;
    height: 172px;
    position: absolute;
    top: -22px;
    left: 0;
    right: 0;
    margin: auto;
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  & > div {
    // width: 33%;
    // &.left {
    //   width: 32%;
    // }
    // &.main {
    //   width: 34%;
    // }
    // &.title {
    //   width: 3300px;
    // }
  }
}
.map_box {
  // border:solid 1px #ffffff;
  position: relative;
  h3 {
    font-size: 65px;
    font-weight: 500;
    color: #ffffff;
  }
  .topology {
    width: 720px;
    height: 470px;
    border: solid 1px #034b70;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 750px;
    left: 220px;
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
</style>
<style>
.el-select-dropdown {
  border-radius: 11px !important;
}
.el-select-dropdown__wrap {
  max-height: 574px!important;
}
</style>
