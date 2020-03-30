const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const baseConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

const devConfig = {
  ...baseConfig,
  devtool: "eval-source-map"
};

const prodConfig = {
  ...baseConfig,
  devtool: false,
  plugins: [...baseConfig.plugins, new BundleAnalyzer()]
};

module.exports = (env, argv) => {
  return argv.mode === "production" ? prodConfig : devConfig;
};
