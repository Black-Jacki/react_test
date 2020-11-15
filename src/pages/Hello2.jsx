import React, { Component } from 'react'
import cssobj from '@/style/index.scss'

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
            calc = <button className={cssobj['btn-change']} onClick={() => that.calc()}>计算</button>
        }
        if (that.state.isipt) {
            ipt = <input type="text" className={cssobj.ipt} />
            btn = <button onClick={() => that.change_ipt()}>完成</button>
        } else {
            ipt = '年龄：18'
            btn = <button onClick={() => that.change_ipt()}>更改</button>
        }

        return (
            <div>
                {that.state.msglist.map((item, index) =>
                    <div className={cssobj['content']} key={index}>
                        <span onClick={() => that.showIndex(index)}>序号：{index + 1}</span>
                        <span>姓名：{item.name}</span>
                        <span>{ipt}{btn}</span>
                    </div>)}
                <button className={cssobj['btn-change']} onClick={() => that.add_msg()}>增加</button>
                <button className={cssobj['btn-change']} onClick={() => that.del_msg()}>删除</button>
                <div>
                    <div>{that.state.show}</div>
                    <input type="text" className={cssobj.ipt} value={that.state.num} onChange={(e) => that.txtChanged(e)} />
                    {calc}
                </div>
            </div>
        )
    }
}

export default Hello2