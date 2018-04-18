var $ = require('jquery')
function Water(ct) {
	this.$ct=$(ct)
	this.page=7
	this.num=3
	this.getData()
	this.bind()
}
Water.prototype = {
	getData:function(argument) {
			var self=this
			$.ajax({
		      'url':'https://easy-mock.com/mock/5aceca89575ce17421d30e3c/example/girls-test',
		      'type':'get',
		      'dataType':'json'
	     	}).done(function (res) {
	     		self.dataArr=res.data.girls
	       		self.init(self.dataArr)
	     	})
	},
	init:function(dataArr) {
		var self=this
		for (var i = 0; i <$('.item').length; i++) {
			$(self.$ct.find('.item')[i]).find('img').attr('src',dataArr[i])
		}
		$('.item img').on('load',function() {
			
			self.waterfull(self)
		})
	},
	bind:function(argument) {
		var self=this
		$(window).on('resize',function () {
			self.waterfull(self)                             //自适应
		})
		self.$ct.find('.load').on('click',function () {
			self.againPlace(self.page,self.num)
		})
	},
	waterfull:function(self) {
		var self=this
		var colLength=parseInt($('.water').width()/$('.item').width())
		var newItemWidth=($('.water').width()/colLength)-10

		self.$ct.find('.item').width(newItemWidth)
		this.itemArr=[]
		for (var i = 0; i < colLength; i++) {
			this.itemArr[i]=0
		}
		this.$ct.find('.item').each(function () {
			var minValue=Math.min.apply(null,self.itemArr)
			var minIndex=self.itemArr.indexOf(minValue)
			$(this).css({	
				top:self.itemArr[minIndex],
				left:(newItemWidth+10) * minIndex
			})
			self.itemArr[minIndex]+=$(this).outerHeight(true)
		})
		this.$ct.height(Math.max.apply(null,self.itemArr))
	},
	againPlace:function (page,num) {
		var self=this
		var newGirls=self.dataArr.splice(page,num)
		self.page+=self.num+1
		if (newGirls.length<3) {
			self.$ct.find('.load').text('没有数据了') 
			return 
		}
		var newHtml=''
		for (var i = 0; i < num; i++) {
			var random=Math.floor(Math.random()*5)+1
			var src=newGirls[i]
			newHtml+='<div class="item h'+random+'"><img src="'+src+'" alt=""></div>'
			self.$ct.append(newHtml)
		}
		self.$ct.find('.item:last-child').find('img').on('load',function() {
			self.waterfull(self)
		})
		self.$ct.height(Math.max.apply(null,self.itemArr))
	}

}
module.exports= Water
