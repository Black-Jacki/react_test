import request from 'umi-request'

export default {
    defualts(props) {
        return {}
    },

    test(ctx) {
        const { fn: { hello, test }, getState, setState } = ctx

        console.log(getState())
    }
}