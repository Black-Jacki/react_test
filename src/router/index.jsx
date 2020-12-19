import React, { Component } from 'react'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import loadable from '@loadable/component'


const Test = loadable(() => import('@/pages/Test'))


class Router extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <HashRouter>
                    <Switch>
                        <Route path='/test' component={Test} />
                    </Switch>
                </HashRouter>
            </>
        )
    }
}

export default Router