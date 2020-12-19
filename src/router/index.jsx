import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'


const Login = loadable(() => import('@/pages/Login'))
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
                        <Route path="/"><Login /></Route>
                        <Route path="/test"><Test /></Route>
                    </Switch>
                </HashRouter>
            </>
        )
    }
}

export default Router