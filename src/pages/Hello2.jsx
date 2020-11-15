import React, { Component } from 'react'
import cssobj from '@/style/index.css'

class Hello2 extends Component {
    constructor() {
        super()
        let that = this
        that.state = {
            msglist: [
                { id: 1, name: "张三", age: 18 },
                { id: 2, name: "李四", age: 19 },
                { id: 3, name: "王五", age: 20 }
            ],
            num: '',
        }
    }

    add_msg = (age) => {
        let that = this

        that.setState({
            msglist: [
                { id: 1, name: "张三", age: 18 },
                { id: 2, name: "李四", age: 19 },
                { id: 3, name: "王五", age: 20 },
                { id: 4, name: "刘六", age: 21 },
            ],
        })
    }

    del_msg = (age) => {
        let that = this

        that.setState({
            msglist: [
                { id: 1, name: "张三", age: 18 },
                { id: 2, name: "李四", age: 19 },
                { id: 3, name: "王五", age: 20 }
            ],
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
        let num_ls = that.state.num
        if (num_ls == /\d*/) {
            that.setState({
                num: parseInt(that.state.num) + 5,
            })
        } else {
            alert('请输入正确的数字')
        }
    }

    render() {
        let that = this

        return (
            <div>
                {that.state.msglist.map(item =>
                    <div className={cssobj['content']} key={item.id}>
                        <span>序号：{item.id}</span>
                        <span>姓名：{item.name}</span>
                        <span>年龄：{item.age}</span>
                    </div>)}
                <button className={cssobj['btn-change']} onClick={() => that.add_msg()}>增加</button>
                <button className={cssobj['btn-change']} onClick={() => that.del_msg()}>删除</button>
                <div>
                    <div>{that.state.num}</div>
                    <input type="text" className={cssobj.ipt} value={that.state.num} onChange={(e) => that.txtChanged(e)} />
                    <button className={cssobj['btn-change']} onClick={() => that.calc()}>计算</button>
                </div>
            </div>
        )
    }
}

export default Hello2