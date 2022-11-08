
document.domain="qq.com";

// 关闭
function ptlogin2_onClose()
{
	//弹出Iframe方式的范例
	login_wnd = document.getElementById("login_div");	
	login_wnd.style.display="none";
	document.getElementById("mybg").style.display = "none";
	document.body.style.overflow = '';
}

// 调整尺寸
function ptlogin2_onResize(width, height)
{	
	login_wnd = document.getElementById("login_div");
	if (login_wnd)
	{
		login_wnd.style.width = width + "px";
		login_wnd.style.height = height + "px";
		login_wnd.style.visibility = "hidden"
		login_wnd.style.visibility = "visible"
	}
}

// 显示
function openLogin(backUrl,jump)
{
	if(backUrl.indexOf("kf.qq.com") < 0)
	{
		if(window.location.protocol == 'https:')
		{
			backUrl="https://kf.qq.com/"+backUrl;
		}
		else
		{
			backUrl="http://kf.qq.com/"+backUrl;
		}
	}
	if (window.location.protocol == 'https:') {
		var url = "https://xui.ptlogin2.qq.com/cgi-bin/xlogin?link_target=blank&appid=12000101&s_url=" + backUrl;
	} else {
		var url = "http://xui.ptlogin2.qq.com/cgi-bin/xlogin?link_target=blank&appid=12000101&s_url=" + backUrl;
	}
	// if(jump)
	//     var url="//ui.ptlogin2.qq.com/cgi-bin/login?link_target=blank&appid=12000101&s_url="+backUrl+
	//         "&target=top&f_url=loginerroralert&qlogin_param=u1%3D"+backUrl; 
 //    else
	//     var url="//ui.ptlogin2.qq.com/cgi-bin/login?link_target=blank&appid=12000101&s_url="+backUrl+
	//         "&target=top&f_url=loginerroralert&qlogin_jumpname=service&qlogin_param=u1%3D"+backUrl;
	login_wnd = document.getElementById("login_div");
	if (login_wnd != null){
		login_wnd.style.visible = "hidden"	//先隐藏，这样用户就看不到页面的尺寸变化的效果
		login_wnd.style.display = "block"	//设为block， 否则页面不会真正载入

	  var login_frame = document.getElementById('login_frame');
		login_frame.src = url;
	}

	 login_wnd.style.display = "block";
	 login_wnd.style.position = "absolute";
	 login_wnd.style.top = "30%";
	 login_wnd.style.left = "50%";
	 login_wnd.style.marginTop = "-75px";
	 login_wnd.style.marginLeft = "-150px";
}

// 生成主页上方欢迎文字及登陆入口
function showLoginTitle()
{
	var cgi='/cgi-bin/loginTitle';
	var data = '';
	Ajax(cgi, data, showLoginTitle_cb, "xml", null, err_return);
}

function showLoginTitle_cb(obj)
{
	var is_login  = getnodedata(obj,"/root/login","")
	var nick_name = getnodedata(obj,"/root/nick","");
	var uin = getnodedata(obj,"/root/uin","");
	
	var show_id=GetCookie('show_id');
	if (show_id!=null && show_id != '')
	{
		uin='';
		for (var i=0;i<show_id.length;i+=2)
		{
			uin+=String.fromCharCode('0x'+show_id.substr(i,2));;
		}
	}
	
	if (is_login == "1")
	{
		if(document.getElementById('loginTitle')!=undefined)
		{
			if(typeof(HtmlAttributeEncode) == 'function')
			{
				nick_name = HtmlAttributeEncode(nick_name);
			}
			$("#loginTitle").prepend("<span class='usr_info' id='usr_info'>欢迎您, " + nick_name + "("+uin+")</span><a href='javascript:doLogout()' class='log_out'>[退出]</a> ");
		}
	}
	else 
	{
		if(document.getElementById('loginTitle')!=undefined)
		{
			$("#loginTitle").prepend("<a href=\"javascript:openLogin('"+encodeURIComponent(document.location.href)+"')\" class='log_out'>您还未登录，请登录</a> ");
		}
	}
	if(uin==0){//uin为空，不拉取头像
		return false;
	}
	var img="<img src='"+getHeadUrl(uin)+"' class='icon_usr_pho' width='18' height='18'></img>";
	$("#usr_info").html(img+$("#usr_info").html());
}
function getHeadUrl(uin){
	var _uinHead=getHeadCookie('uinHead');
	var _headDetail="";
	if(_uinHead==""){//没有cookies，读取接口数据
		_headDetail=setHeadByRemote(uin);
	}else{
		var _headFromRemote=decodeURIComponent(_uinHead);
		var _temp=_headFromRemote.split(',');
		if(_temp[0]!==uin){//有数据，但不是当前的UIN
			_headDetail=setHeadByRemote(uin);
		}else{//有数据，并且是当前的UIN
			_headDetail=_headFromRemote;
		}
	}
	var _headInfo= _headDetail.split(',');
	return _headInfo[1];
}
function setHeadByRemote(uin){
	var _uinHeadUrl="";
	$.ajax({
		type : "get",
		url : "/cgi-bin/commonNew?rand=" + Math.random(),
		data : "command="
				+ encodeURIComponent('command=C00030&uin='+uin+"&skey=\r\n"),
		dataType : "json",
		async : false,
		timeout : 3000,
		success : function(data) {
			_uinHeadUrl= decodeURIComponent(data.resultinfo.list[0].url);		
			_uinHeadUrl=uin+","+_uinHeadUrl;
			addHeadCookie('uinHead',_uinHeadUrl,24);
		},
		error : function(xml) {
			return sys_errors();
		}
	});
	return _uinHeadUrl;
}
function addHeadCookie(objName, objValue, objHours){
    var str = objName + "=" + escape(objValue);
    str += ";domain=kf.qq.com";
    if (objHours > 0) {
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += ";expires=" + date.toGMTString();
    }
    document.cookie = str;
}

function getHeadCookie(b){
    var filterXSS = function(e) {
        if (!e) return e;
        for (; e != unescape(e);) e = unescape(e);
        for (var r = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], n = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], a = 0; a < r.length; a++) e = e.replace(new RegExp(r[a], "gi"), n[a]);
        return e
    };
    var a;
    return filterXSS((a=document.cookie.match(RegExp("(^|;\\s*)"+b+"=([^;]*)(;|$)")))?unescape(a[2]):null)
}

function err_return()
{}

//生成游戏客服专区页面上方的欢迎文字及登陆入口
/*
 *@param loginUrl String 登陆后跳转的url
 *@param gameIndexPage String 游戏官网url
 *@param gameServicePage String 游戏客服FAQ页面url
 */
function showGameLoginTitle(loginUrl,gameIndexPage,gameServicePage)
{
	var paras = new Array(); 
	paras[0] = gameIndexPage;
	paras[1] = gameServicePage;
	paras[2] = loginUrl;
	
	var cgi='/cgi-bin/loginTitle';
	var data = '';
	Ajax(cgi, data, showGameLoginTitle_cb, "xml", paras, err_return);
}

function showGameLoginTitle_cb(obj,paras)
{
	var is_login  = getnodedata(obj,"/root/login","")
	var nick_name = getnodedata(obj,"/root/nick","");
	var gameIndexPage   = paras[0];
	var gameServicePage = paras[1];
	var loginUrl        = paras[2];
	if (is_login == "1")
	{
		if(document.getElementById('game_link')!=undefined)
		{
			document.getElementById("game_link").innerHTML = "欢迎您（" + HtmlAttributeEncode(nick_name) + "），<a href='javascript:doLogout()' style='text-decoration:underline;'>退出</a>| <a href='"+gameIndexPage+"' target='_blank' style='text-decoration: underline;'>游戏官网</a> | <a href='http://kf.qq.com' target='_blank' style='text-decoration: underline;'>腾讯客服</a> | <a href='"+gameServicePage+"' style='text-decoration: underline;'>客服专区</a>";
		}
	}
	else 
	{
		if(document.getElementById('game_link')!=undefined)
		{
			document.getElementById("game_link").innerHTML = "欢迎您来到腾讯客服中心,<a href=\"javascript:openLogin('"+loginUrl+"')\" style='text-decoration:underline;'>登录</a>| <a href='"+gameIndexPage+"' target='_blank' style='text-decoration: underline;'>游戏官网</a> | <a href='http://kf.qq.com' target='_blank' style='text-decoration: underline;'>腾讯客服</a> | <a href='"+gameServicePage+"' style='text-decoration: underline;'>客服专区</a>";
		}
	}
}

//生成专区页面上方的欢迎文字及登陆入口
/*
 *@param loginUrl String 登陆后跳转的url
 *@param serviceIndexPage String 业务官网url
 *@param serviceFaqPage String 业务客服FAQ页面url
 *@param serviceName String 业务名称
 *@param indexPage String 区首页
 *$param bIndex bool 是否是专区首页
 */
function showAloneLoginTitle(loginUrl,serviceIndexPage,serviceFaqPage,serviceName,indexPage, bIndex)
{
	var paras = new Array(); 
	paras[0] = serviceIndexPage;
	paras[1] = serviceFaqPage;
	paras[2] = loginUrl;
	paras[3] = serviceName;
	paras[4] = indexPage;
	paras[5] = bIndex;
	var cgi='/cgi-bin/loginTitle';
	var data = '';
	Ajax(cgi, data, showAloneLoginTitle_cb, "xml", paras, err_return);
}

function showAloneLoginTitle_cb(obj,paras)
{
	var is_login  = getnodedata(obj,"/root/login","")
	var nick_name = getnodedata(obj,"/root/nick","");
	
	var serviceIndexPage= paras[0];
	var serviceFaqPage  = paras[1];
	var loginUrl        = paras[2];
	var serviceName     = paras[3];
	var indexPage       = paras[4];
	var bIndex          = paras[5];
	
	if (is_login == "1")
	{
		if(document.getElementById('alone_link')!=undefined)
		{
			document.getElementById("alone_link").innerHTML = "欢迎您（" + HtmlAttributeEncode(nick_name) + "），<a href='javascript:doLogout()' style='text-decoration:underline;'>退出</a>| <a href='"+serviceIndexPage+"' style='text-decoration: underline;' target='_blank'>"+serviceName+"</a> | <a href='http://kf.qq.com' target='_blank' style='text-decoration: underline;'>腾讯客服</a> | <a href='"+serviceFaqPage+"' style='text-decoration: underline;'>客服专区</a>";
		}
	}
	else 
	{
		if(document.getElementById('alone_link')!=undefined)
		{
			document.getElementById("alone_link").innerHTML = "欢迎您来到腾讯客服中心,<a href=\"javascript:openLogin('"+loginUrl+"')\" style='text-decoration:underline;'>登录</a>| <a href='"+serviceIndexPage+"' style='text-decoration: underline;' target='_blank'>"+serviceName+"</a> | <a href='http://kf.qq.com' target='_blank' style='text-decoration: underline;'>腾讯客服</a> | <a href='"+serviceFaqPage+"' style='text-decoration: underline;'>客服专区</a>";
		}
	}
	
	if(bIndex){
	  if(document.getElementById('a_back')!=undefined)
	  {
			document.getElementById("a_back").innerHTML = "";
		}
	}
	else
		{
		if(document.getElementById('a_back')!=undefined)
		{
			document.getElementById("a_back").innerHTML = "<a href=\""+indexPage+"\">返回专区首页</a>";
		}
	 }
}

function showSpecialLoginTitle(loginUrl,serviceIndexPage,serviceFaqPage,serviceName)
{
	var paras = new Array(); 
	paras[0] = serviceIndexPage;
	paras[1] = serviceFaqPage;
	paras[2] = loginUrl;
	paras[3] = serviceName;
	
	var cgi='/cgi-bin/loginTitle';
	var data = '';
	Ajax(cgi, data, showSpecialLoginTitle_cb, "xml", paras, err_return);
}

function showSpecialLoginTitle_cb(obj,paras)
{
	var is_login  = getnodedata(obj,"/root/login","")
	var nick_name = getnodedata(obj,"/root/nick","");
	
	var serviceIndexPage= paras[0];
	var serviceFaqPage  = paras[1];
	var loginUrl        = paras[2];
	var serviceName     = paras[3];
	
	if (is_login == "1")
	{
		if(document.getElementById('special_link')!=undefined)
		{
			document.getElementById("special_link").innerHTML = "欢迎您（" + HtmlAttributeEncode(nick_name) + "），<a href='javascript:doLogout()' style='text-decoration:underline;'>退出</a>| <a href='"+serviceIndexPage+"' style='text-decoration: underline;' target='_blank'>"+serviceName+"</a> | <a href='http://kf.qq.com' target='_blank' style='text-decoration: underline;'>腾讯客服</a> | <a href='"+serviceFaqPage+"' style='text-decoration: underline;'>客服专区</a>";
		}
	}
	else 
	{
		if(document.getElementById('special_link')!=undefined)
		{
			document.getElementById("special_link").innerHTML = "欢迎您来到腾讯客服中心,<a href=\"javascript:openLogin('"+loginUrl+"')\" style='text-decoration:underline;'>登录</a>| <a href='"+serviceIndexPage+"' style='text-decoration: underline;' target='_blank'>"+serviceName+"</a> | <a href='http://kf.qq.com' target='_blank' style='text-decoration: underline;'>腾讯客服</a> | <a href='"+serviceFaqPage+"' style='text-decoration: underline;'>客服专区</a>";
		}
	}
}

function showQzoneLoginTitle(loginUrl,serviceIndexPage,serviceFaqPage,serviceName)
{
	var paras = new Array(); 
	paras[0] = serviceIndexPage;
	paras[1] = serviceFaqPage;
	paras[2] = loginUrl;
	paras[3] = serviceName;
	
	var cgi='/cgi-bin/loginTitle';
	var data = '';
	Ajax(cgi, data, showQzoneLoginTitle_cb, "xml", paras, err_return);
}

function showQzoneLoginTitle_cb(obj,paras)
{
	var is_login  = getnodedata(obj,"/root/login","")
	var nick_name = getnodedata(obj,"/root/nick","");
	
	var serviceIndexPage= paras[0];
	var serviceFaqPage  = paras[1];
	var loginUrl        = paras[2];
	var serviceName     = paras[3];
	
	if (is_login == "1")
	{
		if(document.getElementById('special_link')!=undefined)
		{
			document.getElementById("special_link").innerHTML = "欢迎您（" + HtmlAttributeEncode(nick_name) + "），<a href='javascript:doLogout()' style='text-decoration:underline;'>退出</a>| <a href='#' style='text-decoration: underline;' onclick=\"window.open('"+serviceIndexPage+"', '_blank')\">"+serviceName+"</a> | <a href='http://kf.qq.com' target='_blank' style='text-decoration: underline;'>腾讯客服</a> | <a href='"+serviceFaqPage+"' style='text-decoration: underline;'>客服专区</a>";
		}
	}
	else 
	{
		if(document.getElementById('special_link')!=undefined)
		{
			document.getElementById("special_link").innerHTML = "欢迎您来到腾讯客服中心,<a href=\"javascript:openLogin('"+loginUrl+"')\" style='text-decoration:underline;'>登录</a>| <a href='#' style='text-decoration: underline;' onclick=\"window.open('"+serviceIndexPage+"', '_blank')\">"+serviceName+"</a> | <a href='http://kf.qq.com' target='_blank' style='text-decoration: underline;'>腾讯客服</a> | <a href='"+serviceFaqPage+"' style='text-decoration: underline;'>客服专区</a>";
		}
	}
}
// 登出
function doLogout()
{
	var sURL = window.location.href;
	
	// 注意根据url不同，需要登出后跳转到不同的页面
	if ( sURL.indexOf("AskForFillDatum") != -1 )
		sURL = get_url_domain(sURL) + "/V200D100/mine_index.shtml";
	else if ( sURL.indexOf("index_login.html")!= -1 || sURL.indexOf("personalinfo.shtml")!= -1 || sURL.indexOf("personalcenter.shtml")!= -1)
		sURL = get_url_domain(sURL) + "/index.html";
	else if ( sURL.indexOf("ViewQuestion" ) != -1 )
		sURL = get_url_domain(sURL) + "/V200D100/mine_index.shtml";
	else if ( sURL.indexOf("ViewQuestionList" ) != -1)	 
		sURL = get_url_domain(sURL) + "/V200D100/mine_index.shtml";
	else if ( sURL.indexOf("myservice") != -1 )
		sURL = get_url_domain(sURL) + "/V200D100/mine_index.shtml";
	else if ( sURL.indexOf("askQuestion") != -1 )                   // 提单预搜索页面
		sURL = get_url_domain(sURL) + "/index.html";
	else if ( sURL.indexOf("communion") != -1 )                     // 提单页面
		sURL = get_url_domain(sURL) + "/index.html";
	else if ( sURL.indexOf("questionList") != -1 )                  // 单据列表页面
		sURL = get_url_domain(sURL) + "/index.html";
	else if ( sURL.indexOf("questionDetail") != -1 )                // 单据详情
		sURL = get_url_domain(sURL) + "/index.html";		
	else if ( sURL.indexOf("ShowQuestionIndex") != -1 )             // gcs提单页面
		sURL = get_url_domain(sURL) + "/index.html";
	else if ( sURL.indexOf("tenpay") != -1 )
	    sURL = get_url_domain(sURL) + "/tenpay/";
	else if ( sURL.indexOf("pay") != -1 )
	    sURL = get_url_domain(sURL) + "/pay/";
	else
		//sURL = get_url_domain(sURL) + "/index.html";
		sURL = sURL;	
	window.location.href = "/cgi-bin/Logout?url=" + encodeURIComponent(sURL) ;
}

// 添加到收藏夹
function addFavorite()
{
	var isFirefox=(navigator.userAgent.indexOf("Firefox")>0);
	if (isFirefox)  // firefox
	{
    window.sidebar.addPanel("腾讯客服官方网站", "http://kf.qq.com","");
	}
	else if (document.all) 
	{
		window.external.addFavorite("http://kf.qq.com", "腾讯客服官方网站");
	}
}

function addFavorLink(str)
{
	var isFirefox=(navigator.userAgent.indexOf("Firefox")>0);
	if (isFirefox)  // firefox
	{
    window.sidebar.addPanel("腾讯客服-"+str, document.location.href,"");
	}
	else if (document.all) 
	{
		window.external.addFavorite(document.location.href, "腾讯客服-"+str);
	}
}
