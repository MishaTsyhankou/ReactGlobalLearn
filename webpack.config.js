const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
let mode = 'development'

console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV === 'production'){
    mode = 'production'
}


module.exports ={

    entry: './src/index.js',
   mode: mode,
    output:{
       filename: '[name].[contenthash].js',
        path: path.join(__dirname, '/dist'),
       assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    devServer: {
        port: 8080,
        hot: false,
        liveReload: true,
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

        new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
    ],
    module: {
       rules: [
           {
               test: /\.html$/i,
               loader: 'html-loader',
           },
           {
           test: /\.(sa|sc|c)ss$/,
          
          use: [
               ( mode === 'development')? 'style-loader' : MiniCssExtractPlugin.loader,
               {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }
        },
               {
                   loader: "postcss-loader",
                   options: {
                       postcssOptions: {
                           plugins: [
                               [
                                   "postcss-preset-env",
                                   {
                                       // Options
                                   },
                               ],
                           ],
                       },
                   },
               },          
          "sass-loader",
           ]
       },
      
           {
               test: /\.(woff|woff2|eot|ttf|otf)$/i,
               type: 'asset/inline',
           },
           {
               test: /\.(png|svg|jpg|jpeg|gif)$/i,
               type: 'asset/resource',
           },
           {
               test: /\.(jsx|js|ts|tsx)$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-env', ["@babel/preset-react", {"runtime": "automatic"}], "@babel/preset-typescript"],
                       plugins:  [
                        [
                            "@babel/plugin-transform-runtime",
                            {
                                "regenerator": true
                            }
                        ]
                    ]
                   }
               }
           },




       ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss', '.tsx', '.ts']
    }
}