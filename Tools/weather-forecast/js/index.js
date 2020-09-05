	// clear warnings
	console.clear();
	// 心知天气API签名认证
  var UID = "U30962D0D3"; 
  var KEY = "lf992xgfn8fpiasj"; 
  var API = "https://api.seniverse.com/v3/weather/now.json"; // 获取实时天气
  var LOCATION;
  // 获取当前时间戳
  var ts = Math.floor((new Date()).getTime() / 1000);
  // 构造验证参数字符串
  var str = "ts=" + ts + "&uid=" + UID;
  // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
  // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
  var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
  sig = encodeURIComponent(sig);
  str = str + "&sig=" + sig;

  // 根据Geolocation API，获取当前所在地的经纬度
  var x, y;

	function getCurrentLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        alert("Geolocation is not supported by this browser.");
	    }
	}

	function showPosition(position) {
	    x =  position.coords.latitude;
	    y = position.coords.longitude; 
	}

  getCurrentLocation();

  var currentCity;

	// 根据百度地图API和经纬度，获取所在的城市名
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(x,y);

	function myFun(result){
		currentCity = result.name;
		// 触发第一次请求,获取当前所在地的天气情况，并更新视图。
		var e = $.Event( "keydown", { keyCode: 13 } );
		$('input').trigger(e,currentCity);
	}

	var myCity = new BMap.LocalCity();
	myCity.get(myFun);

	// 以jsonp方式获取当前天气的数据
	function sendTodayWeatherRequest(location) {
		var todayUrl = API + "?location=" + location + "&" + str + "&callback=renderTodayWeather";
		// 向 HTML 中动态插入 script 标签，通过 JSONP 的方式进行调用
		var todayScript = document.createElement('script');
		todayScript.src = todayUrl;
		$('body').append(todayScript);

		todayScript.onerror = function() {
			alert('获取不到该城市天气，请重新输入');
			return console.clear();
		}
		setTimeout(function(){
			$(todayScript).remove();
		},0);
	}

	// 以jsonp方式获取未来三天天气的数据
	function sendFutureWeatherRequest(location) {
		var futureUrl = 'https://api.seniverse.com/v3/weather/daily.json?location='+location+ "&" + str +'&callback=renderFutureWeather';
		
		var futureScript = document.createElement('script');
		$('body').append(futureScript);
		futureScript.src = futureUrl;
		futureScript.onerror = function() {
			alert('获取不到该城市天气，请重新输入');
			return console.clear();
		}
		setTimeout(function(){
			$(futureScript).remove();
		},0); 				
	}

	// 实现搜索功能
	$('input').on('keydown',function(e,currentCity){

			if(e.keyCode === 13){	

				LOCATION = currentCity || $('input').val();

				updateBgImg($('.bg'));
 
        sendTodayWeatherRequest(LOCATION);
				sendFutureWeatherRequest(LOCATION);

				var updateInterval = 1000 * 60 * 10;

				$('input').val("").blur();

				// 每隔10分钟更新天气情况
				setInterval(function(){
					sendTodayWeatherRequest(LOCATION);
					sendFutureWeatherRequest(LOCATION);
					console.log('location: ',LOCATION);
				}, updateInterval);
			}
	 })

  // 格式化时间，显示星期N
  function getWeekDay(date) {
  	var weekList = ['日','一','二','三','四','五','六'];
  	var weekIndex = new Date(date).getDay();
  	return '星期' + weekList[weekIndex];
  }

	// 实时更新时间
	function updateTime(){
  	var hours = new Date().getHours();
  	var minutes = new Date().getMinutes();
  	minutes = minutes >= 10 ? minutes : '0' + minutes;
  	hours = hours < 10 ? '0' + hours : hours;
  	var suffix = hours >= 12 ? 'pm' : 'am';
  	$('.time').text(hours+':'+minutes+' '+suffix);
  	setTimeout(updateTime, 30*1000);
	}

	// 渲染当天天气视图
  function renderTodayWeather(data) {
  	var weatherInfo = data.results[0];
  	var location = weatherInfo.location;
  	var city =location.name;
  	$('.city').text(city);

  	updateTime();

  	var now = weatherInfo.now;
  	var temp = now.temperature;
  	$('.currentTemp').text(temp+'°');
  	$('.desc').text(now.text);		
  	$('.currentDate').text(getWeekDay(weatherInfo.last_update));
  	var weathercode = now.code;
  	$('.currentWeatherImg img').attr('src','images/'+weathercode+'.png');
  }

	// 渲染未来三天天气视图
  function renderFutureWeather(data){
  	var futureWeather = data.results[0].daily;
  	$('.future').each(function(index){
  		$(this).find('.date').text(getWeekDay(futureWeather[index].date));
  		$(this).find('.desc').text(futureWeather[index].text_day);
  		$(this).find('img').attr('src','images/'+futureWeather[index].code_day+'.png');
  		$(this).find('.temp').text(futureWeather[index].low+'°~'+futureWeather[index].high+'°');
  	})
  	$('.wind').text(futureWeather[0].wind_direction+'风 '+futureWeather[0].wind_scale+'级');
  }

  // 更换背景图片
  function updateBgImg($el) {
   $el.css('background-image', "url(https://picsum.photos/1000/800/?random&t="+Math.random()+")");
  }