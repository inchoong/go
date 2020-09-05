Const={
	DB:{
		NAME : 'today.nanbing.me',
		VERSION : "7.0",
		TASK_STORE_NAME : 'ex_tasks',
		TOMATO_STORE_NAME: 'ex_tomatos'
	}
}

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;


function tx(successHandler,errorHandler,upgradeHandler){
	var request = window.indexedDB.open(Const.DB.NAME, Const.DB.VERSION);
	request.onsuccess=function(e){
		if($.isFunction(successHandler)){
			successHandler(e.target.result,e);
		}
	}
	request.onerror=function(e){
		if($.isFunction(errorHandler)){
			errorHandler(e);
		}
    };
    request.onupgradeneeded=function(e){
		if($.isFunction(upgradeHandler)){
			upgradeHandler(e.target.result ,e);
		}
    }
    
}

Db={
	init:function(){
		console.debug('Init IndexedDB');
		var newObjectStore=function(db,storeName,fn){
			if(!db.objectStoreNames.contains(storeName)){
				var objectStore = db.createObjectStore(storeName,{  
					keyPath: "id",  
					autoIncrement: true  
				});
				if( $.isFunction(fn)){
					fn(objectStore);
				}
			}
		}
		var createTaskStore=function(db){
			newObjectStore(db, Const.DB.TASK_STORE_NAME, function(objectStore){
				objectStore.createIndex("date", "date", { unique: false });
				console.debug('Create ObjectStore '+ Const.DB.TASK_STORE_NAME);
			});
		};
		var createTomatoStore=function(db){
			newObjectStore(db, Const.DB.TOMATO_STORE_NAME, function(objectStore){
				objectStore.createIndex("date", "date", { unique: false });
				objectStore.createIndex("taskID", "taskID", { unique: false });
				console.debug('Create ObjectStore '+ Const.DB.TOMATO_STORE_NAME);
			})
		}
		tx(null,null,function(db,e){
			createTaskStore(db);
			createTomatoStore(db);
		});
	}
};

ObjectStore = function(storeName , writable){
	var inst = this;

	var regSuccessHandler = function(request,callback){
		if($.isFunction(callback)){
			request.onsuccess=function(e){
				callback(e);
			}
		}
	};

	this.store=function( db ){
		var transaction = null;
		if(writable){
			transaction=db.transaction(storeName,'readwrite'); 
		}else{
			transaction=db.transaction(storeName,'readonly'); 
		}
		if(transaction){
			return transaction.objectStore(storeName);
		}
	};

	this.save = function(data,callback){
		tx(function(db,e){
			var store = inst.store(db);
			var req = null;
			
			if(data['id']){
				var getReq=store.get(data.id);
				getReq.onsuccess=function(e){
					var dataToSave = $.extend({},e.target.result,data);
					req = store.put(dataToSave)
					regSuccessHandler(req,callback);
				}
			}else{
				req = store.add(data);
				req.onerror=function(e){
					console.debug(e.currentTarget.error);
				}
				regSuccessHandler(req,callback);
			}
		});
	};
	this.get=function(key,callback){
		 tx(function(db,e){
			var store = inst.store(db);
			var req = store.get(parseInt(key));
			regSuccessHandler(req,callback);
		});
	};
	this.remove = function(key,callback){
		tx(function(db,e){
			var store = inst.store(db);
			var req = store.delete(key);
			regSuccessHandler(req,callback);
		});
	};
	this.query = function(idx,criteria,dataBuilder,txCompletedHandler){
		tx(function(db,e){
			var store = inst.store(db);
			var resultID = Math.uuid();
			store.transaction.oncomplete=function(e){
				if($.isFunction(txCompletedHandler)){
					var rs=Storage.takeObject(resultID);
					txCompletedHandler(rs);
				}
			};
			var index = store.index(idx);
			index.openCursor(criteria).onsuccess = function(event) {
				var cursor = event.target.result;
				if (cursor) {
					var data=dataBuilder(cursor);
					Storage.appendObject(resultID,data);
					cursor.continue();
				}
			};
		});
	}
	return this;
}
Db.init();