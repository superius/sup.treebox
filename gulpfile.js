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
					'./app/jqueryScrollTo.min.js', 
					'./app/treebox.directive.js', 
					 './app/app.module.js'])
		.pipe(concat('sup.treebox.js'))
		.pipe(gulp.dest('./dist/'));
});


var paths = {
  js: ['./public/templates.js', './app/treebox.directive.js', './app/app.module.js']
};
gulp.task('watch', function() {
  gulp.watch(paths.js, ['views', 'build']);
});

gulp.task('default', ['views', 'build']);