const { dest, parallel, src, series, task } = require('gulp');
const del = require('del');
const gulp = require('gulp');
const concat = require('gulp-concat');
const importCss = require('gulp-import-css');
const minifyCss = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const gulpSass = require('gulp-sass');
const sassCompiler = require('sass');
const sass = gulpSass(sassCompiler);
const sassTildeImporter = require('./sass-tilde-support.js');
const sourcemaps = require('gulp-sourcemaps');
const minifyJs = require('gulp-uglify');
const minifyJsOptions = { output: { comments: function(node, comment) { return /v\d\.\d\.\d/g.test(comment.value); } } }

const outputDir = process.env.NODE_ENV !== 'production' ? 'build' : 'dist';

//// PACKAGE animate.css ////
task('animate.css--3', function(callback) {
  const module_name = 'animate.css--3';
  src([`./node_modules/${module_name}/animate.css`, `./node_modules/${module_name}/animate.min.css`])
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  callback();
})
task('animate.css--4', function(callback) {
  const module_name = 'animate.css--4';
  src([`./node_modules/${module_name}/animate.css`, `./node_modules/${module_name}/animate.min.css`])
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  callback();
})
task('animate.css', series('animate.css--3', 'animate.css--4'))


//// PACKAGE aos ////
task('aos--1', function(callback) {
  const module_name = 'aos--1';
  src(`./node_modules/${module_name}/dist/aos.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/aos.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('aos--2', function(callback) {
  const module_name = 'aos--2';
  src(`./node_modules/${module_name}/dist/aos.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/aos.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('aos', series('aos--1', 'aos--2'))

//// PACKAGE bootstrap ////
task('bootstrap--3', function(callback) {
  const module_name = 'bootstrap--3';
  src(`./node_modules/${module_name}/dist/css/**`)
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/fonts/**`)
    .pipe(dest(`./${outputDir}/${module_name}/fonts`));
  src(`./node_modules/${module_name}/dist/js/bootstrap**`)
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('bootstrap--4', function(callback) {
  const module_name = 'bootstrap--4';
  src(`./node_modules/${module_name}/dist/css/**`)
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/js/bootstrap**`)
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('bootstrap', series('bootstrap--3', 'bootstrap--4'))


//// PACKAGE flickity ////
task('flickity--0', function(callback) {
  const module_name = 'flickity--0';
  src(`./node_modules/${module_name}/dist/flickity.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/flickity.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('flickity--1', function(callback) {
  const module_name = 'flickity--1';
  src(`./node_modules/${module_name}/dist/flickity.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/flickity.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('flickity--2', function(callback) {
  const module_name = 'flickity--2';
  src(`./node_modules/${module_name}/dist/flickity.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/flickity.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('flickity', series('flickity--0', 'flickity--1', 'flickity--2'))


//// PACKAGE font-awesome ////
task('font-awesome--4', function(callback) {
  const module_name = 'font-awesome--4';
  src(`./node_modules/${module_name}/css/**`)
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/fonts/**`)
    .pipe(dest(`./${outputDir}/${module_name}/fonts`));
  callback();
})
task('font-awesome', series('font-awesome--4'))


//// PACKAGE html5shiv ////
task('html5shiv--3', function(callback) {
  const module_name = 'html5shiv--3';
  src(`./node_modules/${module_name}/dist/**`)
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('html5shiv', series('html5shiv--3'))


//// PACKAGE imagesloaded ////
task('imagesloaded--3', function(callback) {
  const module_name = 'imagesloaded--3';
  src(`./node_modules/${module_name}/imagesloaded.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('imagesloaded--4', function(callback) {
  const module_name = 'imagesloaded--4';
  src(`./node_modules/${module_name}/imagesloaded.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('imagesloaded', series('imagesloaded--3', 'imagesloaded--4'))


//// PACKAGE infinite-scroll ////
task('infinite-scroll--3', function(callback) {
  const module_name = 'infinite-scroll--3';
  src(`./node_modules/${module_name}/dist/infinite-scroll.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('infinite-scroll', series('infinite-scroll--3'))


//// PACKAGE isotope-layout ////
task('isotope-layout--2', function(callback) {
  const module_name = 'isotope-layout--2';
  src(`./node_modules/${module_name}/dist/isotope.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('isotope-layout--3', function(callback) {
  const module_name = 'isotope-layout--3';
  src(`./node_modules/${module_name}/dist/isotope.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('isotope-layout', series('isotope-layout--2', 'isotope-layout--3'))


//// PACKAGE jquery ////
task('jquery--1', function(callback) {
  const module_name = 'jquery--1';
  src(`./node_modules/${module_name}/dist/**`)
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery--2', function(callback) {
  const module_name = 'jquery--2';
  src(`./node_modules/${module_name}/dist/**`)
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery--3', function(callback) {
  const module_name = 'jquery--3';
  src(`./node_modules/${module_name}/dist/**`)
    .pipe(dest(`./${outputDir}/${module_name}/js`));
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
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery-appear', series('jquery-appear--0'))

//// PACKAGE jquery-migrate ////
task('jquery-migrate--1', function(callback) {
  const module_name = 'jquery-migrate--1';
  src(`./node_modules/${module_name}/dist/jquery-migrate**`)
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery-migrate--3', function(callback) {
  const module_name = 'jquery-migrate--3';
  src(`./node_modules/${module_name}/dist/jquery-migrate**`)
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery-migrate', series('jquery-migrate--1', 'jquery-migrate--3'))


//// PACKAGE jquery-sticky ////
task('jquery-sticky--1', function(callback) {
  const module_name = 'jquery-sticky--1';
  src(`./node_modules/${module_name}/*.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery-sticky', series('jquery-sticky--1'))


//// PACKAGE jquery-ui ////
task('jquery-ui--1', function(callback) {
  const module_name = 'jquery-ui--1';
  src([`./node_modules/${module_name}/themes/base/core.css`, `./node_modules/${module_name}/themes/base/*.css`, `!./node_modules/${module_name}/themes/base/all.css`, `!./node_modules/${module_name}/themes/base/base.css`, `!./node_modules/${module_name}/themes/base/theme.css`, `./node_modules/${module_name}/themes/base/theme.css`])
    .pipe(concat('jquery-ui.css'))
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src([`./node_modules/${module_name}/themes/base/core.css`, `./node_modules/${module_name}/themes/base/*.css`, `!./node_modules/${module_name}/themes/base/all.css`, `!./node_modules/${module_name}/themes/base/base.css`, `!./node_modules/${module_name}/themes/base/theme.css`])
    .pipe(concat('jquery-ui.structure.css'))
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/themes/base/theme.css`)
    .pipe(concat('jquery-ui.theme.css'))
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/themes/base/images/**`)
    .pipe(dest(`./${outputDir}/${module_name}/css/images`));
  src([`./node_modules/${module_name}/ui/version.js`, `./node_modules/${module_name}/ui/*.js`, `!./node_modules/${module_name}/ui/core.js`, `./node_modules/${module_name}/ui/effects/*.js`, `./node_modules/${module_name}/ui/widgets/*.js`])
    .pipe(concat('jquery-ui.js'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  src([`./node_modules/${module_name}/ui/version.js`, `./node_modules/${module_name}/ui/*.js`, `!./node_modules/${module_name}/ui/core.js`, `./node_modules/${module_name}/ui/effects/*.js`, `./node_modules/${module_name}/ui/widgets/*.js`])
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(concat('jquery-ui.min.js'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery-ui', series('jquery-ui--1'))


//// PACKAGE jquery-validation ////
task('jquery-validation--1', function(callback) {
  const module_name = 'jquery-validation--1';
  src(`./node_modules/${module_name}/dist/*.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  src([`./node_modules/${module_name}/dist/localization/*.js`, `!./node_modules/${module_name}/dist/localization/*.min.js`])
    .pipe(concat('localization.all.js'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  src(`./node_modules/${module_name}/dist/localization/*.min.js`)
    .pipe(concat('localization.all.min.js'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery-validation', series('jquery-validation--1'))


//// PACKAGE jquery.easing ////
task('jquery.easing--1', function(callback) {
  const module_name = 'jquery.easing--1';
  src([`./node_modules/${module_name}/jquery.easing.js`, `./node_modules/${module_name}/jquery.easing.compatibility.js`])
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery.easing', series('jquery.easing--1'))


//// PACKAGE jquery.stellar ////
task('jquery.stellar--0', function(callback) {
  const module_name = 'jquery.stellar--0';
  src(`./node_modules/${module_name}/jquery.stellar.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('jquery.stellar', series('jquery.stellar--0'))


//// PACKAGE masonry-layout ////
task('masonry-layout--3', function(callback) {
  const module_name = 'masonry-layout--3';
  src(`./node_modules/${module_name}/dist/masonry.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('masonry-layout--4', function(callback) {
  const module_name = 'masonry-layout--4';
  src(`./node_modules/${module_name}/dist/masonry.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('masonry-layout', series('masonry-layout--3', 'masonry-layout--4'))


//// PACKAGE modernizr ////
task('modernizr--3', function(callback) {
  const module_name = 'modernizr--3';
  src(`./node_modules/${module_name}/dist/*.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
       path.basename += '.min';
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('modernizr', series('modernizr--3'))


//// PACKAGE normalize.css ////
task('normalize.css--3', function(callback) {
  const module_name = 'normalize.css--3';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += '.min';
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  callback();
})
task('normalize.css--4', function(callback) {
  const module_name = 'normalize.css--4';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += '.min';
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  callback();
})
task('normalize.css--5', function(callback) {
  const module_name = 'normalize.css--5';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += '.min';
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  callback();
})
task('normalize.css--6', function(callback) {
  const module_name = 'normalize.css--6';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += '.min';
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  callback();
})
task('normalize.css--7', function(callback) {
  const module_name = 'normalize.css--7';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += '.min';
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  callback();
})
task('normalize.css--8', function(callback) {
  const module_name = 'normalize.css--8';
  src(`./node_modules/${module_name}/normalize.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
       path.basename += '.min';
     }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  callback();
})
task('normalize.css', series('normalize.css--3', 'normalize.css--4', 'normalize.css--5', 'normalize.css--6', 'normalize.css--7', 'normalize.css--8'))


//// PACKAGE owl.carousel ////
task('owl.carousel--1', function(callback) {
  const module_name = 'owl.carousel--1';
  src(`./vendor/${module_name}/*.css`)
    .pipe(concat('owl.carousel.css'))
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src([`./vendor/${module_name}/*.gif`, `./vendor/${module_name}/*.png`])
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./vendor/${module_name}/owl.carousel.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('owl.carousel--2', function(callback) {
  const module_name = 'owl.carousel--2';
  src([`./node_modules/${module_name}/dist/assets/*.css`, `!./node_modules/${module_name}/dist/assets/*.min.css`])
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src([`./node_modules/${module_name}/dist/assets/*.gif`, `./node_modules/${module_name}/dist/assets/*.png`])
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/owl.carousel.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('owl.carousel', series('owl.carousel--1', 'owl.carousel--2'))


//// PACKAGE packery ////
task('packery--1', function(callback) {
  const module_name = 'packery--1';
  src(`./node_modules/${module_name}/dist/packery.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('packery--2', function(callback) {
  const module_name = 'packery--2';
  src(`./node_modules/${module_name}/dist/packery.pkgd.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('packery', series('packery--1', 'packery--2'))


//// PACKAGE respond.js ////
task('respond.js--1', function(callback) {
  const module_name = 'respond.js--1';
  src(`./node_modules/${module_name}/dest/**`)
    .pipe(rename(function (path) {
       path.basename = path.basename.replace('.src', '');
     }))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('respond.js', series('respond.js--1'))


//// PACKAGE tiny-slider ////
task('tiny-slider--0', function(callback) {
  const module_name = 'tiny-slider--0';
  src(`./node_modules/${module_name}/dist/tiny-slider.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/tiny-slider.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('tiny-slider--1', function(callback) {
  const module_name = 'tiny-slider--1';
  src(`./node_modules/${module_name}/dist/tiny-slider.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/tiny-slider.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('tiny-slider--2', function(callback) {
  const module_name = 'tiny-slider--2';
  src(`./node_modules/${module_name}/dist/tiny-slider.css`)
    .pipe(dest(`./${outputDir}/${module_name}/css`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/css`));
  src(`./node_modules/${module_name}/dist/tiny-slider.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('tiny-slider', series('tiny-slider--0', 'tiny-slider--1', 'tiny-slider--2'))


//// PACKAGE wowjs ////
task('wowjs--1', function(callback) {
  const module_name = 'wowjs--1';
  src(`./node_modules/${module_name}/dist/wow.js`)
    .pipe(dest(`./${outputDir}/${module_name}/js`))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyJs(minifyJsOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(`./${outputDir}/${module_name}/js`));
  callback();
})
task('wowjs', series('wowjs--1'))


//// MAINTAINANCE ////
task('remove_build', function(callback) {
  del('./build');
  callback();
})

task('build', parallel('animate.css', 'aos', 'bootstrap', 'flickity', 'font-awesome', 'html5shiv', 'imagesloaded', 'infinite-scroll', 'isotope-layout', 'jquery', 'jquery-appear', 'jquery-migrate', 'jquery-sticky', 'jquery-ui', 'jquery-validation', 'jquery.easing', 'jquery.stellar', 'masonry-layout', 'modernizr', 'normalize.css', 'owl.carousel', 'packery', 'respond.js', 'tiny-slider', 'wowjs'))
task('clean', series('remove_build'))
