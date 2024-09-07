const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader', // Add this loader for image optimization
            options: {
              mozjpeg: {
                progressive: true,
              },
              // Optimize PNG images
              optipng: {
                enabled: true,
              },
              // Enable/disable pngquant optimization
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // Enable optimization for webp images
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
};
