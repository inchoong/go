function Task(properties){
	var instance = this;
	instance.properties={
		title:'',
		date:null,
		startAt:null,
		endAt:null,
		memo:'',
		isCompleted:false,
		completedAt:null,
		isOverdue:false,
		tomatos:0
	}

	this.setDate=function(dt){
		instance.properties.date = typeof(dt)==='string'?dt:dt.format();
	}

	this.getStartAt = function(){
		if( $.isEmpty(instance.properties.startAt) ){
			return new Date().plusDays(-1);
		}else{
			var dtStr = instance.properties.date+' '+instance.properties.startAt+':00';
			return dtStr.toDate();
		}
	}
	this.getEndAt = function(){
		if( $.isEmpty(instance.properties.endAt) ){
			return null;
		}else{
			var dtStr = instance.properties.date+' '+instance.properties.endAt+':00';
			return dtStr.toDate();
		}
	}

	this.isOverdue=function(){
		if($.isEmpty(instance.properties.endAt)){
			return false;
		}
		return moment().isAfter(instance.getEndAt());
	}

	this.stringify=function(){
		return JSON.stringify(instance.properties);
	}
	this.parse=function(s){
		instance.properties = JSON.parse(s);
	}

	if(properties){
		$.extend(instance.properties,properties);
	}

	return instance;
}

Task.prototype.constructor=function(properties){
	$.extend(this.properties,properties);
}
Task.plusTomato=function(key,callback){
	Task.get(parseInt(key),function(properties){
		var tomatos = parseInt(properties.tomatos) + 1;
		$.extend(properties,{tomatos:tomatos});
		Task.save(properties,callback);
	});
}

Task.save = function(properties,callback){
	ObjectStore(Const.DB.TASK_STORE_NAME,true).save(properties,function(){
		Day(properties.date).reloadTasks(callback);
	});
};

Task.get = function(key,callback){
	ObjectStore(Const.DB.TASK_STORE_NAME,true).get(parseInt(key),function(e){
		callback(e.target.result);
	});
};

Task.delete = function(key,callback){
	Task.get(parseInt(key),function(properties){
		if(properties){
			ObjectStore(Const.DB.TASK_STORE_NAME,true).remove(parseInt(key),function(){
				Day(properties.date).reloadTasks(callback);
			});
		}
	});
};

Task.complete = function(key,callback){
	Task.get(parseInt(key),function(properties){
		$.extend(properties,{isCompleted:true,completedAt:moment().format('YYYY-MM-DD hh:mm:ss')});
		Task.save(properties,callback);
	});
};

Task.restore = function(key,callback){
	Task.get(parseInt(key),function(properties){
		$.extend(properties,{isCompleted:false,completedAt:null});
		Task.save(properties);
	});
};

Task.cmp = function(obj1,obj2){
	if( obj1.isCompleted !== obj2.isCompleted ){
		return obj1.isCompleted ? 1:-1;
	}else if(obj1.isCompleted){
		return obj2.completedAt.toDate()-obj1.completedAt.toDate();
	}else{
		if($.isEmpty(obj1.startAt) && $.isEmpty(obj2.startAt)){
			return obj2.id - obj1.id;
		}
		var i = new Task(obj1).getStartAt()- new Task(obj2).getStartAt();
		if(i!==0){
			return  i;
		}
		return obj2.id - obj1.id;
	}
}

function Tomato(properties){
	var instance = this;
	instance.properties={
		taskID:0,
		time:null,
		date:null,
		duration:Const.WORK_DURATION
	};
}

Tomato.query=function(idx,critera,callback){
	new ObjectStore(Const.DB.TOMATO_STORE_NAME)
		.query(idx,critera,
			function(cursor){
				return {
					id : cursor.value.id,
					taskID : cursor.value.taskID,
					duration : cursor.value.duration,
					time : cursor.value.time,
					date : cursor.value.date
				}
			},callback
		);
}

Tomato.getByTaskID=function(taskID,callback){
	Tomato.query('taskID',taskID,callback);
}
Tomato.getByDate=function(date,callback){
	Tomato.query('date',date,callback);
}

Tomato.save = function(properties,callback){
	new ObjectStore(Const.DB.TOMATO_STORE_NAME,true).save(properties,callback);
};