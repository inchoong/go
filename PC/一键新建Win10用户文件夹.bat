@echo off
title 新建文件夹结构
echo.
echo      *******************************************
echo      * 本文件可命名为：1.一键批量新建Win用户文件夹脚本.bat *
echo      *目标：将默认存储位置C:系统盘改为D:软件盘*
echo      *方法：右键-》属性-》位置-》移动-》应用,确定  *
echo      *******************************************
echo.

echo *用户\*
MD users\ 
echo *用户\桌面*
MD users\Desktop  
echo *用户\视频*
MD users\Videos 
echo *用户\图片*
MD users\Pictures 
echo *用户\文档*
MD users\Documents 
echo *用户\下载*
MD users\Downloads 
echo *用户\音乐*
MD users\Music
echo *用户\OneDrive*
MD users\OneDrive

@echo off
title 文档树结构
color 0C
echo.
echo      *********************************
echo      *生成的txt文档在文件夹父文件夹中*
echo      *********************************
echo.
tree /F %1>>Users文件夹树形结构.txt
pause