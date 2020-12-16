import React from 'react'
import { Component } from 'refast'
import Logic from './logic'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


const MyChart = () => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.querySelector('.main'));
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
}

class Test extends Component {
    constructor(props) {
        super(props, Logic)
        this.state = {
            name: 'lisi'
        }
    }

    componentDidMount() {
        MyChart()
    }

    toTest = () => {
        this.dispatch('test')
    }


    render() {
        return (
            <>
                <div className={"main"} style={{ width: 400, height: 400 }}></div>
            </>
        )
    }
}

export default Test