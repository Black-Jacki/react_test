import React from 'react'
import cssobj from '@/style/index.scss'

function Hello(val) {
    return (<div className={[cssobj['title'], cssobj['cor']].join(' ')}>Ant-Design学习</div>)
}

export default Hello