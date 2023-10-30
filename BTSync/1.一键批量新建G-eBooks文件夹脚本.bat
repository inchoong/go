@echo off
title 新建文件夹结构
echo.
echo      *******************************************
echo      * 本文件可命名为：1.一键批量新建G-eBooks文件夹脚本.bat *
echo      *******************************************
echo.
MD G-eBooks\
MD G-eBooks\0.Share
MD G-eBooks\0.Share\G-Blog
MD G-eBooks\0.Share\G-Soft
MD G-eBooks\1.科普
MD G-eBooks\2.政治
MD G-eBooks\3.心理学
MD G-eBooks\4.历史
MD G-eBooks\5.经济
MD G-eBooks\6.管理
MD G-eBooks\7.社会学
MD G-eBooks\8.文艺
MD G-eBooks\9.哲学
MD G-eBooks\10.军事
MD G-eBooks\11.IT

@echo off
title 文档树结构
color 0C
echo.
echo      *********************************
echo      *生成的txt文档在文件夹父文件夹中*
echo      *********************************
echo.
tree /F %1>>您的文件夹树形结构.txt
pause