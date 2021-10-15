<template>
  <div class="content">
    <Title class="title" />
    <Left v-if="reFresh" class="left" :caselist="case_list" :proportion="proportion" :position1="position" :tem1="tem" :wea1="wea" :weatherImg="weatherImg" />
    <Map v-if="reFresh" ref="mapObj" class="main" :active="1" :proportion="NetworkadminInfo" />
    <Right v-if="reFresh" :date="date" :week="week" :minute="minute" :isAdd="true" />
  </div>
</template>

<script>
import Left from "./components/Left.vue";
import Right from "../components/Right.vue";
import Map from "./components/Map.vue";
import Title from "../components/title.vue";
import toDateString from "xe-utils/toDateString";
import { proInfo } from "@/utils/data/proData.js";
import { productType, wsuri_web } from "@/utils/data/baseData.js";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Product",
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
      case_list: [],
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
      proportion: [
        {
          name: "弹性云主机",
          value1: 88.2,
          value2: 10,
        },
        {
          name: "mysql数据库",
          value1: 88.2,
          value2: 10,
        },
        {
          name: "对象存储OOS",
          value1: 88.2,
          value2: 10,
        },
      ],
      industry: "",
      scale: "",
      websock: null,
      sockedata: null,
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
  watch:{
    sockedata(val) {
    if (val) {
      console.log("Socket数据接收1111111111", val);
      this.industry = val.industry;
      this.scale = val.scale;
      this.initdata()
      this.case_list = val.productInfoItem;
      if(!!val.to && val.to=='Home') {
        this.$router.push({
          path: "/home",
        });
      } else {

        if(!!val.caseInfoItem && !!val.caseInfoItem.name) {
            this.setwebsockData(val)
            this.$router.push({
              path:'/'
            })
          }
          if(!val.caseInfoItem && !!val.industry) {
            this.setwebsockData(val)
            this.$router.push({
              path:'/product'
            })
          }
      }
    }
  },

  },
  created() {
    this.initdata();
    this.initWebSocket();
    this.reFresh = false
          setTimeout(()=>{
            this.reFresh = true
          },500)
  },
  mounted() {
    this.initWebSocket();
    this.date = toDateString(Date.now(), "yyyy-MM-dd");
    this.minute = toDateString(Date.now(), "HH:mm:ss");
    var myddy = new Date().getDay(); //获取存储当前日期
    var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六",];
    this.week = weekday[myddy];
    console.log(weekday[myddy]);
  },
  methods: {
    ...mapActions(["setwebsockData"]),
    initdata() {
      console.log(6666666666,this.websockData)
      this.industry = this.websockData.industry;
      this.scale = this.websockData.scale;
      this.case_list = this.websockData.productInfoItem
      // let proInfo1 = [];
      // proInfo.map((item) => {
      //   if (item.industry == this.industry && item.scale == this.scale) {
      //     proInfo1.push(item);
      //   }
      // });
      // proInfo1 = proInfo1.slice(0, 6);
      // proInfo1.map((item, index) => {
      //   productType.map((key) => {
      //     if (item.name == key.name) {
      //       item["describe"] = key.describe;
      //     }
      //   });
      //   this.$set(this.case_list, index, item);
      // });
	  setTimeout(()=>{
		  let productseleted = this.websockData.productInfoItem
		    .filter((item) => item.checked1 == true)
		    .map((item) => item.name);
		  console.log(productseleted)
		  if(productseleted){
			  this.setMapInit(productseleted.length)
		  }
	  },100)
    },
	setMapInit(len){
	  let t = this;
	  setTimeout(()=>{
	    if(t.$refs.mapObj){
	      t.$refs.mapObj.getMapInit(len)
	    } else {
	      t.setMapInit(len)
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
      this.sockedata = redata;
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
  // width: 8680px;
  // height: 3440px;
  display: flex;
  justify-content: space-between;
  background-color: #111e2e;
  // background: url("../../assets/img/bg.jpg") no-repeat center center;
  // background-size: 100% 100%;
  background: url("../../assets/img/bgwg.jpg");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  // width: 4330px;
  // overflow: auto;
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
