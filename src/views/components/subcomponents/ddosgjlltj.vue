<template>
  <div class="content13">
       <div class="chart1_1">
          <Chart v-if="active=='被攻击统计'" :id='"chart29"' width="100%" height="100%" ref="chart29" :echartsOption="option29" />
          <Chart v-if="active=='发起攻击统计'" :id='"chart33"' width="100%" height="100%" ref="chart33" :echartsOption="option33" />
          <div class="legend">
              <span :class="[active=='被攻击统计'?'active':'']" @click="active = '被攻击统计'">被攻击统计</span><br /><br />
              <span :class="[active=='发起攻击统计'?'active':'']" @click="active = '发起攻击统计'">发起攻击统计</span>
          </div>
        </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
    var seriesData = [
      
      {
      name: '北京',
      value: 100
    }, {
      name: '天津',
      value: 0
    }, {
      name: '上海',
      value: 600
    }, {
      name: '重庆',
      value: 0
    }, {
      name: '河北',
      value: 400
    }, {
      name: '河南',
      value: 400
    }, {
      name: '云南',
      value: 0
    }, {
      name: '辽宁',
      value: 0
    }, {
      name: '黑龙江',
      value: 600
    }, {
      name: '湖南',
      value: 500
    }, {
      name: '安徽',
      value: 500
    }, {
      name: '山东',
      value: 600
    }, {
      name: '新疆',
      value: 400
    }, {
      name: '江苏',
      value: 600
    }, {
      name: '浙江',
      value: 600
    }, {
      name: '江西',
      value: 0
    }, {
      name: '湖北',
      value: 600
    }, {
      name: '广西',
      value: 60
    }, {
      name: '甘肃',
      value: 0
    }, {
      name: '山西',
      value: 60
    }, {
      name: '内蒙古',
      value: 0
    }, {
      name: '陕西',
      value: 600
    }, {
      name: '吉林',
      value: 0
    }, {
      name: '福建',
      value: 600
    }, {
      name: '贵州',
      value: 300
    }, {
      name: '广东',
      value: 600
    }, {
      name: '青海',
      value: 0
    }, {
      name: '西藏',
      value: 300
    }, {
      name: '四川',
      value: 600
    }, {
      name: '宁夏',
      value: 0
    }, {
      name: '海南',
      value: 60
    }, {
      name: '台湾',
      value: 0
    }, {
      name: '香港',
      value: 0
    }, {
      name: '澳门',
      value: 0
    }
  ];
    
    var seriesData1 = [

      {
      name: '北京',
      value: 300
    }, {
      name: '天津',
      value: 100
    }, {
      name: '上海',
      value: 400
    }, {
      name: '重庆',
      value: 0
    }, {
      name: '河北',
      value: 400
    }, {
      name: '河南',
      value: 400
    }, {
      name: '云南',
      value: 122
    }, {
      name: '辽宁',
      value: 400
    }, {
      name: '黑龙江',
      value: 600
    }, {
      name: '湖南',
      value: 60
    }, {
      name: '安徽',
      value: 0
    }, {
      name: '山东',
      value: 360
    }, {
      name: '新疆',
      // value: 400
      value: 600
    }, {
      name: '江苏',
      value: 0
    }, {
      name: '浙江',
      value: 0
    }, {
      name: '江西',
      value: 0
    }, {
      name: '湖北',
      value: 600
    }, {
      name: '广西',
      value: 60
    }, {
      name: '甘肃',
      value: 0
    }, {
      name: '山西',
      value: 60
    }, {
      name: '内蒙古',
      value: 0
    }, {
      name: '陕西',
      value: 600
    }, {
      name: '吉林',
      value: 0
    }, {
      name: '福建',
      value: 600
    }, {
      name: '贵州',
      value: 300
    }, {
      name: '广东',
      value: 600
    }, {
      name: '青海',
      value: 0
    }, {
      name: '西藏',
      value: 300
    }, {
      name: '四川',
      value: 600
    }, {
      name: '宁夏',
      value: 0
    }, {
      name: '海南',
      value: 60
    }, {
      name: '台湾',
      value: 0
    }, {
      name: '香港',
      value: 0
    }, {
      name: '澳门',
      value: 0
    }
  ];
    
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
      reFresh:false,
        active:'被攻击统计',
        option29: {
            grid: {
                top: 30,
                bottom: 50,
                left: 75,
                right:35
            },
        visualMap: {
            min: 100,
            max: 600,
            right: '10%',
            text: ['高', '低'], // 文本，默认为数值文本
            itemWidth: 5,
            itemHeight: 50 ,
            calculable: true,
            inRange:{
                color: ['#cccccc','#fce2eb','#f59c8c','#c41512'],//上色范围
            },
            color: '#fff',
            textStyle: {
                color: '#fff',
            },
            visibility: 'off'
        },
        // legend: {
        //     data: ['中国','中国1']
        // },
          tooltip: {
              show:true,
              trigger: 'item',
              formatter: '<div>{b}  {c}</div>'
              // formatter: function(params) {
              //   console.log(a)
              // }
          },
        series: [
          {
            name:'被攻击统计',
            type: 'map',
            mapType: 'china',
            roam: false,//是否开启鼠标缩放和平移漫游
            data: seriesData,
            top: "10%",//组件距离容器的距离
            zoom:1.2,
            selectedMode : 'single',

            label: {
              fontSize:8,
                normal: {
                    show: true,//显示省份标签
                    textStyle:{
                      color:"#895139",
                      fontSize:8,
                    }//省份标签字体颜色
                },
                emphasis: {//对应的鼠标悬浮效果
                    show: false,
                    textStyle:{color:"#cccccc"}
                }
            },
            itemStyle: {
                normal: {
                  show: true,
                    borderWidth: .5,//区域边框宽度
                    borderColor: '#47B6E8',//区域边框颜色
                    areaColor:"#2166FF",//区域颜色

                },

                emphasis: {
                    borderWidth: .5,
                    borderColor: '#47B6E8',
                    areaColor:"#0A9CFF",
                }
            },
          }
        ]

           },
        option33: {
            grid: {
                top: 30,
                bottom: 50,
                left: 75,
                right:35
            },
        visualMap: {
            min: 0,
            max: 597,
            right: '10%',
            text: ['高', '低'], // 文本，默认为数值文本
            itemWidth: 5,
            itemHeight: 50 ,
            calculable: true,
            inRange:{
                color: ['#cccccc','#fce2eb','#f59c8c','#c41512'],//上色范围
            },
            color: '#fff',
            textStyle: {
                color: '#fff',
            },
            visibility: 'off'
        },
        // legend: {
        //     data: ['中国','中国1']
        // },
          tooltip: {
              show:true,
              trigger: 'item',
              formatter: '<div>{b}  {c}</div>'
              // formatter: function(params) {
              //   console.log(a)
              // }
          },
        series: [
          {
            name:'被攻击统计',
            type: 'map',
            mapType: 'china',
            roam: false,//是否开启鼠标缩放和平移漫游
            data: seriesData1,
            top: "10%",//组件距离容器的距离
            zoom:1.2,
            selectedMode : 'single',

            label: {
              
                normal: {
                    show: true,//显示省份标签
                    textStyle:{
                      color:"#895139"
                    }//省份标签字体颜色
                },
                emphasis: {//对应的鼠标悬浮效果
                    show: false,
                    textStyle:{color:"#cccccc"}
                }
            },
            itemStyle: {
                normal: {
                  show: true,
                    borderWidth: .5,//区域边框宽度
                    borderColor: '#47B6E8',//区域边框颜色
                    areaColor:"#2166FF",//区域颜色

                },

                emphasis: {
                    borderWidth: .5,
                    borderColor: '#47B6E8',
                    areaColor:"#0A9CFF",
                }
            },
          }
        ]

           }

    };
  },
  watch:{
    productseleted:{
      handler:function(val) {
        if(val && val.includes('DDoS高防IP')) {
          this.$nextTick(()=>{

            // this.animateAll();
            // let data6 = indexInfo[0].data.filter(item=>item.indexNum==6).map(item=>item.endNum);
            // this.option20.series[0].data = data6;
          })
        }
        
      },
      deep:true,
      immediate: true
    
    },
    active:{
       handler:function(val) {
        if(val) {
          // if(val=='被攻击统计') {
          //   this.option29.series[0].data = seriesData1
          // }
          // if(val=='发起攻击统计') {
          //   this.option29.series[0].data = seriesData
          // }
        }
        
      },
      deep:true,
      // immediate: true
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
.chart1_1 {
      height: calc(100% - 60px);
      width: 100%;
      position: relative;
}
#chart29 {
    height: 100%;
    /deep/ canvas{
        height: 100% !important;
      transform: rotateX(25deg) !important;
      -webkit-transform: rotateX(25deg) !important; /* Safari and Chrome */
    }
}
.legend {
    position: absolute;
    bottom: 10px;
    left: 35px;
    color: #ffffff;
    font-size: 12px;
    span {
        display: inline-block;
        text-align: left;
        float: left;
        padding-left: 20px;
        position: relative;
        cursor: pointer;
        &::before {
            content: "";
            width: 12px;
            height: 11px;
            background-color: #cccccc;
            border:solid 1px;
            position: absolute;
            left: 0;
            top: 3px;
        }
    }
    .active {
        color: #f59c8c;
        &::before {
            content: "";
            width: 12px;
            height: 11px;
            background-color: #f59c8c;
            border:solid 1px;
            position: absolute;
            left: 0;
            top: 3px;
        }
    }
    
}
.waiting {
  // color: red!important;
  background-color: red !important;
}
</style>
