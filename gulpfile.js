var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var connect = require('gulp-connect');

var tsproject = ts.createProject('tsconfig.json');

gulp.task('ts', function() {
   var tsresult = tsproject.src()
        .pipe(ts(tsproject));
        
   return tsresult.js.pipe(gulp.dest("js"));
});

gulp.task('server', function() {
   connect.server(); 
});

gulp.task('watch', function() {
   gulp.watch('src/**/*.ts', [ 'ts' ]); 
});

gulp.task('default', [ 'ts', 'watch', 'server' ]);