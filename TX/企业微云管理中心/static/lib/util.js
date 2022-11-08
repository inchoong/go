TOOL = {};

(function(TOOL){
    
    /**
     * 合并对象(浅拷贝)
     */
    TOOL.objMerge = function() {
        var i,arg,o={};
        for(arg=0;arg<arguments.length;arg++){
            for (i in arguments[arg]) {
                if (arguments[arg].hasOwnProperty(i)) {
                    o[i] = arguments[arg][i];
                }
            }
        }
        return o;
    }
    
    TOOL.pageRender = function(arg){
        var 
            page = +arg.page || 1,
            pageSize = arg.pageSize || 3,
            binded = arg.binded || false,
            data = (arg.data.resultinfo && arg.data.resultinfo.list) || arg.data.list || arg.data || [],
            containerId = arg.containerId || 'imc_tenpay_contentbox',
            total = data.length,
            toPage,
            totalPage =  Math.ceil(total / pageSize),
            showData = data.slice(pageSize*(page-1),pageSize*page),
            html = '',
            pageStr = '<div class="pagenav awpage"><p class="pagenav_main">'
        ;
        if(typeof(arg.tpl) === 'string'){
            arg.data.list = showData;
            if(arg.tpl.length > 30){
                var render = template.compile(arg.tpl);
                html = render(arg.data);
            }else{
                html = template.render(arg.tpl,arg.data);
            }
        }else{
            html = Mustache.render(arg.tpl.html(), {'list':showData});
        }
        //分页html拼接
        if(page == 1){
            pageStr += '<span class="pagenav_disable"><span>上一页</span></span>';
        }else{
            toPage = arg.page - 1;
            pageStr += '<a href="#'+ toPage +'"><span>上一页</span></a>';
        }
        var start,end;
        if(totalPage <= 10){
            start = 2;
            end = totalPage-1;
        }else if(page < 6){
            start = 2;
            end = 9;
        }else if(page > (totalPage - 6)){
            start = totalPage - 8;
            end = totalPage - 1;
        }else{
            start = page - 3;
            end = page + 4;
        }
        if(page == 1){
            pageStr += '<span class="current"><span>1</span></span>' ;
        }else{
            toPage = 1;
            pageStr += '<a href="#'+ toPage +'"><span>1</span></a>';
        }
        if(totalPage > 10 && (page > (totalPage-6) || page >= 6)){
            pageStr += '<span class="pagenav_more"><span>…</span></span>';
        }
        for(var i=start;i<=end;i++){
            toPage = i;
            pageStr += (page == i) ? '<span class="current"><span>' + i + '</span></span>' 
                : '<a href="#'+ toPage +'"><span>' + i + '</span></a>';
        }
        if(totalPage > 10 && (page < 6 || page < (totalPage-6))){
            pageStr += '<span class="pagenav_more"><span>…</span></span>';
        }
        if(totalPage > 1){
            if(page == totalPage){
                pageStr += '<span class="current"><span>' + totalPage + '</span></span>' ;
            }else{
                toPage = totalPage;
                pageStr += '<a href="#'+ toPage +'"><span>' + totalPage + '</span></a>';
            }
        }
        if(page < totalPage){
            toPage = page + 1;
            pageStr += '<a href="#'+ toPage +'"><span>下一页</span></a>';
        }else{
            pageStr += '<span class="pagenav_disable"><span>下一页</span></span>';
        }
        pageStr += '</p></div>';
        $('#' + containerId).html(html + pageStr);
        //绑定点击事件
        if(binded == false){
            $('#' + containerId).delegate('.pagenav a','click',function(event){
                arg.page = event.currentTarget.hash.substr(1);
                arg.binded = true;
                TOOL.pageRender(arg);
            });
        }
        if(arg.callback && typeof arg.callback === 'function'){
            arg.callback();
        }
    }
    
    /**
     * 判断是否交易单号
     */
    TOOL.isMobiNum  = function(input){
        return parseInt(input) >= 1e10 && parseInt(input) < 99999999999;
    }
    
    /**
     * 判断是否交易单号
     */
    TOOL.isTradeBillNum  = function(input){
        return parseInt(input) >= 1e28;
    }
    
    TOOL.getLastMonthDate = function(){
        var sTimeStamp = parseInt(new Date().getTime()/1000);
        var limitStamp = sTimeStamp + parseInt(-29) * 24 * 60 * 60;
        var dateObi = new Date(parseInt(limitStamp) * 1000);
        return dateObi.getFullYear() + '-' 
            + ((dateObi.getMonth() + 1) >= 10 ? '' : '0') +(dateObi.getMonth() + 1) + '-' 
            + ((dateObi.getDate()) >= 10 ? '' : '0') + dateObi.getDate();
    }
    
    TOOL.get3AgoMonthDate = function(){
        var sTimeStamp = parseInt(new Date().getTime()/1000);
        var limitStamp = sTimeStamp + parseInt(-90) * 24 * 60 * 60;
        var dateObi = new Date(parseInt(limitStamp) * 1000);
        return dateObi.getFullYear() + '-' 
            + ((dateObi.getMonth() + 1) >= 10 ? '' : '0') +(dateObi.getMonth() + 1) + '-' 
            + ((dateObi.getDate()) >= 10 ? '' : '0') + dateObi.getDate();
    }  
    
    TOOL.getCurrentMonthDate = function(detail){
        var date = new Date();
        var tail = detail ? ' ' 
                + (date.getHours() >= 10 ? '' : '0') + date.getHours() + ':' 
                + (date.getMinutes() >= 10 ? '' : '0') + date.getMinutes() + ':' 
                + (date.getSeconds() >= 10 ? '' : '0') + date.getSeconds() 
                : '';
        return date.getFullYear() + "-" + ((date.getMonth()+1<10)?'0':'') + (date.getMonth()+1) + "-" + ((date.getDate()<10)?'0':'') + date.getDate() + tail;
    }

    TOOL.getCurrent = function() {
        return TOOL.getCurrentMonthDate(true);
    }
    
    /**
     * 根据id获取当前业务内容
     */
    TOOL.getBizType = function(id){
        return id.split('_').pop();
    }
    
    TOOL.strtotime = function (strings){
        strings = strings.replace('T',' ').replace('+08:00','');
        var arr = strings.split(" "); 
        var arr1 = arr[0].split("-"); 
        //var arr2 = arr[1].split(":"); 
        var year = arr1[0]; 
        var month = arr1[1]-1; 
        var day = arr1[2];
        var hour = 0,min=0,sec=0;
        if(arr[1]){
            var arr2 = arr[1].split(":");
            hour = arr2[0]; 
            min = arr2[1];
            sec = arr2[2];
        }
        var timestamp = new Date(year,month,day,hour,min,sec).getTime()/1000;  
        return timestamp; 
    }
    
    TOOL.checkTime = function (sTime,eTime,days){
        var compare = 0;
        if(parseInt(days)){
            compare = days  * 24 * 60 * 60;
        }
        return (TOOL.strtotime(eTime) - TOOL.strtotime(sTime)) >= compare;
    }
    
    TOOL.countDays = function (sTime,eTime){
        if(!eTime){
            eTime = TOOL.getCurrentMonthDate();
        }
        return Math.round((TOOL.strtotime(eTime) - TOOL.strtotime(sTime))/(24 * 60 * 60));
    }
    
    TOOL.getUrlParam = function(name){
        var src = window.location.href;
        var r = new RegExp("(\\?|#|&)" + name + "=([^&^#]*)(#|&|$)");
        var m = src.match(r);
        return !m ? "" : m[2];
    }
    
    TOOL.keys = function(obj) {
        if (obj !== Object(obj)){
            return [];
            //throw new TypeError('Invalid object');
        } 
        var keys = [];
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                keys[keys.length] = key;
            }
        }
        return keys;
    };
    
    TOOL.formatTime = function(input) {
        return input ? input.replace('T',' ').replace('+08:00','') : '';
    };
    
    TOOL.get = function(url,callBack,errorCallBack) {
        if(url){
            var urlArr = url.split("?");
            if(urlArr[1]){
                imc_operation(gMainOp,gSubOp,urlArr[1],'query');
            }
        }
        var _callBack = function(){
            if(arguments[0].indexOf('"resultcode":"-101"') > 0){
                //跳转重新登录
                var url = window.location.href.split('?');
                window.location.href = 'http://admin.cm.com/cgi-bin/start?GroupID=295&DirectPage=' + encodeURIComponent(url[0] + '?check=1'); 
            }else{
                callBack.apply(this,arguments);
            }
        }
        if(errorCallBack){
            $.get(url,function(){
                try{
                    _callBack.apply(this,arguments);
                }catch(e){
                    errorCallBack();
                }
            });
        }else{
            $.get(url,_callBack);
        }
    };

    TOOL.getExt = function(holder,url,callBack,errorCallBack) {
        if(holder){
            holder.html('<div class="imc_tenpay_con1"><div class="aw_table"><p style="margin-top: 0px;"><img src="/images/img_loading.gif"/>查询中，请稍候...</p></div></div>');
        }
        var _callBack = function(){
            res = $.parseJSON(arguments[0]);
            if(res.resultcode == 101){
                //跳转重新登录
                var url = window.location.href.split('?');
                window.location.href = 'http://admin.cm.com/cgi-bin/start?GroupID=295&DirectPage=' + encodeURIComponent(url[0] + '?check=1');
                if(holder){
                    holder.html('<div class="imc_tenpay_con1"><div class="aw_table"><p style="margin-top: 0px;"><img src="/images/bg_tishi1.gif"/>会话过期，请重新登录</p></div></div>');
                }
            }else if(holder && res.resultcode == -104){
                holder.html('<div class="imc_tenpay_con1"><div class="aw_table"><p style="margin-top: 0px;"><img src="/images/bg_tishi1.gif"/>访问权限不足，请联系主管申请</p></div></div>');
            }else if(holder && res.resultcode != 0){
                holder.html('<div class="imc_tenpay_con1"><div class="aw_table"><p style="margin-top: 0px;"><img src="/images/bg_tishi1.gif"/>查询结果返回异常</p></div></div>');
            }else{
                callBack.call(this,res.resultinfo);
            }
        }
        if(errorCallBack){
            $.get(url,function(){
                try{
                    _callBack.apply(this,arguments);
                }catch(e){
                    errorCallBack();
                }
            });
        }else{
            $.get(url,_callBack);
        }
        if(url){
            var urlArr = url.split("?");
            if(urlArr[1]){
                imc_operation(gMainOp,gSubOp,urlArr[1],'query');
            }
        }
    };
    
    TOOL.tranlate = function(str,map) {
        return map[str] ? map[str] : (map['other'] || str);
    };
    
    TOOL.reformTime = function(strings){
        if(!strings){return '';}
        var arr = strings.split(" ");
        var arr1 = arr[0].split('/');
        return arr1[2] + '-' + arr1[0] + '-' + arr1[1] + ' ' + arr[1];
    }
    
    TOOL.removeFloatBox = function(){
        $('#floatBox').remove();
    }
    
    TOOL.showWords = function(event){
        var $target = $(event.target);
        var $hiddenSpan = $target.prev();
        var $showSpan = $hiddenSpan.prev();
        var tmp = $showSpan.html();
        $showSpan.html($hiddenSpan.html());
        $hiddenSpan.html(tmp);
    }
    
    TOOL.getLimitTime = function(sTime,days){
        if(arguments.length === 1 || !sTime){
            days = sTime;
            sTime = TOOL.getCurrentMonthDate();
        }
        var sTimeStamp = TOOL.strtotime(sTime);
        var _days = days > 0 ? (days-1) : (days+1);
        var limitStamp = sTimeStamp + parseInt(_days) * 24 * 60 * 60;
        var dateObi = new Date(parseInt(limitStamp) * 1000);
        return dateObi.getFullYear() + '-' 
            + ((dateObi.getMonth() + 1) >= 10 ? '' : '0') +(dateObi.getMonth() + 1) + '-' 
            + ((dateObi.getDate()) >= 10 ? '' : '0') + dateObi.getDate();
    }
   
   TOOL.timeToString = function(timestamp,detail){
        var dateObi = new Date(parseInt(timestamp) * 1000),
            tail = detail ? ' ' 
                + (dateObi.getHours() >= 10 ? '' : '0') + dateObi.getHours() + ':' 
                + (dateObi.getMinutes() >= 10 ? '' : '0') + dateObi.getMinutes() + ':' 
                + (dateObi.getSeconds() >= 10 ? '' : '0') + dateObi.getSeconds() 
                : '';
        return dateObi.getFullYear() + '-' 
            + ((dateObi.getMonth() + 1) >= 10 ? '' : '0') +(dateObi.getMonth() + 1) + '-' 
            + ((dateObi.getDate()) >= 10 ? '' : '0') + dateObi.getDate() + tail;
    }
    
    TOOL.secToString = function(sec){
        if( (sec = +parseInt(sec)) < 0){
            return '';
        }
        var y = d = h = m = s = ym = dm = hm = mm = 0;
        if(sec >= 31536000){
            y = parseInt(sec / 31536000);
            ym = sec % 31536000;
        }else{
            ym = sec;
        }
        if(ym >= 86400){
            d = parseInt(ym / 86400);
            dm = sec % 86400;
        }else{
            dm = ym;
        }
        if(dm >= 3600){
            h = parseInt(dm / 3600);
            hm = sec % 3600;
        }else{
            hm = dm;
        }
        if(hm >= 60){
            m = parseInt(hm / 60);
            mm = sec % 60;
        }else{
           mm = hm; 
        }
        if(mm > 0){
            s = mm;
        }
        return ((y > 0) ? y + '年' : '') 
            + ((d > 0) ? d + '天' : '') 
            + ((h > 0) ? h + '小时' : '') 
            + ((m > 0) ? m + '分' : '') 
            + ((s > 0) ? s + '秒' : '');
    }
    
    TOOL.isValidMail = function (sText) {
        var reMail = /^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/;
        return reMail.test($.trim(sText));
    }
    
    TOOL.enterBind = function(calFn){
        document.onkeydown = function(e){
            var ev = document.all ? window.event : e;  
            ev.keyCode==13 && calFn();
        }
    }
    
    TOOL.inputTips = function($input,tips){
        $input.val(tips).css('color','#999');
        $input.on('focus',function(){
            var $this = $(this);
            $this.removeAttr('style');
            if($this.val() == tips){
                $this.val('');
            }
        });
        $input.on('blur',function(){
            var $this = $(this);
            if($this.val() == ''){
                $this.val(tips);
                $this.css('color','#999');
            }
        });
    }
    
    TOOL.getParam = function(name){ 
        var url = location.href; 
        var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
        var paraObj = {} 
        for (i=0; j=paraString[i]; i++){ 
            paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
        } 
        var returnValue = paraObj[name.toLowerCase()]; 
        return (typeof(returnValue)=="undefined") ? "" : returnValue;
    }
    
    /**
     * 异步分页
     */
    TOOL.pageAsynRender = function(arg){
        var 
            page = +arg.page || 1,
            pageSize = arg.pageSize || 3,
            binded = arg.binded || false,
            containerId = arg.containerId,
            total = arg.total,
            toPage,
            totalPage =  Math.ceil(total / pageSize),
            html = '',
            pageStr = '<div class="pagenav awpage"><p class="pagenav_main">'
        ;
        html = template.render(arg.tpl,arg.data);
        //分页html拼接
        if(page == 1){
            pageStr += '<span class="pagenav_disable"><span>上一页</span></span>';
        }else{
            toPage = arg.page - 1;
            pageStr += '<a href="#'+ toPage +'"><span>上一页</span></a>';
        }
        var start,end;
        if(totalPage <= 10){
            start = 2;
            end = totalPage-1;
        }else if(page < 6){
            start = 2;
            end = 9;
        }else if(page > (totalPage - 6)){
            start = totalPage - 8;
            end = totalPage - 1;
        }else{
            start = page - 3;
            end = page + 4;
        }
        if(page == 1){
            pageStr += '<span class="current"><span>1</span></span>' ;
        }else{
            toPage = 1;
            pageStr += '<a href="#'+ toPage +'"><span>1</span></a>';
        }
        if(totalPage > 10 && (page > (totalPage-6) || page >= 6)){
            pageStr += '<span class="pagenav_more"><span>…</span></span>';
        }
        for(var i=start;i<=end;i++){
            toPage = i;
            pageStr += (page == i) ? '<span class="current"><span>' + i + '</span></span>' 
                : '<a href="#'+ toPage +'"><span>' + i + '</span></a>';
        }
        if(totalPage > 10 && (page < 6 || page < (totalPage-6))){
            pageStr += '<span class="pagenav_more"><span>…</span></span>';
        }
        if(totalPage > 1){
            if(page == totalPage){
                pageStr += '<span class="current"><span>' + totalPage + '</span></span>' ;
            }else{
                toPage = totalPage;
                pageStr += '<a href="#'+ toPage +'"><span>' + totalPage + '</span></a>';
            }
        }
        if(page < totalPage){
            toPage = page + 1;
            pageStr += '<a href="#'+ toPage +'"><span>下一页</span></a>';
        }else{
            pageStr += '<span class="pagenav_disable"><span>下一页</span></span>';
        }
        pageStr += '</p></div>';
        $('#' + containerId).html(html + pageStr);
        //绑定点击事件
        if(binded == false){
            $('#' + containerId).undelegate().delegate('.pagenav a','click',function(event){
                arg.page = event.currentTarget.hash.substr(1);
                arg.binded = true;
                arg.fn(arg);
            });
        }
        if(arg.callback && typeof arg.callback === 'function'){
            arg.callback();
        }
    }
    
    /**
     * 异步分页（兼容微信的奇葩数据）
     */
    TOOL.pageWXAsynRender = function(arg){
        var 
            page = +arg.page || 1,
            pageSize = arg.pageSize || 3,
            binded = arg.binded || false,
            containerId = arg.containerId,
            total = arg.total,
            toPage,
            totalPage =  Math.ceil(total / pageSize),
            html = '',
            pageStr = '<div class="pagenav awpage"><p class="pagenav_main">'
        ;
        html = template.render(arg.tpl,arg.data);
        //分页html拼接
        if(page == 1){
            pageStr += '<span class="pagenav_disable"><span>上一页</span></span>';
        }else{
            toPage = arg.page - 1;
            pageStr += '<a href="#'+ toPage +'"><span>上一页</span></a>';
        }
        if(total > pageSize){
            toPage = page + 1;
            pageStr += '<a href="#'+ toPage +'"><span>下一页</span></a>';
        }else{
            pageStr += '<span class="pagenav_disable"><span>下一页</span></span>';
        }
        pageStr += '</p></div>';
        $('#' + containerId).html(html + pageStr);
        //绑定点击事件
        if(binded == false){
            $('#' + containerId).undelegate().delegate('.pagenav a','click',function(event){
                arg.page = event.currentTarget.hash.substr(1);
                arg.binded = true;
                arg.fn(arg);
            });
        }
        if(arg.callback && typeof arg.callback === 'function'){
            arg.callback();
        }
    }

    TOOL.isQQ = function(q){
        return /^[0-9]{5,10}$/.test(q);
    }
	
	TOOL.countCFNewEnd=function(end, commuted_days){
	        //计算封号剩余天数
        var leftDays = Math.floor((TOOL.strtotime(end) - parseInt(+(new Date())/1000)) / (24 * 60 * 60));
        //计算新的封号长度
        var newDuration = leftDays - commuted_days;
        return TOOL.getLimitTime(newDuration >= 0 ? newDuration + 1 : 1);
	}
    
	TOOL.checkIdCardNum = function(idcard) {
	    var Errors = new Array("验证通过!", "身份证号码位数不对!", "身份证号码出生日期超出范围或含有非法字符!", "身份证号码校验错误!", "身份证地区非法!");
	    var area = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "xinjiang", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }
	    var idcard, Y, JYM;
	    var S, M;
	    var idcard_array = new Array();
	    idcard_array = idcard.split("");
	    if (area[parseInt(idcard.substr(0, 2))] == null) return Errors[4];
	    switch (idcard.length) {
	        case 15:
	            if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
	                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性 
	            } else {
	                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性 
	            }
	            if (ereg.test(idcard))
	                return Errors[0];
	            else
	                return Errors[2];
	            break;
	        case 18:
	            if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
	                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式 
	            } else {
	                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式 
	            }
	            if (ereg.test(idcard)) {
	                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
	                Y = S % 11;
	                M = "F";
	                JYM = "10X98765432";
	                M = JYM.substr(Y, 1);
	                if (M == idcard_array[17])
	                    return Errors[0];
	                else
	                    return Errors[3];
	            } else
	                return Errors[2];
	            break;
	        default:
	            return Errors[1];
	            break;
	    }
	}
    
})(TOOL);


Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                   ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}