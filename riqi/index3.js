

function loadold()
{

var temp=getCookie("riqib");

if(temp!="")
{
	var ss=temp.split('-');


	$("SY3").value=ss[0];
	$("SM3").value=ss[1];
	$("SD3").value=ss[2];
}

var temp=getCookie("riqia");
if(temp!="")
{
	$("decday").value=temp;
}

}



var day0;

function cala()
{



day0=new Date($("SY").value,$("SM").value-1,$("SD").value);
if(day0=="Invalid Date"){
    alert("请输入正确日期");
    return;
}


setCookie("riqia",$("decday").value);


theform.submit();

}




function output_a(datestr,ly,lm,ld)
{


theday=new Date(datestr);


$("result1").innerHTML=getdatestring(theday)+"&nbsp;"+getlinfo(ly,lm,ld);

}


function calb()
{



y2=$("SY2").value;
m2=$("SM2").value;
d2=$("SD2").value;


y3=$("SY3").value;
m3=$("SM3").value;
d3=$("SD3").value;



day2=new Date(y2,m2-1,d2);
day3=new Date(y3,m3-1,d3);

setCookie( "riqib",y3+"-"+m3+"-"+d3);

$("result2").innerHTML=(day3-day2)/86400000+"天";


}


function setday(ty,tm,td)
{

$("SY").value=ty;
$("SM").value=tm;
$("SD").value=td;


$("SY2").value=ty;
$("SM2").value=tm;
$("SD2").value=td;
}


