<template>
  <div class="content">
    <Title class="title" />
    <Left class="left" :caselistindex="caselistindex" :proportion="proportion" :position1="position" :tem1="tem"
      :wea1="wea" :weatherImg="weatherImg" />
    <Map class="main" :active="1" :proportion="NetworkadminInfo" />
    <Right :date="date" :week="week" :minute="minute" :caselistindex="caselistindex" />
    <div class="foot">
      <div class="nth">
        <img src="../../assets/home/机房数量.png" alt="" />
        <p style="text-align: left">
          <span class="firstspan val222" data-target='0.3'>0</span><label
            style="color: #85e8ff; font-size: 45rem;">+</label> <br />
          <span>机房数量</span>
        </p>
      </div>
      <div class="nth">
        <img src="../../assets/home/物理机数量.png" alt="" />
        <p style="text-align: left">
          <span class="firstspan val22" data-target='250'>0</span><label
            style="color: #85e8ff; font-size: 45rem;">+</label> <br />
          <span>物理机数量</span>
        </p>
      </div>
      <div class="nth">
        <img src="../../assets/home/用户数.png" alt="" />
        <p style="text-align: left">
          <span class="firstspan val22" data-target='320'>0</span><label
            style="color: #85e8ff; font-size: 45rem;">+</label> <br />
          <span>用户数</span>
        </p>
      </div>
      <div class="nth">
        <img src="../../assets/home/防护次数.png" alt="" />
        <p style="text-align: left">
          <span class="firstspan val22" data-target='50'>0</span><label
            style="color: #85e8ff; font-size: 45rem;">+</label> <br />
          <span>月防护流量（TByte）</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Left from './components/Left.vue'
  import Right from './components/Right.vue'
  import Map from './components/Map.vue'
  import Title from '../components/title.vue'
  import {
    TweenMax
  } from "gsap";
  import toDateString from 'xe-utils/toDateString'
  import {
    caseInfo,
    rankProInfo
  } from "@/utils/data/caseData.js";
  import {
    wsuri_web
  } from "@/utils/data/baseData.js";
  import {
    mapActions,
    mapGetters
  } from "vuex";
  console.log(caseInfo, rankProInfo)

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
        caselistindex: [],
        NetworkadminInfo: [{
          name: '机房信息',
          info: [{
              nub: 1101,
              name: '机房编号'
            },
            {
              nub: 1101,
              name: '机房地点'
            },
            {
              nub: 14,
              name: '机柜数量'
            },
            {
              nub: 'FW101',
              name: '服务器编号'
            },

          ]
        }, {
          name: '房间信息',
          info: [{
              nub: 28,
              name: '房间温度',
              unit: '℃'
            },
            {
              nub: 41,
              name: '房间湿度',
              unit: 'hpa'
            }
          ]
        }, {
          name: '机柜信息',
          info: [{
              nub: 50,
              name: '机柜总负载',
              unit: '%'
            },
            {
              nub: 70,
              name: '空间占用率',
              unit: '%'
            }
          ]
        }, {
          name: 'mPUE 信息',
          info: [{
              nub: 1.07,
              name: '机柜总负载'
            },
            {
              nub: 0.09,
              name: '同比上涨'
            }
          ]
        }],
        proportion: [],
        websock: null,
        sockedata: null
      };
    },
    components: {
      Left,
      Right,
      Map,
      Title
    },
    computed: {
      ...mapGetters(["Highlight"])
    },
    watch: {
      Highlight: {
        handler: function(val) {
          let caselistname = ['政府机关', '金融行业', '工业行业', '教育行业', '通用行业'];
          this.industry = caselistname[val - 1];
          this.caselistChange()
          // this.$nextTick(() => {
          //   this.caselistChange()
          // });
        },
        deep: true,
        immediate: true
      },
      sockedata(val) {
        if (val) {
          console.log('Socket数据接收', val)
          if (!!val.caseInfoItem && val.caseInfoItem.name) {
            this.setwebsockData(val)
            this.$router.push({
              name: 'Index'
            })
            // window.location.href = '/'
          }
          if (!val.caseInfoItem && !!val.industry) {
            this.setwebsockData(val)
            this.$router.push({
              path: '/product'
            })
          }
        }

      }
    },
    created() {
      this.caselistChange()
      this.initWebSocket()
    },
    mounted() {
      this.initWebSocket()
      this.animate()
      this.date = toDateString(Date.now(), 'yyyy-MM-dd');
      this.minute = toDateString(Date.now(), 'HH:mm:ss');
      var myddy = new Date().getDay(); //获取存储当前日期
      var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      this.week = weekday[myddy]
    },
    destroyed() {
      if (this.websock) {

        this.websock.close(); //离开路由之后断开websocket连接
      }
    },
    methods: {
      ...mapActions(["setwebsockData"]),
      caselistChange() {
        let caselist = caseInfo.filter((item) => item.industry == this.industry).slice(0, 6);
        caselist.map((item, index) => {
          item["duration"] = parseInt(item.serverNum * Math.random() * 2);
          item["onlineUserNumber"] = parseInt((item.serverNum * 100 + item.serverNum * Math.random() * 50) / 10000);
          item["peakUserNumber"] = parseInt((item.serverNum * 300 + item.serverNum * Math.random() * 50) / 10000);
          this.$set(this.caselistindex, index, item);
        });
        console.log(this.caselistindex);

        let proportion = rankProInfo.filter(
          (item) => item.industry == this.industry
        )[0].product;
        proportion.map((item, index) => {
          this.$set(this.proportion, index, item)
        })
      },
      animate() {
        let val22 = document.getElementsByClassName("val22");
        for (let i = 0; i < val22.length; i++) {
          let targetDomCount = val22[i].getAttribute("data-target");
          if (targetDomCount < 0) {
            this.animateNum2(val22[i], targetDomCount, 3);
          } else {
            this.animateNum(val22[i], targetDomCount, 3);
          }
        }
        let val222 = document.getElementsByClassName("val222");
        let targetDomCount2 = val222[0].getAttribute("data-target") * 10000;
        this.animateNum2(val222[0], targetDomCount2, 3);
      },
      // 初始值 结束值 几个小数点
      animateNum(dom, val, dot) {
        let obj = {
          num1: dom.innerHTML
        };
        TweenMax.to(obj, 3, {
          num1: val,
          onUpdate: function() {
            // dom.innerHTML = parseFloat(obj.num1).toFixed(dot);
            dom.innerHTML = parseFloat(obj.num1).toFixed(dot).toString().replace(/\./, ',')
          },
          delay: 3,
        });
      },
      // 初始值 结束值 几个小数点 小于1000的
      animateNum2(dom, val, dot) {
        let obj = {
          num1: dom.innerHTML
        };
        TweenMax.to(obj, 3, {
          num1: val,
          onUpdate: function() {
            // dom.innerHTML = parseFloat(obj.num1).toFixed(dot);
            dom.innerHTML = parseFloat(obj.num1).toFixed(0).toString().replace(/\./, ',')
          },
          delay: 3,
        });
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
  @import "../../style/font.css";
  $myColor: #40dcf8;

  // 1920*6   1080*2
  // 11520*2160
  // 7680*1440    1.5
  // 5760*1080    2
  .content {
    width: 7680px;
    height: 1440px;
    // width: 8680px;
    // height: 3440px;
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #111e2e;
    background: url('../../assets/img/bgwg.jpg');
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;

    &>div {
      width: 32%;

      &.left {
        width: 32%;
      }

      &.main {
        width: 36%;
      }

      &.title {
        width: 3300px !important;
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

  .foot {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 170px;
    width: 1523px !important;
    background: url("../../assets/left/2.png") no-repeat center;
    background-size: 100% 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .nth {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 62px;
        height: 62px;
        vertical-align: middle;
        margin-right: 33px;
      }

      p {
        font-size: 22px;
        color: #ffffff;

        .firstspan {
          color: #85e8ff;
          font-size: 45px;
          font-family: myFirstFont;
        }
      }
    }
  }
</style>
