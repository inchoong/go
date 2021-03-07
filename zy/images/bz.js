var $tiangan = [ "癸","甲","乙","丙","丁","戊","己","庚","辛","壬" ];
var $dizhi = [ "亥","子","丑","寅","卯","辰","巳","午","未","申","酉","戌" ];
// 1911年月干
var $yuegan1911 = [ "庚","辛","壬","癸","甲","乙","丙","丁","戊","己" ];

var $ssShorter = {
	'比肩': '比',
	'劫财': '劫',
	'正印': '印',
	'偏印': '枭',
	'正官': '官',
	'七杀': '杀',
	'正财': '财',
	'偏财': '才',
	'伤官': '伤',
	'食神': '食',
};

// 天干地支留意
var liuyi = [
	['甲己', '合土'],
	['乙庚', '合金'],
	['丙辛', '合水'],
	['丁壬', '合木'],
	['戊癸', '合火'],

	['甲庚', '冲'],
	['乙辛', '冲'],
	['丙壬', '冲'],
	['丁癸', '冲'],

	['巳申', '合化水'],
	['辰酉', '合化金'],
	['卯戌', '合化火'],
	['寅亥', '合化木'],
	['子丑', '合化土'],
	['午未', '合化火或土'],

	['申子辰', '合化水'],
	['寅午戌', '合化火'],
	['亥卯未', '合化木'],
	['巳酉丑', '合化金'],

	['亥子丑', '汇聚北方水'],
	['寅卯辰', '汇聚东方木'],
	['巳午未', '汇聚南方火'],
	['申酉戌', '汇聚西方金'],

	['子卯', '为无礼之刑'],
	['丑未戌', '为恃势之刑'],
	['寅巳申', '为无恩之刑'],
	['辰辰', '为自刑'],
	['午午', '为自刑'],
	['酉酉', '为自刑'],
	['亥亥', '为自刑'],

	['子午', '相冲'],
	['卯酉', '相冲'],
	['寅申', '相冲'],
	['巳亥', '相冲'],
	['辰戌', '相冲'],
	['丑未', '相冲'],

	['子未', '相害'],
	['丑午', '相害'],
	['寅巳', '相害'],
	['卯辰', '相害'],
	['申亥', '相害'],
	['酉戍', '相害'],

	['寅午', '暗合土'],
	['子巳', '暗合火'],
	['巳酉', '暗合水'],
	['卯申', '暗合金'],
	['亥午', '暗合木'],

	['子酉', '相破'],
	['寅亥', '相破'],
	['卯午', '相破'],
	['辰丑', '相破'],
	['巳申', '相破'],
	['未戌', '相破']
];

var currentYear = (new Date()).getFullYear();

// 本命部分的天干留意
(function () {
	var tglineArr = $("#bm_tgline .big").map((i, v) => v.innerText).get();
	var dzlineArr = $("#bm_dzline .big").map((i, v) => v.innerText).get();
	for (var item of liuyi) {
		// 天干留意
		let tmpArr = [...tglineArr], result = '';
		for (let j = 0; j < item[0].length; j++) {
			let iArr = tmpArr.indexOf(item[0][j]);
			if (iArr >= 0) 
				result += tmpArr.splice(iArr, 1)[0];
		}
		if (result == item[0])
			document.querySelector("#bm_tgliuyi").innerHTML += item[0] + item[1] + '; ';

		// 地支留意
		tmpArr = [...dzlineArr], result = '';
		for (let j = 0; j < item[0].length; j++) {
			let iArr = tmpArr.indexOf(item[0][j]);
			if (iArr >= 0) 
				result += tmpArr.splice(iArr, 1)[0];
		}
		if (result == item[0])
			document.querySelector("#bm_dzliuyi").innerHTML += item[0] + item[1] + '; ';
	}
})();

// 计算空亡
function xunkong(gz1) {
	var xkarr = [
		["甲子","乙丑","丙寅","丁卯","戊辰","己巳","庚午","辛未","壬申","癸酉","戌亥"],
		["甲戌","乙亥","丙子","丁丑","戊寅","己卯","庚辰","辛巳","壬午","癸未","申酉"],
		["甲申","乙酉","丙戌","丁亥","戊子","己丑","庚寅","辛卯","壬辰","癸巳","午未"],
		["甲午","乙未","丙申","丁酉","戊戌","己亥","庚子","辛丑","壬寅","癸卯","辰巳"],
		["甲辰","乙巳","丙午","丁未","戊申","己酉","庚戌","辛亥","壬子","癸丑","寅卯"],
		["甲寅","乙卯","丙辰","丁巳","戊午","己未","庚申","辛酉","壬戌","癸亥","子丑"]
	];
	var tag = 0;
	var xunk = "";
	for(var i = 0; i <= 5; i++) {
		for(var j = 0; j <= 9; j++) {
			if(xkarr[i][j] == gz1) {
				xunk = xkarr[i][10];
				tag = 1;
				break;
			}
		}
		if(tag == 1) break;
	}
	return xunk;
}

// 细盘流年干支点击事件
$("#dayunliunian tr:eq(1) td").click(function (e) {
	if (!e.target.getAttribute("year")) 
		return;

	$(e.target).css('backgroundColor', '#999').siblings().css('backgroundColor', '');
	$("#liuniantg .big").html(e.target.innerHTML[0]).css('color', tgdzColor[e.target.innerHTML[0]]);
	$("#liuniandz .big").html(e.target.innerHTML[1]).css('color', tgdzColor[e.target.innerHTML[1]]);
	// 流年空亡
	$("#liunian_kongwang").html(xunkong(e.target.innerHTML));

	$("#liuniantg .small").html($ssShorter[getShishen(
		$tiangan.indexOf(e.target.innerHTML[0]), 
		$tiangan.indexOf($("#rigan").html())
	)]);
	$("#liuniandz .small").html(getDzSS(e.target.innerHTML[1], $("#rigan").html()));

	$("#liunianage").html($(e.target).attr("age") + "岁<br>" + $(e.target).attr("year"));

	// 更换当年的流月干
	var i = (parseInt($(e.target).attr("year")) - 1911) % 5;
	var yuegan = [];
	yuegan.push(...$yuegan1911.slice(2 * i));
	yuegan.push(...$yuegan1911.slice(0, 2 * i));
	yuegan.push(...yuegan.slice(0, 2));
	$("#liuyuegan").children(":gt(0)").each(function (i, v) {
		$(v).find(".vl span:eq(1)").html(yuegan[i]).css('color', tgdzColor[yuegan[i]]);
		$(v).find(".vl span:eq(0)").html($ssShorter[getShishen(
			$tiangan.indexOf(yuegan[i]), 
			$tiangan.indexOf($("#rigan").html())
		)]);
	})

	// 天干地支留意
	document.querySelector("#tgliuyi").innerHTML = document.querySelector("#dzliuyi").innerHTML = '';
	var tglineArr = $("#tgline .big").map((i, v) => v.innerText).get();
	var dzlineArr = $("#dzline .big").map((i, v) => v.innerText).get();
	for (var item of liuyi) {
		// 天干留意
		let tmpArr = [...tglineArr], result = '';
		for (let j = 0; j < item[0].length; j++) {
			let iArr = tmpArr.indexOf(item[0][j]);
			if (iArr >= 0) 
				result += tmpArr.splice(iArr, 1)[0];
		}
		if (result == item[0])
			document.querySelector("#tgliuyi").innerHTML += item[0] + item[1] + '; ';

		if (item[0] == '辰戌') {
			// console.log(result)
			// console.log(dzlineArr)
			// console.log(tmpArr)
		}

		// 地支留意
		tmpArr = [...dzlineArr], result = '';
		for (let j = 0; j < item[0].length; j++) {
			let iArr = tmpArr.indexOf(item[0][j]);
			if (iArr >= 0) 
				result += tmpArr.splice(iArr, 1)[0];
		}
		if (result == item[0])
			document.querySelector("#dzliuyi").innerHTML += item[0] + item[1] + '; ';
	}
})

// 细盘大运干支点击事件
$("#xipandayungz td").click(function (e) {
	if (!e.target.dataset['year'])
		return;

	var year = parseInt(e.target.dataset['year']);
	$(this).css('backgroundColor', '#999').siblings().css('backgroundColor', '');
	for (var i = 0; i < 10; i++) {
		$("#dayunliunian tr:eq(0) td:eq(" + (i + 1) + ")").html(year + i);
		$("#dayunliunian tr:eq(1) td:eq(" + (i + 1) + ")")
			.html(dayunliunianData[(year + i)]).attr('year', year + i)
			.attr('age', parseInt(e.target.dataset["age"]) + i);
	}

	$("#dayuntg .big").html(e.target.innerHTML[0]).css('color', tgdzColor[e.target.innerHTML[0]]);
	$("#dayundz .big").html(e.target.innerHTML[1]).css('color', tgdzColor[e.target.innerHTML[1]]);
	// 大运空亡
	$("#dayun_kongwang").html(xunkong(e.target.innerHTML));

	// 显示大运天干地支
	$("#dayuntg .small").html($ssShorter[getShishen(
		$tiangan.indexOf(e.target.innerHTML[0]), 
		$tiangan.indexOf($("#rigan").html())
	)]);
	$("#dayundz .small").html(getDzSS(e.target.innerHTML[1], $("#rigan").html()));

	// 显示大运岁数
	$("#dayunage").html(e.target.dataset["age"] + "岁<br>" + e.target.dataset["year"]);

	// 根据所选择的大运，自动选择对应的流年，以触发流年点击事件
	$year = $("#dayunliunian").find('[year=' + currentYear + ']');
	if ($year.length > 0) {
		$year.click();
	} else {
		$s = $("#dayunliunian").find('tr:eq(1) td:eq(1)').click();
	}
}).each(function (i) {
	// 找到今年命主所处的大运
	if (currentYear >= parseInt(this.dataset['year']) && currentYear - parseInt(this.dataset['year']) < 10) {
		this.click();
	}
})

/*
 * 获取十神
 * @param $tgans 天干索引
 * @param $ritgs 日干索引
 */
function getShishen($tgans, $ritgs)
{
	if($ritgs==0) $ritgs=10;
	if($tgans==0) $tgans=10;
	var $cha = $ritgs-$tgans, $str = '';
	if($cha>=0) {
		switch($cha) {
			case 0:$str="比肩";break;
			case 1:
				if($ritgs%2==0){$str="劫财";}else{$str="正印";}
				break;
			case 2:$str="偏印";break;
			case 3:
				if($ritgs%2==0){$str="正印";}else{$str="正官";}
				break;
			case 4:$str="七杀";break;
			case 5:
				if($ritgs%2==0){$str="正官";}else{$str="正财";}
				break;
			case 6:$str="偏财";break;
			case 7:
				if($ritgs%2==0){$str="正财";}else{$str="伤官";}
				break;
			case 8:$str="食神";break;
			case 9:$str="伤官";break;
		}
	} else {
		switch(Math.abs($cha)) {
			case 1:
				if($ritgs%2==1){$str="劫财";}else{$str="伤官";}
				break;
			case 2:$str="食神";break;
			case 3:
				if($ritgs%2==1){$str="伤官";}else{$str="正财";}
				break;
			case 4:$str="偏财";break;
			case 5:
				if($ritgs%2==1){$str="正财";}else{$str="正官";}
				break;
			case 6:$str="七杀";break;
			case 7:
				if($ritgs%2==1){$str="正官";}else{$str="正印";}
				break;
			case 8:$str="偏印";break;
			case 9:$str="正印";break;
		}
	}
	return $str;
}

/*
 * 获取藏干
 * @param $dzx 地支索引
 */
function getDcang($dzx)
{
	var $arr = [ "壬甲","癸","己癸辛","甲丙戊","乙","戊乙癸","丙戊庚","丁己","己丁乙","庚壬戊","辛","戊辛丁" ];
	return $arr[$dzx];
}

/*
 * 获取地支藏干的十神
 * @author gougoushan@qq.com
 * @param $dz 地支
 * @param $rg 日干
 */
function getDzSS($dz, $rg)
{
	var $cgs = getDcang($dizhi.indexOf($dz));
	var $ss = '';
	var $i = 0;
	while (true) {
		var $cg = $cgs[$i++];
		if (!$cg) 
			break;
		$ss += $ssShorter[getShishen($tiangan.indexOf($cg), $tiangan.indexOf($rg))];
	}
	return $ss;
}



function unselectall()
{
	var a=document.bz.mode.length;
	for (var i=0;i<a;i++){
		document.bz.mode[i].checked=false;
	}
    if(document.bz.mode.checked){
		document.bz.mode.checked = false;
    } 	
    if(document.bz.mode.checked){
		document.bz.mode.checked = false;
    } 	
    if(document.bz.mode.checked){
		document.bz.mode.checked = false;
    } 	
}
function mode1(form)
{
	for (var i=0;i<form.elements.length;i++)
	{
		var e = form.elements[i];
		if (e.name == "lnp") {//脕梅脛锚赂脡脰搂
			e.checked = false;
			continue;
		}
		if (e.name == "ssp") {//脢庐脡帽
			e.checked = true;
			continue;
		}
		if (e.name == "cgp") {//脣脛脰霉虏脴赂脡
			e.checked = false;
			continue;
		}
		if (e.name == "qyp") {//脝冒脭脣脢卤录盲
			e.checked = false;
			continue;
		}
		if (e.name == "nyp") {//脛脡脪么
			e.checked = false;
			continue;
		}
		if (e.name == "shenshap") {//脡帽脡路
			e.checked = false;
			continue;
		}
		if (e.name == "csp") {//鲁陇脡煤脢庐露镁鹿卢
			e.checked = false;
			continue;
		}
		if (e.name == "mgp") {//脙眉鹿卢脤楼脭陋
			e.checked = false;
			continue;
		}
		if (e.name == "xyp") {//脨隆脭脣脕梅脛锚赂脡脰搂
			e.checked = false;
			continue;
		}
	}
}
function mode2(form)
{
	for (var i=0;i<form.elements.length;i++)
	{
		var e = form.elements[i];
		if (e.name == "lnp") {//脕梅脛锚赂脡脰搂
			e.checked = true;
			continue;
		}
		if (e.name == "ssp") {//脢庐脡帽
			e.checked = true;
			continue;
		}
		if (e.name == "cgp") {//脣脛脰霉虏脴赂脡
			e.checked = true;
			continue;
		}
		if (e.name == "qyp") {//脝冒脭脣脢卤录盲
			e.checked = true;
			continue;
		}
		if (e.name == "nyp") {//脛脡脪么
			e.checked = false;
			continue;
		}
		if (e.name == "shenshap") {//脡帽脡路
			e.checked = false;
			continue;
		}
		if (e.name == "csp") {//鲁陇脡煤脢庐露镁鹿卢
			e.checked = false;
			continue;
		}
		if (e.name == "mgp") {//脙眉鹿卢脤楼脭陋
			e.checked = false;
			continue;
		}
		if (e.name == "xyp") {//脨隆脭脣脕梅脛锚赂脡脰搂
			e.checked = false;
			continue;
		}
	}
}
function mode3(form)
{
	for (var i=0;i<form.elements.length;i++)
	{
		var e = form.elements[i];
		if (e.name == "lnp") {//脕梅脛锚赂脡脰搂
			e.checked = true;
			continue;
		}
		if (e.name == "ssp") {//脢庐脡帽
			e.checked = true;
			continue;
		}
		if (e.name == "cgp") {//脣脛脰霉虏脴赂脡
			e.checked = true;
			continue;
		}
		if (e.name == "qyp") {//脝冒脭脣脢卤录盲
			e.checked = true;
			continue;
		}
		if (e.name == "nyp") {//脛脡脪么
			e.checked = true;
			continue;
		}
		if (e.name == "shenshap") {//脡帽脡路
			e.checked = true;
			continue;
		}
		if (e.name == "csp") {//鲁陇脡煤脢庐露镁鹿卢
			e.checked = true;
			continue;
		}
		if (e.name == "mgp") {//脙眉鹿卢脤楼脭陋
			e.checked = true;
			continue;
		}
		if (e.name == "xyp") {//脨隆脭脣脕梅脛锚赂脡脰搂
			e.checked = true;
			continue;
		}
	}
}
function mode4(form)
{
	for (var i=0;i<form.elements.length;i++)
	{
		var e = form.elements[i];
		if (e.name == "lnp") {//脕梅脛锚赂脡脰搂
			e.checked = false;
			continue;
		}
		if (e.name == "ssp") {//脢庐脡帽
			e.checked = false;
			continue;
		}
		if (e.name == "cgp") {//脣脛脰霉虏脴赂脡
			e.checked = false;
			continue;
		}
		if (e.name == "qyp") {//脝冒脭脣脢卤录盲
			e.checked = false;
			continue;
		}
		if (e.name == "nyp") {//脛脡脪么
			e.checked = false;
			continue;
		}
		if (e.name == "shenshap") {//脡帽脡路
			e.checked = false;
			continue;
		}
		if (e.name == "csp") {//鲁陇脡煤脢庐露镁鹿卢
			e.checked = false;
			continue;
		}
		if (e.name == "mgp") {//脙眉鹿卢脤楼脭陋
			e.checked = false;
			continue;
		}
		if (e.name == "xyp") {//脨隆脭脣脕梅脛锚赂脡脰搂
			e.checked = false;
			continue;
		}
	}
}