const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {

  entry: [
    // Activa Hot Module Reloading HMR para React
    'react-hot-loader/patch',
    // Hace el bundle del cliente para webpack-dev-server
    // y lo conecta al endpoint correspondiente
    'webpack-dev-server/client?http://localhost:8080',
    // Hace el bundle del cliente únicamente para el Hot-Reloading
    // Significa que solo hará Hot-Reload cuando realicemos cambios
    'webpack/hot/only-dev-server',
    // El punto de entrada de nuestra app
    './src/app.js'
  ],

  output: {
    // Fichero del bundle de salida
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
    // Necesario para el Hot-Reloading
    publicPath: '/'
  },

  //context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    // Active el Hot-Reloading en el servidor de desarrollo
    hot: true,
    // Carpeta que "servirá" el servidor de desarrollo
    contentBase: resolve(__dirname, 'build'),
    // Ruta pública
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.js*/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },

  plugins: [
    // Activa Hot-Reloading globalmente
    new webpack.HotModuleReplacementPlugin(),
    // Imprime por consola los nombres de los módulos de una manera más "humana" en las
    // actualizaciones del Hot-Reloading
    new webpack.NamedModulesPlugin(),
  ]
};
