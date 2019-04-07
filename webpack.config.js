const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');

const miniCssPlugin = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename:  '[id].[hash].css',
});

module.exports  = (env,argv) => {
	return {
	   entry: './main.js',
	   output: {
		  path: path.join(__dirname, '/bundle'),
		  filename: 'index_bundle.js'
	   },
	   devServer: {
		  inline: true,
		  port: 8080
	   },
	   module: {
		  rules: [
			 {
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
				   presets: ['es2015', 'react']
				}
			 },{
					test: /\.(sa|sc|c)ss$/,
					use: [
					  argv.mode =='development' ? 'style-loader' : MiniCssExtractPlugin.loader,
					  {
						loader: 'css-loader',
						options: {
						modules: true,
						importLoaders: 1,
						localIdentName: "[name]_[local]_[hash:base64:5]",
						}
					  },
					  'sass-loader'
					]
				}  
		  ]
	   },
	   plugins:[
		  new HtmlWebpackPlugin({
			 template: './index.html'
		  }), miniCssPlugin
	   ]
	}
}