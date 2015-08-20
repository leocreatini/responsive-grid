// Declare Variables
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	jshint = require('gulp-jshint'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	bowerFiles = require('main-bower-files'),

	// Live Reload
    livereload = require('gulp-livereload'),
    tinylr = require('tiny-lr'),
    lr = tinylr(),
    LIVERELOAD_PORT = 35729;

// Declare Functions
function onError(err){
    console.log(err);
    this.emit('end');
}

// Bower JS to Assets
gulp.task('bower-files-js', function() {
	var js = (/.*\.js$/i);
    return gulp.src(bowerFiles({filter: js}), {base: './bower_components'})
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/assets/libs'));
});

// Bower CSS to Assets
gulp.task('bower-files-css', function() {
    var css = (/.*\.css$/i);
    return gulp.src(bowerFiles({filter: css}), {base: './bower_components'})
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/assets/libs'));
});

// Bower Fonts to Assets
gulp.task('bower-files-fonts', function() {
    var fonts = (/.*\.woff/i);
    return gulp.src(bowerFiles({filter: fonts}), {base: './bower_components'})
        .pipe(gulp.dest('./public/assets/libs'));
});

// Sass to CSS
gulp.task('sass', function() {
  return gulp.src([
        './public/assets/css/*.sass',
        './public/assets/css/partials/*.sass'], {style: 'expanded', sourcemap: true})
    .pipe(sourcemaps.init())
    .pipe(sass({indentedSyntax: true}))
    .on('error', onError)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/css'));
});

// JS Hint
gulp.task('jshint', function() {
    return gulp.src(['./public/**/*.js', '!./public/assets/libs/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Gulp watching for changes.
gulp.task('watch', function() {
    lr.listen(LIVERELOAD_PORT, function(err) {
        gulp.watch(['./public/assets/css/*.sass','./public/assets/css/partials/*.sass'], ['sass']);
        gulp.watch('./public/**/*.js', ['jshint']);
    });
});

// Start all tasks by typing 'gulp' in Bash, while in main directory.
gulp.task('default', ['bower-files-js', 'bower-files-css', 'bower-files-fonts', 'watch'], function() {
});