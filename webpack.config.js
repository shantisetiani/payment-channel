const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const dotenv = require('dotenv').config();

function serializePublicUrl(url) {
	if (url.endsWith('/')) {
		url = url.substring(0, url.length - 1);
	}
	if (!url.startsWith('/')) {
		url = `/${url}`;
	}
	return url;
}

function serializeApiUrl(url) {
	if (url.endsWith('/')) {
		url = url.substring(0, url.length - 1);
	}
	return url;
}

module.exports = (env, argv) => {
	const PUBLIC_URL = serializePublicUrl(process.env.PUBLIC_URL || '');
	const API_URL = serializeApiUrl(process.env.API_URL || '');

	dotenv.parsed = {
		...dotenv.parsed,
		API_URL,
		PUBLIC_URL,
	};

	return {
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name]-[contenthash:8].js',
			publicPath: PUBLIC_URL,
		},
		resolve: {
			alias: {
				'@skeleton': path.resolve(__dirname, 'src'),
			},
		},
		performance: {
			maxEntrypointSize: 4000000,
			maxAssetSize: 4000000,
		},
		stats: {
			children: false,
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
				favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
			}),
			new MiniCSSExtractPlugin({
				filename: '[name]-[contenthash:8].css',
			}),
			new webpack.ContextReplacementPlugin(
				/moment[\/\\]locale$/,
				/(en-gb|id)/,
			),
			new webpack.DefinePlugin({
				'process.env': JSON.stringify(dotenv.parsed),
			}),
		],
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: [/node_modules/],
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: [
								[
									'@babel/preset-env',
									{
										useBuiltIns: 'usage',
										corejs: 3,
									},
								],
								'@babel/preset-react',
							],
							plugins: [
								'@babel/plugin-proposal-class-properties',
								[
									'import',
									{
										libraryName: 'antd',
										style: true,
										libraryDirectory: 'es',
									},
								],
							],
						},
					},
				},
				{
					test: /\.(css|scss)$/,
					use: [
						MiniCSSExtractPlugin.loader,
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /.less$/,
					use: [
						'css-loader',
						{
							loader: 'less-loader',
							options: {
								javascriptEnabled: true,
							},
						},
					],
				},
				{
					test: /\.(jpg|png|jpeg|svg)$/,
					use: {
						loader: 'file-loader',
						options: {
							outputPath: 'images',
							name: '[name]-[contenthash:8].[ext]',
						},
					},
				},
				{
					test: /favicon\.ico$/,
					use: '[name].[ext]',
				},
			],
		},
		optimization: {
			minimize: argv && argv.mode === 'production',
			minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
			splitChunks: {
				chunks: 'all',
			},
		},
		devServer: {
			publicPath: PUBLIC_URL,
			historyApiFallback: true,
		},
	};
};
