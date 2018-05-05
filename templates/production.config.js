'use strict';

const webpack = require('webpack');

module.exports = {
	mode: 'production',
	// Don't attempt to continue if there are any errors.
	bail: true,
	// We generate sourcemaps in production. This is slow but gives good results.
	// You can exclude the *.map files from the build during deployment.
	devtool: 'source-map',
	entry: './src',
	output: {
		filename: 'main.js',
		chunkFilename: 'main.chunk.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		// This helps ensure the builds are consistent if source hasn't changed:
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	resolve: {
		// Using PReact to substitute for React.
		// @Ref: https://preactjs.com/guide/switching-to-preact
		// alias: {
		// 	'react': "preact-compat",
		// 	'react-dom': "preact-compat"
		// }
	}
};
