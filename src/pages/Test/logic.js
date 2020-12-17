import request from 'umi-request'

export default {
    defualts(props) {
        return {
        }
    },

    // test(ctx) {
    // request.get('/user/captcha')
    //     .then(res => {
    //         console.log(res)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // },

    test1(ctx) {
        let url = '/user/captcha?_timestamp=' + new Date().getTime()
        request.get(url)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    },

    test2(ctx, verCode) {
        console.log("验证码", verCode)
        let url = '/login?account=18577359282&password=Zhxy123456&verCode=' + verCode
        request.post(url)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    },
}