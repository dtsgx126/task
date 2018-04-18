// define(['jquery','app/carousel','app/waterfull','app/gotop'],function($,Carousel,Waterfull,GoTop) {
// 	new Carousel('.look',$(window).width(),$(window).height());
// 	// setInterval(($('.look .next').trigger('click'),1000)
	
// 	new Waterfull('.water')
// 	new GoTop('.gotop')

// })

var $ = require('jquery')
var Carousel=require('./carousel.js')
var Waterfull=require('./waterfull.js')
var GoTop=require('./gotop.js')
// module.exports=function(argument) {
// 	// body...
// }
new Carousel('.look',$(window).width(),$(window).height())
new Waterfull('.water')
new GoTop('.gotop')