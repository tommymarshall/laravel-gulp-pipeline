var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
	global.devMode = true
	runSequence('clean', ['sass', 'browserify'] , 'watch', cb);
});
