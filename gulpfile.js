/**
 * Created by tomi on 10/04/16.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'); // not minifying at the moment

gulp.task('sass', function () {
    return gulp.src(['./assets/sass/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch:sass', function () {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

/* Combined Tasks */
gulp.task('build', ['sass'] ,  function () {
});