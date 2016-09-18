var gulp = require('gulp')
var less = require('gulp-less')
var connect = require('gulp-connect')

var lessSrc = './less/*.less'
var lessDist = './css'
var htmlSrc = './*.html'
//编译less
gulp.task('less', function(){
	gulp.src(lessSrc)
		.pipe(less())
		.pipe(gulp.dest(lessDist))
		.pipe(connect.reload())
})
//html刷新
gulp.task('html', function(){
	gulp.src(htmlSrc)
			.pipe(connect.reload())
})
//本地服务器
gulp.task('connect', function(){
	connect.server({
		livereload: true
	})
})
//监听任务
gulp.task('watch', function(){
	gulp.watch(lessSrc, ['less'])
	gulp.watch(htmlSrc, ['html'])
})
//默认任务
gulp.task('default', ['less', 'html', 'watch', 'connect'])
