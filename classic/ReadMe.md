- [**个人网站如何添加经典语句功能 - 学无止境 - 阿豪运维笔记**](https://www.ahaoyw.com/article/661.html)

1、在网站根目录创建classic文件夹（classic文件名可以自定义），随后创建index.php，classic.txt为一句话存放文件。

2、浏览器访问 http://你的域名/classic/ 就可以看到输出内容了。

3、网站上调用

> 刚刚我们已经自建了接口，部署方法和其他网站基本一致，非常简单，将下面两行代码添加到网站中任意一个你想要展示的位置即可:

```
<script type="text/javascript" src="https://你的域名/classic/?format=js&charset=utf-8"></script>
<div id="classic"><script>classic()</script></div>
```

4、默认的样式有点丑我们可以加载下自定义CSS样式（也可以自己自定义CSS样式）

```
#classic{
    border-left: 5px solid #0073d8;
    border-right: 5px solid #0073d8;
    background-color: #3288d31a;
    padding: 10px;text-align: center;
    color: #0073d8;
    margin: 5px 0 5px 0;
}
```

[**总结**](https://www.ahaoyw.com/article/661.html)

> 部署完成之后，前台刷新就可以看到效果了，每次刷新都会随机展示经典句子。如果你有新的句子，也只需编辑 classic.txt 文件加入新的句子即可。
