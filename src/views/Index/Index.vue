<template>
  <div class="content">
    <Title class="title" />
    <!-- <img class="hot" src="../assets/img/光线.png" alt="">
    <h3 class="animated fadeInDown"><img class="headimg" style="vertical-align:middle;" src="../assets/img/logo.png" alt=""> 中国电信云网融合业务体验系统</h3> -->
	<Left v-if="reFresh" class="left" @backFunTwo="backFunTwo" :caselistindex="caselistindex" :proportion="proportion" :position1="position" :tem1="tem" :wea1="wea" :weatherImg="weatherImg" />
	<Map v-if="reFresh" ref="mapObj" class="main" :active="1" :proportion="NetworkadminInfo" />
    <Right v-if="reFresh" ref="hehehehe" :date="date" :week="week" :minute="minute" :isAdd="false" />
  </div>
</template>

<script>
import Left from "../components/Left.vue";
import Right from "../components/Right.vue";
import Map from "../components/Map.vue";
import Title from "../components/title.vue";
import toDateString from "xe-utils/toDateString";
import { caseInfo, rankProInfo } from "@/utils/data/caseData.js";
import { wsuri_web } from "@/utils/data/baseData.js";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Index",
  data() {
    return {
      reFresh:true,
      position: "上海",
      date: "2020-03-02",
      week: "星期二",
      tem: "8~15℃",
      minute: "19:08:37",
      weatherImg: "qing",
      wea: "多云",
      // 案例
      caselistindex: [],
      industry: "",
      scale: "",
      NetworkadminInfo: [
        {
          name: "机房信息",
          info: [
            {
              nub: 1101,
              name: "机房编号",
            },
            {
              nub: 1101,
              name: "机房地点",
            },
            {
              nub: 14,
              name: "机柜数量",
            },
            {
              nub: "FW101",
              name: "服务器编号",
            },
          ],
        },
        {
          name: "房间信息",
          info: [
            {
              nub: 28,
              name: "房间温度",
              unit: "℃",
            },
            {
              nub: 41,
              name: "房间湿度",
              unit: "hpa",
            },
          ],
        },
        {
          name: "机柜信息",
          info: [
            {
              nub: 50,
              name: "机柜总负载",
              unit: "%",
            },
            {
              nub: 70,
              name: "空间占用率",
              unit: "%",
            },
          ],
        },
        {
          name: "mPUE 信息",
          info: [
            {
              nub: 1.07,
              name: "机柜总负载",
            },
            {
              nub: 0.09,
              name: "同比上涨",
            },
          ],
        },
      ],
      proportion: [],
      websock: null,
    };
  },
  components: {
    Left,
    Right,
    Map,
    Title,
  },
  computed: {
    ...mapGetters(["websockData"]),
  },
  watch: {
    sockedata(val) {
      try {
        if (val) {
          this.reFresh = false
          setTimeout(()=>{
            this.reFresh = true
          },2000)
          if(!!val.to && val.to=='Home') {
            this.$router.push({
              path: "/home",
            });
          } else {

            if (!!val.caseInfoItem && val.caseInfoItem.name) {
              this.setwebsockData(val);
              this.initData();
              // this.$router.push({
              //   path: "/",
              // });
            }
            console.log("Socket数据接收", val);
            if (!!val.productInfoItem) {
              this.setwebsockData(val);
              this.$router.push({
                path: "/product",
              });
            }
          }
        }
      } catch (error) {}
    },
  },
  created() {
    this.initWebSocket();
    this.initData();
    this.reFresh = false
          setTimeout(()=>{
            this.reFresh = true
          },500)
  },
  mounted() {
    this.initWebSocket();
    this.initData();
    this.date = toDateString(Date.now(), "yyyy-MM-dd");
    this.minute = toDateString(Date.now(), "HH:mm:ss");
    var myddy = new Date().getDay(); //获取存储当前日期
    var weekday = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];
    this.week = weekday[myddy];
  },
  destroyed() {
    if (this.websock) {
      this.websock.close(); //离开路由之后断开websocket连接
    }
  },
  methods: {
    ...mapActions(["setwebsockData"]),
	backFunTwo(){
	},
    initData() {
      let caselist = [];
      caseInfo.map((item) => {
        item["duration"] = parseInt(item.serverNum * Math.random() * 2);
        item["onlineUserNumber"] = parseInt(
          (item.serverNum * 100 + item.serverNum * Math.random() * 50) / 10000
        );
        item["peakUserNumber"] = parseInt(
          (item.serverNum * 300 + item.serverNum * Math.random() * 50) / 10000
        );
        if (
          item.industry == this.websockData.industry &&
          item.scale == this.websockData.scale
        ) {
          caselist.push(item);
        }
      });
      caselist = caselist.slice(0, 6);
      caselist.map((item, index) => {
        this.$set(this.caselistindex, index, item);
      });
      console.log(this.websockData.industry, this.websockData.scale);
      // console.log(this.caselist,caselist,rankProInfo);

      let proportion = rankProInfo.filter(
        (item) =>
          item.industry == this.websockData.industry &&
          item.scale == this.websockData.scale
      )[0].product;
      proportion.map((item, index) => {
        this.$set(this.proportion, index, item);
      });
      this.setMapInit()
    },
    setMapInit(){
      let t = this;
      setTimeout(()=>{
        if(t.$refs.mapObj){
          t.$refs.mapObj.getMapInit()
        } else {
          t.setMapInit()
        }
      }, 500)
    },
    initWebSocket() {
      //初始化weosocket
      // const wsuri = "ws://jcvip.natapp4.cc/tyyw/webSocket/1_";
      const wsuri = wsuri_web;
      // const wsuri = "ws://182.92.2.167:8200/tyyw/webSocket/pad";
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      this.websocketsend();
      console.log("连接建立之后执行send方法发送数据");
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      const redata = JSON.parse(e.data);
      console.log("Socket数据接收", redata);
      this.sockedata = redata;
      this.setwebsockData(redata);
      if(!!redata.to && redata.to=='Home') {
        this.$router.push({
          path: "/home",
        });
      } else {

        if (!!redata.caseInfoItem && redata.caseInfoItem.name) {
          this.industry = redata.industry;
          this.scale = redata.scale;
          this.initData();
        }
        if (!!redata.productInfoItem) {
          this.$router.push({
            path: "/product",
          });
          this.industry = redata.industry;
          this.scale = redata.scale;
          this.initData();
        }
      }
      // alert(e.data);
    },
    websocketsend(Data) {
      //数据发送
      console.log(Data);
      // this.websock.send()
      // this.websock.send(Data);
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    },
  },
};
</script>
<style lang="scss" scoped>
// 1920*6   1080*2
// 11520*2160
// 7680*1440    1.5
// 5760*1080    2
.content {
  width: 7680px;
  height: 1440px;
  display: flex;
  justify-content: space-between;
  background-color: #111e2e;
  background: url("../../assets/img/bgwg.jpg");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  & > div {
    width: 32%;
    &.left {
      width: 32%;
    }
    &.main {
      width: 36%;
    }
    &.title {
      width: 3300px;
    }
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
