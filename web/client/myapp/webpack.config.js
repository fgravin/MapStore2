var path = require("path");
var LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");
var DefinePlugin = require("webpack/lib/DefinePlugin");
var NormalModuleReplacementPlugin = require("webpack/lib/NormalModuleReplacementPlugin");
var NoEmitOnErrorsPlugin = require("webpack/lib/NoEmitOnErrorsPlugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        myapp: path.join(__dirname, "..", "myapp", "app")
    },
    output: {
        path: path.join(__dirname, "..", "myapp", "dist"),
        publicPath: "/dist/",
        filename: "myapp.js"
    },
    devtool: 'inline-source-map',
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "..", "..", "..", 'node_modules', 'bootstrap', 'less'), to: path.join(__dirname, "..", "dist", "bootstrap", "less") }
    ]),
    new LoaderOptionsPlugin({
      debug: true,
      options: {
        postcss: {
          plugins: [
            require('postcss-prefix-selector')({prefix: '.ms2', exclude: ['.ms2', '[data-ms2-container]']})
          ]
        },
        context: __dirname
      }
    }),
    new DefinePlugin({
      "__DEVTOOLS__": true,
      "__API_KEY_MAPQUEST__": JSON.stringify(process.env.__API_KEY_MAPQUEST__ || '')
    }),
    new NormalModuleReplacementPlugin(/leaflet$/, path.join(__dirname, "..", "libs", "leaflet")),
    // new NormalModuleReplacementPlugin(/cesium$/, path.join(__dirname, ".." "libs", "cesium")),
    new NormalModuleReplacementPlugin(/openlayers$/, path.join(__dirname, "..", "libs", "openlayers")),
    new NormalModuleReplacementPlugin(/proj4$/, path.join(__dirname, "..", "libs", "proj4")),
    new NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    noParse: [/html2canvas/],
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader'
        }]
      },
      {
        test: /\.less$/,
        exclude: /themes[\\\/]?.+\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      },
      {
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            mimetype: "application/font-woff"
          }
        }]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "[name].[ext]"
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: "[path][name].[ext]",
            limit: 8192
          }
        }] // inline base64 URLs for <=8k images, direct URLs for the rest
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }],
        include: path.join(__dirname, "..")
      }
    ]
  }
};
