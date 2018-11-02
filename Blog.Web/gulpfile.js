var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")();
    
function getTask(taskName) {
    return require("./GulpTasks/" + taskName)(gulp, plugins);
} 

gulp.task("sass:develop", getTask("sass-develop"));



//gulp.task("inject-files-into-cshtml:development",
//    function () {

//        var target = gulp.src("Views/Shared/_Layout.cshtml");
//        var fileSrouces = gulp.src(["wwwroot/js/**/*.js", "wwwroot/css/**/*.css"], { read: false });



//        return gulp.src("Styles/**/*.scss")
//            .pipe(sass().on("error", sass.logError))
//            .pipe(gulp.dest("wwwroot/css"));
//    });

//gulp.task("inject-files-into-cshtml:development",
//    function () {

//        var target = gulp.src("Views/Shared/_Layout.cshtml");
//        var fileSrouces = gulp.src(["wwwroot/js/**/*.js", "wwwroot/css/**/*.css"], { read: false });



//        return gulp.src("Styles/**/*.scss")
//            .pipe(sass().on("error", sass.logError))
//            .pipe(gulp.dest("wwwroot/css"));
//    });



//gulp.task("build:development",
//    function () {

//        var target = gulp.src("Views/Shared/_Layout.cshtml");
//        var fileSrouces = gulp.src(["wwwroot/js/**/*.js", "wwwroot/css/**/*.css"], { read: false });



//        return gulp.src("Styles/**/*.scss")
//            .pipe(sass().on("error", sass.logError))
//            .pipe(gulp.dest("wwwroot/css"));
//    });


//gulp.task("sass:development",
//    function () {

//        var target = gulp.src("Views/Shared/_Layout.cshtml");
//        var fileSrouces = gulp.src(["wwwroot/js/**/*.js", "wwwroot/css/**/*.css"], {read:false});


//        return gulp.src("Styles/**/*.scss")
//            .pipe()
//            .pipe(sass().on("error", sass.logError))
//            .pipe(gulp.dest("wwwroot/css"));
//    });

//gulp.task("sass:production",
//    function () {
//        return gulp.src("Styles/**/*.scss")
//            .pipe(sass().on("error", sass.logError))
//            .pipe(gulp.dest("wwwroot/css"));
//    });