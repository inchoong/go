var gulp = require('gulp'), gulpLoadPlugins = require('gulp-load-plugins'), plugins = gulpLoadPlugins();

var htmlReplace = [
	[ 'assets/vue.js', 'https://s.anw.red/js/vue.min.js' ],
	[ 'assets/', 'https://s.anw.red/2019-guangdong/' ]
];

var cssReplace = [
	[ 'url(', 'url(https://s.anw.red/2019-guangdong/' ]
	// [ '\'images/', '\'https://s.anw.red/anyway.fm/' ],
];

gulp.task('default', function() {

	gulp.src('index.html')
		.pipe(plugins.cacheBust({
      type: 'MD5',
      basePath: './'
    	}))
		.pipe(plugins.batchReplace(htmlReplace))
    .pipe(plugins.htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('builds'));

	gulp.src('assets/main.js')
		.pipe(plugins.stripDebug())
		.pipe(plugins.minify({
			ext:{
				min:'.js'
			},
			noSource: true
		}))
    .pipe(gulp.dest('builds'))

	gulp.src('assets/styles.css')
	.pipe(plugins.batchReplace(cssReplace))
	.pipe(plugins.cleanCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('builds'));

});

gulp.task('watch', function() {
	gulp.watch(['*','*/*'], ['default']);
 });
