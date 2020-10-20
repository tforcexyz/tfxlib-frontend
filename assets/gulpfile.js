const { dest, parallel, src, series, task } = require('gulp');
var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var minifyJs = require('gulp-uglify');

task('cleanup', function(callback) {
  del('build/**');
  callback();
})

task('jquery--1', function(callback) {
  src('./node_modules/jquery--1/dist/**')
    .pipe(dest('./build/jquery--1/js/'))
  callback();
})

task('jquery--2', function(callback) {
  src('./node_modules/jquery--2/dist/**')
    .pipe(dest('./build/jquery--2/js/'))
  callback();
})

task('jquery--3', function(callback) {
  src('./node_modules/jquery--3/dist/**')
    .pipe(dest('./build/jquery--3/js/'))
  callback();
})

task('jquery', series('jquery--1', 'jquery--2', 'jquery--3'))

task('build', parallel('jquery'))

task('default', series('cleanup', 'build'))
