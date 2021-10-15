<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart :id='"chart18"' width="100%" height="100%" ref="chart18" :echartsOption="option18" />
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
        option18: {
    title:{
        show: true ,
        text: 'spl 注入攻击数' ,
        right: 35,
        textStyle: {
            color: "#55698e",
            fontSize: "11px",
        }
    },
        grid: {
        top: 30,
          bottom: 30,
          left: 35,
          right:75,
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        // boundaryGap: [0, 0.01],
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
    yAxis: {
        type: 'category',
        data: ['高级', '中级', '低级'],
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
    series: [
        {
            name: '',
            type: 'bar',
            data: [170462, 61905, 372509],
            itemStyle:{
                color:'#4cbefa',
            },
            barWidth:15,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true,
                color:'#4cbefa'
            },
            
        }
    ]
}
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('web应用防火墙')) {
          this.$nextTick(()=>{

            let data18 = this.data.filter(item=>item.indexNum==1).map(item=>item.endNum);
            this.option18.series[0].data = data18;
            setTimeout(()=>{
              let data18 = this.data.filter(item=>item.indexNum==1).map(item=>{
                return  parseInt(Math.random()*(parseInt(item.endNum+10000)-parseInt(item.endNum-10000))+parseInt(item.endNum-10000))
              }
              );
              this.option18.series[0].data = data18;
            },1000)
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
