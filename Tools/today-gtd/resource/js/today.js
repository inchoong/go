today = new Date();
tomorrow = today.plusDays(1);
today_s = today.format();
tomorrow_s = tomorrow.format();

Const.CLK={
	WORK:{
		ID:'work',
		DURATION: 25 * 60,//seconds
		STATUS:'work_clock_status'
	},
	BREAK:{
		ID:'break',
		DURATION: 3 * 60,
		STATUS:'break_clock_status'
	}
};
Const.COUNTER = 'today_clock_counter';
Const.RUNING_TASK_ID = 'running_task_id';

Interval={
	clock : null
};

$(document).ready(function($){
	removeThunderPlugin();
	$.Today.init();
});


$.Today.init=function(){
	/* render date */
	$('title').text(' '+moment().format(' MM月DD日 dddd'));
	$('#date-display').text(today_s);
	$('#today').find('input[name="date"]').val(today_s);
	$('#tomorrow-display').text(tomorrow_s);
	$('#tomorrow').find('input[name="date"]').val(tomorrow_s);
	$('.task-form').expandable();
	$('.clockpicker').clockpicker();

	Day(today).reloadTasks(function(){
		if( Clock.isResumable() ){
			new Todo( $('[id="task-'+Storage.get(Const.RUNING_TASK_ID)+'"]') ).go();
		}else{
			Clock(Const.CLK.WORK.ID).reset();
		}
	});
	Day(tomorrow).reloadTasks();
	Summary();
};

function Clock( type ){
	Clock.validate(type);
	var isWork = Clock.isWork(type);
	var duration = isWork ? Const.CLK.WORK.DURATION : Const.CLK.BREAK.DURATION;
	var color = isWork ? '#e74c3c':"#53c565";
	var hook = new ClockHook(type);

	this.reset = function(){
		hook.onReset();
		drawProcess(0);
	};

	this.start = function(onComplete){
		hook.onStart();
		Interval.clock = setInterval(function(){
			var sec = parseInt(Storage.get(Const.COUNTER)||0,0);
			var process = sec / duration * 100;
			drawProcess(process);
			if(sec === duration){
				hook.onComplete();
				if($.isFunction(onComplete)){
					onComplete();
				}
			}else{
				Storage.save(sec+1,Const.COUNTER);
			}
		},1000);
	};

	function drawProcess(process){
		var countdown = function(){
				var remains = duration-parseInt(Storage.get(Const.COUNTER)||0,0);
				var minutes = $.formatNumber(Math.floor(remains / 60),'00');
				var seconds = $.formatNumber(remains % 60,'00');
				return minutes+':'+seconds;
		};
		$('canvas.process').drawCircle({
			diameter:256,
			process:process,
			color:color,
			text:countdown()
		});
	}
	return this;
}

Clock.validate = function(type, throwEx){
	if( !$.isEmpty(type) ){
		if(type.toLowerCase() === Const.CLK.WORK.ID || type.toLowerCase() === Const.CLK.BREAK.ID){
			return true;
		}
	}
	if(throwEx){
		throw 'Invalid Clock Type :'+type;
	}
	return false;
};

Clock.isWork = function(type){
	return type === Const.CLK.WORK.ID;
};

Clock.isActiveTask=function(taskID){
	if(taskID === parseInt( Storage.get(Const.RUNING_TASK_ID), 0)){
		return true;
	}
	return false;
};
Clock.isResumable=function(){
	return Storage.get(Const.RUNING_TASK_ID)>0 && ClockState('work').isActive();
};

function ClockHook( type ){
	Clock.validate(type);
	var isWork = Clock.isWork(type);

	this.onReset = function(){
		clearInterval(Interval.clock);
		Storage.remove(Const.COUNTER);
		ClockState(type).reset();
		if(isWork){
			Storage.remove(Const.RUNING_TASK_ID);
		}
	};

	this.onStart = function(){
		clearInterval(Interval.clock);
		if(!Storage.get(Const.COUNTER)){
			Storage.save(1,Const.COUNTER);
		}
		ClockState(type).activate();
		if(isWork){
			ClockState(Const.CLK.BREAK.ID).reset();
		}
	};

	this.onComplete = function(){
		clearInterval(Interval.clock);
		Storage.remove(Const.COUNTER);
		ClockState(type).reset();
		Sound(type).play();
	};
	return this;
}

function ClockState(type){
	Clock.validate(type);
	var isWork = Clock.isWork(type);
	var key = isWork ? Const.CLK.WORK.STATUS : Const.CLK.BREAK.STATUS;

	this.isActive=function(){
		return 'true' === Storage.get(key);
	};
	this.activate = function(){
		Storage.save(true,key);
	};
	this.reset = function(){
		Storage.save(false,key);
	};
	this.getRunningTaskID=function(){
		return Storage.get(Const.RUNING_TASK_ID);
	};
	return this;
}

