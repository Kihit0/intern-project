const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const incstr = require('incstr');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

/**
 * Генератор css классов
 */
const createUniqueIdGenerator = () => {
  const uniqIds = {};

  const generateNextId = incstr.idGenerator({
    alphabet: 'abcefghijklmnopqrstuvwxyzABCEFGHJKLMNOPQRSTUVWXYZ',
  });

  // Для имени возвращаем его минифицированную версию
  return (name) => {
    if (!uniqIds[name]) {
      uniqIds[name] = generateNextId();
    }

    return uniqIds[name];
  };
};

const localNameIdGenerator = createUniqueIdGenerator();
const componentNameIdGenerator = createUniqueIdGenerator();

const generateClassName = (localName, resourcePath) => {
  const localId = localNameIdGenerator(localName);
  const componentId = componentNameIdGenerator(resourcePath);

  return `${componentId}_${localId}`;
};

/**
 * Мапа путей в проекте.
 */
const PATHS = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
  ui: path.resolve(__dirname, 'src/ui'),
  assets: '/assets',
};

module.exports = {
  mode: 'development',

  entry: {
    main: ['@babel/polyfill', './src/index.jsx'],
  },

  output: {
    filename: `js/${filename('js')}`,
    path: `${PATHS.dist}/`,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@ui': PATHS.ui,
    },
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },

    minimizer: isProd
      ? [new CssMinimizerPlugin(), new TerserWebpackPlugin()]
      : undefined,
  },

  devServer: {
    port: 1337,
  },

  devtool: isDev ? 'source-map' : undefined,

  plugins: [
    new HTMLWebpackPlugin({
      template: `${PATHS.src}/index.html`,

      minify: {
        collapseWhitespace: isProd,
      },

      chunks: ['main'],
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: `css/${filename('css')}`,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true,

              modules: {
                ...(isDev
                  ? { localIdentName: '[path]--[local]' }
                  : {
                      getLocalIdent(context, localIdentName, localName) {
                        return generateClassName(
                          localName,
                          context.resourcePath
                        );
                      },
                    }),
              },
            },
          },
          'postcss-loader',
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',

            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },

      {
        test: /\.jsx$/,
        exclude: /node_modules/,

        use: [
          {
            loader: 'babel-loader',

            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
};
