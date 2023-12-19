@echo off
title 使用 winget 工具安装和管理应用程序，一键安装脚本

echo 更新所有源 && 升级所有应用
winget source update
winget upgrade --all

echo  *******************************************
echo  * 这一部分华为笔记本电脑上自带，无须安装 *
echo  *******************************************
echo 安装 华为 Free Touch 触控板
echo winget install HuaweiPC.HUAWEIFreeTouch_amfdc1pkdnmaa

echo 安装 华为 Huawei Histen 音效
echo winget install HuaweiPC.Huawei-Histen_amfdc1pkdnmaa

echo 安装 华为显示器调节
echo winget install HwOsd

echo 安装  MSN 天气  
echo winget install Microsoft.BingWeather_8wekyb3d8bbwe  

echo 安装  MSN 资讯  
echo winget install Microsoft.BingNews_8wekyb3d8bbwe

echo 安装  应用安装程序
echo winget install Microsoft.AppInstaller
echo  *******************************************
echo  * 这一部分华为笔记本电脑上自带，无须安装 *
echo  *******************************************

echo 安装微软office办公软件
winget install --id=Microsoft.Office -e

echo 安装开源解压工具
winget install 7-Zip

echo 安装开源卸载工具
winget install BCUninstaller

echo 安装开源远程桌面软件
winget install RustDesk

echo 安装开源直播软件
winget install OBSProject.OBSStudio

echo 安装 IDM 下载工具
winget install Tonec.InternetDownloadManager

echo 安装文件搜索工具
winget install voidtools.Everything

echo 安装FastStone Capture 体积小但功能齐全的屏幕截图和屏幕录像软件
winget install FastStone.Capture

echo 安装微软官方开源效率工具
winget install Microsoft.PowerToys

echo 安装微软开发工具VSCode
winget install Microsoft.VisualStudioCode

echo 安装Cloudflare WARP是Cloudflare推出的一项虚拟私人网络（VPN）服务
winget install Cloudflare.Warp
echo t.me/warpplus 许可密钥(WARP+类型)：M2o650wi-N693X4JY-46GSc92E

echo 安装Chrome浏览器
winget install Google.Chrome

echo 安装 Discord 游戏聊天应用与社区通讯工具
winget install Discord.Discord

echo 安装开源编辑器Notepad++
winget install Notepad++.Notepad++

echo 安装万能影音播放器 Spotify
winget install Daum.PotPlayer

echo 安装开源播放器 VLC media player
winget install VideoLAN.VLC

echo 安装BTSync
winget install "BitTorrent Sync" --version 1.4.111

echo 安装开源SSH连接工具PuTTY
winget install PuTTY.PuTTY

echo 安装开源SFTP文件传输工具
winget install WinSCP.WinSCP

echo 安装内网穿透神器ZeroTierZeroTier One 加密的虚拟主干网
winget install ZeroTier.ZeroTierOne

echo  *******************************************
echo  * 这一部分是国产软件，请谨慎安装和使用 *
echo  *******************************************

echo 安装 QQ 和 微信
winget install QQ || winget install wechat

echo 安装抖音剪映软件
winget install --id=ByteDance.JianyingPro -e

echo 安装企业微信
winget install Tencent.wechat-work

echo 安装微信开发者工具
winget install Tencent.WeixinDevTools

echo 安装金山 WPS Office
winget search Kingsoft.WPSOffice

echo  *******************************************
echo  * 这一部分是国产软件，请谨慎安装和使用 *
echo  *******************************************

echo 导出安装的程序列表和目录路径
winget list > installed_programs.txt

echo 安装完成！
pause
