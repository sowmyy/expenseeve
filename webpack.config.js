const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    resolve: {
  		modules: [
        path.resolve(process.cwd(), 'app'), path.resolve(process.cwd(), 'node_modules')
      ],
  		extensions: ['.mjs', '.js',],
  		mainFields: ['browser', 'module', 'main']
	   },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },

    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 8000,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: {
                  loader: 'file-loader'
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './app/index.html'})
    ]
};
