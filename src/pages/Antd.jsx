import React, { Component } from 'react'
import { Layout, Menu, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom'

const { SubMenu } = Menu;
import Hello from '@/pages/Hello'
import Hello2 from '@/pages/Hello2'
import scss from '@/style/index.scss'

class Antd extends Component {
    constructor() {
        super()
        let that = this
        that.state = {
            collapsed: false,
        };
    }

    toggleCollapsed = () => {
        let that = this
        that.setState({
            collapsed: !that.state.collapsed,
        });
    };

    render() {
        let that = this
        return (
            <div>
                <Layout>
                    <Sider style={{ 'minHeight': '100vh' }} trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className={scss.logo}></div>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={that.state.collapsed}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
                                <Menu.Item key="1"><NavLink to='/hello'>新增用户</NavLink></Menu.Item>
                                <Menu.Item key="2"><NavLink to='/hello2'>用户列表</NavLink></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ 'color': 'white' }}>
                            <Button type="primary" onClick={that.toggleCollapsed} style={{ marginLeft: -40 }}>
                                {React.createElement(that.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            </Button>
                            <span style={{ marginLeft: 20, fontSize: 20 }}>React_Project</span>
                        </Header>
                        <Content>
                            <Switch>
                                <Route path='/hello' component={Hello}></Route>
                                <Route path='/hello2' component={Hello2}></Route>
                            </Switch>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Copyright © 2020-2020 Facenom快教程 facenom.com All Rights Reserved. 备案号：桂ICP备20001400号</Footer>
                    </Layout>
                </Layout>
            </div >
        )
    }
}

export default Antd