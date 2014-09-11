var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build:bower', function() {
    gulp.src(mainBowerFiles())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/lib/js'))
});

gulp.task('dev-build:bower', function() {
    gulp.src(mainBowerFiles())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/lib/js'))
});

gulp.task('build:css', function() {
    gulp.src('assets/css/**/*.css')
        .pipe(uglify())
        .pipe(gulp.dest('public/lib/css'))
});

/**
 * Move CSS files into public/lib/css
 * These will have been pre-processed by compass.
 */
gulp.task('dev-build:css', function() {
    gulp.src('assets/css/**/*.css')
        .pipe(gulp.dest('public/lib/css'))
});

gulp.task('build', ['build:css', 'build:bower']);
gulp.task('dev-build', ['dev-build:css', 'dev-build:bower']);