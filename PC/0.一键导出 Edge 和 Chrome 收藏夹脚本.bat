@echo off
title һ������ Edge �� Chrome �ղؼнű�
echo ��ע�⣬�ű���Ҫ����������������ļ�·�������ȷ��������Ѿ��رա�
echo ���ڵ��� Edge �ղؼ�...
echo ==========================
cd %LOCALAPPDATA%\Microsoft\Edge\User Data\Default
copy Favorites\* "%USERPROFILE%\Desktop\Bookmarks\Edge_Favorites.html"
echo ���� Edge �ղؼ���ɣ�
echo.

echo ���ڵ��� Chrome �ղؼ�...
echo ============================
cd %LOCALAPPDATA%\Google\Chrome\User Data\Default
copy Bookmarks "%USERPROFILE%\Desktop\Bookmarks\Chrome_Bookmarks.html"
echo ���� Chrome �ղؼ���ɣ�
echo.

echo ������ɣ���������鿴�������ļ���
pause
