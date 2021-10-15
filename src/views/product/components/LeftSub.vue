<template>
  <div class="content13">
    <div class="list">
      <div class="list_nth1">
        <h3><img src="../../../assets/img/案例.png" alt=""> <label style="vertical-align: middle;position: relative;top: -1rem;">产品信息</label><span>Product Information</span></h3>
        <div style="height: 30px"></div>
        <div class="case_box">
          <div class="case_list">
            <div class="case" v-for="(item,index) in caselist" :key="index">
              <div class="title">
                <!-- <span> ▎{{ item.name }}</span> -->
                <span>{{ item.name }}</span>
                <div class="select">
                  <el-checkbox class="select1" v-model="item.checked1" label="选择" border></el-checkbox>
                  <el-radio class="select2" v-model="item.checked3" :label="item.name" border @change.once="checked2click(item,index)">模拟</el-radio>
                  <el-radio :disabled="!item.checked3" class="select2" v-model="item.checked2" :label="item.name" border @change.once="checked2click(item,index)">扩容</el-radio>
                </div>
              </div>s
              <!-- 20210922 之前 隐藏 -->
              <div v-if="false" class="case_content">
                <div class="nth">
                  <img :class="[item.name=='DDoS高防IP'?'ddos':'','txyzjimg']" :src="imgsrc[item.name]" alt="">
                  <div style="text-align: left;">
                    <p class="p1">用户数量</p>
                    <p class="p2"><span class="val22" :data-target='item.value1'>0</span><span>%</span></p>
                    <div class="p3 bar">
                      <div class="bar_color bar_color2 val4_bar11111" :data-target='item.value1'></div>
                    </div>
                    <p class="p4"><span class="val22" :data-target='item.value2'>0</span>%</p>
                  </div>
                  <div style="text-align: left;">
                    <p class="p1">云主机占比</p>
                    <p class="p2"><span class="val22" :data-target='item.value3'>0</span><span>%</span></p>
                    <div class="p3 bar">
                      <div class="bar_color bar_color1 val4_bar11111" :data-target='item.value3'></div>
                    </div>
                    <p class="p4"><span class="val22" :data-target='item.value4'>0</span>%</p>
                  </div>
                  <div style="text-align: left;">
                    <p class="p1">网络带宽占比</p>
                    <p class="p2"><span class="val22" :data-target='item.value5'>0</span><span>%</span></p>
                    <div class="p3 bar">
                      <div class="bar_color bar_color3 val4_bar11111" :data-target='item.value5'></div>
                    </div>
                    <p class="p4"><span class="val22" :data-target='item.value6'>0</span>%</p>
                  </div>
                </div>
              </div>
              <!-- 20210922 之前 隐藏 -->
              <p v-if="false" class="foot">{{item.describe}}</p>
              <!-- cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40GB',xtp2:'500GB',dk1:'1M',dk2:'50M',jg:'558',jgunit:'元/年', -->
              <div class="dxc" v-if="item.name=='弹性云主机'">
                <div class="flexbox">
                  <div class="flex flex1">
                    <div class="imgs">
                      <img src="../../../assets/new/hs.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu1}}</span><span style="font-size:18px;">{{item.cpuunit1}}</span><span>{{item.cpu2}}</span><span style="font-size:18px;">{{item.cpuunit2}}</span></div>
                      <div class="target">CPU</div>
                    </div>
                  </div>
                  <div class="flex flex2">
                    <div class="imgs">
                      <img src="../../../assets/new/nc.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.xtp1}}</span><span style="font-size:18px;">{{item.xtpunit1}}</span></div>
                      <div class="target">系统盘</div>
                    </div>
                  </div>
                </div>
                <div class="dk">
                  <div class="dktext">带宽{{step[item.dk1]}}</div>
                  <el-steps class="elsteps" :active="step[item.dk1]" align-center>
                    <el-step></el-step>
                    <el-step :class="[item.dk1=='1M'?'yyy':'']"  title="1M"></el-step>
                    <el-step :class="[item.dk1=='5M'?'yyy':'']" title="5M"></el-step>
                    <el-step :class="[item.dk1=='10M'?'yyy':'']" title="10M"></el-step>
                    <el-step :class="[item.dk1=='20M'?'yyy':'']" title="20M"></el-step>
                    <el-step :class="[item.dk1=='30M'?'yyy':'']" title="30M"></el-step>
                    <el-step :class="[item.dk1=='40M'?'yyy':'']" title="40M"></el-step>
                    <el-step :class="[item.dk1=='50M'?'yyy':'']" title="50M"></el-step>
                  </el-steps>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='关系数据库MySQL'">
                <div class="flexbox" style="height:130px;">
                  <div class="flex flex1">
                    <div class="imgs">
                      <img src="../../../assets/new/hs.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu1}}</span><span style="font-size:18px;">{{item.cpuunit1}}</span><span>{{item.cpu2}}</span><span style="font-size:18px;">{{item.cpuunit2}}</span></div>
                      <div class="target">CPU</div>
                    </div>
                  </div>
                  <div class="flex flex2">
                    <div class="imgs">
                      <img src="../../../assets/new/存储.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.xtp1}}</span><span style="font-size:18px;">{{item.xtpunit1}}</span></div>
                      <div class="target">系统盘</div>
                    </div>
                  </div>
                </div>
                <p class="cclx">存储类型<span style="font-weight: 600;">-主备</span></p>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='对象存储OOS'">
                <div class="flexbox" style="height:130px;">
                  <div class="flex flex1">
                    <div class="imgs">
                      <img src="../../../assets/new/存储.png" alt="">
                    </div>
                    <div class="contents">
                      <!-- <div class="target_text">2核4G</div> -->
                      <div class="target_text"><span>{{item.cpu1}}</span><span style="font-size:18px;">{{item.cpuunit2}}</span></div>

                      <div class="target">规格</div>
                    </div>
                  </div>
                  <div class="flex flex2">
                    <div class="imgs">
                      <img src="../../../assets/new/传输.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.xtp1}}</span><span style="font-size:18px;">{{item.xtpunit1}}</span></div>
                      <div class="target">传输速度</div>
                    </div>
                  </div>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='弹性负载均衡ELB'">
                <div class="flexbox" style="height:130px;">
                  <div class="flex flex1">
                    <div class="imgs">
                      <img src="../../../assets/new/hs.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu1}}</span><span style="font-size:18px;">{{item.cpuunit1}}</span></div>
                      <div class="target">CPU</div>
                    </div>
                  </div>
                  <div class="flex flex3">
                    <div class="imgs">
                      <img src="../../../assets/new/nc.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu2}}</span><span style="font-size:18px;">{{item.cpuunit2}}</span></div>
                      <div class="target">内存</div>
                    </div>
                  </div>
                  <div class="flex flex2">
                    <div class="imgs">
                      <img src="../../../assets/new/硬盘.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu3}}</span><span style="font-size:18px;">{{item.cpuunit2}}</span></div>
                      <div class="target">硬盘</div>
                    </div>
                  </div>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='CDN内容分发'">
                <div class="flexbox" style="height:130px;">
                  <div class="flex flex1">
                    <div class="imgs">
                      <img src="../../../assets/new/存储.png" alt="">
                    </div>
                    <div class="contents">
                      <!-- <div class="target_text">300G</div> -->
                      <div class="target_text"><span>{{item.rl}}</span><span style="font-size:18px;">{{item.rlunit}}</span></div>

                      <div class="target">容量</div>
                    </div>
                  </div>
                  <div class="flex flex2">
                    <div class="imgs">
                      <img src="../../../assets/new/数量.png" alt="">
                    </div>
                    <div class="contents">
                      <!-- <div class="target_text">1个</div> -->
                      <div class="target_text"><span>{{item.number}}</span><span style="font-size:18px;">{{item.numberunit}}</span></div>

                      <div class="target">数量</div>
                    </div>
                  </div>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='专属云'">
                <div class="flexbox" style="height:130px;">
                  <div class="flex flex1">
                    <div class="imgs">
                      <img src="../../../assets/new/hs.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.rl}}</span><span style="font-size:18px;">{{item.rlunit}}</span></div>
                      <div class="target">vCPU</div>
                    </div>
                  </div>
                  <div class="flex flex2">
                    <div class="imgs">
                      <img src="../../../assets/new/nc.png" alt="">
                    </div>
                    <div class="contents">
                      <div class="target_text"><span>{{item.number}}</span><span style="font-size:18px;">{{item.numberunit}}</span></div>
                      <div class="target">内存</div>
                    </div>
                  </div>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='物理机'">
                <div class="flexbox" style="height:130px;">
                  <div class="flex flex1 flexwlj">

                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu1}}</span><span style="font-size:18px;">{{item.cpuunit1}}*</span><span>{{item.cpu2}}</span><span style="font-size:18px;">{{item.cpuunit2}}</span></div>

                      <div class="target">CPU</div>
                    </div>
                  </div>
                  <div class="flex flex3 flexwlj">
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu3}}</span><span style="font-size:18px;">{{item.cpuunit3}}</span>  <span style="font-size:18px;">{{item.cpuunit4}}</span></div>

                      <div class="target">内存</div>
                    </div>
                  </div>
                  <div class="flex flex2 flexwlj">
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu4}}</span><span style="font-size:18px;">{{item.cupuunit5}}</span></div>

                      <div class="target">量大收发包</div>
                    </div>
                  </div>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>

                </div>
              </div>
              <div class="dxc" v-if="item.name=='GPU云主机'">
                <div class="flexbox" style="height:130px;">
                  <div class="flex flex1 flexwlj">
                    <!-- <div class="imgs">
                      <img src="../../../assets/new/hs.png" alt="">
                    </div> -->
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu1}}</span><span style="font-size:18px;">{{item.cpuunit1}}</span></div>
                      <div class="target">vCPUs</div>
                    </div>
                  </div>
                  <div class="flex flex3 flexwlj">
                    <!-- <div class="imgs">
                      <img src="../../../assets/new/hs.png" alt="">
                    </div> -->
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu2}}</span><span style="font-size:18px;">{{item.cpuunit2}}</span></div>
                      <div class="target">内存</div>
                    </div>
                  </div>
                  <div class="flex flex2 flexwlj">
                    <!-- <div class="imgs">
                      <img src="../../../assets/new/nc.png" alt="">
                    </div> -->
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu3}}</span><span style="font-size:18px;">{{item.cpuunit1}}</span></div>
                      <div class="target">最大收发包</div>
                    </div>
                  </div>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='云直播'">
                <div class="flexbox" style="height:130px;">
                  <div class="flex flex1 flexwlj">
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu1}}</span><span style="font-size:18px;">{{item.cpuunit1}}</span></div>
                      <div class="target">CPU</div>
                    </div>
                  </div>
                  <div class="flex flex3 flexwlj">
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu2}}</span><span style="font-size:18px;">{{item.cpuunit2}}</span></div>
                      <div class="target">内存</div>
                    </div>
                  </div>
                  <div class="flex flex2 flexwlj">
                    <div class="contents">
                      <div class="target_text"><span>{{item.cpu3}}</span><span style="font-size:18px;">{{item.cpuunit3}}</span> <span style="font-size:18px;">{{item.cpuunit4}}</span><br/>+<span>{{item.cpu4}}</span></div>
                      <div class="target">硬盘</div>
                    </div>
                  </div>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='DDoS高防IP'">
                <div class="flex flexbox1" style="height:130px;">
                  <div class="imgs">
                    <img src="../../../assets/new/防护.png" alt="">
                  </div>
                  <div class="contents">
                    <div class="target_text"><span class="number">{{item.cpu1}}</span><span class="unit">{{item.cpuunit1}}</span></div>
                    <div class="target">防护能力</div>
                  </div>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='web应用防火墙'">
                <div class="flex flexbox1" style="height:88px;">
                  <div class="imgs" style="width:80px;height:80px;margin-left:20px;">
                    <img style="width:100%;height:100%;" src="../../../assets/new/域名.png" alt="">
                  </div>
                  <div class="contents">
                    <div class="target_text"><span class="number">{{item.cpu1}}</span><span class="unit">{{item.cpuunit1}}</span></div>
                    <div class="target">域名包</div>
                  </div>
                </div>
                <div class="dk">
                  <div class="dktext">防护带宽</div>
                  <el-steps class="elsteps" :active="step1[item.dk1]" align-center>
                    <el-step></el-step>
                    <el-step :class="[item.dk1=='1M'?'yyy':'']" title="1M"></el-step>
                    <el-step :class="[item.dk1=='10M'?'yyy':'']" title="10M"></el-step>
                    <el-step :class="[item.dk1=='20M'?'yyy':'']" title="20M"></el-step>
                    <el-step :class="[item.dk1=='50M'?'yyy':'']" title="50M"></el-step>
                    <el-step :class="[item.dk1=='100M'?'yyy':'']" title="100M"></el-step>
                    <el-step :class="[item.dk1=='200M'?'yyy':'']" title="200M"></el-step>
                    <el-step :class="[item.dk1=='1000M'?'yyy':'']" title="1000M"></el-step>
                  </el-steps>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
              <div class="dxc" v-if="item.name=='云间高速'">
                <div class="flex flexbox1" style="height:130px;">
                  <div class="imgs" style="width:80px;height:80px;margin-left:20px;">
                    <img style="width:100%;height:100%;" src="../../../assets/new/高速.png" alt="">
                  </div>
                  <div class="contents">
                    <div class="target_text"><span class="number">{{item.cpu1}}</span><span class="unit">{{item.cpuunit1}}</span></div>
                    <div class="target">规格</div>
                  </div>
                </div>
                <div class="money">
                  <div><span class="number">{{item.jg}}</span><span class="unit">{{item.jgunit}}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";
import { product } from "./data.js";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    caselist: {
      type: Array,
      default: function () {
        return [];
      },
    },
    isAdd: {
      type: Boolean,
      default: true,
    },
  },
  components: {},
  computed: {
    // a computed getter
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
        if (this.isAdd == true) {
          let productAdd = val
            .filter((item) => !!item.checked2)
            .map((item) => item.name);
          this.setproductAdd(productAdd);
          let productSim = val
            .filter((item) => !!item.checked3)
            .map((item) => item.name);
          this.setproductSim(productSim);
        } else {
          this.setproductAdd([]);
          this.setproductSim([]);
        }
        console.log(3434, productseleted, val);
        this.$emit("productInfocab", val);
        // this.time = setInterval(()=>{
        //   console.log(888888)
        //   this.animateAlldou()
        // },5000)
      },
      immediate: true,
      deep: true, //对象内部的属性监听，也叫深度监听
    },
  },
  data() {
    return {
      time: null,
      width: 0,
      product: product.slice(0, 6),
      imgsrc: {
        弹性云主机: require("../../../assets/left/弹性云主机.png"),
        GPU云主机: require("../../../assets/left/GPU云主机.png"),
        弹性负载均衡ELB: require("../../../assets/left/弹性负载均衡ELB.png"),
        对象存储OOS: require("../../../assets/left/对象存储OOS.png"),
        关系数据库MySQL: require("../../../assets/left/关系数据库MySQL.png"),
        CDN内容分发: require("../../../assets/left/CDN内容分发.png"),
        物理机: require("../../../assets/left/物理机.png"),
        专属云: require("../../../assets/left/专属云.png"),
        云直播: require("../../../assets/left/云直播.png"),
        DDoS高防IP: require("../../../assets/left/DDoS高防IP.png"),
        web应用防火墙: require("../../../assets/left/web应用防火墙.png"),
        云间高速: require("../../../assets/left/云间高速.png"),
      },
      step:{
        '1M' :2,
        '5M' :3,
        '10M' :4,
        '20M' :5,
        '30M' :6,
        '40M' :7,
        '50M' :8,
      },
      step1:{
        '1M' :2,
        '10M' :3,
        '20M' :4,
        '50M' :5,
        '100M' :6,
        '200M' :7,
        '1000M' :8,
      }
    };
  },
  created() {},
  mounted() {
    this.animate();
    this.animate4();
  },
  beforeDestroy() {
    clearInterval(this.time);
  },
  methods: {
    ...mapActions(["setproductseleted", "setproductAdd", "setproductSim"]),
    checked2click(val, index) {
      console.log(222, val);
    },

    animate() {
      let val22 = document.getElementsByClassName("val22");
      for (let i = 0; i < val22.length; i++) {
        let targetDomCount = val22[i].getAttribute("data-target");
        this.animateNum(val22[i], targetDomCount, 2);
      }
    },
    animate4() {
      let val4_bar11111 = document.getElementsByClassName("val4_bar11111");
      for (let i = 0; i < val4_bar11111.length; i++) {
        let targetDomCount = val4_bar11111[i].getAttribute("data-target");
        this.animateNumBarColor(val4_bar11111[i], targetDomCount);
      }
    },
    animateAlldou() {
      let val22 = document.getElementsByClassName("val22");
      for (let i = 0; i < val22.length; i++) {
        let targetDomCount = parseInt(val22[i].getAttribute("data-target"));
        let math = parseInt(
          Math.random() *
            (parseInt(targetDomCount + 5) - parseInt(targetDomCount - 5)) +
            parseInt(targetDomCount - 5)
        );
        math = math > 99 ? 99 : math;
        this.animateNum(val22[i], math, 0);
      }

      let val4_bar11111 = document.getElementsByClassName("val4_bar11111");
      for (let i = 0; i < val4_bar11111.length; i++) {
        let targetDomCount = val4_bar11111[i].getAttribute("data-target");
        let width = parseInt(val4_bar11111[i].style.width);
        let math = parseInt(
          Math.random() *
            (parseInt(targetDomCount + 5) - parseInt(targetDomCount - 5)) +
            parseInt(targetDomCount - 5)
        );
        math = math > 99 ? 99 : math;
        this.animateNumBarColor(val4_bar11111[i], math, width);
      }
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val, dot, start) {
      let obj = { num1: start || dom.innerHTML };
      // console.log(val, 999);
      TweenMax.to(obj, 3, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dot);
        },
        delay: 1,
      });
    },
    // 初始值 结束值
    animateNumBarColor(dom, val, start) {
      let obj = { num1: start || 0 };
      let val1 = val;
      TweenMax.to(obj, 3, {
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
        // background-image: url("../../../assets/img/案例拓扑图框.png"),
        background-image: url("../../../assets/left/组23.png");
        // url("../../../assets/left/板子.png");
        background-repeat: no-repeat, no-repeat;
        background-position: bottom left, center center;
        background-size: 100% 150%, 100% 100%;

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
        padding-bottom: 20px;
        padding-top: 20px;
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
          /deep/ .el-checkbox.is-bordered {
            border: 1rem solid #205878;
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
          .ddos {
            width: 118px;
            height: 76px;
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
              background-image: none;
              background-color: #ff94b4;
            }
            .bar_color3 {
              background-image: linear-gradient(
                to right,
                #45e4ff,
                #ebb736
              ) !important;
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
    border-color: #dbba6a !important;
  }
  /deep/ .el-checkbox__inner {
    visibility: hidden !important;
  }
  /deep/ .el-checkbox__input {
    position: relative;
    &::after {
      content: "";
      width: 17px;
      height: 22px;
      background: url("../../../assets/home/选择(2)-未选中.png") no-repeat
        center !important;
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
  /deep/ .el-radio__input.is-checked + .el-radio__label {
    color: #dbba6a !important;
  }
  &.is-checked {
    border-color: #dbba6a !important;
    .el-radio__label {
      color: #dbba6a !important;
    }
  }
  /deep/ .el-radio__inner {
    visibility: hidden !important;
  }
  /deep/ .el-radio__input {
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
/deep/ .el-radio.is-bordered {
  border: 1px solid #205878;
}
// new 需求
.dxc{
  height: calc(100% - 96px);
  width: 100%;
  position: relative;
}
.flexbox {
  width: 100%;
  height: 118px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .flex {
    width: 50%;
    height: 100%;
    background-color: rgba(0, 134, 167, 0.3);
    margin: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .imgs {
      width: 100px;
      height: 100px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .contents {
      color: #00D2E3;;
      font-size: 35px;
      text-align: right;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      .target {
        font-size: 22px;
      }
    }
  }
  .flex1 {
    margin-right: 10px;
    padding: 0 20px;
  }
  .flex3 {
    margin-right: 10px;
    margin-left: 10px;
    padding: 0 20px;
  }
  .flex2 {
    margin-left: 10px;
    padding: 0 20px;
  }
}
.dk {
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.dktext {
  white-space: nowrap;
  padding-left: 30px;
  color: #00D2E3;;
  font-size: 28px;
}
.elsteps {
  width: 100%;
  padding-top: 6px;
}
.yyy {
  // /deep/ .is-finish {
  /deep/ .el-step__icon {
    margin-top: 5px;
    position: relative;
    z-index: 1;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 15rem;
    height: 15rem;
    font-size: 14rem;
    box-sizing: border-box;
    background: #14425a;
    -webkit-transition: 0.15s ease-out;
    transition: 0.15s ease-out;
    visibility: inherit;
  }
  /deep/ .el-step__title {
    padding-top: 5px;
  }
  /deep/ .el-step__line-inner {
    border-color:red !important;
  }
  // }
}
.money {
  padding-top: 20px;
  padding-right: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #3dd5ea;
  font-size: 20px;
  position: absolute;
  right: 0;
  bottom: 20px;
  .number {
    font-size: 35px;
  }
  .unit {
    font-size: 25px;
  }
}
.cclx {
  text-align: right;
  height: 25px;
  line-height: 25px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #00D2E3;
  padding-top:10px;
  padding-right:30px;
}
.flexwlj {
  justify-content: center !important;
  .contents {

    text-align: center !important;
  }
}
.flexbox1 {
  // width: 100%;
  margin:0 30px;
  height: 118px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 134, 167, 0.3);
  .contents {
    margin-right: 20px;
      color: #00D2E3;;
      font-size: 30px;
      text-align: right;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      .target {
        font-size: 20px;
      }
    }
}
</style>
