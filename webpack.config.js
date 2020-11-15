const path = require('path')
// 导入在内存中自动生成index页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin')

// 向往暴露一个打包的配置对象
// webpack只能打包处理.js后缀类型的文件
module.exports = {
    mode: 'development',
    devtool: 'source-map',

    // 本地服务器配置
    devServer: {
        open: false,
        hot: true,
        host: 'localhost',
        port: 8080,
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, './public/index.html'), // 源文件
            filename: 'index.html' // 生成的内存中首页的名称
        })
    ],
    module: {
        // 所有第三方模块的配置规则
        rules: [
            {
                test: /\.jsx?$/, // js|jsx正则表达式
                use: { loader: 'babel-loader' },
                exclude: /node_modules/, // 排除项
            },
            // 自己写的样式使用.scss，使用sass-loader打包处理，并开启模块化
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?modules', 'sass-loader'], // 打包处理scss样式表的第三方加载程序
            },
            // 第三方样式表使用.css，使用css-loader打包处理
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 打包处理css样式表的第三方加载程序
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'] // 静态资源通过file-loader打包处理
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'] // 静态资源通过file-loader打包处理
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 这几个后缀名可以省略不写，自动补全
        alias: {
            '@': path.join(__dirname, './src') // @符号来代替src目录，通过@直接调用
        }
    }
}