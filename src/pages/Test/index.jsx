import React from 'react'
import { Component } from 'refast'

import Logic from './logic'

class Test extends Component {
    constructor(props) {
        super(props, Logic)
        this.state = {
            verCode: '',
        }
    }

    toTest = (e) => {
        console.log(e.target.value)
        this.setState({
            verCode: e.target.value
        })
    }

    toTest1 = () => {
        this.dispatch('test1')
    }

    toTest2 = () => {
        this.dispatch('test2', this.state.verCode)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.toTest(e)} />
                <button onClick={() => this.toTest1()}>点我</button>
                <button onClick={() => this.toTest2()}>点我2</button>
            </div>
        )
    }
}

export default Test