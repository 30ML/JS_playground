const path = require("path")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: "./src/js/index.js", // JS 파일의 진입점
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    //path: "./dist", // ERROR: "./dist" is not an absolute path!
    clean: true,
  },
  devtool: "source-map", // 빌드한 파일과 원본 파일 연결
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    watchFiles: "index.html",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "HRRC Virtual Keyboard",
      template: "./index.html",
      inject: "body", // JS 코드가 삽입되는 곳("body"로 하지 않으면 "head"에 삽입됨)
      favicon: "./favicon.ico",
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin(),
    ],
  },
}