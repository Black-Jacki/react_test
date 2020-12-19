export default {

    request(ctx) {
        const { fn: { api } } = ctx
        const date = {
            _timestamp: new Date()
        }

        api.Test.captcha(date).then(res => {
            console.log(res)
        })
    },
}