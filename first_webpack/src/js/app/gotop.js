var $=require('jquery')

function GoTop(ct) {
			this.$ct=$(ct)
			this.bind()
			console.log(this.prototype)
		}
GoTop.prototype={
	bind:function() {
		
		this.$ct.on('click',function() {
			console.log('jirengu')
			$('html').animate({scrollTop:0},1000)

		})
	}
}

module.exports=GoTop