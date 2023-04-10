"use strict";
const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'), // входная точка - исходный файл
    context: path.join(__dirname, 'src'),
    output:{
        path: path.resolve(__dirname, "./public"),     // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
        port: 8081,
        open: true
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    externals: {
        'react': 'React'
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.(js|jsx)$/, // определяем тип файлов
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
            }
        ]
    }
}
