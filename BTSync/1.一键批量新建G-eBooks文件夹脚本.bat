@echo off
title �½��ļ��нṹ
echo.
echo      *******************************************
echo      * ���ļ�������Ϊ��1.һ�������½�G-eBooks�ļ��нű�.bat *
echo      *******************************************
echo.
MD G-eBooks\
MD G-eBooks\0.Share
MD G-eBooks\0.Share\G-Blog
MD G-eBooks\0.Share\G-Soft
MD G-eBooks\1.����
MD G-eBooks\2.����
MD G-eBooks\3.����ѧ
MD G-eBooks\4.��ʷ
MD G-eBooks\5.����
MD G-eBooks\6.����
MD G-eBooks\7.���ѧ
MD G-eBooks\8.����
MD G-eBooks\9.��ѧ
MD G-eBooks\10.����
MD G-eBooks\11.IT

@echo off
title �ĵ����ṹ
color 0C
echo.
echo      *********************************
echo      *���ɵ�txt�ĵ����ļ��и��ļ�����*
echo      *********************************
echo.
tree /F %1>>�����ļ������νṹ.txt
pause