const { dest, parallel, src, series, task } = require('gulp');
const del = require('del');
const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCss = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');
const minifyJs = require('gulp-uglify');

task('animate.css--3', function(callback) {
  const module_name = 'animate.css--3';
  src([`./node_modules/${module_name}/animate.css`, `./node_modules/${module_name}/animate.min.css`])
    .pipe(dest(`./build/${module_name}/css`));
  callback();
})

task('animate.css--4', function(callback) {
  const module_name = 'animate.css--4';
  src([`./node_modules/${module_name}/animate.css`, `./node_modules/${module_name}/animate.min.css`])
    .pipe(dest(`./build/${module_name}/css`));
  callback();
})

task('animate.css', series('animate.css--3', 'animate.css--4'))

task('bootstrap--3', function(callback) {
  const module_name = 'bootstrap--3';
  src(`./node_modules/${module_name}/dist/css/**`)
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/fonts/**`)
    .pipe(dest(`./build/${module_name}/fonts`));
  src(`./node_modules/${module_name}/dist/js/bootstrap**`)
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})

task('bootstrap--4', function(callback) {
  const module_name = 'bootstrap--4';
  src(`./node_modules/${module_name}/dist/css/**`)
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/js/bootstrap**`)
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})

task('bootstrap', series('bootstrap--3', 'bootstrap--4'))

task('font-awesome--4', function(callback) {
  const module_name = 'font-awesome--4';
  src(`./node_modules/${module_name}/css/**`)
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/fonts/**`)
    .pipe(dest(`./build/${module_name}/fonts`));
  callback();
})

task('font-awesome', series('font-awesome--4'))

task('html5shiv--3', function(callback) {
  const module_name = 'html5shiv--3';
  src(`./node_modules/${module_name}/dist/**`)
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})

task('html5shiv', series('html5shiv--3'))

task('jquery--1', function(callback) {
  const module_name = 'jquery--1';
  src(`./node_modules/${module_name}/dist/**`)
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})

task('jquery--2', function(callback) {
  const module_name = 'jquery--2';
  src(`./node_modules/${module_name}/dist/**`)
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})

task('jquery--3', function(callback) {
  const module_name = 'jquery--3';
  src(`./node_modules/${module_name}/dist/**`)
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})

task('jquery', series('jquery--1', 'jquery--2', 'jquery--3'))

task('modernizr--3', function(callback) {
  const module_name = 'modernizr--3';
  src(`./node_modules/${module_name}/dist/*.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})

task('modernizr', series('modernizr--3'))

task('normalize.css--3', function(callback) {
  const module_name = 'normalize.css--3';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  callback();
})

task('normalize.css--4', function(callback) {
  const module_name = 'normalize.css--4';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  callback();
})

task('normalize.css--5', function(callback) {
  const module_name = 'normalize.css--5';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  callback();
})

task('normalize.css--6', function(callback) {
  const module_name = 'normalize.css--6';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  callback();
})

task('normalize.css--7', function(callback) {
  const module_name = 'normalize.css--7';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  callback();
})

task('normalize.css--8', function(callback) {
  const module_name = 'normalize.css--8';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += ".min";
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  callback();
})

task('normalize.css', series('normalize.css--3', 'normalize.css--4', 'normalize.css--5', 'normalize.css--6', 'normalize.css--7', 'normalize.css--8'))

task('respond.js--1', function(callback) {
  const module_name = 'respond.js--1';
  src(`./node_modules/${module_name}/dest/**`)
    .pipe(rename(function (path) {
       path.basename = path.basename.replace('.src', '');
     }))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})

task('respond.js', series('respond.js--1'))

task('remove_build', function(callback) {
  del('./build');
  callback();
})

task('build', parallel('animate.css', 'bootstrap', 'font-awesome', 'html5shiv', 'jquery', 'modernizr', 'normalize.css', 'respond.js'))
task('clean', series('remove_build'))

