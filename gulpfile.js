var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var minifyHtml = require('gulp-minify-html');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var minifyCss = require('gulp-minify-css');

gulp.task('scripts',  function(){
  'use strict';
  gulp.src(['app/**/*.js'])
      .pipe(browserify())
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload());
});
gulp.task('sass', function(){

});

gulp.task('css', function(){

});

gulp.task('html', function(){
  'use strict';
  gulp.src(['src/app/**/*.html'])
    .pipe(minifyHtml({empty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('usemin', function() {
  'use strict';
  return gulp.src('./*.html')
    .pipe(usemin({
      css: [ rev() ],
      html: [ minifyHtml({ empty: true }) ],
      js: [ browserify(), concat(), rev() ],
      //inlinejs: [ uglify() ],
      inlinecss: [ minifyCss(), 'concat' ]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('develop', function(){
  'use strict';
  livereload.listen();
  gulp.watch('src/app/**/*.js', ['scripts']);
  gulp.watch('src/app/**/*.html', ['html']);
});
