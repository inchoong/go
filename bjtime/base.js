function $(id){return document.getElementById(id);}
function shape(x){	if(x<=9) return "0"+x;else return x.toString();}

function LoadJs(newJS)
{
var sObj = document.createElement("script");
sObj.src = newJS;
sObj.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(sObj);
}

var hzWeek= new Array("日","一","二","三","四","五","六","日");
function cweekday(wday){return hzWeek[wday];}

var nStr1=new Array('','一','二','三','四','五','六','七','八','九','十','十一','十二');
var nStr2=new Array('初','十','廿','卅','□');
Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
function GetcDay(d){var s;switch(d){case 10:s='初十';break;case 20:s='二十';break;case 30:s='三十';break;default:s=nStr2[Math.floor(d/10)];s+=nStr1[d%10];break;}return(s);}
function GetcMon(m){
     if(m<0){ret="闰";m*=-1;} else ret="";
     return ret+(m==1?'正':nStr1[m]);
}


function getdatestring( dobj)
{
return dobj.getFullYear()+"年"+(1+dobj.getMonth())+"月"+dobj.getDate()+"日"+"星期" +cweekday(dobj.getDay());
}


function getlinfo(ly,lm,ld)
{
return Animals[(ly+8) %12]+"年"+GetcMon(lm)+"月"+GetcDay(ld);
}


