var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require('path');

var paths = {
  css: ['assets/css/less/**/*.less'],
  icons: ['assets/icons/**/*.svg']
};

gulp.task('build', function() {
  return gulp.src(['./app/treebox.directive.js', './app/app.module.js'])
    .pipe(concat('sup.treebox.js'))
    .pipe(gulp.dest('./dist/'));
});

/*gulp.task('watch', function() {
  gulp.watch(paths.css, ['less', 'minify-css']);
  gulp.watch(paths.icons, ['iconfont']);
});*/
