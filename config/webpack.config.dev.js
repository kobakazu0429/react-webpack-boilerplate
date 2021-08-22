"use strict";

const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");

module.exports = merge(common, /** @type {import('webpack').Configuration} */({
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: "all",
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
      watch: true,
    },
    client: {
      overlay: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|eot|ttf|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "/",
          publicPath: "http://localhost:5000/"
        }
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "/",
          mimetype: "application/font-woff",
          publicPath: "http://localhost:5000/"
        }
      }
    ]
  }
}));
