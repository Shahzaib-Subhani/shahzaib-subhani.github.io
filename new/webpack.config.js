const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/script.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,  
        use: {
          loader: "babel-loader", 
          options: {
            presets : ['@babel/preset-env']
          }
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: "production",
}; 
