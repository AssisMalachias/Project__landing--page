const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/css/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/css/*.scss', gulp.parallel(styles))
}   