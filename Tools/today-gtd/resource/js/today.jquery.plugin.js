BootstrapDialog.DEFAULT_TEXTS['OK'] = '确定';
BootstrapDialog.DEFAULT_TEXTS['CANCEL'] = '取消';
BootstrapDialog.DEFAULT_TEXTS['CONFIRM'] = '确认';

(function($){

	$.fn.drawCircle = function(options) {  
		var radius = options.diameter / 2; 
		this.each(function(){
			var canvas = this;
			var context = canvas.getContext('2d');
			context.clearRect(0, 0, options.diameter, options.diameter);
			context.beginPath();
			context.moveTo(radius, radius);
			context.arc(radius, radius, radius, 0, Math.PI * 2, false);
			context.closePath();
			context.fillStyle = '#ddd';
			context.fill();
			context.beginPath();
			context.moveTo(radius, radius);
			context.arc(radius, radius, radius, 0, Math.PI * 2 * options.process / 100, false);
			context.closePath();
			context.fillStyle = options.color;
			context.fill();

			context.beginPath();
			context.moveTo(radius, radius);
			context.arc(radius, radius, radius-8, 0, Math.PI * 2, true);
			context.closePath();
			context.fillStyle = 'rgba(255,255,255,1)';
			context.fill();
			
			context.beginPath();
			context.arc(radius, radius, radius-13, 0, Math.PI * 2, true);
			context.closePath();
			context.strokeStyle = '#ddd';
			context.stroke();
			
			context.font = "bold 48pt Arial";
			context.fillStyle = options.color;
			context.textAlign = 'center';
			context.textBaseline = 'middle';
			context.moveTo(radius, radius);
			
			context.fillText(options.text, radius, radius);
		});
	};
	
	$.fn.expandable = function(options) {
		var jq = this;
		jq.find('.title').focus(function(){
			$(this).parents('.task-form').find('.clockpicker>input[type="text"]').val('');
			$(this).parents('.task-form').find('.form-panel').slideDown();
		});
		jq.find('.cancel').click(function(){
			$(this).parents('.task-form').find('.form-panel').slideUp();
		});

		function addTask($trigger){
			var $form = $trigger.parents('.task-form');
			new Form( $form ).save(function(){
				$form.find('.form-panel').slideUp();
				$form.find('input[name!="date"]').val('');
				$form.find('textarea').val('');
			});	
		}

		//添加任务
		jq.find('.btn-success').click(function(){
			addTask($(this));
		});
		jq.find('input[name="title"]').keydown(function(evt){
			var keyCode = (evt.keyCode ? evt.keyCode : evt.which);
			if(keyCode === 13){
				addTask($(this));
			}
		});
		return jq;
	};

	// options=[
	// 	{name:'删除',icon:'glyphicon-remove-circle',handler:function(){
	// 		//do something
	// 	}}
	// ]
	$.fn.drawer=function(options){
		var jq = $(this);
		var cls = '.drawer';
		var createDrawer = function(taskID,height){
			var layer = $('<div class="drawer"></div>').css({height:height+1});
			layer.append('<div class="trigger"><span class="glyphicon glyphicon-menu-right"></span></div>');
			$(options).each(function(idx,item){
				var $a = $('<a href="#"><span class="glyphicon '+item.icon+'"></span><br/>'+item.name+'</a>').appendTo(layer);
				$a.on('click',function(e){
					if($.isFunction(item.handler)){
						item.handler(taskID,e);
					}else{
						BootstrapDialog.show({
							title: '系统提示',
							message: '该功能尚未实现!'
						});	
					}
				});
			});
			return layer;
		}
		jq.find('.drawer-trigger').click(function(evt){
			evt.stopPropagation();
			jq.removeClass('hovered');
			$(cls).slideRightHide();
			var $item = $(this).parents('.item');
			var offset = $item.offset();
			var drawer = $item.find(cls);
			if(!drawer.get(0)){
				var taskID = $item.find('input[name="id"]').val();
				drawer = createDrawer(taskID,$item.outerHeight());
				$item.append(drawer);
			}
			$item.addClass('hovered');
			drawer.slideLeftShow(100)
		});

		jq.click(function(){
			var drawer = $(this).find(cls);
			if(drawer.css('display')!='none'){
				$(this).removeClass('hovered');
				drawer.slideRightHide();
			}
		});
	}


	$.fn.slideLeftShow = function( speed, callback ) {  
        this.animate({  
            width : "show",  
            paddingLeft : "show",  
            paddingRight : "show",  
            marginLeft : "show",  
            marginRight : "show"  
        }, speed||200, callback );  
    };  

    $.fn.slideRightHide = function( speed, callback ) {  
        this.animate({  
            width : "hide",  
            paddingLeft : "hide",  
            paddingRight : "hide",  
            marginLeft : "hide",  
            marginRight : "hide"  
        }, speed||200, callback );  
    };  

    $.fn.blink=function(options){
		var interval = options&&options.interval || 1000 ;
		var jq = this;
		setInterval(function(){jq.fadeOut('slow').fadeIn('slow'); },interval);
	}
}(jQuery));


