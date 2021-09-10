;(function(w){
    var Demo=function(){
        this.terminal=null;
        this.imgroot='./img/';
        this.container=$('body');
    }
    Demo.prototype.init=function(){
        this.themingPc('demo')  
        // if(this.isMobileFun()&&$(window).width()<=1024){           
        //     this.createBody();
        // }else{            
        //     alert('--设备不适用--');
        // } 

        this.createBody();
    }
    Demo.prototype.createBody=function(){       
        this.createConBody();
    }       
    Demo.prototype.isMobileFun=function(){
        var u=window.navigator.userAgent;
        var mobile=!!u.match(/AppleWebKit.*Mobile.*/)&&!!u.match(/AppleWebKit/); 
        return mobile;
    }  
    
    //轮播图;
    Demo.prototype.createConBody=function(){
        var that=this;
        var fullpage=this.terminal.home('carousel');
        this.container.append(fullpage)  

        var tempId=setTimeout(function(){
            $('.section1').addClass('active');
        },50); 
        $('body').scroll(function(){           
            var p1=$('.section1').offset().top;
            var p2=$('.section2').offset().top;
            var p3=$('.section3').offset().top;
              
          
            if(p1>-10&&p1<=64){
                console.log('----1---');
                $('.section1').addClass('active');
                // $('.section2').removeClass('active');
                $('.section3').removeClass('active');

                $('.gou').css({'opacity':'0','transition':'all 1s'});
                $('.hui').css({'opacity':'1','transition':'all 1s'});     
                $('.huiyi,.zhibo').css({'opacity':'0','transition':'all 0s'}); 
            }else if(p2>0&&p2<400){
                console.log('----2---');
                $('.section1').removeClass('active');               
                $('.section2').addClass('active');
                $('.section3').removeClass('active');

                $('.zhibo').css('opacity','1')
                var tempId=setTimeout(function(){
                 $('.hui,.zhibo').animate({'opacity':'0'},10)
                 clearTimeout(tempId)
                },1000)  
                
                $('.gou,.huiyi').css({'opacity': '1','transition-delay':'2s'});           
                $('#zhiboBtn').click(function(){               
                     $('.gou,.huiyi').css({'opacity':'0','transition':'all 0.1s'});
                     $('.hui,.zhibo').css({'opacity':'1','transition':'all 0.1s'});
                })
                $('#huiyiBtn').click(function(){               
                     $('.gou,.huiyi').css('opacity','1');
                     $('.hui,.zhibo').css('opacity','0');
                 })

            }else if(p3>0&&p3<400){
                $('.section1').removeClass('active');               
                // $('.section2').removeClass('active');
                $('.section3').addClass('active');

                $('.gou').css({'opacity':'0','transition':'all 1s'});
                $('.hui').css({'opacity':'1','transition':'all 1s'});         
                $('.huiyi,.zhibo').css({'opacity':'0','transition':'all 0s'}); 

                $('#ctBtn').click(function(){
                    $('.ct-acitve').removeClass('ct-acitve');
                    $('.ct-item').removeClass('ct');
                    $('.ct-item').removeClass('xd');
                    $(this).addClass('ct-acitve');
                    $('.eos-1,.title-1').css({'opacity':'1','transform':'scale(1,1)','transition-delay': '0s'})
                    $('.eos-2,.title-2').css({'opacity':'0','transition-delay': '0s'})
                })
                $('#xdBtn').click(function(){
                    $('.ct-acitve').removeClass('ct-acitve');
                    $('.ct-item').removeClass('ct');
                    $('.ct-item').removeClass('xd');
                    $(this).addClass('ct-acitve');
                    $('.eos-1,.title-1').css({'opacity':'0','transform':'scale(0,0)','transition-delay': '0s'})
                    $('.eos-2,.title-2').css({'opacity':'1','transition-delay': '0s'})
                })
            }
        }) 
        this.creatWechat();
        $(".sns .weibo a").on("click", function(e) {
            e.preventDefault();
            that.openWeibo();
        });  
    }
    Demo.prototype.openWeibo=function(){
        let that=this;
        var e = encodeURIComponent(document.location.toString())
        , n = $("title").text()
        , t = encodeURIComponent(n);
        window.open("http://v.t.sina.com.cn/share/share.php?url=" + e + "&title=" + t)          
    }

    Demo.prototype.creatWechat=function(){
        var localUrl = window.location.href;       
        var num = this.getIndexOf(localUrl, "/", 3);
        var qrcodeUrl = "";
        if (localUrl.substring(num).indexOf("/m/") == 0) {
            qrcodeUrl = localUrl;
        } else if(localUrl.substring(num).indexOf("/help.html") == 0){
            qrcodeUrl = localUrl.substring(0, num)+"/m/help.html";
        }else if(localUrl.indexOf(".html") > -1){
            qrcodeUrl = localUrl.substring(0, num) + "/m" + localUrl.substring(num);
        }else {
            qrcodeUrl = localUrl;
        }
        var qrcode = new QRCode("wechat_qr",{
            text: qrcodeUrl,
            width: 145,
            height: 145,
        });
        console.log(qrcode);

        $(".sns .wechat a").on("click", function(e) {            
            e.preventDefault();
            e.stopPropagation();
            var n = $(this).next(".popup_wechat");
            if(!n.hasClass('open')){
                n.addClass("open");    
                $(document).on("click", function(e) {
                    e.preventDefault();
                    $(this).off("click");
                    n.removeClass("open");
                });
            }
        });
    }

    Demo.prototype.getIndexOf=function(str, c, n) {
        var x = str.indexOf(c);
        for (var i = 0; i < n - 1; i++) {
            x = str.indexOf(c, x + 1);
        }
        return x;
    };
    Demo.prototype.pageload=function(anchorLink,index){
        console.log(index);
        if(index==1){            
            // $('.hui').css('opacity','1');
            // $('.gou').css('opacity','1');
            $('.gou').css({'opacity':'0','transition':'all 1s'});
            $('.hui').css({'opacity':'1','transition':'all 1s'});     
            $('.huiyi,.zhibo').css({'opacity':'0','transition':'all 0s'}); 
        }else if(index==2){
            $('.zhibo').css('opacity','1')
           var tempId=setTimeout(function(){
            $('.hui,.zhibo').animate({'opacity':'0'},100)
            clearTimeout(tempId)
           },2500)  
           
           $('.gou,.huiyi').css({'opacity': '1','transition-delay':'2.5s'});           
           $('#zhiboBtn').click(function(){               
                $('.gou,.huiyi').css({'opacity':'0','transition':'all 0.1s'});
                $('.hui,.zhibo').css({'opacity':'1','transition':'all 0.1s'});
           })
           $('#huiyiBtn').click(function(){               
                $('.gou,.huiyi').css('opacity','1');
                $('.hui,.zhibo').css('opacity','0');
            })
           
       }else if(index==3){  
            $('.gou').css({'opacity':'0','transition':'all 1s'});
            $('.hui').css({'opacity':'1','transition':'all 1s'});         
            $('.huiyi,.zhibo').css({'opacity':'0','transition':'all 0s'}); 
       }
    }
    Demo.prototype.themingPc=function(style){
        this.terminal = new Template[style].pc();
    }; 
    w.Demo=Demo;
})(window)