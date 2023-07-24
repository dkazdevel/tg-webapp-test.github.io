const Webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: [
        'babel-polyfill','./js/app.js'
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    devServer: {
        port: 8000,
        hot: true,
        open: true
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                // use: [
                //     {
                //       loader: 'file-loader',
                //         options: {
                //           name: '[name].[ext]',
                //           publicPath: '../img',
                //           outputPath: '../img',
                //           useRelativePath: true,
                //           esModule: false,
                //       }
                //     }
                //   ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                useShortDoctype: true,
                removeStyleLinkTypeAttributes: true,
                removeScriptTypeAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),

        new Webpack.HotModuleReplacementPlugin()
    ]

};
