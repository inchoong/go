本目录包含 BT Sync 早期的 1.4.111 版本。
此版本支持 DHT 功能，可以在墙内【免翻墙】使用。
BT Sync 2.0 以及之后的版本【不】再支持 DHT 功能，无法享受这一好处。

关于 DHT 功能如何开启，请翻墙打开如下博文：
https://program-think.blogspot.com/2017/08/GFW-Resilio-Sync.html

扫盲 BTSync（Resilio Sync）——不仅是同步利器，而且是【分布式】网盘
https://copy69.github.io/blog/html/2015/01/BitTorrent-Sync.html
 ---------------------                                                                                                         ----------------------------------------

# 创建一个VNC远程桌面，分辨率为1920x1080
sudo vncserver -geometry 1920x1080
 ---------------------        
安装Chrome浏览器
Chrome浏览器安装其实很简单，在SSH交互界面操作即可：

# 临时目录，放Chrome安装包
mkdir tempcd temp
# 下载Chrome安装包最新稳定版本
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# 安装
sudo dpkg -i google-chrome-stable_current_amd64.deb


wget https://go.choong.net/BTSync/1.4.111/Linux/btsync_x64-1.4.111.tar.gz
wget https://reliancejk.cn/BTSync/1.4.111/Linux/btsync_x64-1.4.111.tar.gz
wget https://reliancejk.cn/BTSync/readme.txt