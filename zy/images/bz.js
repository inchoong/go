var $tiangan = [ "��","��","��","��","��","��","��","��","��","��" ];
var $dizhi = [ "��","��","��","��","î","��","��","��","δ","��","��","��" ];
// 1911���¸�
var $yuegan1911 = [ "��","��","��","��","��","��","��","��","��","��" ];

var $ssShorter = {
	'�ȼ�': '��',
	'�ٲ�': '��',
	'��ӡ': 'ӡ',
	'ƫӡ': '��',
	'����': '��',
	'��ɱ': 'ɱ',
	'����': '��',
	'ƫ��': '��',
	'�˹�': '��',
	'ʳ��': 'ʳ',
};

// ��ɵ�֧����
var liuyi = [
	['�׼�', '����'],
	['�Ҹ�', '�Ͻ�'],
	['����', '��ˮ'],
	['����', '��ľ'],
	['���', '�ϻ�'],

	['�׸�', '��'],
	['����', '��'],
	['����', '��'],
	['����', '��'],

	['����', '�ϻ�ˮ'],
	['����', '�ϻ���'],
	['î��', '�ϻ���'],
	['����', '�ϻ�ľ'],
	['�ӳ�', '�ϻ���'],
	['��δ', '�ϻ������'],

	['���ӳ�', '�ϻ�ˮ'],
	['������', '�ϻ���'],
	['��îδ', '�ϻ�ľ'],
	['���ϳ�', '�ϻ���'],

	['���ӳ�', '��۱���ˮ'],
	['��î��', '��۶���ľ'],
	['����δ', '����Ϸ���'],
	['������', '���������'],

	['��î', 'Ϊ����֮��'],
	['��δ��', 'Ϊ����֮��'],
	['������', 'Ϊ�޶�֮��'],
	['����', 'Ϊ����'],
	['����', 'Ϊ����'],
	['����', 'Ϊ����'],
	['����', 'Ϊ����'],

	['����', '���'],
	['î��', '���'],
	['����', '���'],
	['�Ⱥ�', '���'],
	['����', '���'],
	['��δ', '���'],

	['��δ', '�຦'],
	['����', '�຦'],
	['����', '�຦'],
	['î��', '�຦'],
	['�꺥', '�຦'],
	['����', '�຦'],

	['����', '������'],
	['����', '���ϻ�'],
	['����', '����ˮ'],
	['î��', '���Ͻ�'],
	['����', '����ľ'],

	['����', '����'],
	['����', '����'],
	['î��', '����'],
	['����', '����'],
	['����', '����'],
	['δ��', '����']
];

var currentYear = (new Date()).getFullYear();

// �������ֵ��������
(function () {
	var tglineArr = $("#bm_tgline .big").map((i, v) => v.innerText).get();
	var dzlineArr = $("#bm_dzline .big").map((i, v) => v.innerText).get();
	for (var item of liuyi) {
		// �������
		let tmpArr = [...tglineArr], result = '';
		for (let j = 0; j < item[0].length; j++) {
			let iArr = tmpArr.indexOf(item[0][j]);
			if (iArr >= 0) 
				result += tmpArr.splice(iArr, 1)[0];
		}
		if (result == item[0])
			document.querySelector("#bm_tgliuyi").innerHTML += item[0] + item[1] + '; ';

		// ��֧����
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

// �������
function xunkong(gz1) {
	var xkarr = [
		["����","�ҳ�","����","��î","�쳽","����","����","��δ","����","����","�纥"],
		["����","�Һ�","����","����","����","��î","����","����","����","��δ","����"],
		["����","����","����","����","����","����","����","��î","�ɳ�","����","��δ"],
		["����","��δ","����","����","����","����","����","����","����","��î","����"],
		["�׳�","����","����","��δ","����","����","����","����","����","���","��î"],
		["����","��î","����","����","����","��δ","����","����","����","�ﺥ","�ӳ�"]
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

// ϸ�������֧����¼�
$("#dayunliunian tr:eq(1) td").click(function (e) {
	if (!e.target.getAttribute("year")) 
		return;

	$(e.target).css('backgroundColor', '#999').siblings().css('backgroundColor', '');
	$("#liuniantg .big").html(e.target.innerHTML[0]).css('color', tgdzColor[e.target.innerHTML[0]]);
	$("#liuniandz .big").html(e.target.innerHTML[1]).css('color', tgdzColor[e.target.innerHTML[1]]);
	// �������
	$("#liunian_kongwang").html(xunkong(e.target.innerHTML));

	$("#liuniantg .small").html($ssShorter[getShishen(
		$tiangan.indexOf(e.target.innerHTML[0]), 
		$tiangan.indexOf($("#rigan").html())
	)]);
	$("#liuniandz .small").html(getDzSS(e.target.innerHTML[1], $("#rigan").html()));

	$("#liunianage").html($(e.target).attr("age") + "��<br>" + $(e.target).attr("year"));

	// ������������¸�
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

	// ��ɵ�֧����
	document.querySelector("#tgliuyi").innerHTML = document.querySelector("#dzliuyi").innerHTML = '';
	var tglineArr = $("#tgline .big").map((i, v) => v.innerText).get();
	var dzlineArr = $("#dzline .big").map((i, v) => v.innerText).get();
	for (var item of liuyi) {
		// �������
		let tmpArr = [...tglineArr], result = '';
		for (let j = 0; j < item[0].length; j++) {
			let iArr = tmpArr.indexOf(item[0][j]);
			if (iArr >= 0) 
				result += tmpArr.splice(iArr, 1)[0];
		}
		if (result == item[0])
			document.querySelector("#tgliuyi").innerHTML += item[0] + item[1] + '; ';

		if (item[0] == '����') {
			// console.log(result)
			// console.log(dzlineArr)
			// console.log(tmpArr)
		}

		// ��֧����
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

// ϸ�̴��˸�֧����¼�
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
	// ���˿���
	$("#dayun_kongwang").html(xunkong(e.target.innerHTML));

	// ��ʾ������ɵ�֧
	$("#dayuntg .small").html($ssShorter[getShishen(
		$tiangan.indexOf(e.target.innerHTML[0]), 
		$tiangan.indexOf($("#rigan").html())
	)]);
	$("#dayundz .small").html(getDzSS(e.target.innerHTML[1], $("#rigan").html()));

	// ��ʾ��������
	$("#dayunage").html(e.target.dataset["age"] + "��<br>" + e.target.dataset["year"]);

	// ������ѡ��Ĵ��ˣ��Զ�ѡ���Ӧ�����꣬�Դ����������¼�
	$year = $("#dayunliunian").find('[year=' + currentYear + ']');
	if ($year.length > 0) {
		$year.click();
	} else {
		$s = $("#dayunliunian").find('tr:eq(1) td:eq(1)').click();
	}
}).each(function (i) {
	// �ҵ��������������Ĵ���
	if (currentYear >= parseInt(this.dataset['year']) && currentYear - parseInt(this.dataset['year']) < 10) {
		this.click();
	}
})

/*
 * ��ȡʮ��
 * @param $tgans �������
 * @param $ritgs �ո�����
 */
function getShishen($tgans, $ritgs)
{
	if($ritgs==0) $ritgs=10;
	if($tgans==0) $tgans=10;
	var $cha = $ritgs-$tgans, $str = '';
	if($cha>=0) {
		switch($cha) {
			case 0:$str="�ȼ�";break;
			case 1:
				if($ritgs%2==0){$str="�ٲ�";}else{$str="��ӡ";}
				break;
			case 2:$str="ƫӡ";break;
			case 3:
				if($ritgs%2==0){$str="��ӡ";}else{$str="����";}
				break;
			case 4:$str="��ɱ";break;
			case 5:
				if($ritgs%2==0){$str="����";}else{$str="����";}
				break;
			case 6:$str="ƫ��";break;
			case 7:
				if($ritgs%2==0){$str="����";}else{$str="�˹�";}
				break;
			case 8:$str="ʳ��";break;
			case 9:$str="�˹�";break;
		}
	} else {
		switch(Math.abs($cha)) {
			case 1:
				if($ritgs%2==1){$str="�ٲ�";}else{$str="�˹�";}
				break;
			case 2:$str="ʳ��";break;
			case 3:
				if($ritgs%2==1){$str="�˹�";}else{$str="����";}
				break;
			case 4:$str="ƫ��";break;
			case 5:
				if($ritgs%2==1){$str="����";}else{$str="����";}
				break;
			case 6:$str="��ɱ";break;
			case 7:
				if($ritgs%2==1){$str="����";}else{$str="��ӡ";}
				break;
			case 8:$str="ƫӡ";break;
			case 9:$str="��ӡ";break;
		}
	}
	return $str;
}

/*
 * ��ȡ�ظ�
 * @param $dzx ��֧����
 */
function getDcang($dzx)
{
	var $arr = [ "�ɼ�","��","������","�ױ���","��","���ҹ�","�����","����","������","������","��","������" ];
	return $arr[$dzx];
}

/*
 * ��ȡ��֧�ظɵ�ʮ��
 * @author gougoushan@qq.com
 * @param $dz ��֧
 * @param $rg �ո�
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
		if (e.name == "lnp") {//Á÷Äê¸ÉÖ§
			e.checked = false;
			continue;
		}
		if (e.name == "ssp") {//Ê®Éñ
			e.checked = true;
			continue;
		}
		if (e.name == "cgp") {//ËÄÖù²Ø¸É
			e.checked = false;
			continue;
		}
		if (e.name == "qyp") {//ÆðÔËÊ±¼ä
			e.checked = false;
			continue;
		}
		if (e.name == "nyp") {//ÄÉÒô
			e.checked = false;
			continue;
		}
		if (e.name == "shenshap") {//ÉñÉ·
			e.checked = false;
			continue;
		}
		if (e.name == "csp") {//³¤ÉúÊ®¶þ¹¬
			e.checked = false;
			continue;
		}
		if (e.name == "mgp") {//Ãü¹¬Ì¥Ôª
			e.checked = false;
			continue;
		}
		if (e.name == "xyp") {//Ð¡ÔËÁ÷Äê¸ÉÖ§
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
		if (e.name == "lnp") {//Á÷Äê¸ÉÖ§
			e.checked = true;
			continue;
		}
		if (e.name == "ssp") {//Ê®Éñ
			e.checked = true;
			continue;
		}
		if (e.name == "cgp") {//ËÄÖù²Ø¸É
			e.checked = true;
			continue;
		}
		if (e.name == "qyp") {//ÆðÔËÊ±¼ä
			e.checked = true;
			continue;
		}
		if (e.name == "nyp") {//ÄÉÒô
			e.checked = false;
			continue;
		}
		if (e.name == "shenshap") {//ÉñÉ·
			e.checked = false;
			continue;
		}
		if (e.name == "csp") {//³¤ÉúÊ®¶þ¹¬
			e.checked = false;
			continue;
		}
		if (e.name == "mgp") {//Ãü¹¬Ì¥Ôª
			e.checked = false;
			continue;
		}
		if (e.name == "xyp") {//Ð¡ÔËÁ÷Äê¸ÉÖ§
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
		if (e.name == "lnp") {//Á÷Äê¸ÉÖ§
			e.checked = true;
			continue;
		}
		if (e.name == "ssp") {//Ê®Éñ
			e.checked = true;
			continue;
		}
		if (e.name == "cgp") {//ËÄÖù²Ø¸É
			e.checked = true;
			continue;
		}
		if (e.name == "qyp") {//ÆðÔËÊ±¼ä
			e.checked = true;
			continue;
		}
		if (e.name == "nyp") {//ÄÉÒô
			e.checked = true;
			continue;
		}
		if (e.name == "shenshap") {//ÉñÉ·
			e.checked = true;
			continue;
		}
		if (e.name == "csp") {//³¤ÉúÊ®¶þ¹¬
			e.checked = true;
			continue;
		}
		if (e.name == "mgp") {//Ãü¹¬Ì¥Ôª
			e.checked = true;
			continue;
		}
		if (e.name == "xyp") {//Ð¡ÔËÁ÷Äê¸ÉÖ§
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
		if (e.name == "lnp") {//Á÷Äê¸ÉÖ§
			e.checked = false;
			continue;
		}
		if (e.name == "ssp") {//Ê®Éñ
			e.checked = false;
			continue;
		}
		if (e.name == "cgp") {//ËÄÖù²Ø¸É
			e.checked = false;
			continue;
		}
		if (e.name == "qyp") {//ÆðÔËÊ±¼ä
			e.checked = false;
			continue;
		}
		if (e.name == "nyp") {//ÄÉÒô
			e.checked = false;
			continue;
		}
		if (e.name == "shenshap") {//ÉñÉ·
			e.checked = false;
			continue;
		}
		if (e.name == "csp") {//³¤ÉúÊ®¶þ¹¬
			e.checked = false;
			continue;
		}
		if (e.name == "mgp") {//Ãü¹¬Ì¥Ôª
			e.checked = false;
			continue;
		}
		if (e.name == "xyp") {//Ð¡ÔËÁ÷Äê¸ÉÖ§
			e.checked = false;
			continue;
		}
	}
}