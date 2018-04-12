define(['jquery','app/carousel','app/waterfull','app/gotop'],function($,Carousel,Waterfull,GoTop) {
	new Carousel('.look',$(window).width(),$(window).height());
	new Waterfull('.water')
	new GoTop('.gotop')

})