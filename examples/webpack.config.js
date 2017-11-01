module.exports = {
  entry: './examples.js',
  output: {
    filename: 'build/examples.js'
  },
  module: {
  	rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env'],
	          plugins: [require('babel-plugin-transform-object-rest-spread')]
	        }
	      }
	    }
	  ]
  }
};