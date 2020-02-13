// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = () => {


    return {
        // Path to your entry point. From this file Webpack will begin his work
        entry: './src/index.js',

        module: {
            rules: [
                {
                    test: /\.css$/,
                    exclude: /(node_modules)/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader", "postcss-loader",
                    ],
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },

        plugins: [new MiniCssExtractPlugin({
            filename: "css/tailwind.css"
        })],

        // Path and filename of your result bundle.
        // Webpack will bundle all JavaScript into this file
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/bundle.js'
        },

        // Default mode for Webpack is production.
        // Depending on mode Webpack will apply different things
        // on final bundle. For now we don't need production's JavaScript 
        // minifying and other thing so let's set mode to development
        mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

        // local development server
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
            hotOnly: true
        }
    }
};