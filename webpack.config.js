


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
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  "css-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ["file-loader?name=app/images/[name].[ext]"]
            }

        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'react-native$': 'react-native-web'
        }
    },
    plugins: [
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            filename: "bundle.js",
            algorithm: "gzip",
            deleteOriginalAssets: true,
        }),
    ]
};