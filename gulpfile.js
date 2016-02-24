var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

var tsproject = ts.createProject('tsconfig.json');

gulp.task('build', function() {
   tsproject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsproject))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js'));
        
   //return tsresult.js.pipe(gulp.dest("js"));
});

gulp.task('server', function() {
   connect.server(); 
});

gulp.task('watch', function() {
   gulp.watch('src/**/*.ts', [ 'build' ]); 
});

gulp.task('default', [ 'build', 'watch', 'server' ]);