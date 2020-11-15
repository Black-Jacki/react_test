import React, { Component } from 'react'
import Hello from '@/pages/Hello'
import Hello2 from '@/pages/Hello2'
import Test3 from '@/pages/Test3'

const p1 = ["首页", "主页", "页面"]
const p2 = ["吃饭", "睡觉", "学习"]

class Router extends Component {
    constructor() {
        super()
    }

    render() {
        let that = this

        return (
            <div>
                <Hello></Hello>
                <Hello2 name="zhangsan"></Hello2>
                <Test3 nvl={p1} title='首页导航'></Test3>
                {/* <Test3 nvl={p2} title='学习导航'></Test3> */}
            </div>
        )
    }
}

export default Router