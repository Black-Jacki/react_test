import React from 'react' // 创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom' // 把创建好的虚拟DOM和组件展示到页面上
import Router from '@/router/index'

import Refast from 'refast'


const hello = () => {
    console.log('hello world!')
}

const test = () => {
    console.log('====================================')
    console.log('Test Success')
    console.log('====================================')
}

// 通过Refast.use() 自定义上下文方法
Refast.use('fn', {
    hello,
    test
})


// 创建虚拟DOM元素
const routes = (
    <Router></Router>
)
// 展示虚拟DOM
ReactDOM.render(routes, document.getElementById('app'))