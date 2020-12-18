import React from 'react'
import { Component } from 'refast'
import Logic from './logic'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts/lib/echarts'
import pudongJson from './pudong.json'


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
            echarts.registerMap('pudong', pudongJson)
            const option = {
                title: {
                    text: '绘制地图',
                    subtext: '绘制地图',
                    left: 'center'
                },
                series: [
                    {
                        name: '浦东新区',
                        type: 'map',
                        mapType: 'pudong',
                        roam: false,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: []
                    }
                ]
            }

            return option
        }

        return (
            <>
                <ReactEcharts
                    option={myChart()}
                    onEvents={onEvents}
                    style={{ width: 500, height: 350 }}
                />
                <button onClick={() => this.change()}>点我</button>
                <button onClick={() => this.back()}>恢复</button>
            </>
        )
    }
}

export default Test