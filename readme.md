# API
	gulp.src(globs[, options]) => 读取目标源文件
	gulp.dest(path[, options]) => 向目标路径输出结果
	gulp.pipe() => 将目标文件通过插件处理
	gulp.watch(glob[, opts], tasks)
	or gulp.watch(glob[, opts, cb]) => 监视文件系统，并且可以再文件发生改变时做一些事情
	gulp.task(name[, deps], fn) => 定义一个gulp任务

# 常用工具插件
	gulp-sass => sass/scss编译
	gulp-eslint => js代码校对
	gulp.spritesmith => 生成sprite雪碧图
	gulp-connect => 本地起一个websocket服务，实时刷新浏览器
	gulp-changed => 不浪费宝贵的事件处理没有改动的文件
	http-proxy-middleware => 路由代理中间件

# 使用：当配置完gulpfile.js后，运行gulp命令