<template>
  <div class="content13">
    <div class="chart1_1">
      <Chart :id='"chart10"' width="100%" height="100%" ref="chart10" :echartsOption="option10" />
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
    Chart,
  },
  data() {
    return {
      option10: {
        color:['rgb(10, 252, 165)','#f99f60'],
        title: {
            text: '当前的',
            textAlign:'right',
            right: 30 ,
            bottom: 8 ,
            textStyle: {
              color:'#43e0ff',
              fontSize:12,
              lineHeight:20
            },     
            subtext: '1.129KB\n0' ,
            subtextStyle: {
            color: '#fff' ,
            fontSize:12,
            lineHeight:20
            }
        },
        legend: {
          data: [
           { name:"马上获得锁的查询数目",
           icon:'rect',
           textStyle:{
              color:'#ffffff',
              fontSize: 12 
            },
            itemStyle:{
              color:'rgb(10, 252, 165)',
            },
           },
            { name: "不能马上获得锁的数据",
              icon:'rect',
              textStyle:{
              color:'#ffffff',
              fontSize: 12 
            },
            itemStyle:{
              color:'rgb(249, 159, 96)',
            },
            }
            ],
          y: "bottom",
          left:35,
          orient: "vertical",
          itemWidth: 20 ,
          itemHeight: 8 ,
        },
        grid: {
          left: 35,
          right: 70,
          bottom: 70,
          top: 20,
          containLabel: true,
        },
        // calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["00:00", "00:20", "00:40", "01:00", "01:20", "01:40", "02:00","02:20", "02:40", "03:00", "03:20", "03:40", "04:00", "04:20","04:40", "05:00", "05:20", "05:40", "06:00", "06:20", "06:40","07:00", "07:20", "07:40", "08:00", "08:20", "08:40", "09:00","09:20", "09:40", "10:00", "10:20", "10:40", "11:00", "11:20","11:40", "12:00", "12:20","12:40","13:00", "13:20","13:40","14:00", "14:20","14:40", "15:00", "15:20","15:40", "16:00", "16:20","16:40", "17:00", "17:20","17:40", "18:00", "18:20","18:40", "19:00", "19:20","19:40", "20:00", "20:20","20:40", "21:00", "21:20","21:40", "22:00", "22:20","22:40", "23:00", "23:20","23:40", "24:00", ],
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgb(37, 71, 99)",
                width: 1,
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "rgb(255, 255, 255)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              show: false,
              lineStyle: {
                width: 1,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgb(37, 71, 99)",
              },
            },
            axisLabel: {
              textStyle: {
                color: "rgb(255, 255, 255)",
              },
            },
          },
        ],
        series: [
          {
            name: "马上获得锁的查询数目",
            type: "line",
            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default",
                  color: "rgba(10, 252, 165, 0.8)",
                },
                lineStyle: {
                  color: "rgb(10, 252, 165)",
                },
              },
            },
            
            symbol:'none',
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
          {
            name: "不能马上获得锁的数据",
            type: "line",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default",
                  color: "rgba(249, 159, 96,0.8)",
                },
                borderWidth: 0,
                lineStyle: {
                  color: "#f99f60",
                },
              },
            },
            data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310],
            symbol:'none',
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
        ],
      },
    };
  },
  watch: {
    productseleted: {
      handler: function (val) {
        if (val && val.includes("关系数据库MySQL")) {
          this.$nextTick(() => {
            // this.animateAll();
            let data10 = this.data
              .filter((item) => item.indexNum == 1)
              .map((item) => item.endNum);
            let data11 = this.data
              .filter((item) => item.indexNum == 2)
              .map((item) => item.endNum);
            console.log(data10);
            this.option10.series[0].data = data10;
            this.option10.series[1].data = data11;
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    // this.animateAll();
  },
  methods: {},
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
