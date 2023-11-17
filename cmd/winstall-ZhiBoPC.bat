echo      *******************************************
echo      * * 更新所有源* * 
winget source update  
echo      *******************************************
echo      * * 升级所有应用* * 
winget upgrade --all
echo      *******************************************
echo.
&& winget install --id=Baidu.BaiduNetdisk -e  
&& winget install --id=OBSProject.OBSStudio -e 
&& winget install --id=Tencent.WeCom -e 
&& winget install --id=Notepad++.Notepad++ -e 
&& winget install --id=voidtools.Everything -e 
&& winget install --id=Klocman.BulkCrapUninstaller -e 

echo      * * && winget install --id=  -e * * 

echo      * * 安装微软office办公软件* * 
&& winget install --id=Microsoft.Office -e 
echo      * * 安装腾讯文档 * * 
&& winget install --id=Tencent.Docs -e 
echo      * *安装开源解压工具: * *
&& winget install --id=7-Zip
echo      * *安装开源卸载工具: * *
&& winget install --id=BCUninstaller -e
echo      * *安装开源远程桌面软件: * *
&& winget install --id=RustDesk -e
echo      * *安装开源直播软件: * *
&& winget install --id=OBSProject.OBSStudio -e
echo      * *安装抖音剪映软件:https://winstall.app/apps/ByteDance.JianyingPro * *
&& winget install --id=ByteDance.JianyingPro  -e
echo      * *安装 IDM 下载工具:* *
&& winget install --id=Tonec.InternetDownloadManager -e
echo      * *安装文件搜索工具:* *
&& winget install --id=voidtools.Everything -e
echo      * *安装微软官方开源效率工具: * *
&& winget install --id=Microsoft.PowerToys -e
echo      * *安装Chrome浏览器: * *
&& winget install --id=google.chrome -e
echo      * *安装Firefox浏览器: * *
&& winget install --id=Mozilla.Firefox -e
echo      * *安装开源编辑器Notepad++: * *
&& winget install --id=Notepad++.Notepad++ -e
echo      * *安装开源流程图绘制软件:* *
&& winget install --id=Draw.io -e
echo      * *安装开源射手影音 SPlayer:* *
&& winget install Shooter.SPlayerX -e
echo      * *安装万能影音播放器 Spotify:* *
&& winget install --id=Daum.PotPlayer -e
echo      * *安装开源播放器 VLC media player: * *
&& winget install --id=VideoLAN.VLC -e
echo      * *安装音乐播放器 Spotify: * *
&& winget install --id=Spotify.Spotify -e
echo      * *安装BTSync: * *
&& winget install --id=BitTorrent Sync --version 1.4.111 -e

@ECHO OFF
tree /F %1>>winstall-list.txt
pause