/*
 * jQuery tSlide
 * @Version: 1.0
 * @Author:  Travis
 * @Date:    October 10th, 2012
 * @Website: http://travisup.com/
 */
(function($) {
    $.fn.extend({
        tSlide:init
    });

    var opt = {
        time:4000,
        overtime: 400,
        opacity: '0.5',
        mouseevent: 'click',
        classcur: 'current',//添加样式
        classcon: 't-slide-con',//
        classmask: 't-slide-mask',
        classtitle: 't-slide-title',
        classpage: 't-slide-page'
    };
    /*mouseevent下面的点点的触发事件的方法*/
    var $obj = {};

    var current = 0;

    function slide() {
        if (current == opt.len-1) {
            var clone = $obj.con.find('li').eq(0).clone();
            $obj.con.append(clone).css({
                'left': (1 - (opt.len)) * opt.width + 'px',
                'width': (opt.len + 1) * opt.width + 'px'
            });
            $obj.con.stop().animate({
                'left': (-(opt.len)) * opt.width + 'px'
            }, opt.overtime, function() {
                $obj.con.css({
                    'left': '0px',
                    'width': (opt.len) * opt.width + 'px'
                });
                clone.remove();
            });
            current = (current+1) % opt.len;
            $obj.title.removeClass(opt.classcur).eq(current).addClass(opt.classcur);
            $obj.page.removeClass(opt.classcur).eq(current).addClass(opt.classcur);
            return;
        }
        current = (current+1) % opt.len;
        var left = (0 - current) * opt.width;
        $obj.con.stop().animate({left:left}, opt.overtime);
        $obj.title.removeClass(opt.classcur).eq(current).addClass(opt.classcur);
        $obj.page.removeClass(opt.classcur).eq(current).addClass(opt.classcur);
    };

    function init(options) {
        if(options) $.extend(opt, options);

        $obj.wrap = $(this);
        $obj.con = $(this).find('.'+opt.classcon).find("ul");
        $obj.mask = $(this).find('.'+opt.classmask);
        $obj.title = $(this).find('.'+opt.classtitle).find("li");
        $obj.page = $(this).find('.'+opt.classpage).find("li");

        opt.width = $(this).find('.'+opt.classcon).width();
        opt.len = $obj.page.length;

        $obj.con.css({width: opt.len * opt.width});
        $obj.con.find('li').css({width: opt.width});
        $obj.mask.css({'opacity':opt.opacity});
        $obj.title.eq(0).addClass(opt.classcur);
        $obj.page.eq(0).addClass(opt.classcur);
        $obj.opt = opt;

        if(opt.len == 1) {
            return;
        }

        var timer = setInterval(slide, opt.time);
        /*鼠标放到当前页停止滚动*/
        // $(this).hover(function() {
        //     clearInterval(timer);
        // }, function() {
        //     timer = setInterval(slide, opt.time);
        // });
        //点击跳转页数
        $obj.page.each(function(i){
            $(this).bind(opt.mouseevent, function(){
                clearInterval(timer);
                current = i - 1;
                slide();
                timer = setInterval(slide, opt.time);
            });
        });

        return $obj;
    }
})(jQuery);
