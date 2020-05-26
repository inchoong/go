function $(id){return document.getElementById(id);}

function setCookie(name,value){
    var expires=new Date();
    expires.setTime(expires.getTime()+8640000000);
    document.cookie=name+"="+escape(value)+";expires="+expires.toGMTString();
    return 0;
}

function getCookie(Name){
    var search=Name+"=";
    if(document.cookie.length>0){
        offset=document.cookie.indexOf(search);
        if(offset!=-1){
            offset+=search.length;
            end=document.cookie.indexOf(";",offset);
            if(end==-1) end=document.cookie.length;
            return unescape(document.cookie.substring(offset,end));
        }
    }
    return "";
}

var hzWeek= new Array("日","一","二","三","四","五","六","日");
function cweekday(wday){return hzWeek[wday];}

function getdatestring( dobj)
{
return dobj.getFullYear()+"年"+(1+dobj.getMonth())+"月"+dobj.getDate()+"日"+"星期" +cweekday(dobj.getDay());
}

var nStr1=new Array('','一','二','三','四','五','六','七','八','九','十','十一','十二');
var nStr2=new Array('初','十','廿','卅','□');
Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
function GetcDay(d){var s;switch(d){case 10:s='初十';break;case 20:s='二十';break;case 30:s='三十';break;default:s=nStr2[Math.floor(d/10)];s+=nStr1[d%10];break;}return(s);}
function GetcMon(m){if(m==1) return '正';else return nStr1[m];}

function getlinfo(ly,lm,ld)
{

return Animals[(ly+8) %12]+"年"+GetcMon(lm)+"月"+GetcDay(ld);

}





