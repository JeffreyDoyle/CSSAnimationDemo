const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('sass', function() {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
});


gulp.task('watch', function() {
    gulp.watch('*.scss', ['sass']);
});

gulp.task('default', ['sass'], function() {
    // fired before 'finished' event
});

gulp.task('build', ['sass'], function() {
    // fired before 'finished' event
});
