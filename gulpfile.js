var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var minifyHtml = require('gulp-minify-html');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var minifyCss = require('gulp-minify-css');
const exec = require('child_process').exec;

gulp.task('scripts',  function(){
  'use strict';
  gulp.src(['app/**/*.js'])
      .pipe(browserify())
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('dist/js'));
});
gulp.task('sass', function(){

});

gulp.task('css', function(){
});

gulp.task('html', function(){
  'use strict';
  gulp.src(['src/app/**/*.html'])
    .pipe(minifyHtml({empty: true}))
    .pipe(gulp.dest('dist'));
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


gulp.task('develop', function(cb){
  'use strict';
  browserSync.init({
      proxy: '127.0.0.1:8080'
  });
  gulp.watch('src/app/**/*.js', ['scripts'], browserSync.reload);
  gulp.watch('src/app/**/*.html', ['html'], browserSync.reload);
  gulp.watch('src/app/**/*.css').on('change', browserSync.reload);
  /*
  exec('./server/server.js', function(err, stdout, stderr){
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  */
});
