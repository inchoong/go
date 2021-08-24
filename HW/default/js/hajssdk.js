;(function(){
    var HaSdkVersion = "2.1.2.001",   // sdk版本

        userAccount, // 用户标示

        screenWidth = screen.width,

        screenHeight = screen.height,

        pattern = 1, // 非0为兼容模式

        isInit = false,

        pageViewId = "",

        expireTime = 500,

        url = location.href,

        configCookieNamePrefix = "HW_",

        url_path =  "",

        baseinfotypeSwitch1 = false, // 页面进入事件上报开关

        baseinfotypeSwitch2 = false, // 窗口关闭事件开关

        type1 = "baseinfotype",

        type2 = "customEvent",

        type3 = "elementEvent",

        waitTime = 0,

        CXX = "",

        idsite = "",

        waitTimeFlag = true,

        isNewVf = false,

        waitTimeFlagTime = 0,

        referrer = document.referrer,

        title = "",

        uid = "",

        idts = "",

        idvc = 1,

        idn = 0,

        refts = "",

        viewts = "",

        properties = {},

        serverUrl = "",

        accessTime = new Date().getTime(),

        saveAccessTime = -1,

        eventName = "",

        eventLabel = "",

        elementInfo = {},

        customData = {},

        UA = {
            type: function () {
                var u = navigator.userAgent;
                if (u.match(/AppleWebKit.*Mobile.*/)) {
                    if (u.indexOf(" wv") !== -1){
                        return 2
                    } else {
                        return 1
                    }
                } else {
                    return 0
                }
            } ()
        };

    _hasdk = function () {

        function sendData(eventNameP, eventLabelP, customDataP ) {
            eventName = eventNameP;
            eventLabel = eventLabelP;
            customData = customDataP;
            execReport(type2)
            return this
        }

        function setOnReportUrl(serverUrlP) {
            serverUrlP ? serverUrl = serverUrlP : "";
            return this
        }

        function setTitle(titleP) {
            titleP ? title = titleP : "";
            return this
        }

        function setUserAccount(userAccountP) {
            userAccountP ? userAccount = userAccountP : "";
            return this
        }

        function setUid(uidP) {
            uidP ? uid = uidP : "";
            return this
        }

        function setCXX(CXXP) {
            CXXP ? CXX = CXXP : "";
            return this
        }

        function setBaseinfotypeSwitch(flag) {
            baseinfotypeSwitch1 = flag
            if (isInit && isNewVf) {
                baseinfotypeSwitch1 ?  execReport("baseinfotype") : "";
            }
            return this
        }

        function setWindowCloseSwitch(flag) {
            baseinfotypeSwitch2 = flag
            return this
        }

        function setIdsite(idsiteValue) {
            idsiteValue ? idsite = idsiteValue : "";
            return this
        }

        return {
            push: apply,
            bindclick: bindclick,
            sendData: sendData,
            setOnReportUrl: setOnReportUrl,
            setTitle: setTitle,
            setUserAccount: setUserAccount,
            setUid: setUid,
            setCXX: setCXX,
            setBaseinfotypeSwitch: setBaseinfotypeSwitch,
            setWindowCloseSwitch: setWindowCloseSwitch,
            setIdsite: setIdsite
        }
    }();




    (function bindReady() {
        if (window.addEventListener) {
            document.addEventListener('DOMContentLoaded', domHasAlready, false);
        } else if (window.attachEvent) {
            doScroll();
        }
    })();


    // ie6-8通过判断doScroll判断DOM是否加载完毕
    function doScroll() {
        try {
            document.documentElement.doScroll('left');
        } catch (error) {
            return setTimeout(doScroll, 20);
        };
        domHasAlready();
    }

    function apply() {
        var i, f, parameterArray;
        for (i = 0; i < arguments.length; i += 1) { //flags
            parameterArray = arguments[i];
            f = parameterArray.shift();
            if (typeof f === 'string' || f instanceof String) {
                _hasdk[f].apply(_hasdk, parameterArray);
            } else {
                f.apply(_hasdk, parameterArray);
            }
        }
        return this
    }

    function deletToken(url) {
        var tempArr = url.split("&");
        for (var i = 0; i < tempArr.length; i++) {
            var tempArrSmall = tempArr[i].split("=");
            if (tempArrSmall[0].toLocaleLowerCase() === "token".toLocaleLowerCase()) {
                tempArr.splice(i, 1)
                break
            }
        }
        return tempArr.join("&")
    }

    function domHasAlready() {
        init();
        waitTime = 0
        document.removeEventListener('DOMContentLoaded', domHasAlready, false);
        attachEventListener(window, 'beforeunload', beforeUnloadHandler, false);
        attachEventListener(document, "visibilitychange", stateChanged);
    }

    // 计算在页面停留的有效时间（仅计算当前页面可见的时间）
    function stateChanged () {
        if (waitTimeFlag) {
            var nowTime = new Date().getTime();
            waitTime += nowTime -( waitTimeFlagTime || accessTime)
        } else {
            waitTimeFlagTime  = new Date().getTime();
        }
        waitTimeFlag = !waitTimeFlag
    }

    // 初始化
    function init () {
        // 页面dom初始化后获取页面title
        !title ? title = document.title:"";
        url_path = location.host;
        var visitFlag = getCookieValue(getCookieName("id"));
        if (referrer && !getCookieValue(getCookieName("refts"))) {
            var time = new Date().getTime();
            addCookie(getCookieName("refts"),time, 180*24*60*60*1000, "/");
            refts = time;
        } else {
            refts = getCookieValue(getCookieName("refts"))
        }
        viewts = getCookieValue(getCookieName("viewts"));
        if (!getCookieValue(getCookieName("idvc"))) {
            addCookie(getCookieName("idvc"),1, 365*24*60*60*1000, "/");
        } else {
            addCookie(getCookieName("idvc"),getCookieValue(getCookieName("idvc")) - 0 + 1, 365*24*60*60*1000, "/");
        }
        idvc = getCookieValue(getCookieName("idvc"));
        saveAccessTime = 0
        if (visitFlag === "" || !visitFlag) {
            var visitFlag = getUuid(),
                time = new Date().getTime();
            addCookie(getCookieName("id"),visitFlag, 365*24*60*60*1000, "/");
            addCookie(getCookieName("idts"),time, 365*24*60*60*1000, "/");
            idts = time;
            idn = 1;
            if (userAccount === undefined) {
                userAccount = visitFlag;
            }
            isNewVf = true
            baseinfotypeSwitch1 ?  execReport("baseinfotype") : ""
        } else {
            idts = getCookieValue(getCookieName("idts"));
            userAccount ? "" :  userAccount = visitFlag;
        }
        isInit = true;
    }

    // 上报参数处理
    function parseParamToString(options) {
        var str = '';
        for (var i = 0; i < options.length; i++) {
            var key = options[i][0];
            var value = options[i][1];
            if (value == null) {
                value = ""
            }
            if (i > 0)
                str += "&";
            str = str + key + "=" + value;
        }
        return str;
    }

    // 上报模型处理
    function execReport (type) {
        var option = [];
        properties = {
            url: deletToken(window.location.href),
            title: title,
            at: accessTime,
            rf: deletToken(referrer)
        };

        if (type == type1) {
            properties.res = screenWidth + " X " + screenHeight;
            if (saveAccessTime != -1) {
                var time = new Date().getTime();
                properties.cwt = time;
                properties.dt = waitTime
            }
        }
        if (type == type2) {
            properties.en = eventName;
            properties.el = eventLabel;
            properties.cd = customData;
        }
        if (type == type3) {
            properties.ei = elementInfo.elementId === document ? "#document" : elementInfo.elementId;
            properties.ec = elementInfo.class;
            properties.ps = elementInfo.position;
            properties.data = elementInfo.data == undefined ? "" : elementInfo.data;
            properties.cd = customData;
        }
        option.push(["type", type])
        option.push(["vf", userAccount])
        option.push(["rt", new Date().getTime()])
        if (pattern == 0) {
            option.push(["pt", encodeURIComponent(JSON.stringify(properties))])
            var postStr = parseParamToString(option);
            onReport(postStr)
        } else {
            option.push(["pt", properties])
            var data = {
                type: option[0][1],
                vf: option[1][1],
                rt: option[2][1],
                ut: UA.type,
                cxx: CXX,
                idsite: idsite,
                suid: uid,
                idts: idts,
                idvc: idvc,
                idn: idn,
                refts: refts,
                viewts: viewts,
                hsv: HaSdkVersion,
                data: option[3][1]
            }
            var SupportOld = 'action_name=haSDKReport' + '&idsite=' + idsite  +
                '&rec=1' +
                '&r=' + "886244" +
                '&h=' + new Date().getHours() + '&m=' +  new Date().getMinutes() + '&s=' +  new Date().getSeconds() +
                '&url=' + url +
                '&_id=' + userAccount + '&_idts=' + idts + '&_idvc=' + idvc +
                '&_idn=' + idn +
                '&urlref=' + referrer +
                '&_refts=' + refts +
                '&_viewts=' + viewts +
                '&scd=' + "24" +
                '&vpr=' + screenWidth + " X " + screenHeight +
                '&pdf=' + '1' +
                '&qt=' + "0" +
                '&data=' + encodeURIComponent(JSON.stringify(data));
            onReport(SupportOld);
        }
    }

    // 上报采集信息
    function onReport (postStr) {
        var image = new Image(1, 1);
        serverUrl ? image.src = serverUrl + "?" + postStr : image.src = "";
        restoreObj()
    }

    // 还原参数
    function restoreObj() {
        properties = {};
        elementInfo = {};
        customData = {}
    }

    function getCookieValue(name) {
        var cookiePattern = new RegExp('(^|;)[ ]*' + name + '=([^;]*)'),

            cookieMatch = cookiePattern.exec(document.cookie);

        return cookieMatch ? decodeURIComponent(cookieMatch[2]) : 0;
    }

    function addCookie(cookieName, value, msToExpire, path, domain, secure) {
        var expiryDate;

        if (msToExpire) {
            expiryDate = new Date();
            expiryDate.setTime(expiryDate.getTime() + msToExpire);
        }

        document.cookie = cookieName + '=' + encodeURIComponent(value) +
            (msToExpire ? ';expires=' + expiryDate.toGMTString() : '') +
            ';path=' + (path || '/') +
            (domain ? ';domain=' + domain : '') +
            (secure ? ';secure' : '');
    }


    // 生成UUID
    function getUuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    }

    function getCookieName(baseName) {
        return configCookieNamePrefix + baseName + '.' + idsite + '.' + url_path;
    }

    // 获取当前时间
    function getNowFormatDate(date) {
        var seperator1 = "", seperator2 = "", month = date.getMonth() + 1, strDate = date.getDate(), hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if (hours >= 0 && hours <= 9) {
            hours = "0" + hours;
        }

        if (minutes >= 0 && minutes <= 9) {
            minutes = "0" + minutes;
        }
        if (seconds >= 0 && seconds <= 9) {
            seconds = "0" + seconds;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1
            + strDate + "" + hours + seperator2 + minutes + seperator2
            + seconds;
        return currentdate;
    }

    // 事件监听
    function bindclick(elid , _type, data){
        var dom = elid === document ? document : document.getElementById(elid)
        if (dom){
            /** TODO 对_type做校验，只支持一些type。？ **/
            addEventListenerHa(dom, data, elid, _type);
        }
        return this
    }

    // 事件信息处理
    function eventDealWidth(data,elid, el, e) {
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;   //height
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;      //width
        elementInfo.elementId = elid;
        elementInfo.class = el.className;
        elementInfo.data = data;
        elementInfo.position = {
            res: e.screenX + "X" + e.screenY,
            vpr: e.clientX + "X" + e.clientY,
            doc:  w + "X" + h
        }
        execReport(type3);
    }

    // 页面元素监听上报
    function addEventListenerHa(dom, data, elid, type) {
        function eventToDo(e) {
            eventDealWidth(data,elid, dom, e)
        }
        attachEventListener(dom, type, eventToDo)
    }

    // 绑定事件
    function attachEventListener(obj, e, fun) {
        obj.attachEvent ? obj.attachEvent("on" + e, fun) : obj
            .addEventListener(e, fun, false);
    }

    // beforeunload处理
    function beforeUnloadHandler() {
        var now, nowTime = new Date().getTime(), expireDateTime = nowTime + expireTime;
        stateChanged()
        addCookie(getCookieName("viewts"),nowTime, 365*24*60*60*1000, "/");
        baseinfotypeSwitch2 ? execReport("baseinfotype") : "";
        if (expireDateTime) {
            var i=0;
            do {
                now = new Date();
                i++;
                if (i>1000) break;
            } while (now.getTime() < expireDateTime);
        }
    }


})()

if (typeof module !== "undefined" && typeof module.exports === "object") {
    module.exports = _hasdk
}
