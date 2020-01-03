/* tslint:disable:no-require-imports */
const formatter = require('eslint-friendly-formatter')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
const _tsTranspileOnly = process.env.TS_TRANSPILE_ONLY === 'true'

module.exports = ({mode = 'bundle', tsTranspileOnly = _tsTranspileOnly} = {}) => {
  const tsConfigFile = process.env.TS_CONFIG_FILE || `tsconfig.${mode}.json`
  return {
    entry: {
      index: ['./src/index.ts'],
    },

    resolve: {
      extensions: [
        '.js', '.jsx', '.mjs', '.json',
        '.ts', '.tsx', '.vue', '.stylus', 'styl',
      ],
      alias: {
        '@': resolve('src'),
        '~': resolve('lib'),
        '@@': resolve(''),
        '~~': resolve(''),
        'vue$': 'vue/dist/vue.esm.js',
      },
    },
    plugins: [new VueLoaderPlugin()],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|ts|vue)/,
          use: [{
            loader: 'eslint-loader',
            options: {
              formatter,
            },
          }],
          exclude: /node_modules/,
        },
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.styl(us)?$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'stylus-loader',
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|ico|eot|woff|woff2|ttf)$/,
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]',
            publicPath: './dist/',
            limit: 10000,
          },
        },
        {
          test: /\.pug$/,
          oneOf: [
            // this applies to `<template lang="pug">` in Vue components
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader'],
            },
            // this applies to pug imports inside JavaScript
            {
              use: ['pug-loader'],
            },
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          exclude: [/node_modules/],
        },

      ],
    },
  }
}
