var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var gulpIf = require('gulp-if');

gulp.task('sass', ['images', 'fonts'], function () {
  return gulp.src('./app/assets/stylesheets/*.{sass, scss}')
    .pipe(sass({
      compass: true,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../stylesheets'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('public/assets'))
    .pipe(gulpIf(browserSync.active, browserSync.reload({ stream: true })));
});