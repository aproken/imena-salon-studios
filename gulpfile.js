const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

function watch_and_reload() {
  browserSync.init({
      server: {
         baseDir: "./src",
         index: "/index.html"
      },
      notify: false,
      online: true
  });
  watch('src/sass/**/*.sass', style)
  watch('src/sass/**/*.scss', style)
  watch('src/*.html').on('change',browserSync.reload);
  watch('src/js/*.js').on('change', browserSync.reload);
}

function style() {
  return src('src/sass/**/*.sass', 'src/sass/**/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(dest('src/css/'))
  .pipe(browserSync.stream());
}

exports.browsersync = watch_and_reload;
exports.style = style;
exports.watch = watch_and_reload;

