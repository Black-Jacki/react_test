import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Test from '@/pages/Test'


class Router extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <Test />
            </>
        )
    }
}

export default Router