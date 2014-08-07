var gulp  = require('gulp');
var runSequence = require('run-sequence');

gulp.task('production', function(callback) {
	runSequence('clean', 'compress-css', 'compress-js', 'rev', callback);
});