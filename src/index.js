import React from 'react' // 创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom' // 把创建好的虚拟DOM和组件展示到页面上
import Router from '@/router/index'
import Refast from 'refast'
import api from '@/tools/api.js'


// 通过Refast.use() 自定义上下文方法
Refast.use('fn', {
    api,
})


// 创建虚拟DOM元素
const routes = (
    <Router></Router>
)
// 展示虚拟DOM
ReactDOM.render(routes, document.getElementById('app'))