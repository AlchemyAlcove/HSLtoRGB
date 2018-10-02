const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const plugins = [
  ];

  return {
    mode: "production",
    entry: {
      index: ["./src/index.js"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            { loader: "babel-loader" },
            {
              loader: "eslint-loader",
              options: {
                emitWarning: true,
                failOnWarning: false
              }
            }
          ]
        }
      ]
    },
    output: {
      filename: "[name].umd.js",
      path: path.join(__dirname, "dist"),
      library: "HSLtoRGB",
      libraryTarget: "umd",
      publicPath: env.production ? "/dist/" : "/",
      umdNamedDefine: env.production
    },
    plugins: plugins
  }
};