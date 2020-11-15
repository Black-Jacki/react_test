import React, { Component } from 'react'
import { Button } from 'antd';
import scss from '@/style/index.scss'

class Antd extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Button type="primary">Primary Button</Button>
                <div className={scss['scss-test']}>Hello<span>World!</span></div>
            </div >
        )
    }
}

export default Antd