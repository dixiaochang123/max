<template>
  <div class="content13">
    <div class="chart1_1">
      <Chart :id='"chart19"' width="100%" height="100%" ref="chart19" :echartsOption="option19" />
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
// import all from "./ddos1Data"
const echarts = require("echarts");
import { indexInfo } from "@/utils/data/indexData.js";
var xData = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];
var line = [
  "10300",
  "20050",
  "8040",
  "46008",
  "20809",
  "45087",
  "50000",
  "30809",
  "27809",
  "16809",
  "26809",
  "46809",
];
var attr = {
  name: "月平均单价",
  unit: "元/单",
};

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
      option19: {
        title: {
          text: "高危漏洞类型统计",
          left: "center",
          bottom: 0,
          textStyle: {
            color: "#4cbefa",
            fontSize:16
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "60%",
            clockwise: true,
            avoidLabelOverlap: true,
            data: [],
            label: {
              show: true,
              formatter: "{b} : {c}",
            },
            label: {
              normal: {
                formatter: (params) => {
                  console.log(params);
                  var percent =
                    params.percent.toFixed(1) > 5
                      ? ""
                      : "{percent|" + params.percent.toFixed(0) + "%}";
                  return "{name|" + params.name + "}  " + percent;
                },
                rich: {
                  name: {
                    fontSize: 11,
                    color: "#4cbefa",
                  },
                  percent: {
                    color: "#fff",
                  },
                  value: {
                    fontSize: 11,
                    color: "#4cbefa",
                  },
                },
              },
            },
            avoidLabelOverlap: true,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
          {
            name: "访问来源",
            type: "pie",
            radius: "60%",
            clockwise: true,
            avoidLabelOverlap: true,
            data: [],
            label:{            //饼图图形上的文本标签
                normal:{
                    show:true,
                    position:'inner', //标签的位置
                    textStyle : {
                        fontWeight : 300,
                        color:'#fff',
                        fontSize : 11    //文字的字体大小
                    },
                    // formatter:'{d}%',
                    formatter:(params) => {
                      let percent = params.percent > 5? params.percent+'%':'';
                      return percent;
                    },

                    
                }
            },
            avoidLabelOverlap: true,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  watch: {
    productseleted: {
      handler: function (val) {
        if (val && val.includes("web应用防火墙")) {
          this.$nextTick(() => {
            // this.animateAll();
            let data19 = this.data
              .filter((item) => item.indexNum == 2)
              .map((item) => {
                return {
                  value: item.endNum,
                  name: item.name,
                };
              });
            this.option19.series[0].data = data19;
            this.option19.series[1].data = data19;
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
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
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
