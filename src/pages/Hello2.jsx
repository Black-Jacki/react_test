import React, { Component } from 'react'
import scss from '@/style/index.scss'
import logic from '@/pages/logic'

class Hello2 extends Component {
    constructor() {
        super()
        let that = this
        that.state = {
            msglist: [
                { name: "张三", age: 18 },
                { name: "李四", age: 19 },
                { name: "王五", age: 20 }
            ],
            num: '',
            show: '',
            isipt: false,
        }
    }

    add_msg = (age) => {
        let that = this

        let ls_list = that.state.msglist
        ls_list.push({ name: "刘六", age: 21 },)

        that.setState({
            msglist: ls_list
        })
    }

    del_msg = (age) => {
        let that = this

        let ls_list = that.state.msglist
        ls_list.pop()

        that.setState({
            msglist: ls_list
        })
    }

    txtChanged = (e) => {
        let that = this
        that.setState({
            num: e.target.value,
        })
    }

    calc = () => {
        let that = this
        that.setState({
            show: that.state.num
        })
    }

    showIndex = (index) => {
        let that = this
        let ls_list = that.state.msglist
        ls_list[index].age = 5
        that.setState({
            msglist: ls_list
        })
    }

    change_ipt = () => {
        let that = this
        that.setState({
            isipt: !that.state.isipt,
        })
    }

    render() {
        let that = this

        let calc, ipt, btn
        if (that.state.num) {
            calc = <button className={scss['btn-change']} onClick={() => that.calc()}>计算</button>
        }
        if (that.state.isipt) {
            ipt = <input type="text" className={scss.ipt} />
            btn = <button style={{'height': '20px'}} onClick={() => that.change_ipt()}>完成</button>
        } else {
            ipt = '年龄：18'
            btn = <button style={{'height': '20px'}} onClick={() => that.change_ipt()}>更改</button>
        }

        return (
            <div className={scss.box}>
                {that.state.msglist.map((item, index) =>
                    <div className={scss['content']} key={index}>
                        <span onClick={() => that.showIndex(index)}>序号：{index + 1}</span>
                        <span>姓名：{item.name}</span>
                        <span>{ipt}{btn}</span>
                    </div>)}
                <button className={scss['btn-change']} onClick={() => that.add_msg()}>增加</button>
                <button className={scss['btn-change']} onClick={() => that.del_msg()}>删除</button>
                <div>
                    <div>{that.state.show}</div>
                    <input type="text" className={scss.ipt} value={that.state.num} onChange={(e) => that.txtChanged(e)} />
                    {calc}
                </div>
                <button className={scss['btn-change']} onClick={logic.req}>请求</button>
            </div>
        )
    }
}

export default Hello2