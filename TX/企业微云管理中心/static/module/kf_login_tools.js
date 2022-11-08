/**
 * 关闭统一登录框，不能绑定在KF对象下
 */
 function ptlogin2_onClose()
 {
 	login_wnd = document.getElementById("login_div");	
 	login_wnd.style.display="none";
 	document.getElementById("mybg").style.display = "none";
 	document.body.style.overflow = '';
 }
/**
 * 调整统一登陆框尺寸
 */
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
var KF = {};
 KF.com=(function(){
	var _user={"uin":"","nick_name":""};
	function _init() {
		$.ajax({
			 url: "/cgi-bin/loginTitle?rand=" + Math.random(),
			 async: false,
			 success: function(xml) {
				 if ($(xml).find("login").text() == '0' || $(xml).find("login_type").text() == 'weixin') {//未登录
					 $(".loginBtn").show();
					 $(".loginBtn").click(function() {
						 _login();
					 });
				 } else { // 登录回调函数
					 var uin = $(xml).find("uin").text();
					 _user.uin = uin;
					 var nick_name = $(xml).find("nick").text();
					 nick_name = _HtmlAttributeEncode(nick_name);
					 _user.nick_name = nick_name;
					 _user.openid = $(xml).find("openid").text();
					 if ($("#usr_info").length <= 0) { /* 避免和头部的相冲突 */
						 $(".photo").mouseover(function() {
							 var logoutname = $("#uinPhoto img").attr("name");
							 if (logoutname == 'success') {
								 $("#loginOut").show();
							 }
						 }).mouseout(function() {
							 $("#loginOut").hide();
						 });
						 var innerstr = ' <ul>';
						 innerstr += '<input type="hidden" name="login_uin" id="login_uin" value="' + _HtmlAttributeEncode(uin) + '" />';
						 innerstr += '<li><i class="icon-user"></i><p>hi，' + nick_name + '</p></li> ';
						 innerstr += '<li id="list_count"><i class="icon-billrecord"></i><p >服务记录查询<em class="msg" id="nonrecord_num" style="display: none"></em></p></li>';
						 innerstr += '<li class="logoutBtn" id="logOut"><i class="icon-logout"></i><p>退出</p></li></ul>';
						 $("#loginOut").html(innerstr);
						 $('#list_count').click(function() {
							 window.location.href = '/task/list.html';
						 });
						 $('#logOut').click(function() {
							 _logout();
						 });
						 if (uin == 0) { //uin为空，不拉取头像
							 return false;
						 }
						 //var img = "<img src='http://imgcache.qq.com/bossweb/service/v7/images/icon-service.png' name='success' ></img>";
						 var img = "<img src='" + _HtmlAttributeEncode(_getHeadUrl(uin)) + "'name='success' ></img>";
						 img += '<em class="msg" id="record_count"></em>';
						 $("#uinPhoto").html(img);
						 $(".loginBtn").hide();
						 $("#uinPhoto").show(img);
						 console.log(img);
						 //alert(222);
					 }
 
				 }
			 }
		 });
	 };
	 function _login(){
		var url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101487640&redirect_uri='+encodeURIComponent('https://kf.qq.com/cgi-bin/qqConnectLogin');
		//var url ='http://kf.qq.com/newlogin/qc_callback.html'; 
		login_wnd = document.getElementById("login_div");
		 if (login_wnd != null) {
			 login_wnd.style.visible = "hidden" //先隐藏，这样用户就看不到页面的尺寸变化的效果
			 login_wnd.style.display = "block" //设为block， 否则页面不会真正载入
			 var login_frame = document.getElementById('login_frame');
			 login_frame.src = url;
		 }
		 login_wnd.style.display = "block";
		 login_wnd.style.position = "fixed";
		 login_wnd.style.top = "30%";
		 login_wnd.style.left = "40%";
		 login_wnd.style.marginTop = "-75px";
		 login_wnd.style.marginLeft = "-150px";
		 $('#loginClose').unbind("click").click(function() {
            console.log("loginClose");
            $("#login_div").hide();
        });
 
	 }
	 function _getHeadUrl(uin) {
		 var _uinHead = _getCookie('uinHead');
		 var _headDetail = "";
		 if (_uinHead == "") { //没有cookies，读取接口数据
		     _headDetail = _setHeadByRemote(uin);
		 } else {
		     var _headFromRemote = decodeURIComponent(_uinHead);
		     var _temp = _headFromRemote.split(',');
		     if (_temp[0] !== uin) { //有数据，但不是当前的UIN
		         console.log(_temp[0],uin);
		         _headDetail = _setHeadByRemote(uin);
		     } else { //有数据，并且是当前的UIN
		         console.log("==_headDetail==",_headDetail);
		         _headDetail = _headFromRemote;
		     }
		 }
		 var _headInfo = _headDetail.split(',');
		 console.log("==_headInfo==",_headInfo);
		 return _headInfo[1];
	 };
	 function _setHeadByRemote(uin) {
		 var _uinHeadUrl = "";
		 $.ajax({
			 type: "get",
			 url: "/cgi-bin/commonNew?rand=" + Math.random(),
			 data: "command=" + encodeURIComponent('command=C00030&uin=' + uin + "&skey=\r\n"),
			 dataType: "json",
			 async: false,
			 timeout: 3000,
			 success: function(data) {
				 if(data.resultcode == 0 && data.resultinfo.list[0].url){
					 _uinHeadUrl = decodeURIComponent(data.resultinfo.list[0].url);
					 _uinHeadUrl = uin + "," + _uinHeadUrl;
					 _addHeadCookie('uinHead', _uinHeadUrl, 24);
				 } 
			 },
			 error: function(xml) {
				 //return sys_errors();
			 }
		 });
		 return _uinHeadUrl;
	 };

	 function _addHeadCookie(objName, objValue, objHours) {
		 var str = objName + "=" + escape(objValue);
		 str += ";domain=kf.qq.com";
		 if (objHours > 0) {
			 var date = new Date();
			 var ms = objHours * 3600 * 1000;
			 date.setTime(date.getTime() + ms);
			 str += ";expires=" + date.toGMTString();
		 }
		 document.cookie = str;
	 };
	 function _getCookie  (b) {
		 var filterXSS = function(e) {
			 if (!e) return e;
			 for (; e != unescape(e);) e = unescape(e);
			 for (var r = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], n = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], a = 0; a < r.length; a++) e = e.replace(new RegExp(r[a], "gi"), n[a]);
			 return e
		 };
		 var a;
		 return filterXSS((a = document.cookie.match(RegExp("(^|;\\s*)" + b + "=([^;]*)(;|$)"))) ? unescape(a[2]) : null)
	 };
	 /**
	  * 退出
	  */
	  function _logout  () {
		 $.ajax({
			 url: "/cgi-bin/qqConnectLogout?rand=" + Math.random(),
			 async: false,
			 success: function(msg) {
				 console.log(msg);
				 location.reload();
			 },
			 error:function(err){
				 console.log(err);
				 location.reload();
			 }
		 });
	 };
	 function _HtmlAttributeEncode  (sStr) {
		 if(sStr){
			 sStr = sStr.replace(/&/g, "&amp;");
			 sStr = sStr.replace(/>/g, "&gt;");
			 sStr = sStr.replace(/</g, "&lt;");
			 sStr = sStr.replace(/"/g, "&quot;");
			 sStr = sStr.replace(/'/g, "&#39;");
			 sStr = sStr.replace(/=/g, "&#61;");
			 sStr = sStr.replace(/`/g, "&#96;");
		 }
		 
		 return sStr;
	 };
	 /**
	  * [登录CGI回调函数]
	  * @return {[type]} [description]
	  */
	 function loginCallBack(){
		 if(event.data == 'qqConnect'){
			 $("#login_div").hide();
			 console.log("cgi callback");
			 window.location.reload();
		 }
	 }
	 window.addEventListener('message', loginCallBack)
	
	 return {
		 user : _user,
		 init : _init,//初始化登录 
		 login : _login,
		 logout : _logout,
		 getHeadUrl:_getHeadUrl
		//  toServerList:toServerList,
		//  getCookie: getCookie,
		//  toDiagnoise :toDiagnoise
	 };
	 
 })();
 