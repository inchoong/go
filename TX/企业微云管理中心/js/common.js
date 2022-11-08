document.domain='qq.com';
var g_s_cur_url = window.location.href;
function uninit_cookie()
{
	DelCookie("sid");
	DelCookie("ssid");
	DelCookie("my_title");
	DelCookie("content");
	DelCookie("text_hidden");
	DelCookie("Email");
	DelCookie("Tel");
	DelCookie("FileNameHidden");
	DelCookie("u");
}
function Login()
{
	var sUin 		= GetCookie("uin");
	sUin = szTrim(sUin==null?"":sUin);
	if ( sUin.length > 0 )
	{	
		var i = 1;
		for (i = 1; i < sUin.length && sUin.charAt(i) == "0"; i++);
		sUin = sUin.substr(i, sUin.length);
			if(location.href.indexOf('big5')>-1)
			document.getElementById("Login").innerHTML = "欢迎您（" + sUin + "），[<a href='javascript:doLogout()' style='text-decoration:underline;'>退出</a>]&nbsp;[<a href='/index.shtml' style='text-decoration:underline;'>简体</a>]";
		else
			document.getElementById("Login").innerHTML = "欢迎您（" + sUin + "），[<a href='javascript:doLogout()' style='text-decoration:underline;'>退出</a>]&nbsp;[<a href='http://big5.service.qq.com/index.shtml' style='text-decoration:underline;'>繁体</a>]";
	
	}	
	else
			if(location.href.indexOf('big5')>-1)
		document.getElementById("Login").innerHTML = "欢迎您来到腾讯客服中心,[<a href='javascript:doLogin()' style='text-decoration:underline;'>登录</a>]&nbsp;[<a href='/index.shtml' style='text-decoration:underline;'>简体</a>]";
		else
		document.getElementById("Login").innerHTML = "欢迎您来到腾讯客服中心,[<a href='javascript:doLogin()' style='text-decoration:underline;'>登录</a>]&nbsp;[<a href='http://big5.service.qq.com/index.shtml' style='text-decoration:underline;'>繁体</a>]";
}

/**
 * 请不要使用此方法，login_v4.js已有同样方法
 */
 function doLogout_delete()
{
	var sURL = g_s_cur_url;
	if ( sURL.indexOf("AskForFillDatum") != -1 )
		sURL = get_url_domain(sURL) + "/V200D100/mine_index.shtml";
	else if ( sURL.indexOf("pay" ) != -1 )
		sURL = get_url_domain(sURL) + "/pay/pay_index.html";
	else if ( sURL.indexOf("ViewQuestion" ) != -1 )
		sURL = get_url_domain(sURL) + "/V200D100/mine_index.shtml";
	else if ( sURL.indexOf("ViewQuestionList" ) != -1)	 
		sURL = get_url_domain(sURL) + "/V200D100/mine_index.shtml";
	else if ( sURL.indexOf("myservice" ) != -1 )
		sURL = get_url_domain(sURL) + "/V200D100/mine_index.shtml";
	else
		sURL = sURL;	
	window.location.href = "/cgi-bin/Logout?url=" + sURL ;
}
function doLogin()
{
	var sURL = get_url_last();
	if ( sURL == "mine_index.shtml" )
		sURL =  get_url_domain(g_s_cur_url) + "/cgi-bin/myservice";
	else
		sURL = g_s_cur_url;
	//window.location.href = "/ptLogin.htm?url=" + sURL;
	open_login(sURL,1);
}
function get_url_last()
{
	var sCurURL = g_s_cur_url;

	var sLast   = sCurURL.indexOf('?');
	if ( sLast == -1 ) 
		sLast = sCurURL.length;
	else 
		sLast = sLast;
	return sCurURL.substring(sCurURL.lastIndexOf("/") + 1, sLast);
}
function get_url_domain(sCurURL)
{
	return "http:" + sCurURL.substring(sCurURL.indexOf("//"), sCurURL.indexOf("/", sCurURL.indexOf("//") + 2));
}
function make_common_cookie()
{
	if ( document.getElementById("question_title") != null)
		SetCookie("question_title", document.getElementById("question_title").value);
	if ( document.getElementById("question_content") != null)
		SetCookie("question_content", document.getElementById("question_content").value);
		
	/*
	if ( document.getElementById("sid") != null )
		SetCookie("sid", document.getElementById("sid").value);
	if ( document.getElementById("my_title") != null )
		SetCookie("my_title", document.getElementById("my_title").value);
	if ( document.getElementById("subject") != null )
		SetCookie("subid", document.getElementById("subject").value);
	if ( document.getElementById("content") != null )
		SetCookie("content", document.getElementById("content").value);
	*/
}

// JavaScript Document

function toggle(targetid){
   var target=document.getElementById(targetid);
   target.style.display ="block";
}

function untoggle(targetid){
   var target=document.getElementById(targetid);
   target.style.display ="none";
}

function senfe_code(id){
	var rs = document.getElementsByName("contact");  
	for(var i=1;i<rs.length+1;i++)
	document.getElementById("senfe_"+i).style.display="none";
	document.getElementById(id).style.display="block";
}

function add_info_code(id){
	var rs = document.getElementsByName("add_info");  
	for(var i=1;i<rs.length+1;i++)
	document.getElementById("senfe_"+i).style.display="none";
	document.getElementById(id).style.display="block";
}

function getUrlParam (name){
    var src = window.location.href;
	 src = src.replace(/</g,'&lt;');
	 src = src.replace(/>/g,'&gt;');
	 src = src.replace(/'/g,'&apos;');
	 src = src.replace(/"/g,'&quot;');
	 var r = new RegExp("(\\?|#|&)" + name + "=([^&^#]*)(#|&|$)");
    var m = src.match(r);
    return !m ? "" : m[2];
}

