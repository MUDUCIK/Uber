const gulp        = require('gulp'),
pug = require('gulp-pug');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('pug', function(){
	return gulp.src('src/*.pug')
		.pipe(pug({
            pretty: true
        }))
		.pipe(gulp.dest('src'))
});

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function(){
    return gulp.src("src/sass/*.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({
                prefix: "",
                suffix: ".min",
              }))
            .pipe(autoprefixer({
                grid: true,
                cascade: false
            }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest("src/css"))
            .pipe(browserSync.stream());
});

gulp.task('watch', function(){
	gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("styles"));
	gulp.watch('src/**/*.pug', gulp.parallel('pug'));
    gulp.watch("src/*.html").on("change", browserSync.reload);
    gulp.watch("src/js/*.js").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch','server', 'styles'));

