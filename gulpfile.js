let gulp     = require('gulp'),
		stylus   = require('gulp-stylus'),
		uglify   = require('gulp-uglify'),
		cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {

	// CSS
	gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('public/lib/css'));
	gulp.src('resources/assets/docs/prism.css')
		.pipe(cleanCSS({compatibility: '*'}))
		.pipe(gulp.dest('public/lib/css'));

	// Stylus
	gulp.src('resources/assets/stylus/base/docs.styl')
			.pipe(stylus())
			.pipe(cleanCSS({compatibility: '*'}))
			.pipe(gulp.dest('public/lib/css'));

	// Js
	gulp.src('node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest('public/lib/js'));
	gulp.src('node_modules/popper.js/dist/umd/popper.min.js').pipe(gulp.dest('public/lib/js'));
	gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest('public/lib/js'));
	gulp.src('node_modules/clipboard/dist/clipboard.min.js').pipe(gulp.dest('public/lib/js'));
	gulp.src('resources/assets/docs/prism.js').pipe(gulp.dest('public/lib/js'));
	gulp.src('resources/assets/docs/docs.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/lib/js'));

});
