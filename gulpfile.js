var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp
    .src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    browser: 'chrome',
    server: './'
  });
  gulp.watch(['scss/*.scss', 'scss/partials/*.scss'], ['sass']);
  gulp.watch('css/*.css').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});
gulp.task('default', ['serve']);
