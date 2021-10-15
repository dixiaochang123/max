<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart6"' width="100%" height="100%" ref="chart6" :echartsOption="option6" />
        </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import { indexInfo } from "@/utils/data/indexData.js";
import { mapGetters } from "vuex";
import { TweenMax } from "gsap";

export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
    productseleted: {
      type: Array,
      default: [],
    },
  },
  components: {
    Chart
  },
  data() {
    return {
        option6: {
        grid: {
          top: 10,
          bottom: 30,
          left: 75,
          right:35
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          splitLine: {
            show: true,
            lineStyle: {
              color: "#122e47",
            },
          },
          axisLabel: {
            color: "#55698e",
            fontSize: "11px",
            interval:0
          },
        },
        // #55698e
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "#122e47",
            },
          },
          axisLabel: {
            color: "#55698e",
            fontSize: "11px",
          },
        },
        series: [
          {
            data: [],
            type: "line",
            animationDuration: 6000,
            animationEasing: "cubicInOut",
            lineStyle: {
              color: "#4da3ff",
            },
            itemStyle: {
              color: "#4da3ff",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(252,79,98,0.8)", // 100% 处的颜色
                  },
                  {
                    offset: 0.25,
                    color: "rgba(254,225,1,0.8)", // 0% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: "rgba(76,190,250,0.8)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(2,255,164,0.8)", // 0% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      },
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('弹性云主机')) {
          this.$nextTick(()=>{

            // this.animateAll();
             let data6 = indexInfo[0].data.filter(item=>item.indexNum==6).map(item=>item.endNum);
            this.option6.series[0].data = data6;
          })
        }
        
      },
      deep:true,
      immediate: true
    }
  },
  mounted() {

  },
  methods: {
    
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
}

.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
