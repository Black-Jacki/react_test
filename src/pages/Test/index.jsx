import React from 'react'
import { Component } from 'refast'
import Logic from './logic'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts/lib/echarts'


class Test extends Component {
    constructor(props) {
        super(props, Logic)

        this.state = {
            data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 30, 40, 30, 40, 30, 40, 30, 80, 50, 30, 40, 30, 40, 30, 50, 40, 60, 50, 30, 40, 30],
        }
    }

    onChartClick = (params, echarts) => {
        console.log(params)
        console.log(echarts)
    }

    change = () => {
        this.setState({
            data: [],
        })
    }

    back = () => {
        this.setState({
            data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 30, 40, 30, 40, 30, 40, 30, 80, 50, 30, 40, 30, 40, 30, 50, 40, 60, 50, 30, 40, 30],
        })
    }

    render() {

        const { data } = this.state
        const onEvents = {
            'click': (params, echarts) => this.onChartClick(params, echarts)
        }

        const myChart = () => {
            this.dispatch('test')
            const option = {
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    top: 0,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: 12,
                    }
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    top: '25%',
                    bottom: '8%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
                        axisLabel: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontSize: 12,
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.2)',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.1)',
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontSize: 12,
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.1)',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        // 平滑线条
                        smooth: true,
                        // 填充颜色
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    // 渐变起始颜色
                                    color: 'rgba(1, 132, 213, 0.4)'
                                },
                                {
                                    offset: 0.8,
                                    // 渐变结束颜色
                                    color: 'rgba(1, 132, 213, 0.1)'
                                },
                            ],
                                false
                            ),
                            shadowColor: 'rgba(0, 0, 0, 0.1)'
                        },
        
                        // 设置拐点 小圆点
                        symbol: 'circle',
                        // 拐点大小
                        symbolSize: 8,
                        // 设置拐点颜色以及边框
                        itemStyle: {
                            color: '#0184d5',
                            borderColor: 'rgba(221, 220, 107, 0.1)',
                            borderWidth: 12,
                        },
                        // 开始不显示  鼠标经过显示
                        showSymbol: false,
        
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: '#0184d5',
                        },
                        data: data
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        // 平滑线条
                        smooth: true,
                        // 填充颜色
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    // 渐变起始颜色
                                    color: 'rgba(0, 216, 135, 0.4)'
                                },
                                {
                                    offset: 0.8,
                                    // 渐变结束颜色
                                    color: 'rgba(0, 216, 135, 0.1)'
                                },
                            ],
                                false
                            ),
                            shadowColor: 'rgba(0, 0, 0, 0.1)'
                        },
        
                        // 设置拐点 小圆点
                        symbol: 'circle',
                        // 拐点大小
                        symbolSize: 8,
                        // 设置拐点颜色以及边框
                        itemStyle: {
                            color: '#00d887',
                            borderColor: 'rgba(221, 220, 107, 0.1)',
                            borderWidth: 12,
                        },
                        // 开始不显示  鼠标经过显示
                        showSymbol: false,
        
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: '#00d887',
                        },
                        data: [130, 80, 60, 70, 60, 80, 45, 30, 20, 30, 60, 100, 60, 90, 80, 150, 120, 130, 90, 80, 120, 100, 60, 80, 80, 60, 50, 70, 65, 120]
                    },
                ]
            }

            return option
        }

        return (
            <>
                <ReactEcharts
                    option={myChart()}
                    onEvents={onEvents}
                    style={{ width: 500, height: 350, background: '#002766', paddingTop: 20 }}
                />
                <button onClick={() => this.change()}>点我</button>
                <button onClick={() => this.back()}>恢复</button>
            </>
        )
    }
}

export default Test