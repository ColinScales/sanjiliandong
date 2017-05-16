var oHover = $('.nav_hover');
    var aLi = $('.nav_but li');
    var end_l = null;
    if($('.nav_but .active').length>0){
        var now_l = $('.nav_but .active').position().left-4;
        oHover.css('left',now_l);
    }else{
        oHover.css({'display':'none','opacity':0});
    }
    aLi.each(function(){
        $(this).mouseover(function(){
            end_l = $(this).position().left-4;
            oHover.css({'display':'block'});
            oHover.stop().animate({
                opacity:1,
                left:end_l
            },'fast');
        }).mouseout(function(){
            if($('.nav_but .active').length>0){
                oHover.stop().animate({
                    left:now_l
                },'fast')
            }else{
                oHover.stop().animate({
                    left:-4,
                    opacity:0
                },'fast')
            }
        });
    });