document.domain='qq.com';

var tips = new Array("输入要查询的关键词，空格隔开，如：红钻 开通", "请输入要查询的关键字,如:如何找回密码", "输入搜索关键字，空格隔开", "请输入问题的关键字，如：充值", "undefined");

function HtmlAttributeEncode(sStr)
{
    sStr = sStr.replace(/&/g,"&amp;");
    sStr = sStr.replace(/>/g,"&gt;");
    sStr = sStr.replace(/</g,"&lt;");
    sStr = sStr.replace(/"/g,"&quot;");
    sStr = sStr.replace(/'/g,"&#39;");
//    sStr = sStr.replace(/=/g,"&#61;");
    sStr = sStr.replace(/`/g,"&#96;");
    return sStr;
}

function szTrim(szForTrim)
{
    return szForTrim.replace(/(^\s*)|(\s*$)/g, "")
}           

function CallSearch(wenwen)//wenwen频道的调用，作用是打开新窗口显示搜索页面。
{
    var URL = "/wsearch.shtml";
    var sCon = HtmlAttributeEncode(document.getElementById("condition").value);     
    sCon = szTrim(sCon);
    if ( sCon.length < 1 || sCon == tips[0] || sCon == tips[1] || sCon == tips[2] || sCon == tips[3] || sCon == tips[4])
    {
        alert("请输入要搜索的关键字!");
        return false;
}
    URL += "?product_search_key=" + encodeURIComponent(sCon) + "&sc=ask";
	wenwen == 'wenwen' ? window.open( URL ) : window.location.href = URL ;
}

function CallAsk()
{
    var URL = "/wenwen/wenwen_ask.shtml";
    var sCon = HtmlAttributeEncode(document.getElementById("condition").value);     
    sCon = szTrim(sCon);
//    if ( sCon.length < 1 || sCon == tips[0] || sCon == tips[1] || sCon == tips[2] || sCon == tips[3] || sCon == tips[4])
//    {
//        alert("请输入要提问的问题！");
//        return false;
//    }
	sCon = (sCon=="请输入问题的关键字，如：充值")?"":sCon;
    URL += "?key=" + encodeURIComponent(sCon) + "&sc=ask";
    window.open( URL );
}
 
function SpecialSearch(tip, name)
{
	var URL = "/search.shtml";
    var sCon = HtmlAttributeEncode(document.getElementById("condition").value);     
    sCon = szTrim(sCon);
    if ( sCon.length < 1 || sCon == tip || sCon == "undefined")
    {
        alert("请输入要搜索的关键字!");
        return false;
    }
    URL += "?key=" + encodeURIComponent(sCon) + "&cl=" + name;
    window.open(URL,'_blank');
}

function SpecialSearch2(tip, name, type, mode)
{
	var flag = type;
	var type = type || "vip";
	var mode = mode || "blank";
	var URL = "/special/"+type+"/"+type+"_search.html";
    var sCon = HtmlAttributeEncode(document.getElementById("condition").value);     
    sCon = szTrim(sCon);
    if ( sCon.length < 1 || sCon == tip || sCon == "undefined")
    {
        alert("请输入要搜索的关键字!");
        return false;
    }
    URL += "?key=" + encodeURIComponent(sCon) + "&cl=" + name + "&cat=" + type;
	if (flag && mode == "blank") {
		window.open(URL, '_blank');
	} else {
	    window.location.href = URL;
	}
	
}

function doFocus()
{
    var obj = document.getElementById("condition");             
    if(obj.value == tips[0] || obj.value == tips[1] || obj.value == tips[2] || obj.value == tips[3] || obj.value == tips[4])
    {
       obj.value = "";                 
    }  
    obj.style.color = "#000000";
}

function specialFocus(tp)
{
    var obj = document.getElementById("condition");             
    if(obj.value == tp || obj.value == "undefined")
    {
       obj.value = "";                 
    }  
    obj.style.color = "#000000";
}

function doBlur()
{
    var obj = document.getElementById("condition");
    if (obj.value == "")
    {
        obj.style.color = "#888888";
    }
    else
    {
        obj.style.color = "#000000";
    }
}
