/* eslint-env node */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", "ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Shelter-in-place games",
      template: "src/index.html"
    })
  ]
};
