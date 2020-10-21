const { dest, parallel, src, series, task } = require('gulp');
const del = require('del');
const gulp = require('gulp');
const concat = require('gulp-concat');
const importCss = require('gulp-import-css');
const minifyCss = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minifyJs = require('gulp-uglify');

//// PACKAGE animate.css ////
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


//// PACKAGE aos ////
task('aos--1', function(callback) {
  const module_name = 'aos--1';
  src(`./node_modules/${module_name}/dist/aos.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/aos.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('aos--2', function(callback) {
  const module_name = 'aos--2';
  src(`./node_modules/${module_name}/dist/aos.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/aos.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('aos', series('aos--1', 'aos--2'))

//// PACKAGE bootstrap ////
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


//// PACKAGE font-awesome ////
task('font-awesome--4', function(callback) {
  const module_name = 'font-awesome--4';
  src(`./node_modules/${module_name}/css/**`)
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/fonts/**`)
    .pipe(dest(`./build/${module_name}/fonts`));
  callback();
})
task('font-awesome', series('font-awesome--4'))


//// PACKAGE html5shiv ////
task('html5shiv--3', function(callback) {
  const module_name = 'html5shiv--3';
  src(`./node_modules/${module_name}/dist/**`)
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('html5shiv', series('html5shiv--3'))


//// PACKAGE jquery ////
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


//// PACKAGE jquery-appear ////
task('jquery-appear--0', function(callback) {
  const module_name = 'jquery-appear--0';
  src(`./node_modules/${module_name}/index.js`)
    .pipe(rename(function (path) {
      path.basename = 'jquery-appear';
    }))
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('jquery-appear', series('jquery-appear--0'))

//// PACKAGE jquery-migrate ////
task('jquery-migrate--1', function(callback) {
  const module_name = 'jquery-migrate--1';
  src(`./node_modules/${module_name}/dist/jquery-migrate**`)
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('jquery-migrate--3', function(callback) {
  const module_name = 'jquery-migrate--3';
  src(`./node_modules/${module_name}/dist/jquery-migrate**`)
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('jquery-migrate', series('jquery-migrate--1', 'jquery-migrate--3'))


//// PACKAGE jquery-sticky ////
task('jquery-sticky--1', function(callback) {
  const module_name = 'jquery-sticky--1';
  src(`./node_modules/${module_name}/*.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('jquery-sticky', series('jquery-sticky--1'))


//// PACKAGE jquery-ui ////
task('jquery-ui--1', function(callback) {
  const module_name = 'jquery-ui--1';
  src([`./node_modules/${module_name}/themes/base/core.css`, `./node_modules/${module_name}/themes/base/*.css`, `!./node_modules/${module_name}/themes/base/all.css`, `!./node_modules/${module_name}/themes/base/base.css`, `!./node_modules/${module_name}/themes/base/theme.css`, `./node_modules/${module_name}/themes/base/theme.css`])
    .pipe(concat('jquery-ui.css'))
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src([`./node_modules/${module_name}/themes/base/core.css`, `./node_modules/${module_name}/themes/base/*.css`, `!./node_modules/${module_name}/themes/base/all.css`, `!./node_modules/${module_name}/themes/base/base.css`, `!./node_modules/${module_name}/themes/base/theme.css`])
    .pipe(concat('jquery-ui.structure.css'))
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/themes/base/theme.css`)
    .pipe(concat('jquery-ui.theme.css'))
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/themes/base/images/**`)
    .pipe(dest(`./build/${module_name}/css/images`));
  src([`./node_modules/${module_name}/ui/version.js`, `./node_modules/${module_name}/ui/*.js`, `!./node_modules/${module_name}/ui/core.js`, `./node_modules/${module_name}/ui/effects/*.js`, `./node_modules/${module_name}/ui/widgets/*.js`])
    .pipe(concat('jquery-ui.js'))
    .pipe(dest(`./build/${module_name}/js`));
  src([`./node_modules/${module_name}/ui/version.js`, `./node_modules/${module_name}/ui/*.js`, `!./node_modules/${module_name}/ui/core.js`, `./node_modules/${module_name}/ui/effects/*.js`, `./node_modules/${module_name}/ui/widgets/*.js`])
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(concat('jquery-ui.min.js'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('jquery-ui', series('jquery-ui--1'))


//// PACKAGE jquery-validation ////
task('jquery-validation--1', function(callback) {
  const module_name = 'jquery-validation--1';
  src(`./node_modules/${module_name}/dist/*.js`)
    .pipe(dest(`./build/${module_name}/js`));
  src([`./node_modules/${module_name}/dist/localization/*.js`, `!./node_modules/${module_name}/dist/localization/*.min.js`])
    .pipe(concat('localization.all.js'))
    .pipe(dest(`./build/${module_name}/js`));
  src(`./node_modules/${module_name}/dist/localization/*.min.js`)
    .pipe(concat('localization.all.min.js'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('jquery-validation', series('jquery-validation--1'))


//// PACKAGE jquery.easing ////
task('jquery.easing--1', function(callback) {
  const module_name = 'jquery.easing--1';
  src([`./node_modules/${module_name}/jquery.easing.js`, `./node_modules/${module_name}/jquery.easing.compatibility.js`])
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('jquery.easing', series('jquery.easing--1'))


//// PACKAGE jquery.stellar ////
task('jquery.stellar--0', function(callback) {
  const module_name = 'jquery.stellar--0';
  src(`./node_modules/${module_name}/jquery.stellar.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('jquery.stellar', series('jquery.stellar--0'))


//// PACKAGE modernizr ////
task('modernizr--3', function(callback) {
  const module_name = 'modernizr--3';
  src(`./node_modules/${module_name}/dist/*.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
       path.basename += '.min';
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('modernizr', series('modernizr--3'))


//// PACKAGE normalize.css ////
task('normalize.css--3', function(callback) {
  const module_name = 'normalize.css--3';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += '.min';
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
       path.basename += '.min';
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
       path.basename += '.min';
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
       path.basename += '.min';
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
       path.basename += '.min';
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
       path.basename += '.min';
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  callback();
})
task('normalize.css', series('normalize.css--3', 'normalize.css--4', 'normalize.css--5', 'normalize.css--6', 'normalize.css--7', 'normalize.css--8'))


//// PACKAGE owl.carousel ////
task('owl.carousel--1', function(callback) {
  const module_name = 'owl.carousel--1';
  src(`./vendor/${module_name}/*.css`)
    .pipe(concat('owl.carousel.css'))
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src([`./vendor/${module_name}/*.gif`, `./vendor/${module_name}/*.png`])
    .pipe(dest(`./build/${module_name}/css`));
  src(`./vendor/${module_name}/owl.carousel.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('owl.carousel--2', function(callback) {
  const module_name = 'owl.carousel--2';
  src([`./node_modules/${module_name}/dist/assets/*.css`, `!./node_modules/${module_name}/dist/assets/*.min.css`])
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src([`./node_modules/${module_name}/dist/assets/*.gif`, `./node_modules/${module_name}/dist/assets/*.png`])
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/owl.carousel.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('owl.carousel', series('owl.carousel--1', 'owl.carousel--2'))


//// PACKAGE respond.js ////
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


//// PACKAGE tiny-slider ////
task('tiny-slider--0', function(callback) {
  const module_name = 'tiny-slider--0';
  src(`./node_modules/${module_name}/dist/tiny-slider.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/tiny-slider.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('tiny-slider--1', function(callback) {
  const module_name = 'tiny-slider--1';
  src(`./node_modules/${module_name}/dist/tiny-slider.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/tiny-slider.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('tiny-slider--2', function(callback) {
  const module_name = 'tiny-slider--2';
  src(`./node_modules/${module_name}/dist/tiny-slider.css`)
    .pipe(dest(`./build/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/tiny-slider.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('tiny-slider', series('tiny-slider--0', 'tiny-slider--1', 'tiny-slider--2'))


//// PACKAGE wowjs ////
task('wowjs--1', function(callback) {
  const module_name = 'wowjs--1';
  src(`./node_modules/${module_name}/dist/wow.js`)
    .pipe(dest(`./build/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./build/${module_name}/js`));
  callback();
})
task('wowjs', series('wowjs--1'))


//// MAINTAINANCE ////
task('remove_build', function(callback) {
  del('./build');
  callback();
})

task('build', parallel('animate.css', 'aos', 'bootstrap', 'font-awesome', 'html5shiv', 'jquery', 'jquery-appear', 'jquery-migrate', 'jquery-sticky', 'jquery-ui', 'jquery-validation', 'jquery.easing', 'jquery.stellar', 'modernizr', 'normalize.css', 'owl.carousel', 'respond.js', 'tiny-slider', 'wowjs'))
task('clean', series('remove_build'))
