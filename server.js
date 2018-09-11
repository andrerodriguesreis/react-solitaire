var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.config');

//var port= process.env.PORT || 5000
//var host= process.env.HOST || 'localhost'
var port = process.env.YOUR_PORT || process.env.PORT || 80;
var host = process.env.YOUR_HOST || '0.0.0.0';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  disableHostCheck: true
}).listen(port, host, function(err,result) {
  if (err) {
    console.error(err);
  }

  console.log('Listening at ' + host + ':' + port);
});
