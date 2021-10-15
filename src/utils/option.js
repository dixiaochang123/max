export function option15() {
    var value = [0.50];
    return {
        backgroundColor: 'rgba(13,37,55,0.5)',
        // grid: {
        //     top: '15%',
        //     left: '5%',
        //     right: '15%',
        //     bottom: '13%'
        // },
        xAxis: {
            type: 'value',
            min: 0,
            max: 1,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            }
        },
        yAxis: {
            //show: false,
            type: 'category',
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            // data: ['5次']
        },
        series: [{
            //真实数值条形图
            name: "真实值",
            type: 'bar', //pictorialBar
            barWidth: '5%',
            itemStyle: {
                color:"#4da3ff"
            },
            label: {
                show: false,
            },
            data: value,
            z: 0
        }, {
            //辅助方格图形
            name: "辅助值",
            type: 'pictorialBar',
            barWidth: '5%',
            symbol: 'rect',
            symbolMargin: '80%',
            symbolSize: ['20%', '100%'],
            symbolOffset: ['150%', '0%'],
            symbolRepeat: true,
            itemStyle: {
                color: '#0d2538',
                barBorderRadius: 10
            },
            data: [1],
            z: 1
        }, {
            //辅助背景图形
            name: "背景条",
            type: 'bar', //pictorialBar
            barWidth: '5%',
            barGap: '-100%',
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: 'rgba(13,37,55,0.5)'
                },
                barBorderRadius: 10
            },
            data: [1],
            z: 0
        }, ]
    }
}