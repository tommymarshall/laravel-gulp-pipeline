var gulp = require('gulp');

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('app/assets/stylesheets/**', ['sass']);
	gulp.watch('app/assets/fonts/**', ['fonts']);
	gulp.watch('app/assets/images/**', ['images']);
	gulp.watch('app/views/**', ['reload']);
});
