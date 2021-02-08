const { src, dest, parallel, series, watch } = require('gulp');

const browserSync = require('browser-sync').create();

function browsersync(cb) {
  browserSync.init({
    server: { baseDir: 'src/' },
    notify: false,
    online: true
  })
  cb();
}

function reload(cb) {
  watch('src/').on('change', browserSync.reload);
  cb();
}

exports.browsersync = series(browsersync, reload);

