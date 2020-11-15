import React from 'react'
import request from 'umi-request'

export default {
    req() {
        request.get('/znlyzs/getAllMessage/?ar_id=10000')
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }
}