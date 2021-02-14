const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

function watch_and_reload() {
  browserSync.init({
      server: {
         baseDir: ".",
         index: "/index.html"
      },
      notify: false,
      online: true
  });
  watch('sass/**/*.sass', style)
  watch('sass/**/*.scss', style)
  watch('*.html').on('change',browserSync.reload);
  watch('js/*.js').on('change', browserSync.reload);
}

function style() {
  return src('sass/**/*.sass', 'sass/**/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(dest('css/'))
  .pipe(browserSync.stream());
}

exports.browsersync = watch_and_reload;
exports.style = style;
exports.watch = watch_and_reload;

