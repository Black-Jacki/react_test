import React from 'react' // 创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom' // 把创建好的虚拟DOM和组件展示到页面上
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'

// 创建虚拟DOM元素
const routes = (
    <div>
        <Hello></Hello>
        <Hello2></Hello2>
    </div>
)
// 展示虚拟DOM
ReactDOM.render(routes, document.getElementById('app'))