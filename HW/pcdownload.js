const downloadURL = window.location.href.split('deeplink')[0] + 'api/file/download';

//语言数据
var langData = {
    "zh-cn": {//中文
        title: "华为远程服务平台",
        serviceProcess: "远程桌面服务流程",
        step01: "1. 点击下载远程桌面服务安装包",
        step02: "2. 安装并运行远程桌面服务",
        step03: "3. 在浏览器打开的页面中输入连接码，开始远程服务",
        tip: "提示：该远程服务仅支持华为电脑，请确定您的设备为华为电脑",
        button: "下载安装包"
    },
    "en": {
        title: "HUAWEI Remote Service",
        serviceProcess: "Remote desktop service procedure",
        step01: "1. A user clicks Download installation package.",
        step02: "2. The user installs the package and opens Remote Service.",
        step03: "3. The service agent enters the received connection code in the browser web page to start the remote service.",
        tip: "Note: Only HUAWEI PCs can provide the remote service.",
        button: "Download installation package"
    },
    // 俄语
    "ru": {
        title: "Удаленное обслуживание HUAWEI",
        serviceProcess: "Процесс работы системы удаленного обслуживания",
        step01: "1. Пользователь нажимает на кнопку загрузки установочного пакета.",
        step02: "2. Пользователь устанавливает загруженный пакет и открывает систему удаленного обслуживания.",
        step03: "3. Специалист по обслуживанию вводит полученный код подключения на веб-странице браузера, чтобы начать сеанс удаленного обслуживания.",
        tip: "Примечание. Удаленное обслуживание поддерживают только компьютеры HUAWEI.",
        button: "Загрузить установочный пакет"
    },
    // 法语
    "fr": {
        title: "Service à distance HUAWEI",
        serviceProcess: "Procédure de service d'ordinateur à distance",
        step01: "1. Un utilisateur clique sur Télécharger le package d'installation.",
        step02: "2. L'utilisateur installe le package et ouvre le Service à distance.",
        step03: "3. L'agent de service entre le code de connexion reçu dans la page Web du navigateur pour démarrer le service à distance.",
        tip: "Note : seuls les PC HUAWEI peuvent utiliser le service à distance.",
        button: "Télécharger le package d'installation"
    },
    // 德语
    "de": {
        title: "HUAWEI-Remote-Service",
        serviceProcess: "Remote-Desktop-Service-Verfahren",
        step01: "1. Ein Nutzer klickt auf „Installationspaket herunterladen“.",
        step02: "2. Der Nutzer installiert das Paket und öffnet den Remote-Service.",
        step03: "3. Der Service-Mitarbeiter gibt den empfangenen Verbindungscode auf der Browser-Website ein, um den Remote-Service zu starten.",
        tip: "Hinweis: Der Remote-Service kann nur von HUAWEI-PCs bereitgestellt werden.",
        button: "Installationspaket herunterladen"
    },
    // 西班牙语
    "es": {
        title: "Servicio remoto de HUAWEI",
        serviceProcess: "Proceso de servicio de escritorio en remoto",
        step01: "1. Un usuario hace clic en Descargar paquete de instalación.",
        step02: "2. El usuario instala el paquete y abre Servicio remoto.",
        step03: "3. El agente de servicio introduce el código de conexión recibido en la página web del navegador para iniciar el servicio en remoto.",
        tip: "Nota: Solo los ordenadores HUAWEI pueden ofrecer el servicio en remoto.",
        button: "Descargar paquete de instalación"
    },
    // 意大利语
    "it": {
        title: "HUAWEI Remote Service",
        serviceProcess: "Procedura del servizio remoto del desktop",
        step01: "1. Un utente fa clic su Scarica pacchetto di installazione.",
        step02: "2. L'utente installa il pacchetto e apre Remote Service.",
        step03: "3. Il rappresentante del servizio inserisce il codice di connessione ricevuto nella pagina web del browser per avviare il servizio remoto.",
        tip: "Nota: solo i PC HUAWEI possono fornire il servizio remoto.",
        button: "Scarica il pacchetto d'installazione"
    },
    // 土耳其语
    "tr": {
        title: "HUAWEI Uzaktan Servis",
        serviceProcess: "Uzaktan masaüstü servis prosedürü",
        step01: "1. Kullanıcı, Yükleme paketini indir öğesine tıklar.",
        step02: "2. Kullanıcı paketi yükler ve Uzaktan Servis'i açar.",
        step03: "3. Servis çalışanı, uzaktan servisi başlatmak için alınan bağlantı kodunu tarayıcı web sayfasına girer.",
        tip: "Not: Uzaktan servis sadece HUAWEI bilgisayarlarda sağlanabilir.",
        button: "Yükleme paketini indir"
    }
};

// 获得参数
function getPara(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return "";
}

//更新文本内容
var defaultCode = "zh-cn";
var languageCode = getPara("lang");
if (!languageCode) languageCode = defaultCode;
var txtData = langData[languageCode];


window.onload = function () {
    document.getElementsByClassName("title")[0].innerText = txtData.title;
    document.getElementsByClassName("service-process")[0].innerText = txtData.serviceProcess;
    document.getElementsByClassName("step01")[0].innerText = txtData.step01;
    document.getElementsByClassName("step02")[0].innerText = txtData.step02;
    document.getElementsByClassName("step03")[0].innerText = txtData.step03;
    document.getElementsByClassName("tip")[0].innerText = txtData.tip;
    document.getElementsByClassName("btn_load")[0].innerText = txtData.button;
    var linkBtn = document.getElementsByClassName("btn_load")[0];
    linkBtn.addEventListener('click', function () {
        if (!linkBtn.disabled) {
            window.location.href = downloadURL;
            linkBtn.disabled = true;
            setTimeout(() => {
                linkBtn.disabled = false;
            }, 3000);
        }
    });
};