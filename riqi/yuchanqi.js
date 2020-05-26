

function loadold()
{

var temp=getCookie("yuchanqi");

if(temp!="")
{
	var ss=temp.split('-');


	$("SY").value=ss[0];
	$("SM").value=ss[1];
	$("SD").value=ss[2];
}


}


var day0;

function cala()
{
y=$("SY").value;
m=$("SM").value;
d=$("SD").value;

day0=new Date(y,m-1,d);


if(day0=="Invalid Date"){
    alert("请输入正确日期");
    return;
}

setCookie("yuchanqi",y+"-"+m+"-"+d);


theform.submit();

}




function output(datestr,ly,lm,ld)
{



theday=new Date(datestr);



$("result1").innerHTML=getdatestring(theday)+"&nbsp;"+getlinfo(ly,lm,ld);


var restdays=Math.ceil((theday-today)/86400000);

$("result2").innerHTML=restdays+"天";


var weekno=parseInt((280-restdays)/7);
weekno++;

$("result3").innerHTML=weekno;




for(i=1;i<=40;i++){

    theday.setTime(day0.getTime()+86400000*(i-1)*7);
    theday2=new Date();
    theday2.setTime(day0.getTime()+86400000*(i*7-1));
    $("d"+i).innerHTML=theday.getFullYear()+"."+(1+theday.getMonth())+"."+theday.getDate()
    +"<br>~"+theday2.getFullYear()+"."+(1+theday2.getMonth())+"."+theday2.getDate();

    if(i==weekno)
        $("t"+i).style.border="solid red 2px";
    else
        $("t"+i).style.border="";

}


}





