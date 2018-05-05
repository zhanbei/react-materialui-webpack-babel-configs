'use strict';

module.exports = {
	mode: 'development',
	// Don't attempt to continue if there are any errors.
	bail: true,
	devtool: 'source-map',
	entry: './src',
	output: {
		path: __dirname + '/dist',
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				// @see https://github.com/babel/babel-loader
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
