var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var cdnUrl = [
	[ '../assets/', 'https://s.anw.red/anywayfm.com/' ]
];

gulp.task('watch', function() {
	gulp.watch(['*','*/*'], ['default']);
 });


gulp.task('default', function() {
	gulp.src(['assets/*.css','!assets/*.min.css'])
		.pipe(plugins.cleanCss({compatibility: 'ie8'}))
		.pipe(plugins.batchReplace(cdnUrl))
		.pipe(plugins.rename({
	      suffix: '.min'
	    }))
		.pipe(gulp.dest('builds/'));
});
