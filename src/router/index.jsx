import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import loadable  from '@loadable/component'


const Test = loadable(() => import('@/pages/Test'))
const ProTableTest = loadable(() => import('@/pages/ProTableTest'))


class Router extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                {/* <Test /> */}
                <ProTableTest />
            </>
        )
    }
}

export default Router