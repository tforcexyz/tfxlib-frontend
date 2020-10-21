const { dest, parallel, src, series, task } = require('gulp');
var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');
var minifyJs = require('gulp-uglify');

task('animate.css--3', function(callback) {
  src(['./node_modules/animate.css--3/animate.css', './node_modules/animate.css--3/animate.min.css'])
    .pipe(dest('./build/animate.css--3/css'));
  callback();
})

task('animate.css--4', function(callback) {
  src(['./node_modules/animate.css--4/animate.css', './node_modules/animate.css--4/animate.min.css'])
    .pipe(dest('./build/animate.css--4/css'));
  callback();
})

task('animate.css', series('animate.css--3', 'animate.css--4'))

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

task('font-awesome--4', function(callback) {
  src('./node_modules/font-awesome--4/css/**')
    .pipe(dest('./build/font-awesome--4/css'));
  src('./node_modules/font-awesome--4/fonts/**')
    .pipe(dest('./build/font-awesome--4/fonts'));
  callback();
})

task('font-awesome', series('font-awesome--4'))

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

task('jquery', series('jquery--1', 'jquery--2', 'jquery--3'))

task('normalize.css--3', function(callback) {
  src('./node_modules/normalize.css--3/normalize.css')
    .pipe(dest('./build/normalize.css--3/css'))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/normalize.css--3/css'));
  callback();
})

task('normalize.css--4', function(callback) {
  src('./node_modules/normalize.css--4/normalize.css')
    .pipe(dest('./build/normalize.css--4/css'))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/normalize.css--3/css'));
  callback();
})

task('normalize.css--5', function(callback) {
  src('./node_modules/normalize.css--5/normalize.css')
    .pipe(dest('./build/normalize.css--5/css'))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/normalize.css--5/css'));
  callback();
})

task('normalize.css--6', function(callback) {
  src('./node_modules/normalize.css--6/normalize.css')
    .pipe(dest('./build/normalize.css--6/css'))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/normalize.css--6/css'));
  callback();
})

task('normalize.css--7', function(callback) {
  src('./node_modules/normalize.css--7/normalize.css')
    .pipe(dest('./build/normalize.css--7/css'))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/normalize.css--7/css'));
  callback();
})

task('normalize.css--8', function(callback) {
  src('./node_modules/normalize.css--8/normalize.css')
    .pipe(dest('./build/normalize.css--8/css'))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/normalize.css--8/css'));
  callback();
})

task('normalize.css', series('normalize.css--3', 'normalize.css--4', 'normalize.css--5', 'normalize.css--6', 'normalize.css--7', 'normalize.css--8'))

task('remove_build', function(callback) {
  del('./build');
  callback();
})

task('build', parallel('animate.css', 'bootstrap', 'font-awesome', 'jquery', 'normalize.css'))
task('clean', series('remove_build'))

