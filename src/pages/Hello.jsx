import React from 'react'
import cssobj from '@/style/index.css'

function Hello(val) {
    return (<div className={[cssobj['title'], cssobj['cor']].join(' ')}>评论列表</div>)
}

export default Hello