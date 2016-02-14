var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('styles', function() {
  gulp.src('./css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  gulp.src('./js/main.js')
  .pipe(browserify({})).pipe(gulp.dest('./build/js'));
});

gulp.task('default', function() {
  gulp.watch('./css/**/*.scss', ['styles'])
  gulp.watch('./js/**/*.js', ['scripts'])
});