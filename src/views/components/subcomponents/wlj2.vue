<template>
  <div class="content13786312">
    <div class="chart1_444">
      <Chart :id='"chart1000"' width="100%" height="100%" ref="chart1000" :echartsOption="option1000" />
    </div>
    <div class="chart1_444">
      <Chart :id='"chart10001"' width="100%" height="100%" ref="chart10001" :echartsOption="option10001" />
    </div>
    <div class="chart1_444">
      <Chart :id='"chart10002"' width="100%" height="100%" ref="chart10002" :echartsOption="option10002" />
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
const echarts = require("echarts");
import deepcopy from "@/utils/deepcopy";
let option1000= {
        series: [
          {
            name: "Pressure",
            type: "gauge",
            detail: {
              formatter: "{value}",
            },
            center: ["50%", "60%"],
            radius: "75%",
            min: 0,
            max: 100,
            splitNumber: 4,
            axisLine: {
              show: true,
              roundCap: false,
              lineStyle: {
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "#3dbcf1",
                      },
                      {
                        offset: 0.6,
                        color: "#30d4d5",
                      },
                      {
                        offset: 1,
                        color: "#00fb9c",
                      },
                    ]),
                  ],
                ],
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            data: [
              {
                value: 50,
                detail: {
                  show: true,
                  offsetCenter: [0, "85%"],
                  color: "#bdd6f5",
                  fontSize: 15,
                  lineHeight: 20,
                  formatter: function (params) {
                    return `${params}%\nCPU使用率`;
                  },
                },
              },
            ],
          },
        ],
      }
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
      option1000,
      option10001:deepcopy(option1000),
      option10002:deepcopy(option1000),
      time:null
    };
  },
  watch: {
    productseleted: {
      handler: function (val) {
        if (val && val.includes("物理机")) {
          this.$nextTick(() => {
            this.option1000.series[0].data[0].value = this.data[3].endNum;
            this.option1000.series[0].data[0].detail.formatter = `${this.data[3].endNum}k\n${this.data[3].title}`

            this.option10001.series[0].data[0].value = this.data[4].endNum;
            this.option10001.series[0].data[0].detail.formatter = `${this.data[4].endNum}%\n${this.data[4].title}`

            this.option10002.series[0].data[0].value = this.data[5].endNum;
            this.option10002.series[0].data[0].detail.formatter = `${this.data[5].endNum}%\n${this.data[5].title}`

            this.time = setInterval(()=>{
              let math = parseFloat(Math.random()*(parseFloat(this.data[3].endNum+0.5)-parseFloat(this.data[3].endNum-0.5))+parseFloat(this.data[3].endNum-0.5)).toFixed(2);
              let math1 = parseInt(Math.random()*(parseInt(this.data[4].endNum+2)-parseInt(this.data[4].endNum-2))+parseInt(this.data[4].endNum-2));
              let math2 = parseInt(Math.random()*(parseInt(this.data[5].endNum+2)-parseInt(this.data[5].endNum-2))+parseInt(this.data[5].endNum-2));
              this.option1000.series[0].data[0].value = parseFloat(math);
              this.option1000.series[0].data[0].detail.formatter = `${parseFloat(math)}k\n${this.data[3].title}`

              this.option10001.series[0].data[0].value = parseFloat(math1);
              this.option10001.series[0].data[0].detail.formatter = `${parseInt(math1)}%\n${this.data[4].title}`
              this.option10002.series[0].data[0].value = parseInt(math2);
              this.option10002.series[0].data[0].detail.formatter = `${parseInt(math2)}%\n${this.data[5].title}`

            },5000)
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  beforeDestroy() {
    clearInterval(this.time)
  },
  mounted() {

  },
  methods: {},
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content13786312 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
.chart1_444 {
  height: calc(100% - 60px);
  width: calc(100% / 3);
}
</style>
