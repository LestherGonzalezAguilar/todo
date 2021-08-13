const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path')

module.exports = {
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                exclude: /styles\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles\.css$/,
                // use: [MiniCssExtractPlugin.loader, "css-loader"],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    "css-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ["file-loader?name=assets/[name].[ext]",
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:base64].css',
            ignoreOrder: false,
        })
    ],
}


