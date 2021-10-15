<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart27"' width="100%" height="100%" ref="chart27" :echartsOption="option27" />
        </div>
  </div>
</template>

<script>
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
    },
  },
  components: {
    Chart
  },
  data() {
    return {
        option27: {
            grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:10,
        containLabel: true
    },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [],
                // axisLine:{
                //     show:false
                // },
                axisTick:{
                    show:false
                },
                splitLine:{
                    show:false
                },
                axisLabel:{
                    show:true,
                    color: "#55698e",
                }
            },
            yAxis: {
                type: 'value',
                max:100,
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                splitLine:{
                    show:false
                },
                axisLabel:{
                    show:true,
                    color: "#55698e",
                }
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth:true,//设置折线图平滑
                symbol: "none",
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
                    color: "#6ed5f0", // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#112c43", // 0% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
                }
            }]
        }

    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('GPU云主机')) {
          this.$nextTick(()=>{

            // this.animateAll();
            let data27 = this.data.filter(item=>item.indexNum==2).map((item)=>item.endNum);
            this.option27.series[0].data = data27;
            this.option27.xAxis.data = data27.map((item,index)=>index+1)
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
    
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content13 {
  width: 100%;
  height: 100%;
}
.flex {
    display: flex;
    justify-content: space-between;
    padding:0 35px;
    color: #acc3eb;
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
