define(['jquery','app/carousel','app/waterfull','app/gotop'],function($,Carousel,Waterfull,GoTop) {
	new Carousel('.look',$(window).width(),$(window).height());
	// setInterval(($('.look .next').trigger('click'),1000)
	
	new Waterfull('.water')
	new GoTop('.gotop')

})