var path=require('path')
module.exports={
	entry:'./src/js/app/main.js', //此处 ./同级目录不可省略
	output:{
		filename:'index.js',
		path:path.resolve(__dirname,'./src/js')
	}
}