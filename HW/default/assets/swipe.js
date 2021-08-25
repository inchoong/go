function Swipe(ac,K){var j=0;if(window.innerHeight){j=window.innerHeight}else{if((document.body)&&(document.body.clientHeight)){j=document.body.clientHeight}}if(document.documentElement&&document.documentElement.clientHeight){j=document.documentElement.clientHeight}function Q(){R=M.children,I=new Array(R.length),ag=ac.getBoundingClientRect().width||ac.offsetWidth,M.style.width=R.length*ag+"px";var a=R.length;while(a--){var b=R[a];b.style.width=ag+"px",b.setAttribute("data-index",a),Y.transitions&&(b.style.left=a*-ag+"px",aa(a,ae>a?-ag:ae<a?ag:0,0))}Y.transitions||(M.style.left=ae*-ag+"px"),ac.style.visibility="visible";if((j-104)>=R[ae].offsetHeight){R[ae].style.height=(j-104)+"px"}ac.style.height=R[ae].offsetHeight+"px"}function ad(){ae?V(ae-1):K.continuous&&V(R.length-1)}function H(){ae<R.length-1?V(ae+1):K.continuous&&V(0)}function V(c,d){if(ae==c){return}if(Y.transitions){var b=Math.abs(ae-c)-1,a=Math.abs(ae-c)/(ae-c);while(b--){aa((c>ae?c:ae)-b-1,ag*a,0)}aa(ae,ag*a,d||Z),aa(c,0,d||Z)}else{G(ae*-ag,c*-ag,d||Z)}ae=c,P(K.callback&&K.callback(ae,R[ae])),D(c)}function aa(b,a,c){af(b,a,c),I[b]=a}function D(b){var a=0;if((j-104)>=R[b].offsetHeight){a=(j-104)+"px"}else{a=R[b].offsetHeight+"px"}-1<b&&b<R.length&&(ac.style.height=a);currentScreenPos=b}function af(d,b,f){var c=R[d],a=c&&c.style;if(!a){return}a.webkitTransitionDuration=a.MozTransitionDuration=a.msTransitionDuration=a.OTransitionDuration=a.transitionDuration=f+"ms",a.webkitTransform="translate("+b+"px,0)translateZ(0)",a.msTransform=a.MozTransform=a.OTransform="translateX("+b+"px)"}function G(d,f,c){if(!c){M.style.left=f+"px";return}var b=+(new Date),a=setInterval(function(){var e=+(new Date)-b;if(e>c){M.style.left=f+"px",J&&F(),K.transitionEnd&&K.transitionEnd.call(event,ae,R[ae]),clearInterval(a);return}M.style.left=(f-d)*(Math.floor(e/c*100)/100)+d+"px"},4)}function F(){z=setTimeout(H,J)}function q(){J=0,clearTimeout(z)}var U=function(){},P=function(a){setTimeout(a||U,0)},Y={addEventListener:!!window.addEventListener,touch:"ontouchstart" in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(b){var a=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"];for(var c in a){if(b.style[a[c]]!==undefined){return !0}}return !1}(document.createElement("swipe"))};if(!ac){return}var M=ac.children[0],R,I,ag,ab,W=[];K=K||{};var ae=parseInt(K.startSlide,10)||0,Z=K.speed||300,J=K.auto||0,z,A={},O={},X,B={handleEvent:function(a){switch(a.type){case"touchstart":this.start(a);break;case"touchmove":this.move(a);break;case"touchend":P(this.end(a));case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":P(this.transitionEnd(a));break;case"resize":P(Q.call())}K.stopPropagation&&a.stopPropagation()},start:function(b){var a=b.touches[0];A={x:a.pageX,y:a.pageY,time:+(new Date)},X=undefined,O={},M.addEventListener("touchmove",this,!1),M.addEventListener("touchend",this,!1)},move:function(a){if(a.touches.length>1||a.scale&&a.scale!==1){return}K.disableScroll&&a.preventDefault();var b=a.touches[0];O={x:b.pageX-A.x,y:b.pageY-A.y},typeof X=="undefined"&&(X=!!(X||Math.abs(O.x)<Math.abs(O.y))),X||(a.preventDefault(),q(),O.x=O.x/(!ae&&O.x>0||ae==R.length-1&&O.x<0?Math.abs(O.x)/ag+1:1),af(ae-1,O.x+I[ae-1],0),af(ae,O.x+I[ae],0),af(ae+1,O.x+I[ae+1],0))},end:function(d){var g=+(new Date)-A.time,b=Number(g)<250&&Math.abs(O.x)>20||Math.abs(O.x)>ag/2,a=!ae&&O.x>0||ae==R.length-1&&O.x<0,c=O.x<0;X||(b&&!a?(c?(aa(ae-1,-ag,0),aa(ae,I[ae]-ag,Z),aa(ae+1,I[ae+1]-ag,Z),ae+=1,D(ae)):(aa(ae+1,ag,0),aa(ae,I[ae]+ag,Z),aa(ae-1,I[ae-1]+ag,Z),ae+=-1,D(ae)),K.callback&&K.callback(ae,R[ae])):(aa(ae-1,-ag,Z),aa(ae,0,Z),aa(ae+1,ag,Z))),M.removeEventListener("touchmove",B,!1),M.removeEventListener("touchend",B,!1),J=K.auto},transitionEnd:function(a){parseInt(a.target.getAttribute("data-index"),10)==ae&&(J&&F(),K.transitionEnd&&K.transitionEnd.call(a,ae,R[ae]))}};return Q(),J&&F(),Y.addEventListener?(Y.touch&&M.addEventListener("touchstart",B,!1),Y.transitions&&(M.addEventListener("webkitTransitionEnd",B,!1),M.addEventListener("msTransitionEnd",B,!1),M.addEventListener("oTransitionEnd",B,!1),M.addEventListener("otransitionend",B,!1),M.addEventListener("transitionend",B,!1)),window.addEventListener("resize",B,!1)):window.onresize=function(){Q()},{setup:function(){Q()},slide:function(b,a){V(b,a)},prev:function(){q(),ad()},next:function(){q(),H()},getPos:function(){return ae},kill:function(){q(),M.style.width="auto",M.style.left=0;var b=R.length;while(b--){var a=R[b];a.style.width="100%",a.style.left=0,Y.transitions&&af(b,0,0)}Y.addEventListener?(M.removeEventListener("touchstart",B,!1),M.removeEventListener("webkitTransitionEnd",B,!1),M.removeEventListener("msTransitionEnd",B,!1),M.removeEventListener("oTransitionEnd",B,!1),M.removeEventListener("otransitionend",B,!1),M.removeEventListener("transitionend",B,!1),window.removeEventListener("resize",B,!1)):window.onresize=null}}}(window.jQuery||window.Zepto)&&function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))})}}(window.jQuery||window.Zepto);