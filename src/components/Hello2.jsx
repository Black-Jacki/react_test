import React, { Component } from 'react'

class Hello2 extends Component {
    constructor() {
        super()
        let that = this
        that.state = {
            msg: '大家好，我是class创建的state'
        }
    }

    render() {
        let that = this
        console.log(that.props.name)
        that.state.msg = 'state的值被我修改了'
        return (
            <div>
                <div>名字：{that.props.name}</div>
                <div>{that.state.msg}</div>
            </div>
        )
    }
}

export default Hello2