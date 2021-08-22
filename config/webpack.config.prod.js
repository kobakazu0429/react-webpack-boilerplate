"use strict";

const path = require("path");
const { merge } = require('webpack-merge');
const common = require("./webpack.config.common.js");

const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = merge(common, /** @type {import('webpack').Configuration} */({
  mode: "production",
  devtool: "source-map",

  output: {
    clean: true,
    path: path.resolve(__dirname, "../dist/"),
    filename: "[name]-[contenthash].js"
  },

  plugins: [new WebpackManifestPlugin()],

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[contenthash].[ext]",
              outputPath: "/",
              publicPath: "../dist"
            }
          }
        ]
      }
    ]
  }
}));
