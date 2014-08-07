var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress-js', ['browserify'], function() {
	return gulp.src('public/assets/**.js')
	.pipe(uglify())
	.pipe(gulp.dest('public/assets'));
});