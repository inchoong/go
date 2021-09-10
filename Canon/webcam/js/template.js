var Template={
    demo:{
        pc:function(){},
        ipad:function(){},
        phone:function(){},
        mipro:function(){}
    }
}
/**
 * pc
 * @param {tring} type 
 * @param {object} data 
 */ 
Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.toString();
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});
/**
 * 
 * 
 * 
 */
Template.demo.pc.prototype.home=function(type,data){
    var htmlStr='';
    var root='./img/'
    switch(type){
        case 'header-con':
            htmlStr = '<div class="header-con">'+
                        '<div class="w-warpper">'+
                            '<div id="navCon"></div>'+
                            '<div id="swiperCon"></div>'+
                        '</div>'+
                      '</div>';
            break;
        case 'nav':
            htmlStr = '<div class="nav-con">'+
                        '<img src="{{src}}">'+
                      '</div>';
            break;        
        case 'body-con':
            htmlStr = '<div class="con-body">'+
                        '<div class="w-warpper" id="conBody" style="padding-bottom:30px;"></div>'+
                      '</div>';
            break;          
        case 'carousel':
            htmlStr = '<div id="fullPage">'+  
                            '<div class="logo-con"><div class="wrapper"><span class="item-con-logo left fl"><a href="//www.canon.com.cn/" target="_blank"><img src="./img/logo_left.svg"></a></span><span class="item-con-logo right fr"><img src="./img/logo_right.svg"></span></div></div>'+   
                            '<div class="section section0">'+ 
                            '</div>'+                  
                            '<div class="section section1">'+
                                '<div class="con-1">'+
                                    '<span class="img-con-light"><span class="light"><img src='+root+'s1/light.png></span></span>'+
                                    '<div class="text-con" id="textA">'+
                                        '<p class="big-title">佳能EOS Webcam Utility直播软件</p>'+
                                        '<p class="title">让<span class="show">网络直播/视频会议</span>画质更出色</p>'+
                                        '<div class="m-tag des"><img src="'+root+'m-tag.png"></div>'+
                                        '<p class="des">在网络直播日益兴起，视频会议通讯设备需求旺盛的同时，用户对于视频画质也提出更高要求。</p>'+
                                        '<p class="des">EOS Webcam Utility是佳能开发的一款简单易用的直播软件，<br/>通过该软件，用户只需一根USB连接线将相机与macOS/Windows系统电脑进行连接，即可呈现出清晰画质，<br/>无需购买和安装额外的视频采集卡等设备。</p>'+                                       
                                        '<p class="des">在不同的应用场景下，通过调整相机镜头或参数，可以灵活地实现理想的画面效果。</p>'+
                                        '<p class="des">直播的同时按下相机的视频录制按钮，便可将高质量视频文件直接存储在相机存储卡上。</p>'+
                                        // '<p class="des">直播的同时按下相机上的视频录制按钮，还能对视频内容进行机内录制。</p>'+
                                        '<p class="des">EOS Webcam Utility具有与主流网络直播及视频会议平台良好的兼容性，<br/>让用户能轻松享受到软件带来的便利。</p>'+
                                        '<span class="img-con"><img src='+root+'s1/pc.png></span>'+
                                    '</div>'+
                                    '<span class="guang-gao">广告</span>'+
                                    '<div class="guanggao-con" id="tagPc">'+
                                        '<img src="'+root+'tag.png">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="section section2">'+
                                '<div class="con-2">'+
                                    '<div class="tag-con">'+
                                        '<div class="zhibo-huiyi yuan">'+
                                            '<span class="item"><img src="'+root+'s2/zhibo_1.png"></span>'+
                                            '<span class="item"><img src="'+root+'s2/huiyi_1.png"></span>'+
                                        '</div>'+
                                        '<div class="zhibo-huiyi zhibo">'+
                                            '<span class="item"><img src="'+root+'s2/zhibo_2.png"></span>'+
                                            '<span class="item"><img src="'+root+'s2/huiyi_1.png"></span>'+
                                        '</div>'+
                                        '<div class="zhibo-huiyi huiyi">'+
                                            '<span class="item"><img src="'+root+'s2/zhibo_1.png"></span>'+
                                            '<span class="item"><img src="'+root+'s2/huiyi_2.png"></span>'+
                                        '</div>'+
                                        '<div class="zhibo-huiyi btn-con-zhi">'+
                                            '<span class="item" id="zhiboBtn"><img src="'+root+'s2/zhibo_1.png"></span>'+
                                            '<span class="item" id="huiyiBtn"><img src="'+root+'s2/huiyi_2.png"></span>'+
                                        '</div>'+
                                    '</div>'+    
                                    '<div class="des-con"><p>EOS Webcam Utility直播软件充分发挥佳能相机和镜头的优势，使直播/视频会议的画质大幅提升，<br/> 为用户带来了高清晰度的视觉体验。</p></div>'+        
                                    '<div class="big-con">'+
                                        '<div class="pc-con hui"><img src="'+root+'s2/big_1.png"></div>'+
                                        '<div class="pc-con gou"><img src="'+root+'s2/big_2.png"></div>'+
                                    '</div>'+
                                    '<div class="desk-jing desk-con">'+
                                        '<img src="'+root+'s2/desk.png">'+
                                        '<div class="beforend-con zhibo">'+                                            
                                            '<span class="small-img cam"><img src="'+root+'s2/cam_1.png"></span>'+
                                            '<span class="small-img pc"><img src="'+root+'s2/pc_1.png"></span>'+
                                        '</div>'+
                                        '<div class="beforend-con huiyi">'+                                            
                                            '<span class="small-img cam"><img src="'+root+'s2/cam_2.png"></span>'+
                                            '<span class="small-img pc"><img src="'+root+'s2/pc_2.png"></span>'+
                                        '</div>'+
                                    '</div>'+   
                                '</div>'+
                            '</div>'+
                            '<div class="section section3">'+
                                '<div class="con-3">'+
                                    '<div class="up-con">'+
                                        '<span class="up-con-title title-1">传统直播流程</span>'+
                                        '<span class="up-con-title title-2">使用<i style="font-weight:500;font-style:normal">EOS Webcam Utility</i>直播流程</span>'+
                                        '<span class="slec-con-up eos-1">'+
                                            '<span class="slec-item item-anima1"><span class="img"><img src="'+root+'s3/up-cam.png"></span></span>'+
                                            '<span class="slec-item item-anima2"><span class="icon">+</span></span>'+
                                            '<span class="slec-item item-anima3"><span class="img"><img src="'+root+'s3/up-HDMI.png"></span></span>'+
                                            '<span class="slec-item item-anima4"><span class="icon">+</span></span>'+
                                            '<span class="slec-item item-anima5"><span class="img"><img src="'+root+'s3/up-videocard.png"></span></span>'+
                                            '<span class="slec-item item-anima6"><span class="icon">+</span></span>'+
                                            '<span class="slec-item item-anima7"><span class="img"><img src="'+root+'s3/up-pc.png"></span></span>'+ 
                                            '<div class="con-tip">传统直播需要额外购置视频采集卡和HDMI数据连接线，连接过程复杂繁琐、线路杂乱。</div>'+                                           
                                        '</span>'+
                                        '<span class="slec-con-up eos-2">'+  
                                            '<div class="text">'+                                         
                                                '<span class="slec-item item-anima1-es"><span class="img"><img src="'+root+'s3/up-cam.png"></span></span>'+
                                                '<span class="slec-item item-anima2-es"><span class="icon">+</span></span>'+
                                                '<span class="slec-item item-anima3-es"><span class="img"><img src="'+root+'s3/up-USB.png"></span></span>'+
                                                '<span class="slec-item item-anima4-es"><span class="icon">+</span></span>'+                                           
                                                '<span class="slec-item item-anima5-es"><span class="img"><img src="'+root+'s3/up-pc.png"></span></span>'+ 
                                            '</div>'+
                                            '<div class="con-tip">使用EOS Webcam Utility直播软件可以简化设备连接、免除或降低采购成本、提升画面质量。</div>'+                                         
                                        '</span>'+
                                        '<div class="qie-con">'+
                                            '<span class="ct-item ct" id="ctBtn"></span>'+
                                            '<span class="ct-item xd" id="xdBtn"></span>'+
                                        '</div>'+
                                    '</div>'+
                                   
                                    '<div class="down-con">'+
                                        '<span class="down-con-title"><i style="font-weight:500">EOS Webcam Utility</i> 如何使用</span>'+
                                        '<span class="bottom-line"></span>'+
                                        '<span class="slec-con-bottom">'+
                                            '<span class="slec-item-down">'+
                                                '<span class="img"><img src="'+root+'s3/down-2.jpg"></span>'+
                                                '<span class="title">使用USB数据线连接<br/>相机和计算机</span>'+
                                            '</span>'+ 
                                            '<span class="slec-item-down">'+
                                                '<span class="img"><img src="'+root+'s3/down-1.jpg"></span>'+
                                                '<span class="title">打开相机选择视频模式<br/><i style="font-size:12px;">*如需机内录制，<br/>请按下相机视频录制按钮</i></span>'+
                                            '</span>'+                                
                                            '<span class="slec-item-down">'+
                                                '<span class="img"><img src="'+root+'s3/down-3.jpg"></span>'+
                                                '<span class="title">在计算机上打开<br/>网络直播/视频会议软件</span>'+
                                            '</span>'+                                           
                                            '<span class="slec-item-down">'+
                                                '<span class="img"><img src="'+root+'s3/down-4.jpg"></span>'+
                                                '<span class="title">设置视频信号来源<br/>选择EOS Webcam Utility</span>'+
                                            '</span>'+                                            
                                        '</span>'+
                                        '<div class="text-con-3">'+
                                            '<span class="text-left"><span class="text">计算机系统要求</span></span>'+
                                            '<span class="text-right up">'+
                                                '<p><i>●</i><span class="text">Windows10系统(64位、32位)</span></p>'+
                                                '<p><i>●</i><span class="text">Intel Pentium 1.6GHz或更快的CPU处理器</span></p>'+
                                                '<p><i>●</i><span class="text">内存2GB或更大<br/></span></p>'+
                                                '<p><i>●</i><span class="text">显示屏分辨率为1024×768像素或更高</span></p>'+
                                                '<p><i>●</i><span class="text">屏幕颜色Medium(16位)或更高</span></p>'+
                                            '</span>'+
                                            '<span class="text-right down">'+
                                                '<p style="float:left"><i>●</i><span class="text">macOS系统：10.15(Catalina)、10.14(Mojave)、10.13(High Sierra) </span></p>'+
                                                '<p style="float:left"><i>●</i><span class="text">Intel Processors的CPU处理器</span></p>'+
                                                '<p><i>●</i><span class="text">内存2GB或更大<br/></span></p>'+
                                                '<p><i>●</i><span class="text">显示屏分辨率为1024×768像素或更高</span></p>'+
                                                '<p><i>●</i><span class="text">屏幕颜色32,000或更高</span></p>'+
                                            '</span>'+
                                        '</div>'+
                                        // '<div class="text-bottom-3">*可支持苹果Macintosh系统的EOS Webcam Utility软件正式版在开发中，敬请期待。</div>'+
                                        
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="section section4">'+
                                '<div class="con-4">'+
                                    '<div class="up-con">'+
                                        '<span class="up-con-title">适用机型</span>'+
                                        '<span class="up-type-con">'+
                                            '<span class="item-con">'+
                                                '<span class="title">EOS 单反相机</span>'+
                                                '<span class="type-con">'+
                                                    // '<span class="row he">'+
                                                    //     '<span class="coll">EOS-1D X Mark III</span>'+
                                                    //     '<span class="coll">EOS-1D X Mark II</span>'+
                                                    //     '<span class="coll">EOS-1D X</span>'+
                                                    //     '<span class="coll">EOS-1D C</span>'+
                                                    //     '<span class="coll">EOS 5DS R</span>'+
                                                    //     '<span class="coll">EOS 5DS</span>'+                                                       
                                                    // '</span>'+
                                                    // '<span class="row he">'+
                                                    //     '<span class="coll">EOS 5D Mark IV</span>'+
                                                    //     '<span class="coll">EOS 5D Mark III</span>'+
                                                    //     '<span class="coll">EOS 6D Mark II *</span>'+
                                                    //     '<span class="coll">EOS 6D</span>'+
                                                    //     '<span class="coll">EOS 7D Mark II</span>'+                                                                                                         
                                                    // '</span>'+
                                                    // '<span class="row">'+
                                                    //     '<span class="coll">EOS 7D</span>'+
                                                    //     '<span class="coll">EEOS 90D *</span>'+
                                                    //     '<span class="coll">EOS 80D *</span>'+
                                                    //     '<span class="coll">EOS 77D *</span>'+
                                                    //     '<span class="coll">EOS 70D</span>'+                                                                                                         
                                                    // '</span>'+
                                                    // '<span class="row">'+
                                                    //     '<span class="coll">EOS 60D</span>'+
                                                    //     '<span class="coll">EOS 850D *</span>'+
                                                    //     '<span class="coll">EOS 800D *</span>'+
                                                    //     '<span class="coll">EOS 760D</span>'+
                                                    //     '<span class="coll">EOS 750D</span>'+                                                                                                         
                                                    // '</span>'+
                                                    // '<span class="row">'+
                                                    //     '<span class="coll">EOS 700D</span>'+
                                                    //     '<span class="coll">EOS 600D</span>'+
                                                    //     '<span class="coll">EOS 200DII *</span>'+
                                                    //     '<span class="coll">EOS 200D *</span>'+
                                                    //     '<span class="coll">EOS 100D</span>'+                                                                                                         
                                                    // '</span>'+
                                                    // '<span class="row">'+
                                                    //     '<span class="coll">EOS 1500D *</span>'+
                                                    //     '<span class="coll">EOS 1300D</span>'+
                                                    //     '<span class="coll">EOS 1200D</span>'+
                                                    //     '<span class="coll">EOS 1100D</span>'+
                                                    //     '<span class="coll">EOS 3000D *</span>'+                                                                                                         
                                                    // '</span>'+


                                                    '<span class="row">'+
                                                        '<span class="coll">EOS-1D X Mark III</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS-1D X Mark II</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS-1D X</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS-1D C</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 5DS R</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 5DS</span>'+
                                                   '</span>'+


                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 5D Mark IV</span>'+
                                                   '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 5D Mark III</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 6D Mark II*</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 6D</span>'+
                                                   '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 7D Mark II</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 7D</span>'+
                                                    '</span>'+


                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 90D*</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 80D*</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 77D*</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 70D</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 60D</span>'+
                                                     '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 850D*</span>'+
                                                    '</span>'+


                                                    '<span class="row">'+
                                                       '<span class="coll">EOS 800D*</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 760D</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 750D</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                         '<span class="coll">EOS 700D</span>'+
                                                   '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 600D</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 200D II*</span>'+
                                                     '</span>'+


                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 200D*</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 100D</span>'+                                                                                                         
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 1500D*</span>'+                                                                                                         
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 1300D</span>'+                                                                                                         
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 1200D</span>'+                                                                                                         
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS 1100D</span>'+                                                                                                         
                                                    '</span>'+


                                                    '<span class="row">'+
                                                       '<span class="coll">EOS 3000D*</span>'+                                                       
                                                    '</span>'+
                                                '</span>'+
                                            '</span>'+


                                            '<span class="item-con">'+
                                                '<span class="title">EOS 微单相机</span>'+
                                                '<span class="type-con">'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS R5</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS R6*</span>'+
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS Ra**</span>'+  
                                                   '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS R</span>'+                                                                                                                                                          
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS RP*</span>'+                                                                                                                                                            
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS M6 Mark II*</span>'+                                                                                                                                                          
                                                    '</span>'+


                                                    '<span class="row">'+
                                                        '<span class="coll">EOS M50 Mark II*</span>'+                                                                                                            
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS M50*</span>'+                                                                                                                                                         
                                                    '</span>'+
                                                    '<span class="row">'+
                                                        '<span class="coll">EOS M200*</span>'+                                                                                                                                                             
                                                    '</span>'+
                                                '</span>'+
                                            '</span>'+
                                            '<span class="item-con">'+
                                                '<span class="title">小型数码照相机</span>'+
                                                '<span class="type-con">'+
                                                    '<span class="row block">'+
                                                        '<span class="coll" style="width:200px">PowerShot G5 X Mark II*</span>'+                                                                                                                                                                 
                                                    '</span>'+
                                                    '<span class="row block">'+
                                                        '<span class="coll" style="width:200px">PowerShot G7 X Mark III*</span>'+                                                                                                                                                                                                          
                                                    '</span>'+
                                                    '<span class="row block">'+
                                                        '<span class="coll" style="width:200px">Powershot SX70 HS*</span>'+                                                                                                                                                           
                                                    '</span>'+                                                   
                                                '</span>'+
                                                '<span style="display:inline-block;float:right;font-size:14px;margin-top:30px;text-align:right;color:#666;">*相机不附带USB接口连接线&nbsp;&nbsp;**该机型中国未销售</span>'+
                                            '</span>'+
                                        '</span>'+
                                    '</div>'+
                                    '<div class="down-con">'+
                                        '<p><i>●</i><span class="text-1">在使用EOS Webcam Utility之前，请先打开相机电源，并将相机设置为“短片拍摄”模式。</span></p>'+
                                        '<p><span class="text-1 no-dot">*推荐设置为全高清分辨率，29.97P(30P)帧速率。如果相机没有29.97P(30P)选项，也可以选择23.98P(24P)。</span></p>'+
                                        '<p><i>●</i><span class="text-1">打开您的网络直播/视频会议软件，找到 [音频/视频设置] 菜单将“EOS Webcam Utility”设置为视频信号来源；</span></p>'+
                                        '<p><span class="text-1 no-dot">并将计算机内置或外接麦克风设置为音频来源(EOS Webcam Utility无音频功能)。</span></p>'+
                                        '<p><i>●</i><span class="text-1">机内录制时长受相机规格限制。</span></p>'+
                                        '<p><i>●</i><span class="text-1">PowerShot G5 X Mark II/G7 X Mark III使用直播软件时，可通过一根双type C的USB数据线实现在直播的同时为相机供电。</p>'+                                      
                                        '<p><span class="text-1 no-dot">*操作时需将相机内电池取出。双type C数据线及电脑端type C接口（5V/3A或以上）均需支持PD协议。</span></p>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+ 
                            '<div class="section section5">'+
                                '<div class="con-5">'+                                   
                                    '<div class="con-mid-5">'+
                                        '<span class="down-con-title md-title-5"><i style="font-weight:500;">EOS Webcam Utility</i> 如何下载</span>'+
                                        '<span class="bottom-line" style="background-color:#e60021"></span>'+
                                        '<div class="wrapper">'+
                                            '<span class="win-item">'+
                                                '<span class="img"><img src="'+root+'s5/p2.png"></span>'+
                                                '<span class="title">1. 点击下载按钮进入服务与支持页面</span>'+
                                            '</span>'+
                                            '<span class="win-item">'+
                                                '<span class="img"><img src="'+root+'s5/p1.png"></span>'+
                                                '<span class="title">2. 输入相机型号，选择应用软件</span>'+
                                            '</span>'+
                                            '<span class="win-item">'+
                                                '<span class="img"><img src="'+root+'s5/p3.png"></span>'+
                                                '<span class="title">3. 根据计算机系统，选择对应软件下载</span>'+
                                            '</span>'+                                            
                                        '</div>'+
                                    '</div>'+
                                    '<div class="btn-con"><span class="btn"><a target="_blank" href="https://www.canon.com.cn/supports/download/sims/search/index"><img src="'+root+'s4/btn.png"></a></span></div>'+
                                '</div>'+   
                            '</div>'+
                            '<div class="container-bottom footer">'+
                                '<span>佳能（中国）有限公司版权所有，未经许可不得转载。</span>'+
                                '<a href="http://beian.miit.gov.cn/" target="_blank">京ICP备05038060号-1 &nbsp</a>'+
                                '<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502037877" target="_blank"><img src="./img/gongan.png" class="gongan">京公网安备 11010502037877号</a>'+
                                '<div class="sns">'+
                                    '<div class="title">分享：</div>'+
                                    '<div class="wechat icon">'+
                                        '<a href="javascript:void(0)">'+
                                            '<img src="./img/wechat_btn.png">'+
                                        '</a>'+
                                        '<div class="popup_wechat">'+
                                            '<h3>分享到微信朋友圈</h3>'+
                                            '<p class="wechat_qr" id="wechat_qr"></p>'+
                                            '<p style="margin-top:5px;">打开微信，点击底部的“发现”，<br>使用“扫一扫”<br>即可将网页分享至朋友圈。</p>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="weibo icon">'+
                                        '<a href="javascript:void(0)"><img src="./img/weibo_btn.png"></a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                       '</div>';
            break;         
    }
    return $(Handlebars.compile(htmlStr)(data));
}