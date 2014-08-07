var clean        = require('gulp-rimraf');
var extend       = require('gulp-extend');
var filter       = require('gulp-filter');
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var rev          = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

// Rev all fonts and images
gulp.task('rev-assets', function() {
  return gulp.src(['./public/assets/**/!(*.css)'])
    // Remove non-reved assets
    .pipe(clean())
    // Rev all the assets
    .pipe(rev())
    .pipe(gulp.dest('public/assets'))
    // Output asset manifest
    .pipe(rev.manifest())
    .pipe(gulp.dest('public/assets'));
});

// Rev the css file with updated asset references, so if
// assets change, the css rev hash will change too.
var cssFilter = filter('**/*.css');

gulp.task('rev-css', ['rev-assets'], function() {
  return gulp.src([ './public/assets/rev-manifest*.json', './public/assets/*.css'])
    // Replace references in css files
    .pipe(revCollector())
    // Remove the un-reved css file
    .pipe(cssFilter)
    .pipe(clean())
    // Rev the css file
    .pipe(rev())
    .pipe(gulp.dest('public/assets'))
    .pipe(cssFilter.restore())
    // Output css manifest
    .pipe(rev.manifest())
    .pipe(rename('rev-manifest-css.json'))
    .pipe(gulp.dest('public/assets'));
});

// Merge the asset manifest and css manifest files
gulp.task('rev', ['rev-css'],  function() {
  return gulp.src([ './public/assets/rev-manifest*.json'])
    .pipe(clean())
    .pipe(extend('rev-manifest.json'))
    .pipe(gulp.dest('public/assets'));
});
