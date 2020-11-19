export default {
    defualts(props) {
        return {
            name: 'zhangsan',
            age: 18,
            genger: 'man'
        }
    },

    test(ctx) {
        const { fn:{hello, test}, getState, setState } = ctx
        // console.log(ctx)
        // test()
        
        console.log(getState())
    }
}