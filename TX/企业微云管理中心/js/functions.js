/*********************************************************************
  ######service.qq.com basic javascript functions ##############
  ###### Copyright (C) 1998 - 2007 TENCENT Inc. All Rights Reserved ##
**********************************************************************/
function GetCookieVal_64(offset)
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
		endstr = document.cookie.length;
	return strAnsi2Unicode(decode64(document.cookie.substring(offset, endstr)));
}
function GetCookieVal(offset)
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}
function SetCookie(name, value)
{
	var expdate = new Date();
	var argv = SetCookie.arguments;
	var	argc = SetCookie.arguments.length;
	var expires = null;
	var path = "/";//(argc > 3) ? argv[3] : null;
	var domain = "qq.com";
	var secure = (argc > 5) ? argv[5] : false;
	if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 1000 ));
	document.cookie = name + "=" + escape(value) +((expires == null) ? "" : ("; expires="+ expdate.toGMTString()))
	+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))
	+((secure == true) ? "; secure" : "");
}
//set a cookie 
function SetCookie_64(name, value)
{
	var expdate = new Date();
	var argv = SetCookie.arguments;
	var	argc = SetCookie.arguments.length;
	var expires = null;
	var path = "/";//(argc > 3) ? argv[3] : null;
	var domain = "qq.com";
	var secure = (argc > 5) ? argv[5] : false;
	if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 1000 ));
	document.cookie = name + "=" + encode64(strUnicode2Ansi(value)) +((expires == null) ? "" : ("; expires="+ expdate.toGMTString()))
	+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))
	+((secure == true) ? "; secure" : "");
}
//delete one cookie
function DelCookie(name)
{
	SetCookie(name, "");
	
	return false;
	var exp = new Date();
	exp.setTime (exp.getTime() - 1000000);
	var cval = GetCookie (name);
	document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
}
//获得Cookie的原始值
function GetCookie(name)
{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen)
	{
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return GetCookieVal(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}
function GetCookie_64(name)
{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen)
	{
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return GetCookieVal_64 (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}
//####读取radio按钮的值
function getRadioContent(radioName)
{
	for(i =0; i < document.getElementsByName(radioName).length; i++)
		if( document.getElementsByName(radioName)[i].checked )
			return document.getElementsByName(radioName)[i].value;
	return "";
}
//####设定radio按钮的值
function setRadioCheck(radioName,value)
{
	for(i =0; i < document.getElementsByName(radioName).length; i++)
		if( document.getElementsByName(radioName)[i].value == value )
		{	
			document.getElementsByName(radioName)[i].checked = true;
			return true;
		}
	return false;
}
//####设定下拉列表的值
function setSelect(objID, sValue)
{
	for(i =0; i < document.getElementById(objID).options.length; i++)
	{
		if( document.getElementById(objID).options[i].value == sValue )
		{	
			document.getElementById(objID).options[i].selected = true;
			return true;
		}
	}
	return false;
}
//####为下拉列表增加一个option
function AddOneOption(objID, sName, sValue)
{
	var obj = document.getElementById(objID);
	if ( obj == null ) return false;
	
	var newOption = new Option(sName, sValue);
	try
	{
		obj .add(newOption,null);
	}
	catch (e)
	{
		obj .add(newOption,-1);
	}	
}
//####删除一个下拉列表的options
function DeleteOneOption(objID, sValue)
{
	var obj = document.getElementById(objID);
	if ( obj == null ) return false;

	for(var i = 0; i < obj.options.length; i++)
	{
		if ( obj.options[i].value == sValue )
		{
			obj.remove(i);
			return true;
		}	
	}
}
function szTrim(szForTrim)
{
	return szForTrim.replace(/(^\s*)|(\s*$)/g, "")
}
function getParasFromURL(url, paraList)
{
	var len = url.length;
	var offset = url.indexOf("?")+1;
	var paraStr = url.substr(offset,len); 
	var paras = paraStr.split("&");      
	var paraMap = new Array();           
	
	for(var i = 0; i < paras.length; ++i)
	{
		paraMap[i] = paras[i].split("=");
	}
	var listLength = paraList.length;
	var mapLength = paraMap.length;
    var valueList = new Array();
	var j;
    for(var i = 0; i < listLength; ++i)
	{
		for(j = 0; j < mapLength; ++j)
		{
			if(paraList[i] == paraMap[j][0])
			{
				valueList[i] = paraMap[j][1];
				break;
			}
		}
		if(j >= mapLength)
		{
			valueList[i] = "";
		}
	}

	return valueList;
}
//####检查电话号码的格式
function checkPhone(strPhone)
{
	var regExp = /(^[0-9]{3,4}[\-]{0,1}[0-9]{7,8}$)|(^13[0-9]{9}$)|(^159[0-9]{8}$)/;
	if(regExp.test(strPhone)==false)
		return false;
	
	return true;   
}

//检查Email的格式
function checkEmailFormat(strEmail)
{
	//var regExp = /^[_a-z.0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/;
	var regExp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
	if(regExp.test(strEmail)==false)
		return false;
	return true;   
}

function BrToUnixEnter(sContent)
{
	return  sContent.replace(/<br>/g,'\r\n');
}
function UnixEnterToBr(sContent)
{
	return sContent.replace(/\r\n/g,'<br>');
}

function hideSelect(obj)
{
		ss = obj.getElementsByTagName('select');
  	for (i=0;i<ss.length;i++) 
  	{
    	x = ss[i];
    	x.style.display = 'none';
  	}
}
function showSelect(obj)
{
		ss = obj.getElementsByTagName('select');
		//alert(ss.length);
  	for (i=0;i<ss.length;i++) 
  	{
  		//alert(ss[i].id);
    	x = ss[i];
    	x.style.display = '';
  	}
}
function xmlEncode(text)
{
	var strTmp="";
	if(text.length<1)
		return "";
	for(var i=0;i<text.length;i++)
	{
		switch(text.charAt(i))
		{
			case '&':	strTmp+="&amp;";break;
			case '<':	strTmp+="&lt;";	break;
			case '>':	strTmp+="&gt;";	break;
			case '"':	strTmp+="&quot;";break;
			case '\'':	strTmp+="&apos;";break;
			default:	strTmp+=text.charAt(i);
		}
	}
	return strTmp;
}




















