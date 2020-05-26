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





