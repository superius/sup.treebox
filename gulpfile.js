var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require('path');
var templateCache = require('gulp-angular-templatecache');



gulp.task('views', function () {
	return gulp.src('views/**/*.html')
		.pipe(templateCache({'standalone': true}))
		.pipe(gulp.dest('public'));
});

gulp.task('build', function() {
	return gulp.src(['./public/templates.js',
					'./app/treebox.directive.js', 
					 './app/app.module.js'])
		.pipe(concat('sup.treebox.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['views', 'build']);

/*gulp.task('watch', function() {
	gulp.watch(paths.css, ['less', 'minify-css']);
	gulp.watch(paths.icons, ['iconfont']);
});*/
