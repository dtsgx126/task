define(['jquery'],function( $ ) {

    function Carousel(ct,width,height) {
          this.$ct=$(ct)
          this.width=width
          this.height=height     
          this.len=$(ct).find('.imgs li').length
          this.target=0
          this.isload=false
          this.render()
          this.bind()
          this.auto()
    }

    Carousel.prototype={
      render:function(argument) {
          var self=this
          this.$ct.width(self.width).height(self.height).width($(window).width())
          this.$ct.find('.imgs img').width(self.width).height(self.height)
          var imgLast=self.$ct.find('.imgs li').last().clone(true,true)
          var imgFirst=self.$ct.find('.imgs li').first().clone(true,true)
          this.$ct.find('.imgs').prepend(imgLast).append(imgFirst)
                  .css({'width':self.$ct.find('.imgs li').length*self.width,'left':-self.width+'px'})
      },
      bind:function(argument) {
          var self=this


          this.$ct.find('.pre').on('click',function (argument){
              if (self.isload) {return}
              self.isload=true
              var range=Math.abs(parseInt(self.$ct.find('.imgs').css('left')))
              if (range==0) {
                self.$ct.find('.imgs').css({'left':-self.width*self.len+'px'})
                self.target=-1
              }

                self.$ct.find('.imgs').animate({left:'+='+self.width},function() {
                  self.isload=false
                })
                self.target--
                self.btnMove(self.target)
          })

          this.$ct.find('.next').on('click',function () {
              if (self.isload) {return}
              self.isload=true
             var range=Math.abs(parseInt(self.$ct.find('.imgs').css('left')))  
              if (range==(self.$ct.find('.imgs').width()-self.width)) {
                self.$ct.find('.imgs').css({'left':-self.width+'px'})
                self.target=0
              }
                self.$ct.find('.imgs').animate({left:'-='+self.width},function(argument) {
                  self.isload=false 
                })
                self.target++ 
                self.btnMove(self.target)
                      
          })


          self.$ct.find('.index li').each(function() {
              $(this).click(function() {
                if (self.isload) { return } 
                var index=$(this).index()
                self.isload=true
                self.target=index
                self.btnMove(self.target)
                self.$ct.find('.imgs').animate({left:-self.width*(index+1)},function (argument) {
                  self.isload=false
                })
              })
      
          })
      },
      btnMove:function(target) {
        var self=this
        var targetInt=target % self.$ct.find('.index li').length
        self.$ct.find('.index li').css('background','#fff').eq(targetInt).css('background','gray')
      },
      auto:function(argument) {
        var self=this
        setInterval(function(argument) {
          self.$ct.find('.next').trigger('click')
        },2000)
      }
    }
    return Carousel

})