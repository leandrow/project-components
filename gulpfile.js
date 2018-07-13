let gulp     	= require('gulp'),
	stylus   	= require('gulp-stylus'),
	uglify   	= require('gulp-uglify'),
	cleanCSS 	= require('gulp-clean-css'),
	concat 	 	= require('gulp-concat'),
	rename   	= require('gulp-rename'),
	browserSync = require('browser-sync').create();


// Browser Sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: './demo'
  })
});

// CSS
gulp.task('css', function () {
	return gulp.src('src/stylus/docs.styl')
		.pipe(stylus({'include css': true}))
		.pipe(cleanCSS({compatibility: '*'}))
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest('dist/assets'))
		.pipe(gulp.dest('demo/assets'));
});

// Scripts
gulp.task('scripts', function () {
	return gulp.src([
			'src/js/docs.js',
			'src/prism/prism.js'
		])
		.pipe(uglify())
		.pipe(concat('docs.min.js'))
		.pipe(gulp.dest('dist/assets'))
		.pipe(gulp.dest('demo/assets'));
});

// Libs
gulp.task('libs', function () {
	return gulp.src([
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/popper.js/dist/umd/popper.min.js',
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'node_modules/clipboard/dist/clipboard.min.js'
		])
		.pipe(gulp.dest('demo/lib')),
	gulp.src('dist/img/*').pipe(gulp.dest('demo/img'));
});

// Watch
gulp.task('watch', function () {
	gulp.watch('src/stylus/*.styl', ['css', browserSync.reload]);
	gulp.watch('src/js/*.js', ['scripts', browserSync.reload]);
	gulp.watch('demo/*.html', browserSync.reload);
});


// Tasks
gulp.task('default', ['browserSync', 'css', 'scripts', 'libs', 'watch']);
