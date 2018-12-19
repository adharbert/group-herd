// Import webpack module
var webpack = require("webpack");

// Import open browser plugin
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

//Import path module
const path = require('path');


module.exports = {
   entry: "./src/index.js", //set entry file

    // Resolve to output directory and set file
    output: {
        path: path.resolve("dist/assets"),
        filename: "bundle.js",
        publicPath: "assets"
    },

    // Add Url param to open browser plugin
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    // Set dev-server configuration
    devServer: {
    inline: true,
    hot: true,
    contentBase: './dist', 
    port: 8081
    },
    // Add babel-loader to transpile js and jsx files
    module: { 
        rules: [{
            test: /\.jsx?$/,
            resolve: {
                extensions: ['.js', '.jsx']
            },
            exclude: /(node_modules)/,
            use: [
                    {loader: 'babel-loader'}
                ]
        }]
    }
}
