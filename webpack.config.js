const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: `${__dirname} /dist`,
  },
  devServer: {
    static: "./",
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name(file) {
                return "[path][name].[ext]";
              },
              publicPath(url) {
                return url.replace("../", "/assets/");
              },
            },
          },
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    }),
  ],
  mode: "development",
};
