module.exports = (gulp, plugin) => {
    return () => {
        gulp.src("Styles/**/*.scss")
            .pipe(plugin.sass().on("error", plugin.sass.logError))
            .pipe(gulp.dest("wwwroot/css"));
    }
} 