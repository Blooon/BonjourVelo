const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const autoprefixer = require('autoprefixer');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
const dev = true;
>>>>>>> 2a6011b7f49205c645d9f90e3b8c29b648c96b3f
>>>>>>> master

let config = {
    entry: "./src/index.js",
    mode: "development",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    devtool: "eval-source-map",

>>>>>>> 2a6011b7f49205c645d9f90e3b8c29b648c96b3f
>>>>>>> master
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    },
<<<<<<< HEAD
    module: {
        rules: [
=======
<<<<<<< HEAD
    module: {
        rules: [
=======

    module: {
        rules: [
        		/* SCSS */
>>>>>>> 2a6011b7f49205c645d9f90e3b8c29b648c96b3f
>>>>>>> master
		        {
		        	test: /\.scss$/,
		        	use: [
		        		{
							loader: 'file-loader',
		            		options: {
		              		name: 'bundle.css',
		            		},
		        		},
		        		{ loader: 'extract-loader' },
		          		{ loader: 'css-loader' },
		          		{
		          			loader: 'postcss-loader',
		          			options: {
		          				plugins: () => [autoprefixer()]
		          			}
		          		},
		          		{
		          			loader: 'sass-loader',
		          			options: {
		          				includePaths:['./node_modules']
		          			}
		          		},
		        	]
		        },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
			]
      	},
      	plugins: [
			  new ExtractTextWebpackPlugin("general-styles.css")
      	],
<<<<<<< HEAD
=======
=======
		        /* SCSS */
    	        /* JS */
    	        {
    	        	test: /\.js$/,
    	        	loader: 'babel-loader',
    	        	exclude: /node_modules/,
    	        }
    	        /* JS */
			]
      	},

      	plugins: [
			  new ExtractTextWebpackPlugin("general-styles.css")
      	],

>>>>>>> 2a6011b7f49205c645d9f90e3b8c29b648c96b3f
>>>>>>> master
      	devServer: {
		  contentBase: path.resolve(__dirname, "./public"),
		  historyApiFallback: true,
		  inline: true,
		  open: true,
		  hot: true
		},
<<<<<<< HEAD
		devtool: "eval-source-map"
=======
<<<<<<< HEAD
		devtool: "eval-source-map"
=======
		
>>>>>>> 2a6011b7f49205c645d9f90e3b8c29b648c96b3f
>>>>>>> master
  }
  module.exports = config;








  /* SAVE */
  /*

const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

let config = {
    entry: "./src/index.js",
    mode: "development",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    },
    module: {
        rules: [{
			  test: /\.scss$/,
			  use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
			    fallback: 'style-loader',
			    use: ['css-loader', 'sass-loader', 'postcss-loader'],
			  }))
			}]
      	},
      	plugins: [
        new ExtractTextWebpackPlugin("styles.css")
      	],
      	devServer: {
		  contentBase: path.resolve(__dirname, "./public"),
		  historyApiFallback: true,
		  inline: true,
		  open: true,
		  hot: true
		},
		devtool: "eval-source-map"
  }
  module.exports = config;
const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

let config = {
    entry: "./src/index.js",
    mode: "development",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    },
    module: {
        rules: [
		        {
		        	test: /\.scss$/,
		        	use: [
		        		{
							loader: 'file-loader',
		            		options: {
		              		name: 'bundle.css',
		            		},
		        		},
		        		{ loader: 'extract-loader' },
		          		{ loader: 'css-loader' },
		          		{ loader: 'sass-loader' },
		        	]
		        },
		    	{
				  test: /\.scss$/,
				  use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
				    fallback: 'style-loader',
				    use: ['css-loader', 'sass-loader', 'postcss-loader'],
				  }))
				}
			]
      	},
      	plugins: [
        new ExtractTextWebpackPlugin("styles.css")
      	],
      	devServer: {
		  contentBase: path.resolve(__dirname, "./public"),
		  historyApiFallback: true,
		  inline: true,
		  open: true,
		  hot: true
		},
		devtool: "eval-source-map"
  }
  module.exports = config;


  */