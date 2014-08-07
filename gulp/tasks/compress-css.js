var gulp      = require('gulp');
var minifyCSS = require('gulp-minify-css');
var debug = require('gulp-debug');

gulp.task('compress-css', ['sass'], function() {
	return gulp.src('public/assets/**.css')
		.pipe(debug({verbose: true}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('public/assets'));
});