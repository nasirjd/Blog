module.exports = (gulp, plugin) => {
    return () => {
        gulp.src("Styles/**/*.scss")
            .pipe(plugin.sass().on("error", plugin.sass.logError))
            .pipe(plugin.concatCss("site.min.css"))
            .pipe(plugin.cleanCss())
            .pipe(gulp.dest("wwwroot/dist/css"));
    }
}