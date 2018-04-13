define(['jquery'],function($) {

	function GoTop(ct) {
			this.$ct=$(ct)
			this.bind()
			console.log(this.prototype)
		}
	GoTop.prototype={
		bind:function() {
			
			this.$ct.on('click',function() {
				console.log('aaa')
				$('html,body').animate({scrollTop:0},1000)

			})
		}
	}
	
	return GoTop

})


