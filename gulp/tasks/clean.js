var gulp  = require('gulp');
var clean = require('gulp-rimraf');

gulp.task('clean', function(){
	return gulp.src(['public/assets'], {read: false})
		.pipe(clean());
})