const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('dev/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dev/css'));
});

gulp.task('pug', function() {
	return gulp.src('dev/templates/**/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('dev/views'));
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'dev'
		},
	});
});
