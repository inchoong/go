$.namespace = function() {  
	var a=arguments, o=null, i, j, d;
	for (i=0; i<a.length; i=i+1) {
		d=a[i].split(".");
		o=jQuery;
		for (j=(d[0] == "jQuery") ? 1 : 0; j<d.length; j=j+1) {
			o[d[j]]=o[d[j]] || {};
			o=o[d[j]];
			}
		}
	return o;
};

$.namespace('Today');

$.isEmpty=function(obj){
	return obj === null || obj ==='';
};

$.duration=function(seconds){
	var result='';
	var totalMin = parseInt(seconds,0) / 60;
	var hours = moment.duration(totalMin, "minutes").hours();
	if(hours > 0){
		result = hours + ' 小时 ';
	}
	var minutes = totalMin - ( hours * 60 );
	if (minutes > 0){
		result += minutes +' 分 ';
	}
	if(result==='')return '0';
	return result;
};

$.formatNumber=function(num,pattern){  
	var strarr = num?num.toString().split('.'):['0'];  
	var fmtarr = pattern?pattern.split('.'):[''];  
	var retstr='';  

	var str = strarr[0];  
	var fmt = fmtarr[0];  
	var i = str.length-1;    
	var comma = false;  
	for(var f=fmt.length-1;f>=0;f--){  
		switch(fmt.substr(f,1)){  
			case '#':  
				if(i>=0 ) retstr = str.substr(i--,1) + retstr;  
				break;  
			case '0':  
				if(i>=0) retstr = str.substr(i--,1) + retstr;  
				else retstr = '0' + retstr;  
				break;  
			case ',':  
				comma = true;  
				retstr=','+retstr;  
				break;  
		}  
	};
	if(i>=0){  
		if(comma){  
			var l = str.length;  
			for(;i>=0;i--){  
				retstr = str.substr(i,1) + retstr;  
				if(i>0 && ((l-i)%3)==0) retstr = ',' + retstr;   
			}  
		}  
		else retstr = str.substr(0,i+1) + retstr;  
	}  
	
	retstr = retstr+'.';  
	str=strarr.length>1?strarr[1]:'';  
	fmt=fmtarr.length>1?fmtarr[1]:'';  
	i=0;  
	for(var f=0;f<fmt.length;f++){  
		switch(fmt.substr(f,1)){  
			case '#':  
				if(i<str.length) retstr+=str.substr(i++,1);  
				break;  
			case '0':  
				if(i<str.length) retstr+= str.substr(i++,1);  
				else retstr+='0';  
				break;  
		}  
	}  
	return retstr.replace(/^,+/,'').replace(/\.$/,'');  
}

$.supportsLocalStorage=function() {
	 try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	 }
}

Storage={
	save:function(s,key){
		var k = key || Math.uuid();
		localStorage.setItem(key,s);
		return k;
	},
	saveObject:function(object,key){
		return Storage.save(JSON.stringify(object),key);
	},
	get:function(key,remove){
		var result = localStorage.getItem(key);
		if(remove){
			localStorage.removeItem(key);
		}
		return result;
	},
	remove:function(key){
		localStorage.removeItem(key);
	},
	getObject:function(key,remove){
		var s = Storage.get(key,remove);
		return JSON.parse(s);
	},
	appendObject:function(key,data){
		var arr = Storage.getObject(key) || [];
		arr.push(data);
		Storage.saveObject(arr,key);
		return arr;
	},
	take:function(key){
		return Storage.get(key,true);
	},
	takeObject:function(key){
		return Storage.getObject(key,true);
	}
}

Date.prototype.format = function(fmt) {
	return moment(this).format(fmt || 'YYYY-MM-DD');
}

String.prototype.toDate = function(){ 
	var temp = this.toString(); 
	temp = temp.replace(/-/g, "/"); 
	var date = new Date(Date.parse(temp)); 
	return date; 
} 
Date.prototype.plusDays = function(days){
	return moment(this).add(days,'days').toDate();
}

function removeThunderPlugin(){
	var intval = setInterval(function(){
		var thunderPlugin = $('[id^=xunlei_com_thunder_helper_plugin]');
		if(thunderPlugin.get(0)){
			thunderPlugin.remove();
			clearInterval(intval);
		};
	},200);
}