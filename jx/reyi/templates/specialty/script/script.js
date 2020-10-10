"use strict";

// // JavaScript Document

// //按需写入所需的函数名
// $(function () {
//     // 用于测试
//     let h = 0;

//     checkBrowser();

//     // 阻止默认行为写法，Chrome56以上版本
//     // document.addEventListener('touchmove', func, isPassive() ? {
//     //         capture: false,
//     //         passive: false
//     //     } : false);
// })

// // 以下不用可以删除

// //表单相关
// function forms () {

//     //输入框文字清空还原，控制value
//     // <input type="text" value="请输入关键字" />
//     $(".deaSearch .inp").focus(function () {
//         if ($(this).val() == this.defaultValue) {
//             $(this).val("");
//         }
//     }).blur(function () {
//         if ($(this).val() == '') {
//             $(this).val(this.defaultValue);
//         }
//     });

// }

// //简单标签切换
// function tabs (tit, box) {
//     /*html结构
//      <div class="tabs">

//      <div class="tabhd">
//      <ul>
//      <li class="on">标题一</li>
//      <li>标题二</li>
//      </ul>
//      </div>

//      <div class="tabbd">
//      <div>内容一</div>
//      <div>内容二</div>
//      </div>

//      </div>
//      */
//     var $div_li = $(tit).children();
//     var $box_li = $(box).children();
//     var i;
//     $box_li.hide();
//     $div_li.each(function () {
//         if ($(this).hasClass('on'))
//             i = $(this).index();
//     });
//     $box_li.eq(i).show();
//     $div_li.click(function () {
//         $(this).addClass("on").siblings().removeClass("on");
//         var index = $div_li.index(this);
//         $box_li.eq(index).fadeIn("linear").siblings().hide();
//     });
// }

// // 判断浏览器
// var checkBrowser = function () {
//     var userAgent = navigator.userAgent.toLowerCase();
//     var msie9 = /msie 9\.0/i.test(userAgent);
//     var msie8 = /msie 8\.0/i.test(userAgent);
//     var msie7 = /msie 7\.0/i.test(userAgent);
//     var msie6 = /msie 6\.0/i.test(userAgent);
//     var checkHtml = '';

//     // if (msie9 || msie8 || msie7 || msie6) {
//     //     $('body').append(checkHtml);
//     // };

//     if (msie8) {
//         checkHtml = '<div class="checkBrowser"><span>您现在使用的是IE8内核，版本过低！建议您升级到IE9+或者使用极速模式浏览，以体验最佳效果!</span><a title="关闭" onclick="checkBrowser.close();">×</a></div>';
//         $('body').append(checkHtml);
//     } else if (msie7) {
//         checkHtml = '<div class="checkBrowser"><span>您现在使用的是IE7内核，版本过低！建议您升级到IE9+或者使用极速模式浏览，以体验最佳效果!</span><a title="关闭" onclick="checkBrowser.close();">×</a></div>';
//         $('body').append(checkHtml);
//     } else if (msie6) {
//         checkHtml = '<div class="checkBrowser"><span>您现在使用的是IE6内核，版本过低！建议您升级到IE9+或者使用极速模式浏览，以体验最佳效果!</span><a title="关闭" onclick="checkBrowser.close();">×</a></div>';
//         $('body').append(checkHtml);
//     }

//     checkBrowser.close = function () {
//         $('.checkBrowser').remove();
//     }
// }

// 判断是否移动设备
var isMobile = function isMobile() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else {
        return false;
    }
};

function func(e) {
    e.preventDefault();
}

$(function () {
    // 手机导航
    var mobileScroll;
    // 打开导航
    $('#mo-nav').find('.nav-menu').on('click', function () {
        document.addEventListener('touchmove', func, isPassive() ? {
            capture: false,
            passive: false
        } : false);
        $('#iphone-nav').fadeIn();
        mobileScroll = new IScroll('#wrapnav', {
            click: false,
            tap: true,
            preventDefault: false,
            scrollY: true
        });
    });

    // 关闭导航
    $('#iphone-nav').find('.nav-icon').on('click', function () {
        document.removeEventListener('touchmove', func, isPassive() ? {
            capture: false,
            passive: false
        } : false);
        $('#iphone-nav').fadeOut();
        mobileScroll.destroy();
    });
    // 更新列表
    $('#iphone-nav').find('.jiantou').on('click', function () {
        if (!$(this).prev('.two').length) {
            return;
        }
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).prev('.two').stop(true, true).slideUp(function () {
                mobileScroll.refresh();
            });
        } else {
            $(this).addClass('on');
            $(this).prev('.two').stop(true, true).slideDown(function () {
                mobileScroll.refresh();
            });
        }
    });

    // 首页的选项栏
    $('#index-tags').find('.left .box').hover(function () {
        var index = $(this).index();
        $('#index-tags').find('.tags .right').eq(index).show().siblings().hide();
        $('#index-tags').find('.desc-box').removeClass('active');
        setTimeout(function () {
            $('#index-tags').find('.desc-box').eq(index).addClass('active');
        }, 100);
    }, function () {
        $('#index-tags').find('.desc-box').removeClass('active');
    });

    $('#index-tags').find('.mo-home-product .box').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        var index = $(this).index();
        $('#index-tags').find('.tags .right').eq(index).show().siblings().hide();
    });

    // 加载动画
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 100, // default
        mobile: false, // default
        live: true // default
    });
    wow.init();

    // 导航定位
    if ($('.common-nav').length) {
        var navItem = $('.common-nav').find('.nav-item.cur').position().left;
        var navWrap = $('.common-nav').scrollLeft(navItem);
    }
});