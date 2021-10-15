<template>
  <div class="content13">
       <div class="chart1_1">
          <img style="mix-blend-mode: lighten;" src="../../../assets/home/组586_70.png" alt="">
          <img :style="{ transform: `rotate(${showarrow}deg)`,transition: 'transform 10s'}" class="zhizhen" src="../../../assets/home/指针.png" alt="">
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import { mapGetters } from "vuex";
import { TweenMax } from "gsap";
import Chart from "@/components/Chart";

export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
    productseleted: {
      type: Array,
      default: [],
    }
  },
  components: {
    Chart
  },
  data() {
    return {
      showarrow:"0"
    };
  },
  computed: {
    // showarrow() {
    //   //计算isShow属性值
    //   return this.data ? this.data[0].endNum/(10000/180) : "0";
    // },
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('对象存储OOS')) {
          this.$nextTick(()=>{

            this.animateAll();
            })
        }
        
      },
      deep:true,
      immediate: true
    }
  },
  mounted() {
    // this.animateAll();
  },
  methods: {
    animateAll() {
      this.showarrow = this.data[0].endNum/(10000/180)
    }
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content13 {
  width: 100%;
  height: 100%;
}
.chart1_1 {
      height: calc(100% - 60px);
      width: 100%;
      padding-top:10px;
      position: relative;
      img {
        width: 85%;
        height: 85%;
      }
      .zhizhen {
        width: 86px;
        height: 22px;
          position: absolute;
          bottom: 85px;
          left: 0;
          right: 0;
          margin:auto;
          transition: transform 10s;
      }
}

.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
