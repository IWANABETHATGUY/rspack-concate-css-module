import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
	throw new Error("Unknown bundler");
}

/**
 * @type {import('@rspack/cli').Configuration}
 */
const config = {
	mode: "production",
	devtool: false,
	entry: {
		main: "./src/index",
	},
	plugins: [new HtmlWebpackPlugin()],
	output: {
		clean: true,
		path: isRunningWebpack
			? path.resolve(__dirname, "webpack-dist")
			: path.resolve(__dirname, "rspack-dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				type: "css/module",
			},
		],
	},
	optimization: {
    concatenateModules: false,
		minimize: false,
	},
	experiments: {
		css: true,
		rspackFuture: {
			newTreeshaking: true,
		},
	},
};

if (isRunningWebpack) {
	delete config.experiments.rspackFuture;
}

export default config;
