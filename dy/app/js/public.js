(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
        	var html = document.getElementsByTagName('html')[0];
        	var w = document.documentElement.clientWidth || document.body.clientWidth;
        	html.style.fontSize = w / 7.5 + "px";
//          var clientWidth = docEl.clientWidth;
//          if (!clientWidth) return;
//          docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
   
})(document, window);