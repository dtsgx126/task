var gulp=require('gulp')
	csso=require('gulp-csso')
	uglify=require('gulp-uglify')
	imgmin=require('gulp-imagemin')
	less=require('gulp-less')
	rev=require('gulp-rev')
	revReplace=require('gulp-rev-replace')
	useref=require('gulp-useref')
	concat=require('gulp-concat')
	autoprefixer=require('gulp-autoprefixer')
	connect=require('gulp-connect')
	clean=require('gulp-clean')
//生产环境搭建
gulp.task('dist:imgs',function() {
	return gulp.src('src/imgs/*')
		.pipe(imgmin())
		.pipe(gulp.dest('dist/imgs'))
})
gulp.task('dist:css',function() {
	gulp.src('dist/css/*').pipe(clean())
	return gulp.src('src/css/*')
		.pipe(concat('merge.css'))
		.pipe(csso())
		.pipe(autoprefixer({
			browsers:['last 2 versions'],
			cascade:false
		}))
		.pipe(gulp.dest('dist/css'))
})
gulp.task('dist:js',function () {
	gulp.src('dist/js/*').pipe(clean())
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
})

gulp.task('revision',['dist:css','dist:js'],function() {
	return gulp.src(['dist/css/*','dist/*.js'])
		.pipe(rev())
		.pipe(gulp.dest('dist'))
		.pipe(gulp.manifest())
		.pipe(gulp.dest('dist'))
})
gulp.task('index',['revision'],function() {
	var manifest=gulp.src('dist/rev-mainfest.json')
	return gulp.src('dist/*.html')
		.pipe(revReplace({
			manifest:manifest
		}))
		.pipe(useref())
		.pipe(gulp.dest('dist'))
})

//开发环境搭建


gulp.task('connect',function() {
	connect.server({
		root:'src',
		livereload:true
	})
})
gulp.task('reload',function() {
	gulp.src('src/index.html')
		.pipe(connect.reload())
})
gulp.task('js',function() {
	gulp.watch('src/js/*')
})

gulp.task('change',function() {
	gulp.watch(['src/**/*'],['reload'])
})
gulp.task('server',['connect','change'])