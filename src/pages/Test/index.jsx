import React from 'react'
import { Component } from 'refast'

import Logic from './logic'

class Test extends Component {
    constructor(props) {
        super(props, Logic)
        this.state = {
            name: 'lisi'
        }
    }

    toTest = () => {
        this.dispatch('test')
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.toTest() }>点我</button>
            </div>
        )
    }
}

export default Test