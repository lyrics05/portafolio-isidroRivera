// webpack.config.js
require('dotenv').config(); // Carga las variables desde el archivo .env

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // o 'production'
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // Agrega reglas para CSS/SCSS si es necesario
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.EMAILJS_USER': JSON.stringify(process.env.EMAILJS_USER),
      'process.env.SERVICE_ID': JSON.stringify(process.env.SERVICE_ID),
      'process.env.TEMPLATE_ID': JSON.stringify(process.env.TEMPLATE_ID),
    }),
  ],
};
