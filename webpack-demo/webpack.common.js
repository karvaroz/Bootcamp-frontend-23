const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "none",
	entry: "./src/index.js",
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
};
