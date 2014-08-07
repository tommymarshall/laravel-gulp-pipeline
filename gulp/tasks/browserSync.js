var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function() {
	browserSync({
		proxy: 'homestead.app:8000'
	});
});
