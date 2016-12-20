const gulp = require('gulp');

const webpack = require('webpack-stream');
const config = require('./webpack.config.js');

const cordova = require('gulp-cordova');

gulp.task('webpack', () => {
  return gulp
    .src(config.entry)
    .pipe(
        webpack(config)
     )
    .pipe(
        gulp.dest(config.output.path)
    );
});

gulp.task('cordova:init', () => {
  gulp.src('./package.json')
    .pipe(cordova());
});
