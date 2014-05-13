var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	gutil = require('gulp-util'),
	shell = require('gulp-shell'),
	//Paths
	sassSrc = 'src/scss/prototype.scss',
	cssDest = 'target/css',
	jsSrc = 'src/js/*.js',
	jsPluginsSrc = "src/js/plugins/*.js",
	jsVendorSrc = 'src/js/vendor/*.js',
	jsDest = 'target/js',
	
	;

// Styles
gulp.task('styles', function() {
	return gulp.src(sassSrc)
		.pipe(sass({
			style: 'expanded'
		}))
		.on('error', gutil.log)
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest(cssDest))
		.pipe(notify({
			message: 'Styles task complete'
		}));
});

// Scripts task: JSHint & minify
gulp.task('scripts', function() {
	return gulp.src()
		.pipe(concat('prototype.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.on('error', gutil.log)
		.pipe(gulp.dest(jsDest))
		.pipe(notify({
			message: 'Scripts task complete'
		}));
});

// Scripts task: Plugins
gulp.task('scripts-plugins', function() {
	return gulp.src(jsPluginsSrc)
		.pipe(concat('prototype-plugins.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.on('error', gutil.log)
		.pipe(gulp.dest(jsDest))
		.pipe(notify({
			message: 'Scripts (plugins) task complete'
		}));
});

// Scripts task: Vendor
gulp.task('scripts-vendor', function() {
	return gulp.src(jsVendorSrc)
		.pipe(concat('rp3-vendor.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.on('error', gutil.log)
		.pipe(gulp.dest(jsDest))
		.pipe(notify({
			message: 'Scripts (vendor) task complete'
		}));
});

// Clean
gulp.task('clean', function() {
	return gulp.src([jsDest, cssDest], {
		read: false
	})
		.pipe(clean());
});

// Default
gulp.task('default', ['clean'], function() {
	gulp.start('styles');
	gulp.start('scripts');
	gulp.start('scripts-plugins');
	gulp.start('scripts-vendor');
});

