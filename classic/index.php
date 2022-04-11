<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name=viewport content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,minimal-ui">
    <meta name="referrer" content="no-referrer">
    <title>xgplayer</title>
	</head>
<body>
<?php
//获取句子文件的绝对路径
//如果你介意别人可能会拖走这个文本，可以把文件名自定义一下，或者通过Nginx禁止拉取也行。
$path = dirname(__FILE__);
$file = file($path."/classic.txt");
 
//随机读取一行
$arr  = mt_rand( 0, count( $file ) - 1 );
$content  = trim($file[$arr]);
 
//编码判断，用于输出相应的响应头部编码
if (isset($_GET['charset']) && !empty($_GET['charset'])) {
    $charset = $_GET['charset'];
    if (strcasecmp($charset,"gbk") == 0 ) {
        $content = mb_convert_encoding($content,'gbk', 'utf-8');
    }
} else {
    $charset = 'utf-8';
}
header("Content-Type: text/html; charset=$charset");
 
//格式化判断，输出js或纯文本
if ($_GET['format'] === 'js') {
    echo "function classic(){document.write('" . $content ."');}";
} else {
    echo $content;
}
?>

</body>
</html>
<!-- 个人网站如何添加经典语句功能 - 学无止境 - 阿豪运维笔记 https://www.ahaoyw.com/article/661.html -->