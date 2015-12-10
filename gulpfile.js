var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
gulp.task('scripts',  function(){
  gulp.src(['app/**/*.js'])
      .pipe(browserify())
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload());
});

gulp.task('develop', function(){
  livereload.listen();
  gulp.watch('app/**/*.js', ['scripts']);
});
