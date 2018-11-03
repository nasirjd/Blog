var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")();
    
function getTask(taskName) {
    return require("./GulpTasks/" + taskName)(gulp, plugins);
} 

gulp.task("sass:develop", getTask("sass-develop"));
gulp.task("sass:production", getTask("sass-production"));
gulp.task("js-minify", getTask("js-minify"));

gulp.task("build:production", ["sass:production", "js-minify"]);

gulp.task("sass:develop:watch",
    () => {
        gulp.watch("Styles/**/*.scss", ["sass:develop"]);
    });

gulp.task("build:develop", ["sass:develop:watch"]);

