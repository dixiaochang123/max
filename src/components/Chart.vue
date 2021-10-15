<template>
  <div :class="className" :id="id" :style="{height:height,width:width}" />
</template>

<script>
const echarts = require("echarts");

export default {
  props: {
    echartsOption: Object,
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "200px",
    },
    height: {
      type: String,
      default: "200px",
    },
  },
  data() {
    return {
      chart: null,
      time:null
    };
  },
  watch: {
    id(val) {
      console.log(val);
      if (val == "chart33" || val == "chart29") {
        this.initChart();
      }
    },
    echartsOption: {
      handler: function (val) {
        if (
          this.id == "chart100" ||
          this.id == "chart1001" ||
          this.id == "chart1002" ||
          this.id == "chart1000" ||
          this.id == "chart10001" ||
          this.id == "chart10002" ||
          this.id == "chart30" ||
          // this.id == "chart14" ||
          this.id == "chart18"
        ) {
          try {
            
            this.time = setInterval(() => {
              this.initChart();
            }, 5000);
          } catch (error) {
            
          }
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.initChart();
    // if(this.id=='chart100' || this.id=='chart1001' || this.id=='chart1002') {
    // setInterval(()=>{

    //     this.initChart()

    // },2000)
    // }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    clearInterval(this.time)
    this.chart.dispose();
    this.chart = null;
  },
  cleartime() {
    clearInterval(this.time)
    this.time = null
  },
  methods: {
    initChart(events) {
      // if (!!this.chart) {
      //   this.chart.dispose();
      //   this.chart = null;
      // }
      // 新建一个promise对象
       this.$nextTick(()=>{

         let newPromise = new Promise((resolve) => {
           resolve();
         });
         //然后异步执行echarts的初始化函数
         newPromise.then(() => {
             this.chart = echarts.init(document.getElementById(this.id));
   
             this.chart.setOption(this.echartsOption);
         });
       })
    },
  },
};
</script>
