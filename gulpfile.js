'use strict';
const gulp = require('gulp');
const stylus = require('gulp-stylus'); // stylus编译
const eslint = require('gulp-eslint'); // js代码检测
const connect = require('gulp-connect'); // 本地起一个websocket服务，实时刷新浏览器
const changed = require('gulp-changed'); // 比较文件变动
const spritemith = ('gulp.spritemith'); // 合并成雪碧图
const proxy = require('http-proxy-middleware'); // 中间代理件

let pathconfig = {
	stylusCompilePath: __dirname + '/stylus/**/*.styl', // 需要编译的stylus文件路径
	stylusDestPath: __dirname + '/css/', // 编译后的css文件存放路径
	htmlSrcPath: __dirname + '/html/*.html', // 监控的html路径
	jsSrcPath: __dirname + '/js/*.js', // 监控的js文件路径
};

// html任务
gulp.task('html', function(){
	gulp.src(pathconfig.htmlSrcPath)
	.pipe(connect.reload());
});

// 样式任务
gulp.task('stylus', function(){
	gulp.src(pathconfig.stylusCompilePath)
	.pipe(changed(pathconfig.stylusDestPath))
	.pipe(stylus())
	.pipe(gulp.dest(pathconfig.stylusDestPath))
	.pipe(connect.reload());
});

// js任务
gulp.task('js', function(){
	gulp.src([pathconfig.jsSrcPath, '!node_modules/**'])
	.pipe(eslint())
	.pipe(eslint.formatEach('compact', process.stderr))
	.pipe(connect.reload());
});

// 监控变动
gulp.task('watch', function(){
	gulp.watch([pathconfig.htmlSrcPath], ['html']);
	gulp.watch([pathconfig.stylusCompilePath], ['stylus']);
	gulp.watch([pathconfig.jsSrcPath], ['js']);
});

// 定义livereload任务，起一个本地服务
gulp.task('connect', function(){
	connect.server({
		root: __dirname,
		port: 8000,
		livereload: true
	});
});

gulp.task('default', ['connect', 'watch']);