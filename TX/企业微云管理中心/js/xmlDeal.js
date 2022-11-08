	var net = new Object();
	net.READY_STATE_UNINIALIZED = 0;
	net.READY_STATE_LOADING     = 1;
	net.READY_STATE_LOADED      = 2;
	net.READY_STATE_INTERACTIVE = 3;
	net.READY_STATE_COMPLETE    = 4;
	
	net.ContentLoader = function(url, onload, params, HttpMethod)
	{
		this.url = url;
		this.req = null;
		this.onload = onload;
		this.HttpMethod = (HttpMethod)?HttpMethod:"POST";
		this.loadXMLDoc(url, params);
	}
	
	net.ContentLoader.prototype =
	{
		loadXMLDoc:function(url, params)
		{
			if (window.XMLHttpRequest)
			{
				this.req = new XMLHttpRequest();
			}
			else if (window.ActiveXObject)
			{
				this.req = new ActiveXObject("Microsoft.XMLHTTP");
			}
			if (this.req)
			{
				try
				{
					var loader = this;
					this.req.onreadystatechange=function()    // 把XMLHttpRequest的onreadystatechange设为ContentLoader的onReadyState函数
					{
						loader.onReadyState.call(loader);
					}
					this.req.open(this.HttpMethod,url,true);
					//this.req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					//alert("sss");
					//this.req.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=GB2312");
					//this.req.setRequestHeader("Content-Type","text/html; charset=UTF-8");
					this.req.send(params);
				}
				catch(err)
				{
					//this.onerror.call(this);
				}
			}
		},
		// 
		onReadyState:function()
		{
			var req = this.req;
			var ready = req.readyState;
			
			if ( ready == net.READY_STATE_COMPLETE )
			{
				var HttpStatus = req.status;
				if (HttpStatus == 200 || HttpStatus == 0)
				{
					this.onload.call(this);     // 用this调用传入的回调函数
				}
				else
				{
				//	this.onerror.call(this);  // 出错
				}
			}
		},	
		defaultError:function()
		{
			alert("error fetch data !" + 
			      "\n\nreadyState:" + this.req.readyState + 
				    "\n\nstatus:" + this.req.status +
				    "\nHeaders:" + this.req.getAllResponseHeaders());
		}
	}
	
	function ajaxRequest(targetUrl, params, cbFuntion){
		var loder = new net.ContentLoader(targetUrl, cbFuntion, params);
	}
	
	function json_callback_more(json)
{
  var div_more = document.getElementById("search_more_content");
  div_more.innerHTML="";
  var c_h4 = document.createElement("h4");
  c_h4.innerHTML="更多搜索结果<span><a href='#'><img src='/images/close.png' alt='关闭' onclick='hide_more_search()'/></a></span>";
  div_more.appendChild(c_h4);
  var c_dl = document.createElement("dl");
  c_dl.className="dl_list";
  div_more.appendChild(c_dl);
  
  if ( json.response.numFound > 0 )
	{
		$.each(json.response.results, function(i,n)
		{
			// 显示前4 - 13条
			if( 2 < i && i < 13)
			{	
				// 加标题
				c_dt = document.createElement("dt");
				c_dt.innerHTML="<a href='"+ n.UR +"' target='_blank'>"+n.TI+"</a>"
				
				c_dd = document.createElement("dd");
				c_dd.innerHTML=n.TX;
				
				c_dl.appendChild(c_dt);
				c_dl.appendChild(c_dd);
			 }
		}
		);
	}
	
}
	
	function cb_json(json){
		var action;
		var msg;
		var url;

		if (json.resultinfo.obj.action!=null){
			action = json.resultinfo.obj.action;
		}
		if (json.resultinfo.obj.msg!=null){
			msg = json.resultinfo.obj.msg;
		}
		if (json.resultinfo.obj.url!=null){
			url = json.resultinfo.obj.url;
		}

		if ( action == 0 ){
			parent.window.location.href = url;
		}if ( action == 1 && url.length > 0 ){
			openLogin(escape(url)); // 弹出式登录
			return true;
		}if ( action == 2 && url.length > 0 ){
			parent.window.location.replace(url); // 跳转
		}if ( action == 4 && msg.length > 0 ){
			alert(msg);  // 弹出消息
		}if ( action == 7 && msg.length > 0 ){
			alert(msg);  // 弹出消息后跳转
			parent.window.location.replace(url);
		}
	}
	
	function cbFuntion()
  {
    	if ( this.req.readyState == 4)
			{
				if ( this.req.status == 200)
				{
					var isIE=(navigator.userAgent.toLowerCase().indexOf("msie")>0);
					if (!isIE)  // other browser
					{
						var rText = this.req.responseText;
						var xml_doc = new DOMParser().parseFromString(rText ,   "text/xml"); 
	  				var xml_msg = xml_doc.getElementsByTagName("MSG_ENTRY")[0];
			
						if ( xml_msg != null)
						{
							var sActionCode = xml_msg.childNodes[1].firstChild == null?0:  xml_msg.childNodes[1].firstChild.nodeValue;
							var sErrCode    = xml_msg.childNodes[2].firstChild == null?0:  xml_msg.childNodes[2].firstChild.nodeValue;
							var sMsg        = xml_msg.childNodes[3].firstChild == null?"": xml_msg.childNodes[3].firstChild.nodeValue;	
							var sToURL      = xml_msg.childNodes[4].firstChild == null?"": xml_msg.childNodes[4].firstChild.nodeValue;	
						
							if ( sActionCode == 0 )
							{
								parent.window.location.href = sToURL;
							}
							if ( sActionCode == 1 && sToURL.length > 0 )   // 弹出式登录
							{
								openLogin(escape(sToURL));
								return true;
							}
							if ( sActionCode == 2 && sToURL.length > 0 )   // 跳转
							{
								parent.window.location.replace(sToURL);
							}
							if ( sActionCode == 4 && sMsg.length > 0 )   // 弹出消息
							{
							    alert(sMsg);
							}
							if ( sActionCode == 7 && sMsg.length > 0 )   // 弹出消息后跳转
							{
							    alert(sMsg);
							    parent.window.location.replace(sToURL);
							}
						}
					}
					else  // ie
					{
						 var xml_doc = this.req.responseXML.documentElement;
						 var xml_msg = xml_doc.getElementsByTagName("MSG_ENTRY")[0];
						 if ( xml_msg != null)
						 {
							 var sActionCode = xml_msg.childNodes[0].firstChild == null?0:  xml_msg.childNodes[0].firstChild.nodeValue; 
							 var sErrCode    = xml_msg.childNodes[1].firstChild == null?0:  xml_msg.childNodes[1].firstChild.nodeValue; 
							 var sMsg        = xml_msg.childNodes[2].firstChild == null?"": xml_msg.childNodes[2].firstChild.nodeValue;	
							 var sToURL      = xml_msg.childNodes[3].firstChild == null?"": xml_msg.childNodes[3].firstChild.nodeValue;	
							 
							 if ( sActionCode == 0 )
							 {
								 parent.window.location.href = sToURL;
							 }
							 if ( sActionCode == 1 && sToURL.length > 0 )   // 弹出式登录
							 {
								 openLogin(escape(sToURL));
								 return true;
							 }
							 if ( sActionCode == 2 && sToURL.length > 0 )   // 跳转
							 {
								 window.location.href = unescape(sToURL);
							 }
							 if ( sActionCode == 4 && sMsg.length > 0 )   // 弹出消息
							 {
								 alert(sMsg);
							 }
							 if ( sActionCode == 7 && sMsg.length > 0 )   // 弹出消息跳转
							 {
							    alert(sMsg);
							    parent.window.location.replace(sToURL);
							 }
						 }
					 }
				}
				else
				{
					alert("系统忙,请您稍候再试!");
				}
			}
  }
  	
  function actionWhitLog(para, redirectType, functionName)
  {
  	if (redirectType == 3)
  	{
  		writeClickLog('function:' + functionName);
  	}
  	else
  	{
  		writeClickLog(para);
  	}
  	
  	if (redirectType == 0)            // 弹出式登录跳转
  	{
  		ajaxRequest('/cgi-bin/popLogin', 'to_url='+para, cbFuntion);
  	}
  	else if (redirectType == 1)       // 直接跳转
  	{
  		window.location.replace(unescape(para));
  	}
  	else if (redirectType == 3)       // 调用函数
  	{
  		para();
  	}
  	else if (redirectType == 2)       // do nothing
  	{
  	}
  }
  
  function writeClickLog(para)
  {
  	var url    = "/cgi-bin/comlog?rand=" + Math.random();
	  var params = "type=10&url=" + escape(para);
	  ajaxRequest(url, params, logCbFunction);
  }
  
  function writeSubjectChangeLog(para, subject_id)
  {
  	var url    = "/cgi-bin/comlog?rand=" + Math.random();
	  var params = "type=10&url=" + escape(para) + "&sid=" + escape(subject_id);
	  ajaxRequest(url, params, logCbFunction);
  }
  
  function writeProductChoseLog(para, subject_id)
  {
  	var url    = "/cgi-bin/comlog?rand=" + Math.random();
	  var params = "type=10&url=" + escape(para) + "&sid=" + escape(subject_id);
	  ajaxRequest(url, params, logCbFunction);
  }
  
  function writeSearchLog(para, count)
  {
  	var url    = "/cgi-bin/comlog?rand=" + Math.random();
	  var params = "type=17&key=" + para + "&count=" + escape(count);
	  ajaxRequest(url, params, logCbFunction);
  }
  
  function writeViewQuestionLog(seqid,sid)
  {
        var url    = "/cgi-bin/comlog?rand=" + Math.random();
          var params = "type=16&seqid=" + escape(seqid) + "&sid=" + escape(sid);
          ajaxRequest(url, params, logCbFunction);
  }
  
  function logCbFunction()
  {
  }
  
  function cbFuntion_gcs()
{
   if ( this.req.readyState == 4)
	 {
				if ( this.req.status == 200)
				{
					var isFirefox=(navigator.userAgent.indexOf("Firefox")>0);
					if (isFirefox)  // firefox
					{
						var rText = this.req.responseText;
						var xml_doc = new DOMParser().parseFromString(rText ,   "text/xml"); 
	  				var xml_msg = xml_doc.getElementsByTagName("MSG_ENTRY")[0];
			
						if ( xml_msg != null)
						{
							var sActionCode = xml_msg.childNodes[1].firstChild == null?0:  xml_msg.childNodes[1].firstChild.nodeValue;
							var sErrCode    = xml_msg.childNodes[2].firstChild == null?0:  xml_msg.childNodes[2].firstChild.nodeValue;
							var sMsg        = xml_msg.childNodes[3].firstChild == null?"": xml_msg.childNodes[3].firstChild.nodeValue;	
							var sToURL      = xml_msg.childNodes[4].firstChild == null?"": xml_msg.childNodes[4].firstChild.nodeValue;	
						
							if ( sActionCode == 0 )
							{
								parent.window.location.href = sToURL;
							}
							if ( sActionCode == 1 && sToURL.length > 0 )   // 弹出式登录
							{
								parent.openLogin(escape(sToURL));
							}
							if ( sActionCode == 2 && sToURL.length > 0 )   // 跳转
							{
								parent.window.location.href = unescape(sToURL);
							}
							if ( sActionCode == 4 && sMsg.length > 0 )   // 弹出消息
							 {
								 alert(sMsg);
							 }
							if ( sActionCode == 5 && sToURL.length > 0 )   // 带消息登录
							{
								 alert(sMsg);
								 parent.openLogin(escape(sToURL));
							}
							if ( sActionCode == 6 && sToURL.length > 0 )   // 跳转
							{
								window.location.href = unescape(sToURL);
							}
						}
					}
					else  // ie
					{
						 var xml_doc  = this.req.responseXML.documentElement;
			
						 var xml_msg = xml_doc.getElementsByTagName("MSG_ENTRY")[0];
						 if ( xml_msg != null)
						 {
							 var sActionCode = xml_msg.childNodes[0].firstChild == null?0:  xml_msg.childNodes[0].firstChild.nodeValue;
							 var sErrCode    = xml_msg.childNodes[1].firstChild == null?0:  xml_msg.childNodes[1].firstChild.nodeValue;
							 var sMsg        = xml_msg.childNodes[2].firstChild == null?"": xml_msg.childNodes[2].firstChild.nodeValue;	
							 var sToURL      = xml_msg.childNodes[3].firstChild == null?"": xml_msg.childNodes[3].firstChild.nodeValue;	
							
							 if ( sActionCode == 0 )
							 {
								 parent.window.location.href = sToURL;
							 }
							 if ( sActionCode == 1 && sToURL.length > 0 )   // 弹出式登录
							 {
								 parent.openLogin(escape(sToURL));
							 }
							 if ( sActionCode == 2 && sToURL.length > 0 )   // 跳转
							 {
								 parent.window.location.href = unescape(sToURL);
							 }
							 if ( sActionCode == 4 && sMsg.length > 0 )   // 弹出消息
							 {
								 alert(sMsg);
							 }
							 if ( sActionCode == 5 && sToURL.length > 0 )   // 带消息登录
							 {
								 alert(sMsg);
								 parent.openLogin(escape(sToURL));
							 }
							 if ( sActionCode == 6 && sToURL.length > 0 )   // 跳转
							 {
								 window.location.href = unescape(sToURL);
							 }
						 }
					 }
				}
				else
				{
					alert("系统忙,请您稍候再试!");
				}
	}
}

	function cb_fetch_subject()
  {
    	if ( this.req.readyState == 4)
			{
				if ( this.req.status == 200)
				{
					var isFirefox=(navigator.userAgent.indexOf("Firefox")>0);
					if (isFirefox)  // firefox
					{
						var rText = this.req.responseText;
						var xml_doc = new DOMParser().parseFromString(rText ,   "text/xml"); 
	  				var xml_msg = xml_doc.getElementsByTagName("MSG_ENTRY")[0];
			
						if ( xml_msg != null)
						{
							var sActionCode = xml_msg.childNodes[1].firstChild == null?0:  xml_msg.childNodes[1].firstChild.nodeValue;
							var sErrCode    = xml_msg.childNodes[2].firstChild == null?0:  xml_msg.childNodes[2].firstChild.nodeValue;
							var sMsg        = xml_msg.childNodes[3].firstChild == null?"": xml_msg.childNodes[3].firstChild.nodeValue;	
							var sToURL      = xml_msg.childNodes[4].firstChild == null?"": xml_msg.childNodes[4].firstChild.nodeValue;	
							
							var xRows = xml_doc.getElementsByTagName('SELECT_ENTRY');
							if (document.getElementById("question_subject").options.length == 0)
							{
							 	AddOneOption("question_subject", "请选择问题类型", 0);
							}
							
							for (i=0; i<xRows.length; i++)
							{
								var sValue = xRows[i].childNodes[0].firstChild.nodeValue;
								var sName  = xRows[i].childNodes[1].firstChild.nodeValue;
								var sType  = xRows[i].childNodes[2].firstChild.nodeValue;
								AddOneOption("question_subject", sName, sValue);
							}
							
						}
					}
					else  // ie
					{
						 var xml_doc = this.req.responseXML.documentElement;
						 var xml_msg = xml_doc.getElementsByTagName("MSG_ENTRY")[0];
						 
						 if ( xml_msg != null)
						 {
							 var sActionCode = xml_msg.childNodes[0].firstChild == null?0:  xml_msg.childNodes[0].firstChild.nodeValue; 
							 var sErrCode    = xml_msg.childNodes[1].firstChild == null?0:  xml_msg.childNodes[1].firstChild.nodeValue; 
							 var sMsg        = xml_msg.childNodes[2].firstChild == null?"": xml_msg.childNodes[2].firstChild.nodeValue;	
							 var sToURL      = xml_msg.childNodes[3].firstChild == null?"": xml_msg.childNodes[3].firstChild.nodeValue;	
							 
							 var xRows = xml_doc.getElementsByTagName('SELECT_ENTRY');
							 if (document.getElementById("question_subject").options.length == 0)
							 {
							 	AddOneOption("question_subject", "请选择问题类型", 0);
							 }
							 
							 for (i=0; i<xRows.length; i++)
							 {
								 var sValue = xRows[i].childNodes[0].firstChild.nodeValue;
								 var sName  = xRows[i].childNodes[1].firstChild.nodeValue;
								 var sType  = xRows[i].childNodes[2].firstChild.nodeValue;
								 AddOneOption("question_subject", sName, sValue);
							 }
							
						 }
					 }
				}
				else
				{
					alert("系统忙,请您稍候再试!");
				}
			}
  }
  
  function cb_fetch_userlevel()
  {
    	if ( this.req.readyState == 4)
			{
				if ( this.req.status == 200)
				{
					var isFirefox=(navigator.userAgent.indexOf("Firefox")>0);
					if (isFirefox)  // firefox
					{
						var rText = this.req.responseText;
						var xml_doc = new DOMParser().parseFromString(rText ,   "text/xml"); 
	  				var xml_msg = xml_doc.getElementsByTagName("MSG_ENTRY")[0];
			
						if ( xml_msg != null)
						{
							var sActionCode = xml_msg.childNodes[1].firstChild == null?0:  xml_msg.childNodes[1].firstChild.nodeValue;
							var sErrCode    = xml_msg.childNodes[2].firstChild == null?0:  xml_msg.childNodes[2].firstChild.nodeValue;
							var sMsg        = xml_msg.childNodes[3].firstChild == null?"": xml_msg.childNodes[3].firstChild.nodeValue;
							var sToURL      = xml_msg.childNodes[4].firstChild == null?"": xml_msg.childNodes[4].firstChild.nodeValue;
							
							// 更换announce内容
							for (var i = 0; i < arrayServiceName.length; ++i)
							{
									// sErrCode 传回sid
									if (arrayServiceName[i][0] == sErrCode)
									{
										var sAnnounce = document.getElementById('announce');
										sAnnounce.innerHTML = arrayServiceName[i][2];
										break;
									}
							}
							
							// 显示or隐藏
							if (sActionCode & 0x02 || sActionCode & 0x04)   // vip
							{
								document.getElementById("announce").style.display='block';
							}
							else
							{
								document.getElementById("announce").style.display='none';
							}
						}
					}
					else  // ie
					{
						 var xml_doc = this.req.responseXML.documentElement;
						 var xml_msg = xml_doc.getElementsByTagName("MSG_ENTRY")[0];
						 
						 if ( xml_msg != null)
						 {
							 var sActionCode = xml_msg.childNodes[0].firstChild == null?0:  xml_msg.childNodes[0].firstChild.nodeValue; 
							 var sErrCode    = xml_msg.childNodes[1].firstChild == null?0:  xml_msg.childNodes[1].firstChild.nodeValue; 
							 var sMsg        = xml_msg.childNodes[2].firstChild == null?"": xml_msg.childNodes[2].firstChild.nodeValue;	
							 var sToURL      = xml_msg.childNodes[3].firstChild == null?"": xml_msg.childNodes[3].firstChild.nodeValue;	
							 
							 // 更换announce内容
							for (var i = 0; i < arrayServiceName.length; ++i)
							{
									// sErrCode 传回sid
									if (arrayServiceName[i][0] == sErrCode)
									{
										var sAnnounce = document.getElementById('announce');
										sAnnounce.innerHTML = arrayServiceName[i][2];
										break;
									}
							}
							
							// 显示or隐藏
							if (sActionCode & 0x02 || sActionCode & 0x04)   // 0 为低端用户
							{
								document.getElementById("announce").style.display='block';
							}
							else
							{
								document.getElementById("announce").style.display='none';
							}
						 }
					 }
				}
				else
				{
					alert("系统忙,请您稍候再试!");
				}
			}
  }
  
