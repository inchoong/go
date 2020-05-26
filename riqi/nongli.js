


function loadc()
{

var temp=getCookie("riqic");

if(temp!="")
{
	var ss=temp.split('-');

	$("LY").value=ss[0];
	$("LM").value=ss[1];
	$("LD").value=ss[2];
}

}



//nongli

var nStr1=new Array('','一','二','三','四','五','六','七','八','九','十','十一','十二');
var nStr2=new Array('初','十','廿','卅','□');
Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
function GetcDay(d){var s;switch(d){case 10:s='初十';break;case 20:s='二十';break;case 30:s='三十';break;default:s=nStr2[Math.floor(d/10)];s+=nStr1[d%10];break;}return(s);}
function GetcMon(m){if(m==1) return '正';else return nStr1[m];}



function calc()
{
var oScript= document.createElement("script"); 
oScript.type = "text/javascript"; 
var ly=$("LY").value;
var lm=$("LM").value;
var ld=$("LD").value;
oScript.src="Solar.asp?y="+ly+"&m="+lm+"&d="+ld; 
setCookie( "riqic",ly+"-"+lm+"-"+ld);
document.getElementsByTagName("head")[0].appendChild(oScript);
}