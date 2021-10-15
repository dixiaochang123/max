<template>
  <div class="content2">
    <div class="positionInfo">
      <p>{{ date }}</p>
      <p>{{ week }}</p>
      <p>{{ minute }}</p>
    </div>
    <h2><img class="logosnnsns" src="../../assets/index/大数据图标.png" alt="" srcset=""> <label style="vertical-align: middle;">大数据信息</label><span>Big data Information</span></h2>
    <div style="height: 30px"></div>
    <div class="chart_box">
      <div v-if="productseleted.includes('弹性云主机')" :class="[productseleted.includes('弹性云主机') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <!-- <h3>▎弹性云主机</h3> -->
        <h3>▎弹性云主机-负载信息</h3>
        <txyzj v-if="reFresh" :data="indexInfo[0].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('弹性云主机')" :class="[productseleted.includes('弹性云主机') ? '' : 'Mantle', 'chart chart1 chart2 animated flipInX']">
        <!-- <h3>▎云主机存储信息</h3> -->
        <h3>▎弹性云主机-存储信息</h3>
        <yccxx v-if="reFresh" :data="indexInfo[0].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('弹性云主机')" :class="[productseleted.includes('弹性云主机') ? '' : 'Mantle', 'chart chart3 animated flipInX']">
        <h3>▎弹性云主机-网络信息</h3>
        <txyzjwlxx v-if="reFresh" :data="indexInfo[0].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('弹性云主机')" :class="[productseleted.includes('弹性云主机') ? '' : 'Mantle', 'chart chart1 chart4 animated flipInX']">
        <h3>▎弹性云主机-用户信息</h3>
        <txyzjxx v-if="reFresh" :data="indexInfo[0].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('弹性云主机')" :class="[productseleted.includes('弹性云主机') ? '' : 'Mantle', 'chart chart1 chart5 animated flipInX']">
        <h3>▎弹性云主机-云主机计算</h3>
        <yzjjs v-if="reFresh" :data="indexInfo[0].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('弹性云主机')" :class="[productseleted.includes('弹性云主机') ? '' : 'Mantle', 'chart chart1 chart6 animated flipInX']">
        <h3>▎弹性云主机-每秒事务</h3>
        <!-- <p class="borderBottom"></p> -->
        <yzjmmsw v-if="reFresh" :data="indexInfo[0].data" :productseleted="productseleted" />
      </div>
      <div v-if="false" :class="[productseleted.includes('对象存储OOS') ? '' : 'Mantle', 'chart chart1 chart7 animated flipInX']">
        <h3>▎对象存储OOS</h3>
        <!-- <p class="borderBottom"></p> -->
        <dxccoos v-if="reFresh" :data="indexInfo[1].data" :productseleted="productseleted" />
      </div>
      <div  v-if="productseleted.includes('对象存储OOS')" :class="[productseleted.includes('对象存储OOS') ? '' : 'Mantle', 'chart chart1 chart8 animated flipInX']">
        <h3>▎对象存储信息</h3>
        <!-- <p class="borderBottom"></p> -->
        <dxccxx v-if="reFresh" :data="indexInfo[1].data" :productseleted="productseleted" />
      </div>
      <div  v-if="productseleted.includes('对象存储OOS')" :class="[productseleted.includes('对象存储OOS') ? '' : 'Mantle', 'chart chart1 chart9 animated flipInX']">
        <h3>▎对象存储OOS容量</h3>
        <!-- <p class="borderBottom"></p> -->
        <dxccoosrl v-if="reFresh" :data="indexInfo[1].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('关系数据库MySQL')" :class="[productseleted.includes('关系数据库MySQL') ? '' : 'Mantle', 'chart chart1 chart10 animated flipInX']">
        <h3>▎MySQL 表锁</h3>
        <!-- <p class="borderBottom"></p> -->
        <gxsjkmsql v-if="reFresh" :data="indexInfo[2].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('关系数据库MySQL')" :class="[productseleted.includes('关系数据库MySQL') ? '' : 'Mantle', 'chart chart1 chart12 animated flipInX']">
        <h3>▎MySQL 数据信息</h3>
        <!-- <p class="borderBottom"></p> -->
        <gxsjkmsql11 v-if="reFresh" :data="indexInfo[2].data" :productseleted="productseleted" />
      </div>
      <div v-if="false" :class="[productseleted.includes('关系数据库MySQL') ? '' : 'Mantle', 'chart chart1 chart10 animated flipInX']">
        <h3>▎关系型数据库MSQL</h3>
        <gxsjkmsql12 v-if="reFresh" :data="indexInfo[2].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('CDN内容分发')" id="chart13" :class="[productseleted.includes('CDN内容分发') ? '' : 'Mantle']" ref="chart13 animated flipInX">
        <h3>▎CDN 内容分发</h3>
        <!-- <p class="borderBottom"></p> -->
        <cdn1 v-if="reFresh" :data="indexInfo[3].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('CDN内容分发')" :class="[productseleted.includes('CDN内容分发') ? '' : 'Mantle', 'chart chart1 chart10 chart14 animated flipInX']">
        <h3>▎CDN 内容分发 <span>QPS</span></h3>
        <!-- <p class="borderBottom"></p> -->
        <cdn2 v-if="reFresh" :data="indexInfo[3].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('专属云')" :class="[productseleted.includes('专属云') ? '' : 'Mantle', 'chart chart1 chart15 animated flipInX']">
        <h3>▎专属云</h3>
        <!-- <p class="borderBottom"></p> -->
        <zsy v-if="reFresh" :data="indexInfo[4].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('专属云')" id="chart16" :class="[productseleted.includes('专属云') ? '' : 'Mantle','chart16']" ref="chart16 animated flipInX">
        <h3>▎专属云</h3>
        <!-- <p class="borderBottom"></p> -->
        <zsy2 :data="indexInfo[4].data" :productseleted="productseleted" />
        <!-- <div class="chart16child">
          <img class="img1" src="../../assets/img/组583.png" alt=""> 
          <span class="valTxt valTxtzsy" data-target="1000">0</span>
          <img class="img2" src="../../assets/img/组586.png" alt="">
        </div> -->
      </div>
      <div v-if="productseleted.includes('DDoS高防IP')" :class="[productseleted.includes('DDoS高防IP') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎DDoS 攻击趋势</h3>
        <ddosgjqs v-if="reFresh" :data="indexInfo[5].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('DDoS高防IP')" :class="[productseleted.includes('DDoS高防IP') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎DDoS 攻击流量统计</h3>
        <ddosgjlltj v-if="reFresh" :data="indexInfo[5].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('web应用防火墙')" :class="[productseleted.includes('web应用防火墙') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎Web 应用防火墙</h3>
        <webyyfhq1 v-if="reFresh" :data="indexInfo[6].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('web应用防火墙')" :class="[productseleted.includes('web应用防火墙') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎Web 应用防火墙</h3>
        <webyyfhq2 v-if="reFresh" :data="indexInfo[6].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('云间高速')" :class="[productseleted.includes('云间高速') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎云间高速</h3>
        <yjgs1 v-if="reFresh" :data="indexInfo[7].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('云间高速')" :class="[productseleted.includes('云间高速') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎云间高速</h3>
        <yjgs2 v-if="reFresh" :data="indexInfo[7].data" :productseleted="productseleted" />
      </div>
      
      <div v-if="productseleted.includes('云直播')" :class="[productseleted.includes('云直播') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎云直播</h3>
        <yzb1 v-if="reFresh" :data="indexInfo[8].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('云直播')" :class="[productseleted.includes('云直播') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎云直播</h3>
        <yzb2 v-if="reFresh" :data="indexInfo[8].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('物理机')" :class="[productseleted.includes('物理机') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎物理机</h3>
        <wlj1 v-if="reFresh" :data="indexInfo[9].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('物理机')" :class="[productseleted.includes('物理机') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎物理机</h3>
        <wlj2 v-if="reFresh" :data="indexInfo[9].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('GPU云主机')" :class="[productseleted.includes('GPU云主机') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎GPU 云主机</h3>
        <gpuyzj1 v-if="reFresh" :data="indexInfo[10].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('GPU云主机')" :class="[productseleted.includes('GPU云主机') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎GPU 云主机</h3>
        <gpuyzj2 v-if="reFresh" :data="indexInfo[10].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('弹性负载均衡ELB')" :class="[productseleted.includes('弹性负载均衡ELB') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎弹性负载均衡ELB</h3>
        <txfzjhueb1 v-if="reFresh" :data="indexInfo[11].data" :productseleted="productseleted" />
      </div>
      <div v-if="productseleted.includes('弹性负载均衡ELB')" :class="[productseleted.includes('弹性负载均衡ELB') ? '' : 'Mantle', 'chart chart1 icon-plus animated flipInX']">
        <h3>▎弹性负载均衡ELB</h3>
        <txfzjhueb2 v-if="reFresh" :data="indexInfo[11].data" :productseleted="productseleted" />
      </div>
    </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import { mapGetters,mapActions } from "vuex";
import deepcopy from "@/utils/deepcopy";
console.log(deepcopy(indexInfo))
import txyzj from "./subcomponents/txyzj";
import yccxx from "./subcomponents/yccxx";
import txyzjwlxx from "./subcomponents/txyzjwlxx";
import txyzjxx from "./subcomponents/txyzjxx";
import yzjjs from "./subcomponents/yzjjs";
import cdn1 from "./subcomponents/cdn1";
import cdn2 from "./subcomponents/cdn2";
import yzjmmsw from "./subcomponents/yzjmmsw";
import dxccoos from "./subcomponents/dxccoos";
import gxsjkmsql from "./subcomponents/gxsjkmsql";
import gxsjkmsql11 from "./subcomponents/gxsjkmsql11";
import gxsjkmsql12 from "./subcomponents/gxsjkmsql12";
import zsy from "./subcomponents/zsy";
import webyyfhq1 from "./subcomponents/webyyfhq1";
import webyyfhq2 from "./subcomponents/webyyfhq2";
import ddosgjqs from "./subcomponents/ddosgjqs";
import ddosgjlltj from "./subcomponents/ddosgjlltj";
import yjgs2 from "./subcomponents/yjgs2";
import yjgs1 from "./subcomponents/yjgs1";
import txfzjhueb2 from "./subcomponents/txfzjhueb2";
import gpuyzj2 from "./subcomponents/gpuyzj2";
import gpuyzj1 from "./subcomponents/gpuyzj1";
import wlj1 from "./subcomponents/wlj1";
import wlj2 from "./subcomponents/wlj2";
import yzb1 from "./subcomponents/yzb1";
import yzb2 from "./subcomponents/yzb2";
import txfzjhueb1 from "./subcomponents/txfzjhueb1";
import zsy2 from "./subcomponents/zsy2";

import dxccxx from "./subcomponents/dxccxx";
import dxccoosrl from "./subcomponents/dxccoosrl";
import { TweenMax } from "gsap";
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
    isAdd: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    txyzj,
    yccxx,
    txyzjwlxx,
    txyzjxx,
    yzjjs,
    dxccxx,
    dxccoosrl,
    dxccoos,
    cdn1,
    cdn2,
    yzjmmsw,
    gxsjkmsql,
    gxsjkmsql11,
    gxsjkmsql12,
    zsy,
    webyyfhq1,
    webyyfhq2,
    ddosgjqs,
    ddosgjlltj,
    yjgs2,
    yjgs1,
    txfzjhueb2,
    gpuyzj2,
    gpuyzj1,
    wlj1,
    wlj2,
    yzb1,
    yzb2,
    txfzjhueb1,
    zsy2
  },
  data() {
    return {
      reFresh: true,
      indexInfo:deepcopy(indexInfo)
    };
  },
  computed: {
    ...mapGetters(["productseleted","productAdd","productSim"]),
  },
  watch: {
    productseleted: {
      handler(val) {
         if(!!val) {

      
      console.log('right组件获取productAdd',this.productSim.includes('弹性云主机'),this.isAdd,!this.productAdd.includes('弹性云主机'))
      if(this.isAdd==true) {
        if(this.productSim.includes('弹性云主机') && !this.productAdd.includes('弹性云主机')) {
           this.indexInfo[0].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('弹性云主机模拟',item.endNum)
          })
        } else if(this.productAdd.includes('弹性云主机')) {
          this.indexInfo[0].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('弹性云主机扩容',item.endNum)
          })
        } else {
          this.indexInfo[0].data = deepcopy(indexInfo)[0].data;
          // console.log('弹性云主机正常',item.endNum)
        }
        if(this.productSim.includes('对象存储OOS') && !this.productAdd.includes('对象存储OOS')) {
           this.indexInfo[1].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('对象存储OOS模拟',item.endNum)
          })
        } else if(this.productAdd.includes('对象存储OOS')) {
          this.indexInfo[1].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
          })
        } else {
          this.indexInfo[1].data = deepcopy(indexInfo)[1].data
        }
        if(this.productSim.includes('关系数据库MySQL') && !this.productAdd.includes('关系数据库MySQL')) {
           this.indexInfo[2].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('关系数据库MySQL模拟',item.endNum)
          })
        } else if(this.productAdd.includes('关系数据库MySQL')) {
          this.indexInfo[2].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
          })
        } else {
          this.indexInfo[2].data = deepcopy(indexInfo)[2].data
        }
        if(this.productSim.includes('CDN内容分发') && !this.productAdd.includes('CDN内容分发')) {
           this.indexInfo[3].data.map(item=>{
            item.firstNum = item.endNum;
            if(item.indexNum==1) {

              item.endNum = item.endNum * 1.5;
              item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            } else {
              item.endNum = item.maxNum
            }
            // console.log('CDN内容分发模拟',item.endNum)
          })
        } else if(this.productAdd.includes('CDN内容分发')) {
          this.indexInfo[3].data.map(item=>{
            item.firstNum = item.endNum;
            if(item.indexNum==1) {
              item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            } else {
              // item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            }
          })
        } else {
          this.indexInfo[3].data = deepcopy(indexInfo)[3].data
        }
        if(this.productSim.includes('专属云') && !this.productAdd.includes('专属云')) {
           this.indexInfo[4].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('专属云模拟',item.endNum)
          })
        } else if(this.productAdd.includes('专属云')) {
          this.indexInfo[4].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
          })
        } else {
          this.indexInfo[4].data = deepcopy(indexInfo)[4].data
        }
        if(this.productSim.includes('云直播') && !this.productAdd.includes('云直播')) {
           this.indexInfo[8].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('云直播模拟',item.endNum)
          })
        } else if(this.productAdd.includes('云直播')) {
          this.indexInfo[8].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
          })
        } else {
          this.indexInfo[8].data = deepcopy(indexInfo)[8].data
        }
        if(this.productSim.includes('物理机') && !this.productAdd.includes('物理机')) {
           this.indexInfo[9].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('物理机模拟',item.endNum)
          })
        } else if(this.productAdd.includes('物理机')) {
          this.indexInfo[9].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
          })
        } else {
          this.indexInfo[9].data = deepcopy(indexInfo)[9].data
        }
        if(this.productSim.includes('DDoS高防IP') && !this.productAdd.includes('DDoS高防IP')) {
           this.indexInfo[5].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('DDoS高防IP模拟',item.endNum)
          })
        } else if(this.productAdd.includes('DDoS高防IP')) {
          this.indexInfo[5].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
          })
        } else {
          this.indexInfo[5].data = deepcopy(indexInfo)[5].data
        }
        if(this.productSim.includes('web应用防火墙') && !this.productAdd.includes('web应用防火墙')) {
           this.indexInfo[6].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.endNum * 1.5 || item.endNum == item.endNum * 1.5 ? (item.endNum * 1.5 * 0.95) :item.endNum;
            // console.log('web应用防火墙模拟',item.endNum)
          })
        } else if(this.productAdd.includes('web应用防火墙')) {
          this.indexInfo[6].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.endNum * 3 || item.endNum == item.endNum * 3 ? (item.endNum * 3 * 0.95) :item.endNum;
          })
        } else {
          this.indexInfo[6].data = deepcopy(indexInfo)[6].data
        }
        if(this.productSim.includes('云间高速') && !this.productAdd.includes('云间高速')) {
           this.indexInfo[7].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('云间高速模拟',item.endNum)
          })
        } else if(this.productAdd.includes('云间高速')) {
          this.indexInfo[7].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
          })
        } else {
          this.indexInfo[7].data = deepcopy(indexInfo)[7].data
        }
        if(this.productSim.includes('GPU云主机') && !this.productAdd.includes('GPU云主机')) {
           this.indexInfo[10].data.map(item=>{
            item.firstNum = item.endNum;
            // if(item.indexNum==1) {
            //   item.endNum =item.maxNum
            // } 
            item.endNum =item.maxNum
            // else {
            //   item.endNum = item.endNum * 1.23
            // }
            // item.endNum = item.endNum * 1.5;
            // item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('GPU云主机模拟',item.endNum)
          })
        } else if(this.productAdd.includes('GPU云主机')) {
          this.indexInfo[10].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            
          })
        } else {
          this.indexInfo[10].data = deepcopy(indexInfo)[10].data
        }
        if(this.productSim.includes('弹性负载均衡ELB') && !this.productAdd.includes('弹性负载均衡ELB')) {
           this.indexInfo[11].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.endNum * 1.5;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
            // console.log('弹性负载均衡ELB模拟',item.endNum)
          })
        } else if(this.productAdd.includes('弹性负载均衡ELB')) {
          this.indexInfo[11].data.map(item=>{
            item.firstNum = item.endNum;
            item.endNum = item.israte==true ? parseInt(item.endNum/item.addMultiple) : item.endNum * 3;
            item.endNum = item.endNum > item.maxNum || item.endNum == item.maxNum ? (item.maxNum * 0.95) :item.endNum;
          })
        } else {
          this.indexInfo[11].data = deepcopy(indexInfo)[11].data
        }


        
      } else {
          this.setproductAdd([]);
          this.indexInfo = deepcopy(indexInfo)
      }
      this.reFresh = false;
      setTimeout(() => {
            this.reFresh = true;
      }, 100);
      }
      },
      immediate: true,
      deep:true
    },
  },
  beforeDestroy() {},
  created() {
    this.setproductAdd([]);
  },
  mounted() {
    if(document.getElementsByClassName("valTxtzsy")[0]) {

      this.animateAll()
    }
  },
  methods: {
    ...mapActions(["setproductAdd","setproductseleted"]),
    animateAll() {
      let valTxtzsy = document.getElementsByClassName("valTxtzsy")[0];
      let targetDomCount = valTxtzsy.getAttribute("data-target");
      this.animateNum(valTxtzsy, targetDomCount, 0);
    },
    // 初始值 结束值 几个小数点
    animateNum(dom, val,dog) {
      let obj = { num1: dom.innerHTML };
      TweenMax.to(obj, 20, {
        num1: val,
        onUpdate: function () {
          dom.innerHTML = parseFloat(obj.num1).toFixed(dog);
        },
        delay: 3,
      });
    }
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.plus-icon-enter-active {
  transition: opacity 0.5s;
}
.plus-icon-enter {
  opacity: 0;
}
.plus-icon-leave-active {
  transition: opacity 0.5s;
}
.plus-icon-leave-to {
  opacity: 0;
}
.content2 {
  width: 100%;
  height: 100%;
  padding-right: 60px;
  .positionInfo {
    // height: 50px;
    // line-height: 50px;
    font-size: 30px;
    color: #bfd7ff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
      padding-left: 100px;
      padding-top: 40px;
      padding-bottom: 50px;
    }
  }
  h2 {
    font-size: 40px;
    padding-bottom: 20px;
    text-align: left;
    color: $myColor;
    border-bottom: solid 1px #12366b;
    position: relative;
    span {
      display: inline-block;
      padding-left: 30px;
      font-size: 20px;
      color: #7789b2;
    }
    &::before {
      content: "";
      width: 14px;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #3483f8;
    }
    &::after {
      content: "";
      width: 14px;
      height: 1px;
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #3483f8;
    }
  }
  .chart_box {
    width: 100%;
    height: 1170px;
    // display: flex;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-row-gap: 15px;
    grid-column-gap: 15px;
    h3 {
      font-size: 20px;
      color: $myColor;
      text-align: left;
      padding-top: 20px;
      padding-left: 10px;
      span {
        float: right;
        // display: inline-block;
        font-size: 12px;
        color: #9db2db;
        padding-right: 20px;
        padding-top: 10px;
      }
    }
    > div {
      width: 100%;
      height: 100%;
      // border: solid red 1px;
      background: url("../../assets/left/组23.png") no-repeat center center;
      background-size: 100% 100%;
    }
    .chart1_1 {
      height: calc(100% - 60px);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .img {
        width: 200px;
        height: 180px;
        // border: solid 1px;
      }
      .chart_bar {
        width: 300px;
        height: 50%;
        display: flex;
        justify-content: space-around;
        flex-flow: column;
        color: #c6dcff;
        // padding-bottom: 5px;
        p {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding-bottom: 5px;
        }
        .number {
          &::after {
            content: "%";
          }
        }
        > div {
          width: 100%;
          font-size: 12px;
          .number {
            color: #5ecfff;
          }
        }
        .chart_bar1 {
          width: 100%;
          .bar1 {
            background: #123f7a;
            .barcolor {
              width: 0%;
              background: #4cbefa;
            }
          }
          .bar2 {
            background: #0c737c;
            .barcolor {
              width: 0%;
              background: #00fcff;
            }
          }
        }
      }
    }
  }
}
.borderBottom {
  border-bottom: solid 1px #4da3ff;
  padding-top: 10px;
  margin-left: 23px;
  margin-right: 23px;
}
.chart16child {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .img1 {
    width: 150px;
    height: 190px;
    margin:0 50px;
  }
  .valTxt{
    color: yellow;
    position: absolute;
    left: 0;
    top: 0;
    width: 210px;
    height: 70px;
    line-height: 70px;
    position: absolute;
    left: 271px;
    top: 60px;
    &::after {
      content: "MBPS";
    }
  }
  .img2 {
    width: 210px;
    height: 70px;
  }
}
.chart15 {
  .chart1_1 {
    justify-content: flex-start !important;
    .imgs {
      display: flex;
      flex-flow: column;
      margin-left: 34px;
      margin-right: 23px;
      img {
        width: 78px;
        height: 78px;
      }
    }
    .chart_bar {
      height: 75% !important;
      width: 412px !important;
      .number {
        &::after {
          content: "" !important;
        }
      }
    }
  }
}
.Mantle {
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
.logosnnsns {
  width:44px;
  height: 44px;
  vertical-align: middle;
}
</style>
