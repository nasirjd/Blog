module.exports = (gulp, plugin) => {
    return () => {
        gulp.src(["wwwroot/js/**/*.js", "wwwroot/lib/**/*.js"])
            .pipe(plugin.uglify())
            .pipe(plugin.concat("site.min.js"))
            .pipe(gulp.dest("wwwroot/dist/js"));
    }
} 