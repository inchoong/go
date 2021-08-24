/**
 * @type {HTMLElement}
 * @description 点赞按钮DOM对象
 */
var urlParams = url_params_fn();
var praise = document.getElementById("praise");
var Identifier = document.getElementsByName("DC.Identifier")[0];
var Identifier_content = Identifier.content;
var themeStore = {
    NOVA: {
        className: "nova"
    },
    HUAWEI: {
        className: "huawei"
    },
    HONOR: {
        className: "honor"
    }
};
var BASE_APP_VERSION = 90110302;
var emui_version = urlParams.emuiVersion;
var app_version = urlParams.appVersion;
var ui_type = "EMUI";
var ui_version = 90;
if (emui_version && emui_version.replace) {
    ui_type = emui_version.replace(/[0-9\.]/ig, "").toUpperCase();
    ui_version = parseInt(emui_version.replace(/[a-zA-Z\.]/ig, ""))
}
if (app_version && app_version.replace) {
    app_version = parseInt(app_version.replace(/\./ig, ""))
}


/**
 * @type {string}
 * @description url中的主题参数
 */
var theme = urlParams.themeType || "HUAWEI";
//主题适配
if (theme) {
    theme = theme.toUpperCase();
    if (themeStore[theme]) {
        if (praise) {
            praise.classList.add(themeStore[theme].className);
        }
    }
}

function returnMenu() {
    window.jsInterface.returnMenu();
}

function searchContent() {
    window.jsInterface.searchContent();
}

function goParent() {
    var back_href = document.getElementById("backLink");
    if (back_href) {
        if (back_href.getAttribute("href").indexOf("returnMenu") >= 0) {
            returnMenu();
        } else {
            window.location.href = back_href.getAttribute("href");
        }
    } else {
        window.history.go(-1);
    }
}

praiseClick();

function isOwnPage() {
    //306以上版本才有打点，此处判断版本号
    if (urlParams["appVersion"] && urlParams["appVersion"] != null) {
        inView();
    }
    if (urlParams["isTablet"] && urlParams["isTablet"] == "pad") {
        document.getElementById("jd-content").className = "pad";
    }

    var themeColor = window.jsInterface ?
        window.jsInterface.getSkinHexColor() :
        "#ffffff";
    if (themeColor == "ffe05a6d") {
        document.getElementsByTagName("body")[0].className = "pink";
    } else if (themeColor == "ff9e7837") {
        document.getElementsByTagName("body")[0].className = "white";
    } else if (themeColor == "ccdc7832") {
        document.getElementsByTagName("body")[0].className = "taste";
    } else if (themeColor == "ff23a7d9") {
        // 蓝色无需给body赋值
    }
    if (window.jsInterface) {
        window.jsInterface.setOwnPage();
    }
}

//点赞按钮逻辑
function praiseClick() {
    if (praise) {
        praise.classList.add(`${ui_type}${ui_version}`);
        //首次进入的时候判断是否已点赞
        var isPraised = urlParams["isPraised"] ? urlParams["isPraised"] == "1" : false;
        if (isPraised) {
            praise.classList.add("praised");
        } else {
            praise.classList.remove("praised");
        }

        //点赞按钮灰块
        praise.addEventListener("touchstart", function (e) {
            praise.classList.add("click_btn");
            e.preventDefault();
        });
        praise.addEventListener("touchend", function (e) {
            this.classList.remove("click_btn");
            this.classList.toggle("praised");
            if (this.classList.contains("praised")) {
                console.log("clickPraise:{Identifier:" + Identifier_content + "}");

            } else {
                console.log("cancelPraise:{Identifier:" + Identifier_content + "}");
            }
            e.preventDefault();
        });
        console.log("refreshPraise:{Identifier:" + Identifier_content + "}");
    }
}
//供Android调用刷新点赞状态
function refreshPraise(status) {
    if (praise) {
        if (status == "0") {
            praise.classList.remove("praised");
        } else if (status == "1") {
            praise.classList.add("praised");
        }
    }
}
//获取url上的参数
function url_params_fn() {
    var url = decodeURIComponent(location.href);
    var urlArr = url.split("?");
    var paramArr = [];
    if (urlArr[1]) {
        if (urlArr[1].indexOf("&") != -1) {
            paramArr = urlArr[1].split("&");
        } else {
            paramArr.push(urlArr[1]);
        }
    }
    var paramObj = {};
    if (paramArr.length > 0) {
        for (var i = 0; i < paramArr.length; i++) {
            paramObj[paramArr[i].split("=")[0]] = paramArr[i].split("=")[1];
        }
    }
    return paramObj;
}

//手册详情访问打点
//此方法风险须知：1、今后当详情页点赞删除或手册列表页增加点赞按钮时，打点不准确，需要重新修改打点；2、当列表页title与详情页title相同时，可能打点不准确
function inView() {
    var title = encodeURIComponent(
        document.getElementsByTagName("title")[0].innerText
    );
    if (praise) {
        if (app_version >= BASE_APP_VERSION) {
            console.log("viewManual:" + title)
        } else {
            prompt("", "viewManual:" + title);
        }
    } else {
        if (app_version >= BASE_APP_VERSION) {
            console.log("viewManualList:" + title);
        } else {
            prompt("", "viewManualList:" + title);
        }
    }
}
document.body.onload = isOwnPage;