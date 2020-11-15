import React, { Component } from 'react'
import cssobj from '@/style/index.css'

class Test extends Component {
    constructor(props) {
        super(props)
        let that = this
        that.state = {
            isShow: true,
        }
    }
    login = () => {
        let that = this
        that.setState({
            isShow: !that.state.isShow,
        })
    }
    render() {
        let that = this
        // let showView = that.state.isShow ?
        //     <div>请登录</div> :
        //     <div>登录成功</div>
        let showView, btn
        if (that.state.isShow) {
            showView = <div>请登录</div>
            btn = <button className={cssobj['btn-change']} onClick={() => that.login()}>登录</button>
        } else {
            showView = <div>登录成功</div>
            btn = <button className={cssobj['btn-change']} onClick={() => that.login()}>退出</button>
        }
        return (
            <div>
                <div style={{ 'fontSize': '20px', 'color': '#666', 'margin': '10px 0' }}>{that.props.title}</div>
                {
                    that.props.nvl.map((item, index) => {
                        return <div style={{ 'fontSize': '14px', 'color': '#666', 'lineHeight': '24px' }} key={index}>{item}</div>
                    })
                }
                <div style={{'margin': '10px 0 0'}}>条件：{showView}{btn}</div>
            </div>
        )
    }
}

export default Test