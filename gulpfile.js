/* 

    Gulpfile for LESS -> CSS conversion, JS combination and minification of Bootstrap files and a custom theme.

*/

// Include Gulp
var gulp = require('gulp');

// Include Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var prefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var size = require('gulp-size');
var bytediff = require('gulp-bytediff');

// Copy the icon fonts to dist folder
gulp.task('copy_fonts', function() {
    gulp.src('./fonts/**')
        .pipe(gulp.dest('./dist/fonts'));
});

// Define Lint Task for JS
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Define a task for converting LESS files to CSSm minifying and saving in dist/css folder:
gulp.task('less', function () {
    gulp.src('less/bootstrap.less')
        .pipe(less())
        .pipe(prefixer('last 5 versions', 'ie 8'))
        .pipe(rename("styles.css"))
        .pipe(gulp.dest('dist/css'))
        .pipe(bytediff.start())
        .pipe(minifycss())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest('dist/css'))
        .pipe(bytediff.stop());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(bytediff.start())
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(bytediff.stop());
});

// Define a task to watch changes in js and less folders
gulp.task('watch', function () {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('less/*.less', ['less']);
});

// Define a default task
gulp.task('default', ['copy_fonts', 'less', 'lint', 'scripts', 'watch']);
