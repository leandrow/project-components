let gulp     = require('gulp'),
		stylus   = require('gulp-stylus'),
		uglify   = require('gulp-uglify'),
		cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {

	// CSS
	gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('dist/lib'));
	gulp.src('src/prism/prism.css')
		.pipe(cleanCSS({compatibility: '*'}))
		.pipe(gulp.dest('dist/lib'));

	// Stylus
	gulp.src('src/stylus/docs.styl')
			.pipe(stylus())
			.pipe(cleanCSS({compatibility: '*'}))
			.pipe(gulp.dest('dist/assets'));

	// Js
	gulp.src('node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest('dist/lib'));
	gulp.src('node_modules/popper.js/dist/umd/popper.min.js').pipe(gulp.dest('dist/lib'));
	gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest('dist/lib'));
	gulp.src('node_modules/clipboard/dist/clipboard.min.js').pipe(gulp.dest('dist/lib'));
	gulp.src('src/prism/prism.js').pipe(gulp.dest('dist/lib'));
	gulp.src('src/js/docs.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/assets'));

});
