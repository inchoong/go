Ⓜ️ Microsoft Win10 系统自带Key备份工具/微软官方数字许可激活工具「gatherosstate.exe」（win10 x64/x32 bit）

---------------------------------------------------------------------------------------------------------------

>> 将「gatherosstate.exe 」解压至桌面运行 ，会生成一个「GenuineTicket.xml」的文件 （文档很小） 将这个文件 压缩..并注明版本！
```
由于微软激活机制是这样，激活系统后与硬件信息绑定，

之后激活信息保存在微软服务器，在重装之后联系到服务器，识别硬件信息，给予自动激活。

而其中有一道验证，所使用的密钥信息是否一致，您应该就是因为这个密钥识别时，

发现使用的密钥是已经停止使用的密钥。所以，您的激活信息被阻止，无法获取。

建议您使用原来的系统版本激活之后使用下面的方法保留激活状态，在Windows 10 系统中恢复激活状态。

打开你下载的Win10 ISO系统镜像，在Sources目录中找到gatherosstate.exe程序，把它复制到桌面。

双击gatherosstate.exe，稍等片刻会在桌面生成名为GenuineTicket.xml的文档。

这份文档就是当前系统激活状态验证信息了，保存下来。

感兴趣的话可用记事本打开，是用XML标记语言进行描述的。

安装完成后，按键盘Windows徽标键+R键，打开运行，输入

%ProgramData%\Microsoft\Windows\ClipSVC\GenuineTicket（直接复制粘贴）

点确定即可打开目录。然后将保存的GenuineTicket.xml复制到这个目录中。

点击联网就行。
```

> 参阅：《[升级到Windows 10 后无法激活](https://answers.microsoft.com/zh-hans/windows/forum/windows_10-windows_install/%E5%8D%87%E7%BA%A7%E5%88%B0windows-10/6ab28858-b810-4733-989a-ff4a5f35761a)》 - Microsoft Community

> 《[insider会员在获得了正式版win10激活后，重装系统为什么不给激活？](https://answers.microsoft.com/zh-hans/windows/forum/windows_10-windows_install/insider%E4%BC%9A%E5%91%98%E5%9C%A8%E8%8E%B7/e9644429-dd8a-40f4-b7b3-554f0af0ecfd)》 - Microsoft Community
