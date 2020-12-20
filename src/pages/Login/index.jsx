import React from 'react'
import { Component } from 'refast'
import Logic from './logic'
import { Input, Form, Button, Card } from 'antd'
import Crypto from 'crypto-js'

class Login extends Component {
    constructor(props) {
        super(props, Logic)
        this.state = {
            formRef: React.createRef(),
        }
    }

    setToken = () => {
        // sessionStorage.setItem('adminToken2', 'hello2')
        // localStorage.setItem('adminToken2', 'hello2')
        document.cookie = 'name1=zhangsan1'
        document.cookie = 'name2=zhangsan2'
        document.cookie = 'name3=zhangsan3'
    }

    getToken = () => {
        // const token = sessionStorage.getItem('adminToken')
        // console.log(token)
        const cookie = document.cookie
        const cookieList = cookie.split(';')
        return cookieList
    }

    delToken = () => {
        // sessionStorage.clear()
        // localStorage.clear()
        this.getToken().map(item => {
            document.cookie = item.split('=')[0] + '=; expires=' + new Date().toUTCString()
        })
    }

    onFinish = (values) => {
        // const password = Crypto.MD5(values.password).toString()
        // console.log(password)
        this.dispatch('request')
    }

    onReset = () => {
        const { formRef } = this.state
        formRef.current.resetFields()
    }

    render() {

        const { formRef } = this.state

        return (
            <>
                <Card
                    style={{ margin: '50px 100px', width: 400, boxShadow: '5px 5px 5px #ddd' }}
                >
                    <Form
                        ref={formRef}
                        style={{ margin: 30 }}
                        onFinish={(e) => this.onFinish(e)}
                    >
                        <Form.Item label="用户名" name='username'>
                            <Input style={{ width: 220 }} />
                        </Form.Item>
                        <Form.Item label="密码" name='password' style={{ marginLeft: 14 }}>
                            <Input.Password style={{ width: 220 }} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ marginLeft: 20 }}>登录</Button>
                            <Button style={{ marginLeft: 20 }} onClick={() => this.onReset()}>重置</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button style={{ marginLeft: 20 }} onClick={() => this.setToken()}>设置</Button>
                            <Button style={{ marginLeft: 20 }} onClick={() => this.getToken()}>获取</Button>
                            <Button style={{ marginLeft: 20 }} onClick={() => this.delToken()}>删除</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </>
        )
    }
}

export default Login