@echo off
title 一键导出 Edge 和 Chrome 收藏夹脚本
echo 请注意，脚本需要访问浏览器的配置文件路径，因此确保浏览器已经关闭。
echo 正在导出 Edge 收藏夹...
echo ==========================
cd %LOCALAPPDATA%\Microsoft\Edge\User Data\Default
copy Favorites\* "%USERPROFILE%\Desktop\Bookmarks\Edge_Favorites.html"
echo 导出 Edge 收藏夹完成！
echo.

echo 正在导出 Chrome 收藏夹...
echo ============================
cd %LOCALAPPDATA%\Google\Chrome\User Data\Default
copy Bookmarks "%USERPROFILE%\Desktop\Bookmarks\Chrome_Bookmarks.html"
echo 导出 Chrome 收藏夹完成！
echo.

echo 导出完成！请在桌面查看导出的文件。
pause
