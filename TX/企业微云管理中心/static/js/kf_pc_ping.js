
;(function ($,win,undefined){
    var ping ={};
    /*
     获取上报参数
     */
    ping.getPCPingParameters=function(){
        //访问时间-毫秒
        var oper_time=-1;
        if(typeof _speedMark !=="undefined"){
            oper_time = new Date-_speedMark;
        }
        //来源URL
        var sourceurl = document.referrer,
            uin ='';
        uin = GetCookie('uin');
        uin = filteruin(uin);

        var logparameters = "uin="+encodeURIComponent(uin)+"&source_url="+encodeURIComponent(sourceurl)+"&oper_time="+encodeURIComponent(oper_time)+'&rand=' + Math.random();
        return logparameters;
    };
    //获取uin
    var GetCookie=function(b) {
        var filterXSS = function(e) {
            if (!e) return e;
            for (; e != unescape(e);) e = unescape(e);
            for (var r = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], n = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], a = 0; a < r.length; a++) e = e.replace(new RegExp(r[a], "gi"), n[a]);
            return e
        };
        var a;
        return filterXSS((a=document.cookie.match(RegExp("(^|;\\s*)"+b+"=([^;]*)(;|$)")))?unescape(a[2]):null);
    };
    var filteruin=function(uin)
    {
        if (uin == null || uin == '')
        {
            return '';
        }
        var regUin = /o+\d{5,12}$/;
        if (regUin.test(uin)){
            var regReplace = /o0+|^o/;
            uin = uin.replace(regReplace, "");
        }
        else
        {
            uin = '';
        }
        return uin;
    };

    ping.kf_sendParameters=function(logparameters){
        var reporturl = "/pc_ping.html?"+logparameters;
        $.ajax({
            type: "GET",
            url: reporturl,
            dataType: "json",
            timeout: 5000,
            async: true, //异步
            success: function(msg) {
            }
        });
    };
    ping.kf_tagClick = function(hot){
        if(typeof pgvSendClick === 'function'){
            pgvSendClick({hottag:hot});
        }
        var tagsend = "&tag_name="+encodeURIComponent(hot);
        var logparameters = ping.getPCPingParameters()+tagsend;
        ping.kf_sendParameters(logparameters);

    };
    ping.pc_reportPV = function(){
        var logparameters = ping.getPCPingParameters();
        ping.kf_sendParameters(logparameters);
        if(typeof pgvMain === 'function'){
            pgvMain(logparameters);
        }
    };
    $(document).ready(function(){
        ping.pc_reportPV();
    })
    win.Pc_ping = ping;
})(jQuery,window);

