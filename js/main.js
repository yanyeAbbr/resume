/**
 *
 * Created by Administrator on 2017/9/1.
 */

!function(){
    /*屏幕高度*/
    var windowHeight = $(window).height();

    /*resize函数*/
    function resize(){
        /*初始屏幕*/
       $('#one').css('height',windowHeight);
      /*  /!*文字效果*!/
       $('#one > p').animate({top:0,bottom:0},1500);
        /!*循环*!/*/
   }
    $(window).on('resize',resize).trigger('resize');
    /*设置高度*/
    $('section+section').each(function(i,e){
        $(e).css({
            height:windowHeight
        });
    });

/*平滑滚动效果*/
    $('a:not([href*=com]):not([href*=github])').on('click',function(){
            var id = $(this)[0].hash;
            /*需要滚动的高度 == 这个元素的前面所有兄弟元素的高度和*/
            var h = null;
            $.each($(id).prevAll('section'),function(i,el){
                h += parseInt($(el).css('height'));
            });

            /*加动画  设置动画时间*/
            $('html,body').stop().animate({
                scrollTop:h
            },1000);
            /*清空原始值重新计算*/
            h = null;
    });
    /*导航栏固定函数*/
    function scr (){

        /*导航栏固定*/
        if( $(document).scrollTop() >= windowHeight+61){

            $('#nav').css({
                position:'fixed',
                top:0
            });
            $('#go').css({
                'margin-top': '60px'
            });
            /*取消导航栏固定*/
        }else if($(document).scrollTop() <= windowHeight+60){
            $('#nav').css({
                position:'relative',
                top:0
            });
            $('#go').css({
                'margin-top': '0'
            });
            /*触发c3动画*/
        }
    }
    /*监控window滚动事件*/
    $(window).on('scroll',scr);

}();


