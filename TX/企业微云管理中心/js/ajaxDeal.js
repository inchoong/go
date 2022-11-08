var g_isDebug = false;	
var g_debugurl = "none";	//非debug时，取消
var g_cgi_path = "/cgi-bin/beta2/";
var g_url_path = "/beta2/"
var g_cur_requrl;
var g_ifIE = !!document.all;

if (!g_ifIE){//如果不是IE浏览器
	var ex;
	XMLDocument.prototype.__proto__.__defineGetter__("xml", function (){
		try{
			return  new XMLSerializer().serializeToString(this);
		} catch (ex){
	       	var d = document.createElement("div");
			d.appendChild(this.cloneNode(true));
			return d.innerHTML;
		}
	});

	Element.prototype.__proto__.__defineGetter__("xml", function (){
		try {
			return  new XMLSerializer().serializeToString(this);
		} catch (ex){
			var d = document.createElement("div");
			d.appendChild(this.cloneNode(true));
			return d.innerHTML;
		}
	});

	XMLDocument.prototype.__proto__.__defineGetter__("text", function (){
		return  this.firstChild.textContent
	});

	Element.prototype.__proto__.__defineGetter__("text", function (){
		return  this.textContent
	});


	XMLDocument.prototype.selectSingleNode = Element.prototype.selectSingleNode = function (xpath){
		var x = this.selectNodes(xpath)
		if (! x || x.length <1) return  null ;
		return x[0];
	}
	
	XMLDocument.prototype.selectNodes = Element.prototype.selectNodes = function (xpath){
		var xpe =  new XPathEvaluator();
		var nsResolver = xpe.createNSResolver(this.ownerDocument ==  null  ? 
		this.documentElement : this.ownerDocument.documentElement);
		var result = xpe.evaluate(xpath, this , nsResolver, 0 , null);
		var found = [];
		var res;
		while (res = result.iterateNext())
			found.push(res);
		return found;
  }
}
/*
function $(id){
	return document.getElementById(id);
}
*/
function createXmlHttp(){
 var xmlhttp;

	try{ xmlhttp = new XMLHttpRequest();}
	catch(e){ try{ xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
		catch(e){ try{ xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");}
		 catch(faild){ 
		 xmlhttp=null; 
		 alert("抱歉，您的浏览器不支持XMLHttp!,无法正常显示。");
			}
		}
	}
	return xmlhttp;
}

/*
创建Msxml2.XMLHTTP对象
*/
function Ajax(url,pars,callback,xml,m,errCallback){
	var xmlhttp;
	g_cur_requrl = url;
	
	if (g_isDebug)
		if (pars!="") g_cur_requrl += "?"+pars;	
	
	var strurl = g_cur_requrl;

	try {
	    xmlhttp = createXmlHttp();
    } catch(e) {
	    xmlhttp = false;
    }

    xmlhttp.onreadystatechange = function ()
	{
		
		if (xmlhttp.readyState == 4){ 
			window.status = "";
			if (document.getElementById("loading")) document.getElementById("loading").style.display="none";
			if	(xmlhttp.status==404)
			{
				alert("数据请求不存在,返回404，请联系管理员！\r\n\r\n请求URL："+strurl);
				g_cur_requrl = "";
				return;
			}

			if	(xmlhttp.status==500)
			{
				alert("服务器错误返回500，请联系管理员！\r\n\r\n请求URL："+strurl);
				g_cur_requrl = "";
				return;
			}
			
			if (xmlhttp.status==200 || xmlhttp.status==0){ 
				if(typeof(callback)=="function")
					if(typeof(xml)!="undefined"&&xml.toLowerCase()=="xml") { 
						if(check_retcode(getnodedata(xmlhttp.responseXML,"/root/er","-1"),strurl))	{
							callback(xmlhttp.responseXML,m);
						}else{
							if(typeof(errCallback)!="undefined"){
								errCallback();
							}
						}
					}
					else
						{
						  callback(xmlhttp.responseText);
						}
	        } else { 
	            alert("Error code:"+xmlhttp.status+"\r\n\r\n请求URL："+strurl);
	        }
			g_cur_requrl = "";
	    }
	}

	window.status = "XML请求："+strurl+"......";
	if (document.getElementById("loading")) {document.getElementById("loading").style.display = "block"; };

	
	if (pars!="")	{
		xmlhttp.open("POST",url,true);
		xmlhttp.setRequestHeader("If-Modified-Since","0");	
		xmlhttp.send(pars);
	}
	else {
		xmlhttp.open("GET",strurl,true);
		xmlhttp.setRequestHeader("If-Modified-Since","0");	
		xmlhttp.send(null);
	}
}


function getnodedata(xmlDoc,nodeID,defaultvalue)
{
	var str=defaultvalue;
	try{
		str = xmlDoc.selectSingleNode(nodeID).text;
	}
	catch(e){ 
		if (g_cur_requrl.indexOf(g_debugurl)>=0)
			alert("URL:"+g_cur_requrl+"\r\n\r\n获取xml数据失败！xml节点：" + nodeID + "默认值：" + str);
	}
	
	return str;
}

function getnodes(xmlDoc,nodeID,defaultvalue)
{
	var obj_array = defaultvalue;
	try{
		obj_array = xmlDoc.selectNodes(nodeID);
	}
	catch(e){
	}
	return obj_array;
}

function check_retcode(retcode,strurl) {
	var errstr="（errcode："+retcode+"）";
	switch (Number(retcode))	{
		case 0: 
			return true;	break;
		case -1: 
			return false;
 		default:
			errstr += "系统繁忙，请您联系管理员！";	break;
	}

	//errstr += "\r\n\r\n请求URL："+strurl;
	alert(errstr);
	return false;	
}
/*---------------------------------*/
