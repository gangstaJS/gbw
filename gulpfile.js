var gulp = require("gulp");
var webpack = require("gulp-webpack");
var path = require('path');

gulp.task("webpack", function(callback) {

    webpack({
        entry: './src/js/entry.js',

		output: {
			filename: './dist/bundle.js'
		},

		module: {
		  loaders: [
		    {
		      test: /\.js?$/,
		      include: [
		      	path.resolve(__dirname, 'src/js')
		      ],
		      exclude: /(node_modules)/,
		      loader: 'babel'
		    }
		  ]
		}
    }, function(err, stats) {
    	// console.log(stats);
    	 console.log(err);
        if(err) console.log(err)
        callback();
    });
});

gulp.task("default", function(callback) {

	return gulp.src('src/js/entry.js')
	  .pipe(webpack({
	    watch: true,

	    output: {
        filename: 'bundle.js',
      	},

	    module: {
	      loaders: [
		    {
		      	test: /\.js?$/,
		    	exclude: /(node_modules)/,
		    	loader: 'babel',
		    	query: {
        			presets: ['es2015',  'react']
    			}
		    }
		  ]
	    },
	  }))
	  .pipe(gulp.dest('dist/'));
   
});