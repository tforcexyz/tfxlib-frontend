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

task('jquery', function(callback) {
  callback();
})

task('default', series('cleanup'))
