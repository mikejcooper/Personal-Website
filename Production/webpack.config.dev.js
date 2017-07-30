'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  debug: true,
  devtool: "inline-source-map",
  entry: ['webpack-hot-middleware/client', _path2.default.join(__dirname, '/client/index.js')],
  output: _defineProperty({
    filename: "bundle.js",
    path: '/',
    publicPath: '/'
  }, 'path', __dirname + "/build"),
  plugins: [new _webpack2.default.NoErrorsPlugin(), new _webpack2.default.optimize.OccurenceOrderPlugin(), new _webpack2.default.HotModuleReplacementPlugin()],
  module: {
    loaders: [{
      test: /\.js$/,
      include: [_path2.default.join(__dirname, 'client'), _path2.default.join(__dirname, 'server/shared')],
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.js|.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack']
    }]
  },
  resolve: {
    extentions: ['', '.js', '.less', '.css'],
    modulesDirectories: ['node_modules'],
    root: _path2.default.resolve(__dirname),
    alias: {
      actions: 'client/modules/actions',
      reducers: 'client/modules/reducers',
      svgs: 'client/components/svgs',
      imgs: 'server/imgs'
    }
  }
};