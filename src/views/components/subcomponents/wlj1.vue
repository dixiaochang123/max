<template>
  <div class="content13">
    <div class="chart1_1">
      <Chart :id='"chart100"' width="100%" height="100%" ref="chart100" :echartsOption="option100" />
    </div>
    <div class="chart1_1">
      <Chart :id='"chart1001"' width="100%" height="100%" ref="chart1001" :echartsOption="option1001" />
    </div>
    <div class="chart1_1">
      <Chart :id='"chart1002"' width="100%" height="100%" ref="chart1002" :echartsOption="option1002" />
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
const echarts = require("echarts");
import deepcopy from "@/utils/deepcopy";
let option100 = {
         series: [{
        name: 'Pressure',
        type: 'gauge',
        detail: {
            formatter: '{value}'
        },
        center: ['50%', '60%'] ,
        radius: '75%' ,
        min: 0 ,
        max: 100 ,
        splitNumber: 4,
        axisLine:{ 
          show: true ,
          roundCap: false ,
          lineStyle: {
            color: [
                    [1,new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "#3dbcf1"
                      },
                      {
                        offset: 0.6,
                        color: "#30d4d5"
                      },
                      {
                        offset: 1,
                        color: "#00fb9c"
                      }
                    ])
                  ]
                ]
          },
          
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: [{
            value: 50,
            title:'CPU使用率',
            detail: {
                show: true,
                offsetCenter: [0, '85%'],
                color: '#bdd6f5',
                fontSize: 15,
                lineHeight: 20,
                formatter: function(params) {
                    return `${params}%\nCPU使用率`
                }
            }
        }]
    }]
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
  components:{
    Chart
  },
  data() {
    return {
      option100,
      option1001:deepcopy(option100),
      option1002:deepcopy(option100),
      time:null
    };
  },
  watch: {
    productseleted: {
      handler: function (val) {
        if (val && val.includes("物理机")) {
          this.$nextTick(() => {

            // let math = parseInt(Math.random()*(parseInt(this.data[0].endNum+5)-parseInt(this.data[0].endNum-5))+parseInt(this.data[0].endNum-5));

            this.option100.series[0].data[0].value = this.data[0].endNum;
            this.option100.series[0].data[0].detail.formatter = `${this.data[0].endNum}%\n${this.data[0].title}`

            this.option1001.series[0].data[0].value = this.data[1].endNum;
            this.option1001.series[0].data[0].detail.formatter = `${this.data[1].endNum}%\n${this.data[1].title}`
            this.option1002.series[0].data[0].value = this.data[2].endNum;
            this.option1002.series[0].data[0].detail.formatter = `${this.data[2].endNum}%\n${this.data[2].title}`


            this.time = setInterval(()=>{
              this.$nextTick(()=>{

                let math = parseInt(Math.random()*(parseInt(this.data[0].endNum+5)-parseInt(this.data[0].endNum-5))+parseInt(this.data[0].endNum-5));
                let math1 = parseInt(Math.random()*(parseInt(this.data[1].endNum+1)-parseInt(this.data[1].endNum-1))+parseInt(this.data[1].endNum-1));
                let math2 = parseInt(Math.random()*(parseInt(this.data[2].endNum+3)-parseInt(this.data[2].endNum-3))+parseInt(this.data[2].endNum-3));
                this.option100.series[0].data[0].value = parseInt(math);
                this.option100.series[0].data[0].detail.formatter = `${parseInt(math)}%\n${this.data[0].title}`
  
                this.option1001.series[0].data[0].value = parseInt(math1);
                this.option1001.series[0].data[0].detail.formatter = `${parseInt(math1)}%\n${this.data[1].title}`
                this.option1002.series[0].data[0].value = parseInt(math2);
                this.option1002.series[0].data[0].detail.formatter = `${parseInt(math2)}%\n${this.data[2].title}`
              })

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
  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
$myColor: #40dcf8;
.content13 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.chart13child {
  width: 528px;
  height: 213px;
  padding-bottom: 5px;
  position: relative;
  margin: 0 auto;
  img {
    width: 510;
    height: 180px;
    // position: absolute;
    // top: 5px;
    // left: 133px;
  }
  .pos {
    position: absolute;
    top: 145px;
    left: 87px;
    color: #ffffff;
    text-align: right;
    p {
      line-height: 35px;
      font-size: 14px;
    }
  }
  .pos2 {
    top: 171px;
    left: 164px;
  }
  .pos3 {
    top: 134px;
    left: 235px;
  }
  .pos4 {
    top: 173px;
    left: 297px;
  }
  .pos5 {
    top: 168rem;
    left: 392rem;
  }
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
.chart1_1 {
      height: calc(100% - 60px);
      width: calc(100% / 3);
}

</style>
