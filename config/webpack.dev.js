// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。

module.exports = {
    mode: 'development', // 开发模式
    entry: './src/main.js',    // 入口文件
    output: {
        filename: 'static/js/main.js',      // 打包后的文件名称
        path: undefined,  // 打包后的目录
    },
    module: {
        rules: [
            {
                test: /\.css$/, //匹配所有的 css 文件
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader']
            },
            {
                test: /\.less$/, //匹配所有的 less 文件
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader']
            },
            {
                test: /\.style$/,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',//在导出一个 data URI 和发送一个单独的文件之间自动选择
                generator: {
                    // [ext]前面自带"."
                    filename: 'assets/[hash:8].[name][ext]',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 不编译node_modules下的文件
                use: 'babel-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            collapseWhitespace: true, // 删除空白符与换行符
            removeComments: true, // 移除HTML中的注释
            filename: 'index.html',
            title: 'Vue3 开发环境'
        }),
        new MiniCssExtractPlugin(
            {
                filename: 'static/css/main.css',
            }
        )
    ],
    // 开发模式下资源存在内存中
    devServer: {
        hot: true, //支持热更新
        port: 1000,
        open: true,
        //contentBase:path.resolve(__dirname,'static') //指定（额外的）静态文件目录， // 如果使用 CopyWebpackPlugin ，设置为false
        static: path.resolve(__dirname, 'static'),
        proxy: {
            '/api': {
                target: "http:/localhost:4005/",
                changeOrigin: true, ///设置访问目标地址允许跨域
                rewrite: (p) => p.replace(/^\/api/, '')
            },
        },
    }
}
