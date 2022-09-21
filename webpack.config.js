


const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            filename: "bundle.js",
            algorithm: "gzip",
            deleteOriginalAssets: false,
        }),
    ]
};