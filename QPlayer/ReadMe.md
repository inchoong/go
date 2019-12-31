# @[QPlayer](https://github.com/Jrohy/QPlayer)
一款简洁小巧的HTML5底部悬浮音乐播放器. 效果展示: https://32mb.space

##界面
![QPlayer.PNG][1]

##Tips
此版本为纯网页版， 建议有插件冲突的 或 PJAX难以实现的， 使用此版本自定义加入到网页里

欢迎Fork添加无限可能


 [1]: https://32mb.space/usr/uploads/2016/08/858331127.png

 [2]: https://camo.githubusercontent.com/42b56f599b52a82e158df8f7cd1717278c0f274b/68747470733a2f2f33326d622e73706163652f7573722f75706c6f6164732f323031362f30382f3835383333313132372e706e67
 
 - 【**代码**】
1.在顶部 < head > 代码 < / head > 之间：
 ```
     <link rel="stylesheet" href="../QPlayer/css/player.css"><!-- 网页悬浮音乐播放器 -->
 ```
2.在正文 < body > 代码   < / body > 之间：
 ```
     <!-- 网页悬浮音乐播放器 -->
	<div id="QPlayer">
<div id="pContent">
	<div id="player">
		<span class="cover"></span>
		<div class="ctrl">
			<div class="musicTag marquee">
				<strong>Title</strong>
				 <span> - </span>
				<span class="artist">Artist</span>
			</div>
			<div class="progress">
				<div class="timer left">0:00</div>
				<div class="contr">
					<div class="rewind icon"></div>
					<div class="playback icon"></div>
					<div class="fastforward icon"></div>
				</div>
				<div class="right">
					<div class="liebiao icon"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="ssBtn">
	        <div class="adf"></div>
    </div>
</div>
<ol id="playlist"></ol>
</div>

<script src="../QPlayer/js/jquery.min.js"></script>
<script src="../QPlayer/js/jquery.marquee.min.js"></script>

<script>
  var	playlist = [
      {title:"口弦",artist:"妙子",mp3:"../QPlayer/Music/妙子%20-%20口弦.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},
      {title:"滴答",artist:"侃侃",mp3:"../QPlayer/Music/侃侃-滴答.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"渡红尘",artist:"乐桐",mp3:"../QPlayer/Music/乐桐%20-%20渡红尘.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},
      {title:"花好月圆",artist:"刁寒",mp3:"../QPlayer/Music/刁寒-花好月圆.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"梦中的蝴蝶",artist:"刁寒",mp3:"../QPlayer/Music/刁寒-梦中的蝴蝶.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},
      {title:"赤道和北极",artist:"卢西",mp3:"../QPlayer/Music/卢西-赤道和北极.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"稳稳的幸福",artist:"小柯",mp3:"../QPlayer/Music/小柯-稳稳的幸福.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"但愿人长久",artist:"邓丽君",mp3:"../QPlayer/Music/邓丽君%20-%20但愿人长久.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      
      {title:"一曲相思",artist:"半阳",mp3:"../QPlayer/Music/半阳-一曲相思.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},	

      {title:"传奇",artist:"王菲",mp3:"../QPlayer/Music/王菲-传奇.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"匆匆那年",artist:"王菲",mp3:"../QPlayer/Music/王菲-匆匆那年.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"天亮了",artist:"韩红",mp3:"../QPlayer/Music/韩红%20-%20天亮了.flac",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      
      {title:"黄种人",artist:"谢霆锋",mp3:"../QPlayer/Music/谢霆锋-黄种人.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"因为爱所以爱",artist:"谢霆锋",mp3:"../QPlayer/Music/谢霆锋-因为爱所以爱.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      
      {title:"追梦人",artist:"罗大佑",mp3:"../QPlayer/Music/罗大佑%20-%20追梦人.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
        
      {title:"晚风",artist:"好妹妹乐队",mp3:"../QPlayer/Music/好妹妹乐队-晚风.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},
      {title:"往事只能回味",artist:"好妹妹乐队",mp3:"../QPlayer/Music/好妹妹乐队-往事只能回味.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},
      {title:"青城山下白素贞",artist:"好妹妹乐队",mp3:"../QPlayer/Music/好妹妹乐队-青城山下白素贞.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"你究竟有几个好妹妹",artist:"好妹妹乐队",mp3:"../QPlayer/Music/好妹妹乐队-你究竟有几个好妹妹.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"乌兰巴托的夜",artist:"谭维维",mp3:"../QPlayer/Music/谭维维%20-%20乌兰巴托的夜(Live).mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},
      {title:"大田后生仔(女生版)",artist:"温温Wendy",mp3:"../QPlayer/Music/大田后生仔(女生版)_温温Wendy.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
     
      {title:"雨花石",artist:"李玉刚",mp3:"../QPlayer/Music/李玉刚-雨花石.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"小酒窝",artist:"林俊杰",mp3:"../QPlayer/Music/林俊杰-小酒窝.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"白月光",artist:"张信哲",mp3:"../QPlayer/Music/张信哲-白月光.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"甘心情愿",artist:"郭峰",mp3:"../QPlayer/Music/郭峰-甘心情愿.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"迷茫的爱",artist:"郭玲",mp3:"../QPlayer/Music/郭玲-迷茫的爱.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"烟花三月",artist:"童丽",mp3:"../QPlayer/Music/烟花三月-童丽.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"往后余生",artist:"马良/孙茜茹",mp3:"../QPlayer/Music/往后余生%20-%20马良%20孙茜茹.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},

      {title:"越女",artist:"刘子菲",mp3:"../QPlayer/Music/越女-刘子菲.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"宝贝",artist:"王志文",mp3:"../QPlayer/Music/王志文-宝贝.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"想说爱你不容易",artist:"王志文/江珊",mp3:"../QPlayer/Music/江珊-想说爱你不容易.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},

      {title:"在人间",artist:"王建房",mp3:"../QPlayer/Music/王建房%20-%20在人间.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"亲亲我的小宝贝",artist:"赵真/王晓婷",mp3:"../QPlayer/Music/赵真&王晓婷%20-%20亲亲我的小宝贝.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},

      {title:"隐形的翅膀",artist:"阿木",mp3:"../QPlayer/Music/阿木-隐形的翅膀.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"野草闲花逢春生",artist:"阮玲玉",mp3:"../QPlayer/Music/阮玲玉%20-%20野草闲花逢春生.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"葬心",artist:"黄莺莺",mp3:"../QPlayer/Music/黄莺莺%20-%20葬心.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
    
      {title:"南山南",artist:"马頔",mp3:"../QPlayer/Music/马頔-南山南.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"相亲相爱一家人",artist:"音浪",mp3:"../QPlayer/Music/音浪%20-%20相亲相爱一家人.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},

      {title:"记事本",artist:"周传雄",mp3:"../QPlayer/Music/周传雄-记事本(Live)%20-%20live.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"越人歌(《夜宴》插曲)",artist:"周迅",mp3:"../QPlayer/Music/周迅%20-%20寂寞%20-%20越人歌(《夜宴》插曲).mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},

      {title:"飘雪",artist:"陈慧娴",mp3:"../QPlayer/Music/陈慧娴%20-%20飘雪.flac",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"千千阙歌",artist:"陈慧娴",mp3:"../QPlayer/Music/陈慧娴-千千阙歌.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},
      {title:"龙飞凤舞",artist:"上海民族游乐团",mp3:"../QPlayer/Music/上海民族游乐团%20-%20龙飞凤舞.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"时间都去哪儿了",artist:"钢琴版",mp3:"../QPlayer/Music/10%20-%20时间都去哪儿了（钢琴版）.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
      {title:"心经",artist:"多人合集",mp3:"../QPlayer/Music/〖心静意禅〗心经（多人协作合集）%20.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",}, 	
    ];  
  var isRotate = true;
  var autoplay = false;
</script>
<script src="../QPlayer/js/player.js"></script>
<script>

function bgChange(){
	var lis= $('.lib');
	for(var i=0; i<lis.length; i+=2)
	lis[i].style.background = 'rgba(246, 246, 246, 0.5)';
}
window.onload = bgChange;
</script> <!-- 网页悬浮音乐播放器 -->
 ```
