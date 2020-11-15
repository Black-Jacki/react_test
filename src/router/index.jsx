import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import Antd from '@/pages/Antd'


class Router extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <BrowserRouter>
                <Antd></Antd>
            </BrowserRouter>
        )
    }
}

export default Router