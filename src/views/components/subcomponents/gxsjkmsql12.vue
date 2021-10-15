<template>
  <div class="content13123">
       <div class="chart1_1">
          <Chart :id='"chart17"' width="100%" height="100%" ref="chart17" :echartsOption="option17" />
        </div>
  </div>
</template>

<script>
import { indexInfo } from "@/utils/data/indexData.js";
import { mapGetters } from "vuex";
import { TweenMax } from "gsap";
const echarts = require("echarts");
import Chart from "@/components/Chart";
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 9, shape.y - 9];
    const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  },
});
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
    const c4 = [shape.x + 18, shape.y - 9];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 18, shape.y - 9];
    const c3 = [shape.x + 9, shape.y - 18];
    const c4 = [shape.x - 9, shape.y - 9];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
echarts.graphic.registerShape("CubeLeft", CubeLeft);
echarts.graphic.registerShape("CubeRight", CubeRight);
echarts.graphic.registerShape("CubeTop", CubeTop);
const MAX = [6000, 6000, 6000, 6000, 6000,6000,6000];
const VALUE = [2012, 1230, 3790, 2349, 1654];

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
      option17: {
        grid: {
          left: 35,
          right: 70,
          bottom: 0,
          top: 40,
          containLabel: true,
        },
        xAxis: {
          show: false,
          type: "category",
          data: ["德州", "德城区", "陵城区", "禹城市", "禹城市","禹城市","禹城市"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "white",
            },
          },
          offset: 20,
          axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
              color: "#7DFFFD",
            },
          },
          axisLabel: {
            fontSize: 10,
          },
        },
        yAxis: {
          type: "value",
          position: "right",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2a516a",
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: true,
            inside:true
          },
          axisLabel: {
            fontSize: 16,
            show:false
          },
          boundaryGap: ["20%", "20%"],
        },
        series: [
          {
            type: "custom",
            renderItem: function (params, api) {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(47,102,192,.27)",
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(59,128,226,.27)",
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(72,156,221,.27)",
                    },
                  },
                ],
              };
            },
            data: MAX,
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
          {
            type: "custom",
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "#3B80E2",
                        },
                        {
                          offset: 1,
                          color: "#49BEE5",
                        },
                      ]),
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "#3B80E2",
                        },
                        {
                          offset: 1,
                          color: "#49BEE5",
                        },
                      ]),
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "#3B80E2",
                        },
                        {
                          offset: 1,
                          color: "#49BEE5",
                        },
                      ]),
                    },
                  },
                ],
              };
            },
            data: indexInfo[2].data.filter(item=>item.indexNum==3).map(item=>item.firstNum),
            animationDuration: 6000,
            animationEasing: "cubicInOut",
          },
          {
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: (e) => {
                  switch (e.name) {
                    case "10kV线路":
                      return VALUE[0];
                    case "公用配变":
                      return VALUE[1];
                    case "35kV主变":
                      return VALUE[2];
                    case "水":
                  }
                },
                fontSize: 16,
                color: "#4bbefa",
                offset: [4, -25],
              },
            },
            itemStyle: {
              color: "transparent",
            },
            // data: [4600, 3500, 5000, 3800, 3500],
            data: indexInfo[2].data.filter(item=>item.indexNum==3).map(item=>item.firstNum),
            animationDuration: 10000,
            animationEasing: "cubicInOut",
          },
          {
            type: "line",
            // data: [4600, 3500, 5000, 3800, 3500],
            data: indexInfo[2].data.filter(item=>item.indexNum==3).map(item=>item.firstNum),
            animationDuration: 6000,
            animationEasing: "cubicInOut",
            symbol:"none",
            lineStyle:{
                color:"transparent"
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    {yAxis: 5000},
                ],
                label:{
                    color:"#546879"
                },
                lineStyle:{
                    color:"#0b4766"
                }
            }
          },
        ],
      },
    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('关系数据库MySQL')) {
          this.$nextTick(()=>{

            // this.animateAll();
            let data17 = indexInfo[2].data.filter(item=>item.indexNum==3).map(item=>item.endNum)
            console.log('关系数据库MySQL',data17)
            this.option17.series[1].data = data17;
            this.option17.series[2].data = data17;
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
.content13123 {
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
