(function ($) {

  $.fn.extend({

    cleanMenu : function(th){
      th.find(".wapperMenu").each(function(i,item){
        $(item).find('.menu').removeClass('active');          
        $(item).find('.decorator').removeClass('dec-active'); 
        
        $(th).find('.menu').addClass('non-active');
        $(th).find('.decorator').addClass('dec-normal');  
      })
    },
    activeOpt : function(th){
      $(th).find('.menu').removeClass('non-active');
      $(th).find('.menu').addClass('active');
      $(th).find('.decorator').removeClass('dec-normal');
      $(th).find('.decorator').addClass('dec-active');
    },


    menuNelo : function(args){
      if(!args['opts']){
        alert('Error falta el elemento opts');
      }
      var options = args['opts'];
      var that = this;
      $.each(options, function(i, item){

        var _divWrapper = $('<div/>', {'class' : 'wapperMenu'});
        var _divText = $('<div/>', {'class' : 'text'});
        var _divBtn = $('<div/>', {'class' : 'menu'});
        var _divDecorator = $('<div/>', {'class' : 'decorator'});
        
        if(item.active){
          _divDecorator.addClass('dec-active');
          _divBtn.addClass('active')
        }else{
          _divDecorator.addClass('dec-normal')
          _divBtn.addClass('non-active')
        }

        _divText.text(item.text);
        _divWrapper.append(_divText);
        _divWrapper.append(_divBtn);
        _divWrapper.append(_divDecorator);
        
        _divWrapper.on('click', function(){
          
          that.cleanMenu(that);
          that.activeOpt(this);
          
          item.fn();
        });

        _divWrapper.mouseenter(function(){
          $(this).find('.menu').addClass('mshover');
        });
        _divWrapper.mouseleave(function(){
          $(this).find('.menu').removeClass('mshover');
        });

        $(that).append(_divWrapper);
 
      }) 
    }



  })

})(jQuery);