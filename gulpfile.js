'use strict';
let gulp = require('gulp');
let babel = require('gulp-babel');

gulp.task('default', () => {
  return gulp.src('es6-version/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('compiled-to-es5-with-babel'));
});