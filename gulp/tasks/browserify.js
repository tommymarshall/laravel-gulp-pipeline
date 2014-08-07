/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify   = require('browserify');
var browserSync  = require('browser-sync');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');

gulp.task('browserify', function() {

	var bundleMethod = global.devMode ? watchify : browserify;

	var bundler = bundleMethod({
		entries: ['./app/assets/javascripts/app.coffee'],
		extensions: ['.coffee']
	});

	var bundle = function() {
		bundleLogger.start();

		return bundler.bundle({ debug: !!global.devMode })
			.on('error', handleErrors)
			.pipe(source('app.js'))
			.pipe(gulp.dest('./public/assets'))
			.on('end', function() {
				bundleLogger.end()
			});
	};

	if(global.devMode) {
		console.log('Watchify is watching for changes...')
		bundler.on('update', function() {
			return bundle()
				.pipe(browserSync.reload({ stream: true, once: true }));
		});
	}

	return bundle();
});
