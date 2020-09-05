
function Form($form){
	var inst = this;
	this.toTask = function(){
		var inputVal = function(name){
			return $.trim($form.find('input[name="'+name+'"]').val());
		}
		var task = new Task();
		task.properties.title = inputVal('title');
		task.properties.date= inputVal('date');
		task.properties.startAt=inputVal('startAt');
		task.properties.endAt=inputVal('endAt');
		task.properties.memo=$form.find('textarea[name="memo"]').val();
		if( $form.find('input[name="id"]').get(0) ){
			task.properties.id = parseInt( $form.find('input[name="id"]').val() );
		}
		return task;
	};

	this.reset = function(){
		$form.find('input[name="id"]').val('');
		$form.find('input[name="title"]').val('');
		$form.find('input[name="startAt"]').val('');
		$form.find('input[name="endAt"]').val('');
		$form.find('textarea[name="memo"]').val('');
	}

	this.save=function(callback){
		var task = this.toTask();
		Task.save(task.properties,function(){
			if($.isFunction(callback)){
				callback(inst);
			}
		});
	};
	return this;
}

function $icon(name, additionalCls){
	var cls = additionalCls || [];
	if(typeof(cls)==='string'){
		cls=[cls];
	}
	return $('<span class="glyphicon '+name+' '+cls.join(' ')+'"></span>')
}

function Todo($todo){
	var inst = this;
	inst.$todo = $todo;
	var todoList = new TodoList($todo.parents('.todo-list'));

	this.getID=function(){
		return parseInt( $todo.find('input[name="id"]').val());
	};

	this.toTask=function(){
		var result =  {
			title : $.trim($todo.find('.title').text()),
			startAt : $.trim($todo.find('.start-at').text()),
			endAt : $.trim($todo.find('.end-at').text()),
			memo : $.trim($todo.next('.memo:not(.empty-memo)').text()),
			date: $todo.find('input[name="date"]').val()
		}
		if($todo.find('input[name="id"]').get(0)){
			result["id"]= inst.getID();
		}
		return new Task(result);
	};

	this.markAsOverdue=function(){
		$todo.addClass('overdue');
	};
	this.removeOverdueMark=function(){
		$todo.removeClass('overdue');
	}

	this.onStart=function(){
		todoList.clearOngingIndicator();
		todoList.queryTodo().removeClass('ongoing');
		$todo.addClass('ongoing');
		var indicator =$icon('glyphicon-play-circle','indicator').appendTo($todo.find('.info'));
		indicator.blink();
		console.dir('TaskID='+inst.getID());
		Storage.save(inst.getID(),Const.RUNING_TASK_ID);
		return $todo;
	};
	this.onAppend=function(){
		$todo.on('click',function(){
			var $memo = $(this).next('.memo');
			var $drawer = $(this).find('.drawer');
			if( $drawer.get(0) && $drawer.css('display')!=='none')return;
			if($memo.css('display')==='none'){
				$memo.slideDown();
			}else{
				$memo.slideUp();
			}
		});
		return $todo;
	};

	this.onComplete=function(){
		$todo.removeClass('ongoing');
		$todo.find('.indicator').remove();
		$todo.find('.tomatos').append($icon('glyphicon-time'));
		Storage.remove(Const.RUNING_TASK_ID);
		return $todo;
	};
	this.go=function(){
		var taskID = inst.getID();
		if(!Clock.isActiveTask(taskID)){
			Storage.remove(Const.COUNTER);
		}
		inst.onStart();
		var clock = Clock(Const.CLK.WORK.ID);
		clock.start(function(){
			inst.onComplete();
			Task.plusTomato(taskID,function(){
				Tomato.save({
					taskID:taskID,
					date:moment().format('YYYY-MM-DD'),
					time:moment().format('YYYY-MM-DD H:mm:ss'),
					duration: Const.CLK.WORK.DURATION
				},function(){
					Summary();
				});
			});
			Clock(Const.CLK.BREAK.ID).start(function(){
				clock.reset();
			});
		});
	};
	return this;
}

function Summary(){
	Tomato.query('date',
		moment().format('YYYY-MM-DD'),
		function(tomatos){

			var _tomatos = tomatos || [];
			var duration=0;
			$(tomatos).each(function(idx,tomato){
				duration += tomato.duration;
			});
			$('#total-tomatos').text(_tomatos.length);
			$('#total-duration').text($.duration(duration));

			isBetween = function(time,zone){
				var leftBorder = moment({hour:zone*2});
				var rightBorder = moment({hour: (zone+1)*2});
				return time.isBetween(leftBorder,rightBorder);
			}
			count = function(zone){
				var result=0;
				$(tomatos).each(function(idx,tomato){
					if(isBetween(moment(tomato.time),i)){
						result+=1;
					}
				});
				return result;
			}
			data=[]
			for(var i=0;i<12;i++){
				data[i]=count(i);
			}
			new Chart($('#myChart').get(0).getContext("2d")).Bar({
				labels : ["0~2","2~4","4~6","6~8","8~10","10~12","12~14","14~16","16~18","18~20","20~22","22~24"],
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.8)",
						strokeColor : "rgba(220,220,220,0.8)",
						data : data
					}
				]},
				{
					scaleShowVerticalLines: false,
					tooltipFillColor:'#e74c3c',
					tooltipTemplate: "<%= value %>个番茄钟",
				}
			);
		}
	);
}

function Sound(type){
	var audio = null;
	if(type==='work'){
		audio = $('#audio-work-complete').get(0);
	}else if(type==='break'){
		audio = $('#audio-break-complete').get(0);
	}
	return audio;
}

function Monitor(type){
	var killDaemon = function(){
		if(Monitor.daemon){
			clearInterval(Monitor.daemon);
		}
	}
	var daemon = function(){
		killDaemon();
		throw 'Invalid Monitor Type : '+type;
	}

	if(type === 'overdue'){
		daemon = function(interval){
			var $items = $('#today').find('.item:not(.done)');
			var hasOverdue = false;
			Monitor.daemon = setInterval(function(){
				$items.each(function(idx,item){
					var todo = new Todo($(item));
					if( todo.toTask().isOverdue()){
						todo.markAsOverdue();
					}else{
						todo.removeOverdueMark();
					}
				});
			}, interval || 10000);
		}
	}

	this.start=function(interval){
		killDaemon();
		daemon(interval)
	};
	return this;
}

Todo.HTML=function(task){
	var cls = new Task(task).isOverdue()?' overdue':'';
	cls = task.isCompleted?' done':cls;
	var title = task.title.replace(/#[^\s]*[\s]*/g, '<span class="badge tag">$&</span>');
	var tomatos = '';
	if(task.tomatos > 0){
		for(var i=0;i<task.tomatos;i++){
			tomatos += '<span class="glyphicon glyphicon-time"></span>';
		}
	}
	var template = '<div class="item '+cls+'" id="task-'+task.id+'">'+
		'<div class="layer1">'+
		'<input type="hidden" name="id" value="'+task.id+'"/>'+
		'<input type="hidden" name="date" value="'+task.date+'"/>'+
		'<div class="title">'+title+'</div>'+
		'<div class="info">';
	if(!$.isEmpty(task.startAt) || !$.isEmpty(task.endAt)){
		template+='<span class="duration"><span class="start-at">'+task.startAt+'</span>~<span class="end-at">'+task.endAt+'</span></span>';
	}else{
		template+='<span class="duration" style="margin:0;"></span>';
	}
	template+='<span class="tomatos">'+tomatos+'</span>'+
	'<div class="drawer-trigger" title="展开操作按钮"><span class="glyphicon glyphicon-menu-left" ></span></div>'+
	'</div>'+
	'</div>'+
	'</div>'+
	'<div class="memo '+( $.isEmpty(task.memo)?'empty-memo':'')+'">'+
	'<em></em>'+
	'<span></span>'+
	( $.isEmpty(task.memo)?'无备注':task.memo)+
	'</div>';
	return template;
}



function TodoList($obj){
	var inst = this;

	this.clearOngingIndicator=function(){
		 $obj.find('.indicator').remove();
	}

	this.queryTodo=function(){
		return $obj.find('.item:not(.done)');
	};
	this.queryDone=function(){
		return $obj.find('.done');
	};

	this.noTaskToday=function(){
		$obj.find('.todo-list').html('<div class="no-task">'+
			'你今天什么都不做吗 ？'+
			'<div>'+
			'<img src="resource/image/Minion.jpg"/>'+
			'</div>'+
			'</div>');
	}

	function editTask($trigger){
		var todo = new Todo( $trigger.parents('.item') );
		var dialog = BootstrapDialog.show({
			title: '编辑任务',
			message: $($( "#task-edit-panel" ).html()),
			onshown:function(){
				$('.clockpicker').clockpicker();
				var properties = todo.toTask().properties;
				var $panel = $('.bootstrap-dialog-message');
				$panel.find('input[name="id"]').val(properties.id);
				$panel.find('input[name="title"]').val(properties.title);
				$panel.find('input[name="startAt"]').val(properties.startAt);
				$panel.find('input[name="endAt"]').val(properties.endAt);
				$panel.find('input[name="date"]').val(properties.date);
				$panel.find('textarea').val(properties.memo);
			},
			buttons: [{
				label: '保存任务',
				cssClass: 'btn-success',
				action: function(dialogRef){
					new Form($('.bootstrap-dialog-message').find('.task-form')).save(function(form){
						form.reset();
					});
					dialog.close();
                }
            }, {
			label: '取消',
				cssClass: 'btn',
				action: function(dialogRef){
					dialog.close();
				}
			}]
		});	
	}


	function drawerTodo($trigger){
		var actions=[
			{name:'删除',icon:'glyphicon-remove-circle',handler:function(taskID,evt){
				var cs = new ClockState(Const.CLK.WORK.ID);
				if(cs.isActive() && cs.getRunningTaskID() === taskID){
					BootstrapDialog.confirm('该任务正在进行中，是终止番茄钟并删除任务?',function(result){
						if(result){
							Task.delete(taskID,function(){
								Clock(Const.CLK.WORK.ID).reset();
							});
						}
					});
				}else{
					Task.delete(taskID);
				}
				
			}},
			{name:'完成',icon:'glyphicon-ok',handler:function(taskID,evt){
				Task.complete(taskID,function(){
					if( new ClockState(Const.CLK.WORK.ID).getRunningTaskID() === taskID ){
						Clock(Const.CLK.WORK.ID).reset();
					};
				});
			}},
			{name:'编辑',icon:'glyphicon-edit',handler:function(taskId,evt){
				editTask($(evt.currentTarget));
			}},
			{name:'启动',icon:'glyphicon-play',handler:function(taskID,evt){
				var todo = new Todo( $(evt.target).parents('.item'));
				if(new ClockState(Const.CLK.WORK.ID).isActive()){
					BootstrapDialog.confirm('一个任务正在进行中，是否终止当前任务启动新任务?',function(result){
						if(result){
							todo.go();
						}
					});
				}else{
					todo.go();
				}
			}}
		];
		$trigger.find('.item:not(.done)').drawer(actions);
	};

	function drawerDone($trigger){
		var actions = [
			{name:'删除',icon:'glyphicon-remove-circle',handler:function(taskID,evt){
				Task.delete(taskID);
			}},
			{name:'恢复',icon:'glyphicon-chevron-up',handler:function(taskID,evt){
				Task.restore(taskID);
			}},
		];
		$trigger.find('.item[class*="done"]').drawer(actions);
	};

	function drawerTomorrowTodo($trigger){
		var actions=[
			{name:'删除',icon:'glyphicon-remove-circle',handler:function(taskID,evt){
				Task.delete(taskID);
			}},
			{name:'编辑',icon:'glyphicon-edit',handler:function(taskID,evt){
				editTask($(evt.currentTarget));
			}},
		];
		$trigger.find('.item').drawer(actions);
	}

	this.load = function(dt,clear,callback){
		dt = typeof(dt) === 'string'? dt:dt.format();
		var day = new Day(dt);
		day.getTasks(function(dataArray){
			day.refreshStatistic(dataArray);
			if(dataArray !== null && dataArray.length > 0 ){
				if(clear)$obj.html('');
				dataArray.sort(Task.cmp);
				for(i in dataArray){
					inst.addTask(dataArray[i]);
				}
				if(day.isToday()){
					drawerTodo($obj);
					drawerDone($obj);
					Monitor('overdue').start();
				}else{
					drawerTomorrowTodo($obj);
				}
				var todo = new Todo($obj.find('.item'));
				todo.onAppend();
			}else{
				if(day.isToday()){
					new TodoList($('#today')).noTaskToday();
				}else{
					if(clear)$obj.html('');
				}
			}
			if($.isFunction(callback)){
				callback(dataArray);
			}
		});
	};

	this.reload=function(dt,callback){
		inst.load(dt,true,callback);
	};

	this.addTask = function(properties){
		return $( Todo.HTML(properties) ).appendTo($obj);
	};

	return this;
};

function Day(dt){

	var instance = this;
	var date = typeof(dt) === 'string' ? dt : dt.format();

	this.isToday = function(){
		return date === new Date().format();
	};

	this.refreshStatistic=function(dataArray){
		var statistic = function(objects, criteria){
			var result = {};
			$(objects).each(function(idx,obj){
				for(key in criteria){
					var fn = criteria[key];
					if(fn(obj)){
						result[key] = result[key] ? result[key]+1 : 1;
					}else{
						result[key] = result[key]||0;
					}
				}
			});
			return result;
		};
		var stat = statistic(dataArray,{
			total:function(obj){return true;},
			done:function(obj){console.dir(obj);return obj.isCompleted;}
		});
		var $container = instance.container();
		$container.find('.stat-total > span').text(stat.total||0);
		$container.find('.stat-todo > span').text( (stat.total||0)-(stat.done||0) );
		$container.find('.stat-done > span').text(stat.done||0);
	}

	this.container = function(){
		return instance.isToday() ? $('#today') : $('#tomorrow');
	}

	this.reloadTasks = function(callback){
		new TodoList( container().find('.todo-list') ).reload(date,callback);
	}

	this.getTasks = function(callback){
		new ObjectStore(Const.DB.TASK_STORE_NAME)
			.query('date',date,
				function(cursor){
					return {
						id : cursor.value.id,
						date : cursor.key,
						title : cursor.value.title,
						startAt : cursor.value.startAt,
						endAt : cursor.value.endAt,
						memo : cursor.value.memo,
						isCompleted : cursor.value.isCompleted,
						completedAt: cursor.value.completedAt,
						isOverdue : cursor.value.isOverdue,
						tomatos : cursor.value.tomatos
					}
				},callback
			);
	};
	return instance;
}

function PDF(){
	var json={},array=[];
	Day(today_s).getTasks(function(dataArray){
		$(dataArray).each(function(idx,data){
			var item={
				id:data.id,
				title:data.title,
				startAt:data.startAt,
				endAt:data.endAt,
				isCompleted:data.isCompleted,
				completedAt:data.completedAt,
				date:data.date,
				memo:data.memo,
				duration:0,
			}
			json[data.id] = item;
		});
		Tomato.getByDate(today_s,function(tomatos){
			if(!$.isEmpty(tomatos)){
				for(var i=0;i<tomatos.length;i++){
					json[tomatos[i].taskID].duration += tomatos[i].duration;
				};
			}

			var result={
				today:moment().format('YYYY年MM月DD日 dddd'),
				total:0,
				done:0,
				duration:0
			}
			$.each(json,function(index,value){
				result.total+=1;
				result.duration+=value.duration;
				if(value.isCompleted){
					result.done+=1;
				}
				value['duration']=$.duration(value['duration']);
				array.push(value);
			});
			array.sort(Task.cmp);
			result['duration']=$.duration(result['duration']);
			result['tasks']=array;
			$('#pdf-export-form').find('input[name="content"]').val(JSON.stringify(result));
			$('#pdf-export-form').get(0).submit();
		});	
	});
}
