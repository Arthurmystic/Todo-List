const HtmlWebpackPlugin = require ("html-webpack-plugin");
const path = require ("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/to-do-list.html"
        }),
    ],

    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/to-do-list.html"],
    },

    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },

            {
                test: /\.html$/i,
                use: ["html-loader"],
            },

            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     use: "asset/resource",
            // }
            
        ],

    }
}