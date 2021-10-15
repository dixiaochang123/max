<template>

  <div class="topology animated fadeInUp">
    <el-carousel style="height:100%;" indicator-position="none" arrow="never">
      <el-carousel-item v-if="productseleted.includes('弹性云主机')">
        <h3>弹性云主机</h3>
        <div class="topolbox">
            <div class="txyzj" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
                <img class="circle circle3" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('对象存储OOS')">
        <h3>对象存储oos</h3>
        <div class="topolbox">
            <div class="dxccoos" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
                <img class="circle circle3" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('弹性负载均衡ELB')">
        <h3>弹性负载均衡ELB</h3>
        <div class="topolbox">
            <div class="txfzjhelb" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
                <img class="circle circle3" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('关系数据库MySQL')">
        <h3>关系数据库MySQL</h3>
        <div class="topolbox">
            <div class="gxxsjkmysql" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('CDN内容分发')">
        <h3>CDN内容分发</h3>
        <div class="topolbox">
            <div class="cdnnrff" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('GPU云主机')">
        <h3>GPU云主机</h3>
        <div class="topolbox">
            <div class="gpuyzj" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
                <img class="circle circle3" src="../../../assets/topol/circle.png">
                <img class="circle circle4" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('物理机')">
        <h3>物理机</h3>
        <div class="topolbox">
            <div class="wlj" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
                <img class="circle circle3" src="../../../assets/topol/circle.png">
                <img class="circle circle4" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('专属云')">
        <h3>专属云</h3>
        <div class="topolbox">
            <div class="zsy" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
                <img class="circle circle3" src="../../../assets/topol/circle.png">
                <img class="circle circle4" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('云直播')">
        <h3>云直播</h3>
        <div class="topolbox">
            <div class="yzb" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
                <img class="circle circle3" src="../../../assets/topol/circle.png">
                <img class="circle circle4" src="../../../assets/topol/circle.png">
                <img class="circle circle5" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('DDoS高防IP')">
        <h3>DDOS高仿IP</h3>
        <div class="topolbox">
            <div class="ddsgfip" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
                <img class="circle circle3" src="../../../assets/topol/circle.png">
                <img class="circle circle4" src="../../../assets/topol/circle.png">
                <img class="circle circle5" src="../../../assets/topol/circle.png">
                <img class="circle circle6" src="../../../assets/topol/circle.png">
                <img class="circle circle7" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('web应用防火墙')">
        <h3>Web应用防火墙</h3>
        <div class="topolbox">
            <div class="webyyfhq" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
      <el-carousel-item v-if="productseleted.includes('云间高速')">
        <h3>云间高速</h3>
        <div class="topolbox">
            <div class="yjgs" style="transform: scale(0.8);">
                <img class="circle circle1" src="../../../assets/topol/circle.png">
                <img class="circle circle2" src="../../../assets/topol/circle.png">
                <img class="circle circle3" src="../../../assets/topol/circle.png">
                <img class="circle circle4" src="../../../assets/topol/circle.png">
            </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["productseleted"]),
  },
  watch: {
    productseleted: {
      handler(val) {
         if(!!val) {
             console.log(789789,val)
         }
      },
      immediate: true,
      deep:true
    },
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.topology {
  width: 830px;
  height: 560px;
  border: solid 1px #034b70;
  background-color: rgba(0, 0, 0, 0.1);
  background: url("../../../assets/img/案例拓扑图框.png") no-repeat center
    center;
  background-size: 100% 100%;
  position: absolute;
  top: 830px;
//   top: 0;
  left: 70px;
  h3 {
    font-size: 30px;
    height: 100px;
    line-height: 100px;
    margin: 0 35px;
    padding: 0;
    border-bottom: solid 2px #51a9ff;
    color: #b7cffc;
  }
  .topolbox {
      width: 100%;
      height: calc(100% - 100px);
      > div {
          margin:0 auto;
      }
  }
}
.txyzj {
    width:520px;
    height: 455px;
    background: url("../../../assets/topol/1弹性云主机.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 61px;left: 93px;-webkit-animation: c1 4s linear infinite;animation: c1 4s linear infinite;}
    .circle.circle2 {top: 61px;left: 93px;-webkit-animation: c2 4s linear infinite;animation: c2 4s linear infinite;}
    .circle.circle3 {top: 334px;left: 163px;-webkit-animation: c3 2s linear infinite;animation: c3 2s linear infinite;}
    @keyframes c1 {
        10% {top: 75px;left: 114px;}
        25% {top: 103px;left: 152px;opacity: 0;}
        35% {top: 116px;left: 168px;opacity: 1}
        50% {top: 168px;left: 235px;opacity: 0}
        65% {top: 178px;left:249px;opacity: 1;}
        85% {top: 236px;left:146px;opacity: 1;}
    100% {top: 251px;left:172px;opacity: 0;}
    }
    @keyframes c2 {
        10% {top: 75px;left: 114px;}
        25% {top: 103px;left: 152px;opacity: 0;}
        35% {top: 116px;left: 168px;opacity: 1}
        50% {top: 168px;left: 235px;opacity: 0}
        65% {top: 178px;left:249px;opacity: 1;}
        85% {top: 120px;left:357px;opacity: 1;}
    100% {top: 135px;left:380px;opacity: 0;}
    }
    @keyframes c3 {
        10% { top: 334px;left: 163px;}
    100% {top: 323px;left:185px;opacity: 0;}
    }
}
.dxccoos {
    width:764px;
    height: 450px;
    background: url("../../../assets/topol/2对象存储oos.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 35px;left: 197px;-webkit-animation: c4 4s linear infinite;animation: c4 4s linear infinite;}
    .circle.circle2 {top: 77px;left: 167px;-webkit-animation: c5 4s linear infinite;animation: c5 4s linear infinite;}
    @keyframes c4 {
        10% {top: 6px;left: 257px;}
        25% {top: 139px;left: 522px;opacity: 0;}
        45% {top: 165px;left: 568px;opacity: 0;}
        65% {top: 203px;left: 505px;opacity: 1}
        85% {top: 218px;left: 473px;opacity: 1}
        100% {top: 67px;left:184px;opacity: 0;}
    }
    @keyframes c5 {
        10% {top: 244px;left: 487px;}
        20% {top: 190px;left: 587px;opacity: 0;}
        25% {top: 244px;left: 678px;opacity: 0;}
        30% {top: 269px;left: 634px;opacity: 1}
        40% {top: 339px;left: 494px;opacity: 1}
        50% {top: 364px;left:436px;opacity: 0;}
        60% {top: 289px;left:246px;opacity: 1;}
        70% {top: 243px;left:160px;opacity: 1;}
        80% {top: 208px;left:83px;opacity: 1;}
        90% {top: 147px;left:-18px;opacity: 1;}
        100% {top: 75px;left:125px;opacity: 1;}
    }
}
.txfzjhelb {
    width:606px;
    height: 437px;
    background: url("../../../assets/topol/3弹性负载均衡ELB.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 60px;left: 45px;-webkit-animation: c6 4s linear infinite;animation: c6 4s linear infinite;}
    .circle.circle2 {top: 60px;left: 45px;-webkit-animation: c7 4s linear infinite;animation: c7 4s linear infinite;}
    .circle.circle3 {top: 60px;left: 45px;-webkit-animation: c8 4s linear infinite;animation: c8 4s linear infinite;}
    @keyframes c6 {
        10% {top: 99px;left: 113px;}
        25% {top: 132px;left: 169px;opacity: 0;}
        45% {top: 156px;left: 208px;opacity: 1;}
        65% {top: 198px;left: 272px;opacity: 0}
        75% {top: 207px;left: 282px;opacity: 1}
        85% {top: 213px;left:291px;opacity: 0;}
        100% {top: 290px;left:392px;opacity: 1;}
    }
    @keyframes c7 {
        10% {top: 99px;left: 113px;}
        25% {top: 132px;left: 169px;opacity: 0;}
        45% {top: 156px;left: 208px;opacity: 1;}
        65% {top: 198px;left: 272px;opacity: 0}
        75% {top: 207px;left: 282px;opacity: 1}
        85% {top: 207px;left: 282px;opacity: 1}
        95% {top: 255px;left: 201px;opacity: 1}
        100% {top: 263px;left: 212px;opacity: 1}
    }
    @keyframes c8 {
        10% {top: 99px;left: 113px;}
        25% {top: 132px;left: 169px;opacity: 0;}
        45% {top: 156px;left: 208px;opacity: 1;}
        65% {top: 198px;left: 272px;opacity: 0}
        75% {top: 207px;left: 282px;opacity: 1}
        85% {top: 207px;left: 282px;opacity: 1}
        95% {top: 165px;left:355px;opacity: 0;}
        100% {top: 173px;left:368px;opacity: 1;}
    }
}
.gxxsjkmysql {
    width:539px;
    height: 402px;
    background: url("../../../assets/topol/4关系数据库MySQL.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 97px;left: 135px;-webkit-animation: c9 2s linear infinite;animation: c9 2s linear infinite;}
    .circle.circle2 {top: 97px;left: 135px;-webkit-animation: c10 2s linear infinite;animation: c10 2s linear infinite;}
    @keyframes c9 {
        10% {top: 108px;left: 147px;}
        50% {top: 146px;left: 94px;opacity: 1;}
        100% {top: 165px;left: 116px;opacity: 1;}
    }
    @keyframes c10 {
        10% {top: 108px;left: 147px;}
        50% {top: 81px;left: 191px;opacity: 1;}
        100% {top: 97px;left: 213px;opacity: 1;}
    }
}
.cdnnrff {
    width:633px;
    height: 455px;
    background: url("../../../assets/topol/5CDN内容分发.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 81px;left: 264px;-webkit-animation: c11 2s linear infinite;animation: c11 2s linear infinite;}
    .circle.circle2 {top: 80px;left: 339px;-webkit-animation: c12 4s linear infinite;animation: c12 4s linear infinite;}
    @keyframes c11 {
        30% {top: 205px;left: 59px;}
        40% {top: 226px;left: 27px;opacity: 0;}
        50% {top: 241px;left: 51px;opacity: 1;}
        100% {top: 280px;left: 112px;opacity: 1;}
    }
    @keyframes c12 {
        10% {top: 105px;left: 386px;}
        30% {top: 140px;left: 448px;opacity: 0;}
        40% {top: 184px;left: 526px;opacity: 1;}
        50% {top: 204px;left: 562px;opacity: 0;}
        60% {top: 229px;left: 530px;opacity: 0;}
        70% {top: 273px;left: 460px;opacity: 1;}
        80% {top: 273px;left: 460px;opacity: 0;}
        90% {top: 321px;left: 389px;opacity: 1;}
        100% {top: 372px;left: 310px;opacity: 1;}
    }
}
.gpuyzj {
    width:602px;
    height: 431px;
    background: url("../../../assets/topol/6GPU云主机.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 147px;left: 371px;-webkit-animation: c13 2s linear infinite;animation: c13 2s linear infinite;}
    .circle.circle2 {top: 182px;left: 397px;-webkit-animation: c14 2s linear infinite;animation: c14 2s linear infinite;}
    .circle.circle3 {top: 235px;left: 212px;-webkit-animation: c15 2s linear infinite;animation: c15 2s linear infinite;}
    .circle.circle4 {top: 272px;left: 246px;-webkit-animation: c16 2s linear infinite;animation: c16 2s linear infinite;}
    @keyframes c13 {
        100% {top: 175px;left: 410px;}
    }
    @keyframes c14 {
        100% {top: 156px;left: 358px;}
    }
    @keyframes c15 {
        100% {top: 263px;left: 257px;}
    }
    @keyframes c16 {
       100% {top: 244px;left: 197px;}
    }
}
.wlj {
    width:684px;
    height: 391px;
    background: url("../../../assets/topol/7物理机.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 62px;left: 165px;-webkit-animation: c17 2s linear infinite;animation: c17 2s linear infinite;}
    .circle.circle2 {top: 62px;left: 165px;-webkit-animation: c18 2s linear infinite;animation: c18 2s linear infinite;}
    .circle.circle3 {top: 220px;left: 418px;-webkit-animation: c19 2s linear infinite;animation: c19 2s linear infinite;}
    .circle.circle4 {top: 220px;left: 418px;-webkit-animation: c20 2s linear infinite;animation: c20 2s linear infinite;}
    @keyframes c17 {
        10% {top: 92px;left: 206px;}
        20% {top: 146px;left: 293px;opacity: 0;}
        30% {top: 159px;left: 311px;opacity: 1;}
        100% {top: 110px;left: 392px;opacity: 1;}
    }
    @keyframes c18 {
         10% {top: 92px;left: 206px;}
        20% {top: 146px;left: 293px;opacity: 0;}
        30% {top: 159px;left: 311px;opacity: 1;}
        100% {top: 205px;left: 238px;opacity: 1;}
    }
    @keyframes c19 {
        10% {top: 201px;left: 390px;}
        100% {top: 251px;left: 309px;}
    }
    @keyframes c20 {
       10% {top: 201px;left: 390px;}
       100% {top: 147px;left: 478px;}
    }
}
.zsy {
    width:598px;
    height: 411px;
    background: url("../../../assets/topol/8专属云.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 65px;left: 79px;-webkit-animation: c21 4s linear infinite;animation: c21 4s linear infinite;}
    .circle.circle2 {top: 65px;left: 79px;-webkit-animation: c22 4s linear infinite;animation: c22 4s linear infinite;}
    .circle.circle3 {top: 65px;left: 79px;-webkit-animation: c23 4s linear infinite;animation: c23 4s linear infinite;}
    .circle.circle4 {top: 311px;left: 186px;-webkit-animation: c24 2s linear infinite;animation: c24 2s linear infinite;}
    @keyframes c21 {
        10% {top: 82px;left: 108px;}
        20% {top: 129px;left: 187px;opacity: 0;}
        30% {top: 150px;left: 234px;opacity: 1;}
        40% {top: 109px;left: 299px;opacity: 1;}
        50% {top: 125px;left: 335px;opacity: 0;}
        60% {top: 191px;left: 436px;opacity: 1;}
        70% {top: 207px;left: 469px;opacity: 1;}
        80% {top: 254px;left: 404px;opacity: 1;}
        90% {top: 254px;left: 404px;opacity: 1;}
        100% {top: 267px;left:428px;opacity: 1;}
    }
    @keyframes c22 {
        10% {top: 82px;left: 108px;}
        20% {top: 129px;left: 187px;opacity: 0;}
        30% {top: 150px;left: 234px;opacity: 1;}
        40% {top: 168px;left: 269px;opacity: 0;}
        50% {top: 237px;left: 367px;opacity: 0;}
        60% {top: 237px;left: 367px;opacity: 0;}
        70% {top: 237px;left: 367px;opacity: 0;}
        80% {top: 254px;left: 404px;opacity: 1;}
        90% {top: 254px;left: 404px;opacity: 1;}
        100% {top: 267px;left:428px;opacity: 1;}
    }
    @keyframes c23 {
        10% {top: 82px;left: 108px;}
        20% {top: 129px;left: 187px;opacity: 0;}
        30% {top: 150px;left: 234px;opacity: 1;}
        40% {top: 206px;left: 158px;opacity: 1;}
        50% {top: 222px;left: 192px;opacity: 0;}
        60% {top: 222px;left: 192px;opacity: 1;}
        70% {top: 306px;left: 326px;opacity: 1;}
        80% {top: 254px;left: 404px;opacity: 1;}
        90% {top: 254px;left: 404px;opacity: 1;}
        100% {top: 267px;left:428px;opacity: 1;}
    }
    @keyframes c24 {
       100% {top: 291px;left: 212px;}
    }
}
.yzb {
    width:776px;
    height: 448px;
    background: url("../../../assets/topol/9云直播.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 263px;left: 58px;-webkit-animation: c25 2s linear infinite;animation: c25 2s linear infinite;}
    .circle.circle2 {top: 323px;left: 123px;-webkit-animation: c26 2s linear infinite;animation: c26 2s linear infinite;}
    .circle.circle3 {top: 388px;left: 202px;-webkit-animation: c27 2s linear infinite;animation: c27 2s linear infinite;}
    .circle.circle4 {top: 283px;left: 316px;-webkit-animation: c28 4s linear infinite;animation: c28 4s linear infinite;}
    .circle.circle5 {top: 126px;left: 544px;-webkit-animation: c29 2s linear infinite;animation: c29 2s linear infinite;}
    @keyframes c25 {
        100% {top: 228px;left: 121px;}
    }
    @keyframes c26 {
        100% {top: 295px;left: 178px;}
    }
    @keyframes c27 {
        100% {top: 356px;left: 256px;}
    }
    @keyframes c28 {
       25% {top: 241px;left: 407px;}
       50% {top:213px;left: 383px;}
       75% {top: 241px;left: 407px;}
       100% {top: 191px;left: 515px;}
    }
    @keyframes c29 {
       100% {top: 112px;left: 575px;}
    }
}
.ddsgfip {
    width:776px;
    height: 497px;
    background: url("../../../assets/topol/10DDOS高仿IP.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 89px;left: 313px;-webkit-animation: c30 2s linear infinite;animation: c30 2s linear infinite;}
    .circle.circle2 {top: 225px;left: 84px;-webkit-animation: c31 2s linear infinite;animation: c31 2s linear infinite;}
    .circle.circle3 {top: 251px;left: 101px;-webkit-animation: c32 2s linear infinite;animation: c32 2s linear infinite;}
    .circle.circle4 {top: 147px;left: 203px;-webkit-animation: c33 2s linear infinite;animation: c33 2s linear infinite;}
    .circle.circle5 {top: 169px;left: 221px;-webkit-animation: c34 2s linear infinite;animation: c34 2s linear infinite;}
    .circle.circle6 {top: 256px;left: 329px;-webkit-animation: c35 4s linear infinite;animation: c35 4s linear infinite;}
    .circle.circle7 {top: 429px;left: 589px;-webkit-animation: c36 2s linear infinite;animation: c36 2s linear infinite;}
    @keyframes c30 {
        100% {top: 111px;left: 343px;}
    }
    @keyframes c31 {
        100% {top: 238px;left: 104px;}
    }
    @keyframes c32 {
        100% {top: 234px;left: 75px;}
    }
    @keyframes c33 {
       100% {top: 171px;left: 245px;}
    }
    @keyframes c34 {
      100% {top: 155px;left: 195px;}
    }
    @keyframes c35 {
    //   10% {top: 287px;left: 377px;}
      20% {top: 287px;left: 377px;}
      30% {top:331px;left: 454px;opacity: 0;}
      40% {top:352px;left: 485px;opacity: 1;}
      60% {top:394px;left: 559px;opacity: 0;}
      100% {top:418px;left: 597px;opacity: 1;}
    }
    @keyframes c36 {
        20% {top: 404px;left: 548px;}
      30% {top:362px;left: 476px;opacity: 0;}
      40% {top:343px;left: 445px;opacity: 1;}
      60% {top:303px;left: 375px;opacity: 0;}
      100% {top:265px;left: 314px;opacity: 1;}
    }
}
.webyyfhq {
    width:683px;
    height: 422px;
    background: url("../../../assets/topol/11Web应用防火墙.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 58px;left: 34px;-webkit-animation: c37 8s linear infinite;animation: c37 8s linear infinite;}
    @keyframes c37 {
        10% {top: 91px;left: 89px;}
        15% {top: 139px;left: 163px;opacity: 0;}
        20% {top: 174px;left: 222px;opacity: 1;}
        25% {top: 225px;left: 306px;opacity: 0;}
        30% {top: 258px;left: 361px;opacity: 1;}
        35% {top: 276px;left: 390px;opacity: 0;}
        40% {top: 336px;left: 296px;opacity: 1;}
        50% {top: 355px;left: 261px;opacity: 0;}
        60% {top: 350px;left: 295px;opacity: 0;}
        70% {top: 309px;left: 363px;opacity: 1;}
        80% {top: 282px;left: 403px;opacity: 0;}
        90% {top: 305px;left: 445px;opacity: 0;}
        100% {top: 342px;left: 500px;opacity: 1;}
    }
}
.yjgs {
    width:609px;
    height: 445px;
    background: url("../../../assets/topol/12云间高速.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    .circle {position: absolute;width: 40px;}
    .circle.circle1 {top: 70px;left: 82px;-webkit-animation: c38 4s linear infinite;animation: c38 4s linear infinite;}
    .circle.circle2 {top: 70px;left: 82px;-webkit-animation: c39 4s linear infinite;animation: c39 4s linear infinite;}
    .circle.circle3 {top: 70px;left: 82px;-webkit-animation: c40 4s linear infinite;animation: c40 4s linear infinite;}
    .circle.circle4 {top: 70px;left: 82px;-webkit-animation: c41 4s linear infinite;animation: c41 4s linear infinite;}
    @keyframes c38 {
        10% {top: 117px;left: 155px;}
        60% {top: 14px;left: 331px;}
        100% {top: 88px;left: 452px;}
    }
    @keyframes c39 {
        10% {top: 117px;left: 155px;}
        60% {top: 200px;left: 17px;}
        100% {top: 346px;left: 266px;}
    }
    @keyframes c40 {
        10% {top: 117px;left: 155px;}
        40% {top: 200px;left: 17px;}
        60% {top: 323px;left: 228px;}
        80% {top: 238px;left: 378px;}
        100% {top: 304px;left: 491px;}
    }
    @keyframes c41 {
        10% {top: 117px;left: 155px;}
        40% {top: 200px;left: 17px;}
        60% {top: 221px;left: 52px;}
        80% {top: 265px;left: -17px;}
        100% {top: 299px;left: 37px;}
    }
}
</style>
