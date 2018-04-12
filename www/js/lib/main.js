requirejs.config({
	baseUrl:'js',
	paths:{
		'jquery':'lib/$'
	}
});
requirejs(['app/index']);