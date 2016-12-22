const gulp = require('gulp');

const webpack = require('webpack-stream');
const config = require('./webpack.config.js');

const runSequence = require('run-sequence');

const cordova = require('gulp-cordova');

const minimist = require('minimist');

const mocha = require('gulp-mocha');
const babelRegister = require('babel-register');

gulp.task('init', () => {
  return runSequence(
    'webpack',
    'cordova:init'
  );
});

gulp.task('build', () => {
  return runSequence(
    'webpack',
    'cordova:build'
  );
});

gulp.task('run', () => {
  return runSequence(
    'build',
    'cordova:run'
  );
});

gulp.task('test', () => {
  const args = minimist(process.argv.slice(2));
  const file = args.file ? args.file : 'src/**/*.spec.js'
  const src = [
    file
  ];
  gulp.src(src)
    .pipe(mocha({
      compilers: babelRegister
    }));
});

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

gulp.task('cordova:build', () => {
  gulp.src('')
    .pipe(cordova([
      'build',
      'browser'
    ]));
});

gulp.task('cordova:run', () => {
  gulp.src('')
    .pipe(cordova([
      'run',
      'browser'
    ]));
});
