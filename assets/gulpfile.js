const { dest, parallel, src, series, task } = require('gulp');
var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var minifyJs = require('gulp-uglify');

task('bootstrap--3', function(callback) {
  src('./node_modules/bootstrap--3/dist/css/**')
    .pipe(dest('./build/bootstrap--3/css'));
  src('./node_modules/bootstrap--3/dist/fonts/**')
    .pipe(dest('./build/bootstrap--3/fonts'));
  src('./node_modules/bootstrap--3/dist/js/bootstrap**')
    .pipe(dest('./build/bootstrap--3/js'));
  callback();
})

task('bootstrap--4', function(callback) {
  src('./node_modules/bootstrap--4/dist/css/**')
    .pipe(dest('./build/bootstrap--4/css'));
  src('./node_modules/bootstrap--4/dist/js/bootstrap**')
    .pipe(dest('./build/bootstrap--4/js'));
  callback();
})

task('bootstrap', series('bootstrap--3', 'bootstrap--4'))

task('jquery--1', function(callback) {
  src('./node_modules/jquery--1/dist/**')
    .pipe(dest('./build/jquery--1/js'));
  callback();
})

task('jquery--2', function(callback) {
  src('./node_modules/jquery--2/dist/**')
    .pipe(dest('./build/jquery--2/js'));
  callback();
})

task('jquery--3', function(callback) {
  src('./node_modules/jquery--3/dist/**')
    .pipe(dest('./build/jquery--3/js'));
  callback();
})

task('remove_build', function(callback) {
  del('./build');
  callback();
})

task('jquery', series('jquery--1', 'jquery--2', 'jquery--3'))

task('build', parallel('bootstrap', 'jquery'))
task('clean', series('remove_build'))

