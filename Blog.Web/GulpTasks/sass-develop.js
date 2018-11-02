module.exports = function(gulp, plugin) {
    return function() {
        gulp.src("Styles/**/*.scss")
            .pipe(plugin.sass().on("error", plugin.sass.logError))
            .pipe(gulp.dest("wwwroot/css"));
    }
} 